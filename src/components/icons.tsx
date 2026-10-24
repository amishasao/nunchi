import Svg, { Path } from 'react-native-svg';

import { Colors } from '@/constants/theme';
import { IconPaths } from '@/constants/icon-paths';

type IconProps = { color?: string; size?: number };

export function HomeIcon({ color = Colors.muted, size = 28 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 33 33" fill="none">
      <Path d={IconPaths.home} fill={color} />
    </Svg>
  );
}

export function HeatIcon({ color = Colors.muted, size = 28 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 33 33" fill="none">
      <Path d={IconPaths.heat} fill={color} />
    </Svg>
  );
}

export function ActivityIcon({ color = Colors.muted, size = 28 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 33 33" fill="none">
      <Path d={IconPaths.activity} fill={color} />
    </Svg>
  );
}

export function ProfileIcon({ color = Colors.muted, size = 28 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 27 27" fill="none">
      <Path d={IconPaths.profile} fill={color} />
    </Svg>
  );
}

export function SettingsHeartIcon({ color = Colors.ink, size = 28 }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 30 30" fill="none">
      <Path d={IconPaths.settingsHeart} fill={color} />
    </Svg>
  );
}

export function DoubleArrowIcon({ color = Colors.ink }: IconProps) {
  return (
    <Svg width={18} height={16} viewBox="0 0 14 12" fill="none">
      <Path d={IconPaths.doubleArrow} fill={color} />
    </Svg>
  );
}

export function AvatarIcon({ size = 36 }: IconProps) {
  return (
    <Svg width={size} height={size * (33 / 36)} viewBox="0 0 28 26" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 6C20 9.31 17.31 12 14 12C10.69 12 8 9.31 8 6C8 2.69 10.69 0 14 0C17.31 0 20 2.69 20 6ZM18 6C18 8.21 16.21 10 14 10C11.79 10 10 8.21 10 6C10 3.79 11.79 2 14 2C16.21 2 18 3.79 18 6Z"
        fill="#4F378A"
      />
      <Path
        d="M14 15C7.62 15 2.1 18.83 0 24.19C0.51 24.7 1.05 25.18 1.62 25.63C3.18 20.71 8.09 17 14 17C19.91 17 24.82 20.71 26.38 25.63C26.95 25.18 27.49 24.7 28 24.19C25.9 18.83 20.38 15 14 15Z"
        fill="#4F378A"
      />
    </Svg>
  );
}
