import { getDatabase } from '@/db/database';

export type Profile = {
  name: string;
  recordingRange: number;
  recordingConsent: boolean;
};

type ProfileRow = {
  name: string;
  recording_range: number;
  recording_consent: number;
};

// The profile row is created at the end of onboarding, so null means onboarding is still to do.
export async function loadProfile(): Promise<Profile | null> {
  const db = await getDatabase();
  const row = await db.getFirstAsync<ProfileRow>(
    'SELECT name, recording_range, recording_consent FROM profile WHERE id = 1',
  );
  if (row === null) return null;
  return {
    name: row.name,
    recordingRange: row.recording_range,
    recordingConsent: row.recording_consent === 1,
  };
}

export async function createProfile(profile: Profile) {
  const db = await getDatabase();
  const now = new Date().toISOString();
  await db.runAsync(
    `INSERT INTO profile (id, name, recording_range, recording_consent, consent_updated_at, created_at, updated_at)
     VALUES (1, ?, ?, ?, ?, ?, ?)`,
    profile.name,
    profile.recordingRange,
    profile.recordingConsent ? 1 : 0,
    now,
    now,
    now,
  );
}

export async function updateSettings(settings: { recordingRange: number; recordingConsent: boolean }) {
  const db = await getDatabase();
  const now = new Date().toISOString();
  // Keep a record of when consent last changed, not just when settings were saved.
  await db.runAsync(
    `UPDATE profile SET
       recording_range = $range,
       consent_updated_at = CASE WHEN recording_consent = $consent THEN consent_updated_at ELSE $now END,
       recording_consent = $consent,
       updated_at = $now
     WHERE id = 1`,
    { $range: settings.recordingRange, $consent: settings.recordingConsent ? 1 : 0, $now: now },
  );
}
