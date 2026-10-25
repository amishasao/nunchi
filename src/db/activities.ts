import { getDatabase } from '@/db/database';

export type Activity = {
  id: string;
  name: string;
  intentions: string[];
  participants: string[];
  startTime: string;
};

export type ActivityRecord = Activity & {
  endTime: string;
  duration: number; // seconds
  insights: string[];
  heatValues: number[];
  rating: number | null;
};

type ActivityRow = {
  id: string;
  name: string;
  intentions: string;
  participants: string;
  started_at: string;
  ended_at: string | null;
  duration_seconds: number | null;
  insights: string | null;
  heat_values: string | null;
  rating: number | null;
};

const HISTORY_LIMIT = 50;

function toActivity(row: ActivityRow): Activity {
  return {
    id: row.id,
    name: row.name,
    intentions: JSON.parse(row.intentions),
    participants: JSON.parse(row.participants),
    startTime: row.started_at,
  };
}

function toRecord(row: ActivityRow): ActivityRecord {
  return {
    ...toActivity(row),
    endTime: row.ended_at ?? row.started_at,
    duration: row.duration_seconds ?? 0,
    insights: row.insights ? JSON.parse(row.insights) : [],
    heatValues: row.heat_values ? JSON.parse(row.heat_values) : [],
    rating: row.rating,
  };
}

// An activity that was never ended, for example because the app was closed mid-conversation.
export async function loadActiveActivity(): Promise<Activity | null> {
  const db = await getDatabase();
  const row = await db.getFirstAsync<ActivityRow>(
    'SELECT * FROM activities WHERE ended_at IS NULL ORDER BY started_at DESC LIMIT 1',
  );
  return row ? toActivity(row) : null;
}

// Finished activities, newest first.
export async function loadHistory(): Promise<ActivityRecord[]> {
  const db = await getDatabase();
  const rows = await db.getAllAsync<ActivityRow>(
    'SELECT * FROM activities WHERE ended_at IS NOT NULL ORDER BY started_at DESC LIMIT ?',
    HISTORY_LIMIT,
  );
  return rows.map(toRecord);
}

export async function insertActivity(activity: Activity) {
  const db = await getDatabase();
  await db.runAsync(
    `INSERT INTO activities (id, name, intentions, participants, started_at, updated_at)
     VALUES (?, ?, ?, ?, ?, ?)`,
    activity.id,
    activity.name,
    JSON.stringify(activity.intentions),
    JSON.stringify(activity.participants),
    activity.startTime,
    new Date().toISOString(),
  );
}

export async function finishActivity(
  id: string,
  result: { endTime: string; duration: number; insights: string[]; heatValues: number[] },
) {
  const db = await getDatabase();
  await db.runAsync(
    `UPDATE activities
     SET ended_at = ?, duration_seconds = ?, insights = ?, heat_values = ?, updated_at = ?
     WHERE id = ?`,
    result.endTime,
    result.duration,
    JSON.stringify(result.insights),
    JSON.stringify(result.heatValues),
    new Date().toISOString(),
    id,
  );
}

export async function rateActivity(id: string, rating: number) {
  const db = await getDatabase();
  await db.runAsync(
    'UPDATE activities SET rating = ?, updated_at = ? WHERE id = ?',
    rating,
    new Date().toISOString(),
    id,
  );
}
