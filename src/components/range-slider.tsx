import { useState } from 'react';
import { StyleSheet, View, type GestureResponderEvent, type LayoutChangeEvent } from 'react-native';

import { Colors } from '@/constants/theme';

type RangeSliderProps = {
  value: number; // 0-100
  onChange: (value: number) => void;
  accessibilityLabel?: string;
};

export function RangeSlider({ value, onChange, accessibilityLabel }: RangeSliderProps) {
  const [width, setWidth] = useState(0);

  const update = (e: GestureResponderEvent) => {
    if (width <= 0) return;
    onChange(Math.round(Math.max(0, Math.min(1, e.nativeEvent.locationX / width)) * 100));
  };

  const step = (delta: number) => onChange(Math.max(0, Math.min(100, value + delta)));
  const handleLeft = (value / 100) * width;

  return (
    <View
      style={styles.container}
      onLayout={(e: LayoutChangeEvent) => setWidth(e.nativeEvent.layout.width)}
      accessible
      accessibilityRole="adjustable"
      accessibilityLabel={accessibilityLabel}
      accessibilityValue={{ min: 0, max: 100, now: value }}
      accessibilityActions={[{ name: 'increment' }, { name: 'decrement' }]}
      onAccessibilityAction={(e) => step(e.nativeEvent.actionName === 'increment' ? 10 : -10)}
      onStartShouldSetResponder={() => true}
      onMoveShouldSetResponder={() => true}
      onResponderTerminationRequest={() => false}
      onResponderGrant={update}
      onResponderMove={update}>
      <View style={styles.track} pointerEvents="none">
        <View style={[styles.filled, { width: handleLeft }]} />
        <View style={styles.endDot} />
      </View>
      <View style={[styles.handle, { left: handleLeft - 2 }]} pointerEvents="none" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 44,
    justifyContent: 'center',
  },
  track: {
    height: 16,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: 'rgba(120,120,120,0.2)',
    justifyContent: 'center',
  },
  filled: {
    position: 'absolute',
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: Colors.slate,
  },
  endDot: {
    position: 'absolute',
    right: 5,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#4A4459',
  },
  handle: {
    position: 'absolute',
    top: 0,
    width: 4,
    height: 44,
    borderRadius: 2,
    backgroundColor: Colors.slate,
  },
});
