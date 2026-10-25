# Nunchi

Nunchi (눈치) is the Korean art of reading the room. This app helps you notice how in-person conversations feel while they happen: a live heatmap shows warmth (tension) and coolness (calm) for you and the people you're talking with, with insights tuned to the kind of conversation you're having.

The app is built with [Expo](https://expo.dev) (React Native + Expo Router) and ships to iOS and Android from one codebase. The backend will run on Cloudflare (Workers, D1, KV).

## Status

**Phase 1 – Real data (in progress).** On first launch you enter your name and choose whether Nunchi may record. Activities, ratings and settings are saved on the device in SQLite (`expo-sqlite`), and an unfinished activity is picked up again after a restart. Not done yet: sign-in and sync to Cloudflare D1.

Still simulated: the live heatmap and its insights (`src/lib/mock-heatmap.ts`, Phase 2) and the weekly mood grid and tips on Home (`src/data/mock.ts`, Phase 3). No audio is recorded yet.

## Running the app

```bash
npm install
npx expo start        # then press i (iOS simulator), a (Android emulator), or w (web)
```

To try it on your phone, install **Expo Go** from the App Store or Play Store and scan the QR code that `npx expo start` prints.

On the web, SQLite runs as WebAssembly and needs cross-origin isolation. `metro.config.js` sets the headers for the dev server, and the `expo-router` plugin in `app.json` sets them for EAS Hosting. Any other web host must send `Cross-Origin-Embedder-Policy: credentialless` and `Cross-Origin-Opener-Policy: same-origin`.

Before committing:

```bash
npx tsc --noEmit
npx expo lint
```

## Project layout

| Path | What's there |
| --- | --- |
| `src/app/` | Screens (Expo Router: each file is a route) |
| `src/app/(tabs)/` | Home, Heat (empty + live), Activity, Profile, Rate, with the shared bottom nav |
| `src/components/` | Buttons, overlays (tip, settings, listen), heatmap cells, icons |
| `src/constants/theme.ts` | Colours, heat scale, fonts and type styles from the Figma file |
| `src/app/onboarding.tsx` | First launch: name, then recording consent |
| `src/db/` | SQLite database: schema and migrations (`database.ts`), profile and activity queries |
| `src/data/mock.ts` | Placeholder content (weekly mood grid, tips, intention options) |
| `src/store/session-store.ts` | Profile, current activity, history and ratings, loaded from and saved to SQLite |
| `src/lib/mock-heatmap.ts` | Simulated heatmap and insights, replaced by real scoring in Phase 2 |
| `prototype/` | The original Figma Make web prototype, kept for reference |

## Roadmap

0. **Foundation** – port screens to Expo with the Figma look *(done)*
1. **Real data** – consent onboarding and on-device storage *(done)*; sign in and sync to Cloudflare D1 *(next)*
2. **Listening** – mic capture during activities, listening range, speaker separation, real calm/tense scoring
3. **Insights** – live nudges, spoken voice cues, post-activity summaries, activity-specific tips
4. **Launch** – privacy policy, store listings, beta testing, App Store and Play Store submission
