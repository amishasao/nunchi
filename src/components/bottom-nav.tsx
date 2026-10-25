import { router, usePathname, type Href } from 'expo-router';
import type { ComponentType } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { ActivityIcon, HeatIcon, HomeIcon, ProfileIcon } from '@/components/icons';
import { Colors, Fonts } from '@/constants/theme';
import { firstName } from '@/lib/format';
import { useSessionStore } from '@/store/session-store';

type NavItem = {
  label: string;
  href: Href;
  Icon: ComponentType<{ color?: string }>;
  isActive: (pathname: string) => boolean;
};

const navItems: NavItem[] = [
  { label: 'Home', href: '/home', Icon: HomeIcon, isActive: (p) => p === '/home' },
  { label: 'Heat', href: '/heatmap', Icon: HeatIcon, isActive: (p) => p.startsWith('/heatmap') },
  { label: 'Activity', href: '/activity', Icon: ActivityIcon, isActive: (p) => p === '/activity' },
  { label: 'Profile', href: '/profile', Icon: ProfileIcon, isActive: (p) => p === '/profile' },
];

export function BottomNav() {
  const pathname = usePathname();
  const insets = useSafeAreaInsets();
  const name = useSessionStore((s) => (s.profile ? firstName(s.profile.name) : ''));

  return (
    <View style={[styles.nav, { paddingBottom: Math.max(insets.bottom, 24) }]}>
      {navItems.map(({ label: defaultLabel, href, Icon, isActive }) => {
        // The profile tab is labelled with the user's first name.
        const label = href === '/profile' && name ? name : defaultLabel;
        const active = isActive(pathname);
        const color = active ? Colors.ink : Colors.muted;
        return (
          <Pressable
            key={defaultLabel}
            accessibilityRole="tab"
            accessibilityState={{ selected: active }}
            onPress={() => router.navigate(href)}
            style={styles.item}>
            <Icon color={color} />
            <Text style={[styles.label, { color, fontFamily: active ? Fonts.interSemiBold : Fonts.interMedium }]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: Colors.border,
    backgroundColor: Colors.white,
    paddingHorizontal: 8,
    paddingTop: 8,
  },
  item: {
    alignItems: 'center',
    gap: 2,
    minWidth: 56,
  },
  label: {
    fontSize: 11,
  },
});
