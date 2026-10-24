// Placeholder content carried over from the Figma prototype.
// Phase 1 replaces this with the signed-in user's real data.
export const mockUser = {
  firstName: 'John',
  fullName: 'John Doe',
  title: 'Nunchi Practitioner',
  nextInteraction: 'Today at 3 pm',
};

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

export type PastInteraction = {
  title: string;
  time: string;
  participants: string[];
  avatars: number[]; // require()d image modules
  heatValues: number[];
  summary: string[];
};

export const mockInteractions: PastInteraction[] = [
  {
    title: 'Meeting at 3:30 pm',
    time: 'Today',
    participants: ['Sarah', 'Mike'],
    avatars: [require('@/assets/images/avatars/avatar-1.png'), require('@/assets/images/avatars/avatar-2.png')],
    heatValues: [1, 1, 1, 2, 2, 3, 5, 6, 7, 2, 2, 1, 1],
    summary: [
      'Conversation was mostly calm with a brief spike',
      'Sarah showed increased engagement mid-discussion',
      'Good overall energy balance',
    ],
  },
  {
    title: 'Coffee chat at 5:10 pm',
    time: 'Today',
    participants: ['Alex', 'Jordan', 'Sam'],
    avatars: [
      require('@/assets/images/avatars/avatar-3.png'),
      require('@/assets/images/avatars/avatar-4.png'),
      require('@/assets/images/avatars/avatar-5.png'),
    ],
    heatValues: [1, 3, 4, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    summary: [
      'Relaxed conversation throughout',
      'Early engagement from Alex settled quickly',
      'Natural rapport building detected',
    ],
  },
  {
    title: 'Interview at 6:20 pm',
    time: 'Yesterday',
    participants: ['Taylor', 'Morgan'],
    avatars: [require('@/assets/images/avatars/avatar-7.png'), require('@/assets/images/avatars/avatar-6.png')],
    heatValues: [1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 5, 8, 9],
    summary: [
      'Tension escalated towards the end',
      'Consider ending interviews with lighter topics',
      'Good start but energy shifted negatively',
    ],
  },
];
