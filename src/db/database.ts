// On-device database. One connection is shared by the whole app, opened on first use.
// Later in Phase 1, rows here sync to Cloudflare D1, so activities use UUIDs and keep updated_at.
import * as SQLite from 'expo-sqlite';

const DATABASE_NAME = 'nunchi.db';
const DATABASE_VERSION = 1;

let databasePromise: Promise<SQLite.SQLiteDatabase> | null = null;

export function getDatabase() {
  databasePromise ??= openDatabase().catch((error) => {
    // Let the next call try again instead of caching the failure.
    databasePromise = null;
    throw error;
  });
  return databasePromise;
}

async function openDatabase() {
  const db = await SQLite.openDatabaseAsync(DATABASE_NAME);
  await migrate(db);
  return db;
}

async function migrate(db: SQLite.SQLiteDatabase) {
  // Connection settings must be applied outside the migration transaction.
  await db.execAsync('PRAGMA journal_mode = WAL;');

  const version = await db.getFirstAsync<{ user_version: number }>('PRAGMA user_version');
  if (version === null) throw new Error('Could not read the database schema version');
  if (version.user_version > DATABASE_VERSION) {
    throw new Error('Database schema is newer than this app supports');
  }
  if (version.user_version === DATABASE_VERSION) return;

  await db.withTransactionAsync(async () => {
    if (version.user_version < 1) {
      // JSON columns hold string arrays (intentions, participants, insights)
      // or numbers from 0 (calm) to 9 (tense) (heat_values).
      await db.execAsync(`
        CREATE TABLE profile (
          id INTEGER PRIMARY KEY NOT NULL CHECK (id = 1),
          name TEXT NOT NULL,
          recording_range INTEGER NOT NULL DEFAULT 50,
          recording_consent INTEGER NOT NULL DEFAULT 0,
          consent_updated_at TEXT,
          created_at TEXT NOT NULL,
          updated_at TEXT NOT NULL
        );
        CREATE TABLE activities (
          id TEXT PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          intentions TEXT NOT NULL,
          participants TEXT NOT NULL,
          started_at TEXT NOT NULL,
          ended_at TEXT,
          duration_seconds INTEGER,
          insights TEXT,
          heat_values TEXT,
          rating INTEGER CHECK (rating BETWEEN 1 AND 5),
          updated_at TEXT NOT NULL
        );
        CREATE INDEX activities_started_at ON activities (started_at);
      `);
    }
    await db.execAsync(`PRAGMA user_version = ${DATABASE_VERSION}`);
  });
}
