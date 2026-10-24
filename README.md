# Nunchi

Nunchi (눈치) is the Korean art of reading the room. This app helps you notice how in-person conversations feel while they happen: a live heatmap shows warmth (tension) and coolness (calm) for you and the people you're talking with, with insights tuned to the kind of conversation you're having.

The app is built with [Expo](https://expo.dev) (React Native + Expo Router) and ships to iOS and Android from one codebase. The backend will run on Cloudflare (Workers, D1, KV).

## Status

**Phase 0 – UI port.** Every screen from the Figma prototype is ported to Expo with the same look. Data is still mock data: nothing is recorded yet, and the live heatmap is simulated (`src/lib/mock-heatmap.ts`).

## Running the app

```bash
npm install
npx expo start        # then press i (iOS simulator), a (Android emulator), or w (web)
```

To try it on your phone, install **Expo Go** from the App Store or Play Store and scan the QR code that `npx expo start` prints.

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
| `src/data/mock.ts` | Placeholder content (user, tips, past interactions) |
| `src/store/session-store.ts` | Current activity, last session, ratings and settings (in memory for now) |
| `src/lib/mock-heatmap.ts` | Simulated heatmap and insights, replaced by real scoring in Phase 2 |
| `prototype/` | The original Figma Make web prototype, kept for reference |

## Roadmap

0. **Foundation** – port screens to Expo with the Figma look *(this phase)*
1. **Real data** – sign in, consent onboarding, activities and ratings saved on device and synced to Cloudflare D1
2. **Listening** – mic capture during activities, listening range, speaker separation, real calm/tense scoring
3. **Insights** – live nudges, spoken voice cues, post-activity summaries, activity-specific tips
4. **Launch** – privacy policy, store listings, beta testing, App Store and Play Store submission
