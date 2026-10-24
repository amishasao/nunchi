import { Redirect, router } from 'expo-router';
import { Flame } from 'lucide-react-native';
import { StyleSheet, Text, View } from 'react-native';

import { PrimaryButton } from '@/components/primary-button';
import { Colors, Fonts, Type } from '@/constants/theme';
import { useSessionStore } from '@/store/session-store';

export default function HeatmapScreen() {
  const hasActivity = useSessionStore((s) => s.currentActivity !== null);

  // While an activity is running, the Heat tab shows it live.
  if (hasActivity) return <Redirect href="/heatmap/live" />;

  return (
    <View style={styles.container}>
      <View style={styles.badge}>
        <Flame size={48} color={Colors.slate} />
      </View>
      <View style={styles.body}>
        <Text style={[Type.h2, styles.center]}>No Active Conversation</Text>
        <Text style={styles.description}>
          Start a new activity to see the live heatmap of your conversation dynamics.
        </Text>
      </View>
      <PrimaryButton text="Start Activity" onPress={() => router.navigate('/activity')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
    paddingHorizontal: 32,
  },
  badge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.calmTint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    alignItems: 'center',
    gap: 12,
  },
  center: {
    textAlign: 'center',
  },
  description: {
    maxWidth: 280,
    color: Colors.mutedForeground,
    fontFamily: Fonts.inter,
    fontSize: 14,
    textAlign: 'center',
  },
});
