// Placeholder content carried over from the Figma prototype.
// The weekly mood grid is replaced by real insights in Phase 3.
export const moodLabels = ['calm', 'focused', 'confident', 'intentional'];
export const dayLabels = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// Each row is a mood, each column a day. 0 = dark, 1 = mid, 2 = light.
export const weeklyMoodGrid: number[][] = [
  [0, 0, 0, 1, 2, 1, 1],
  [0, 1, 0, 1, 2, 1, 1],
  [0, 0, 0, 2, 2, 1, 2],
  [0, 1, 0, 1, 2, 1, 1],
];

export type Tip = { title: string; description: string };

export const recommendedTips: Tip[] = [
  {
    title: 'Instilling Trust',
    description:
      "Build trust by maintaining steady eye contact, using open body language, and validating others' perspectives before sharing your own.",
  },
  {
    title: 'Finding Intent',
    description:
      'Look beyond words to understand the true motivation behind what someone is saying. Pay attention to tone shifts and repeated themes.',
  },
  {
    title: 'Unspoken Cues',
    description:
      'Notice micro-expressions, posture changes, and breathing patterns. These non-verbal signals often reveal more than words.',
  },
];

export const intentionOptions = ['Discussion', 'Onboarding', 'Interview', 'Research', 'Coffee Chat'];
