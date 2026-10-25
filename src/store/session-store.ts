// App state backed by the on-device database (src/db).
// Each action writes to SQLite first, then updates state, so the screens only show saved data.
import { randomUUID } from 'expo-crypto';
import { create } from 'zustand';

import {
  finishActivity,
  insertActivity,
  loadActiveActivity,
  loadHistory,
  rateActivity,
  type Activity,
  type ActivityRecord,
} from '@/db/activities';
import { createProfile, loadProfile, updateSettings, type Profile } from '@/db/profile';

export type { Activity, ActivityRecord, Profile };

export const DEFAULT_RECORDING_RANGE = 50;

type SessionState = {
  profile: Profile | null;
  currentActivity: Activity | null;
  // The activity just ended, waiting to be rated.
  lastSession: ActivityRecord | null;
  history: ActivityRecord[];
  hydrate: () => Promise<void>;
  completeOnboarding: (profile: Profile) => Promise<void>;
  saveSettings: (settings: { recordingRange: number; recordingConsent: boolean }) => Promise<void>;
  startActivity: (activity: Pick<Activity, 'name' | 'intentions' | 'participants'>) => Promise<void>;
  endActivity: (result: { insights: string[]; heatValues: number[] }) => Promise<void>;
  rateLastSession: (rating: number) => Promise<void>;
};

export const useSessionStore = create<SessionState>((set, get) => ({
  profile: null,
  currentActivity: null,
  lastSession: null,
  history: [],

  hydrate: async () => {
    const [profile, currentActivity, history] = await Promise.all([
      loadProfile(),
      loadActiveActivity(),
      loadHistory(),
    ]);
    set({ profile, currentActivity, history });
  },

  completeOnboarding: async (profile) => {
    await createProfile(profile);
    set({ profile });
  },

  saveSettings: async (settings) => {
    const { profile } = get();
    if (!profile) return;
    await updateSettings(settings);
    set({ profile: { ...profile, ...settings } });
  },

  startActivity: async (details) => {
    const activity: Activity = { ...details, id: randomUUID(), startTime: new Date().toISOString() };
    await insertActivity(activity);
    set({ currentActivity: activity });
  },

  endActivity: async ({ insights, heatValues }) => {
    const { currentActivity, history } = get();
    if (!currentActivity) return;
    const endTime = new Date().toISOString();
    const duration = elapsedSeconds(currentActivity.startTime, endTime);
    await finishActivity(currentActivity.id, { endTime, duration, insights, heatValues });
    const record: ActivityRecord = { ...currentActivity, endTime, duration, insights, heatValues, rating: null };
    set({ currentActivity: null, lastSession: record, history: [record, ...history] });
  },

  rateLastSession: async (rating) => {
    const { lastSession, history } = get();
    if (!lastSession) return;
    await rateActivity(lastSession.id, rating);
    set({
      lastSession: null,
      history: history.map((a) => (a.id === lastSession.id ? { ...a, rating } : a)),
    });
  },
}));

export function elapsedSeconds(startTime: string, endTime: string | number = Date.now()) {
  return Math.max(0, Math.floor((new Date(endTime).getTime() - new Date(startTime).getTime()) / 1000));
}
