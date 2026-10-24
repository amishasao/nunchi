import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Animated, { ZoomIn, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { Colors, Fonts, heatColor } from '@/constants/theme';

type HeatCellViewProps = {
  value: number;
  participantNumber: number | null;
};

export function HeatCellView({ value, participantNumber }: HeatCellViewProps) {
  const color = useSharedValue<string>(heatColor(value));

  useEffect(() => {
    color.value = withTiming(heatColor(value), { duration: 800 });
  }, [value, color]);

  const animatedStyle = useAnimatedStyle(() => ({ backgroundColor: color.value }));

  return (
    <Animated.View style={[styles.cell, animatedStyle]}>
      {participantNumber !== null && (
        <Animated.View entering={ZoomIn} style={styles.dot}>
          <Text style={styles.dotText}>{participantNumber}</Text>
        </Animated.View>
      )}
    </Animated.View>
  );
}

export function ParticipantBadge({ number, size = 22 }: { number: number; size?: number }) {
  return (
    <View style={[styles.badge, { width: size, height: size, borderRadius: size / 2 }]}>
      <Text style={styles.badgeText}>{number}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cell: {
    flex: 1,
    aspectRatio: 1,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 1 },
    elevation: 1,
  },
  dotText: {
    color: Colors.ink,
    fontFamily: Fonts.interSemiBold,
    fontSize: 12,
  },
  badge: {
    backgroundColor: Colors.white,
    borderWidth: 1,
    borderColor: Colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    color: Colors.ink,
    fontFamily: Fonts.interSemiBold,
    fontSize: 11,
  },
});
