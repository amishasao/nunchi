// Design tokens taken from the Figma prototype (prototype/src/styles/theme.css).
export const Colors = {
  ink: '#2e3a3f',
  white: '#ffffff',
  mist: '#f6f8f7',
  slate: '#7fa7b8',
  sage: '#9fbfa8',
  mint: '#c5ddd2',
  border: '#d8e1e3',
  placeholder: '#d2d2d2',
  muted: '#767676',
  mutedForeground: '#6b7c80',
  calmTint: '#e9f1ef',
  mutedText: '#727474',
  heading: '#333333',
  tipTile: '#81a9e5',
  star: '#FFCF4C',
  starEmpty: '#d9d9d9',
  danger: '#ef4444',
  recording: '#ff8080',
  overlay: 'rgba(0,0,0,0.4)',
} as const;

// Calm (green) to tense (red), indexed 0-9.
export const HeatColors = [
  '#cdfad5',
  '#d4fbc0',
  '#e2fcb0',
  '#f6fdc3',
  '#fff4b0',
  '#ffebb0',
  '#ffd7a0',
  '#ffcf96',
  '#ffb080',
  '#ff8080',
] as const;

export function heatColor(value: number) {
  return HeatColors[Math.max(0, Math.min(9, Math.round(value)))];
}

export const Fonts = {
  inter: 'Inter_400Regular',
  interMedium: 'Inter_500Medium',
  interSemiBold: 'Inter_600SemiBold',
  interBold: 'Inter_700Bold',
  raleway: 'Raleway_400Regular',
  ralewaySemiBold: 'Raleway_600SemiBold',
  ralewayBold: 'Raleway_700Bold',
  poppins: 'Poppins_400Regular',
  poppinsSemiBold: 'Poppins_600SemiBold',
} as const;

export const Shadow = {
  card: {
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
} as const;

export const MaxContentWidth = 430;

// Heading and label styles from the prototype's base CSS.
export const Type = {
  h1: { fontFamily: Fonts.ralewayBold, fontSize: 32, lineHeight: 45, color: Colors.ink },
  h2: { fontFamily: Fonts.ralewaySemiBold, fontSize: 24, lineHeight: 36, color: Colors.ink },
  h3: { fontFamily: Fonts.interSemiBold, fontSize: 18, lineHeight: 27, color: Colors.ink },
  label: { fontFamily: Fonts.interMedium, fontSize: 16, lineHeight: 24, color: Colors.ink },
} as const;
