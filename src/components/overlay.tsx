import type { ReactNode } from 'react';
import { Modal, Pressable, StyleSheet, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { ZoomIn } from 'react-native-reanimated';

import { Colors } from '@/constants/theme';

type OverlayProps = {
  visible: boolean;
  onClose: () => void;
  children: ReactNode;
  contentStyle?: StyleProp<ViewStyle>;
};

// Centered card over a dimmed backdrop; tapping the backdrop closes it.
export function Overlay({ visible, onClose, children, contentStyle }: OverlayProps) {
  return (
    <Modal transparent visible={visible} animationType="fade" onRequestClose={onClose}>
      <Pressable style={styles.backdrop} onPress={onClose} accessibilityLabel="Close">
        <Animated.View entering={ZoomIn.springify().damping(25).stiffness(300)} style={styles.card}>
          {/* Swallow taps so they don't reach the backdrop. */}
          <Pressable style={[styles.content, contentStyle]} onPress={() => {}}>
            {children}
          </Pressable>
        </Animated.View>
      </Pressable>
    </Modal>
  );
}

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    backgroundColor: Colors.overlay,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  card: {
    width: '100%',
    maxWidth: 340,
    backgroundColor: Colors.white,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 20,
    shadowOffset: { width: 0, height: 10 },
    elevation: 12,
  },
  content: {
    padding: 32,
    alignItems: 'center',
    gap: 24,
  },
});
