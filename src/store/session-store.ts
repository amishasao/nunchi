// In-memory activity state, replacing the prototype's sessionStorage.
// Phase 1 persists this to SQLite and syncs it to the backend.
import { create } from 'zustand';

export type Activity = {
  name: string;
  intentions: string[];
  participants: string[];
  startTime: string;
};

export type FinishedSession = {
  duration: number;
  insights: string[];
  participants: string[];
};

export type RatedSession = FinishedSession & { rating: number; date: string };

type SessionState = {
  currentActivity: Activity | null;
  lastSession: FinishedSession | null;
  history: RatedSession[];
  recordingRange: number;
  recordingConsent: boolean;
  startActivity: (activity: Activity) => void;
  endActivity: (session: FinishedSession) => void;
  rateLastSession: (rating: number) => void;
  saveSettings: (settings: { recordingRange: number; recordingConsent: boolean }) => void;
};

export const useSessionStore = create<SessionState>((set) => ({
  currentActivity: null,
  lastSession: null,
  history: [],
  recordingRange: 50,
  recordingConsent: false,
  startActivity: (activity) => set({ currentActivity: activity }),
  endActivity: (session) => set({ currentActivity: null, lastSession: session }),
  rateLastSession: (rating) =>
    set((state) =>
      state.lastSession
        ? {
            history: [...state.history, { ...state.lastSession, rating, date: new Date().toISOString() }],
            lastSession: null,
          }
        : state,
    ),
  saveSettings: (settings) => set(settings),
}));
