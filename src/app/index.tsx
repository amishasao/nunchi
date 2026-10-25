import { router } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Animated, { FadeIn, FadeInDown, FadeOut } from 'react-native-reanimated';

import { Colors, Fonts } from '@/constants/theme';
import { useSessionStore } from '@/store/session-store';

// Animated wordmark shown after the native splash, then on to Home (or onboarding on first launch).
export default function Splash() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace(useSessionStore.getState().profile ? '/home' : '/onboarding');
    }, 2800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Animated.View entering={FadeIn.duration(700)} exiting={FadeOut.duration(700)} style={styles.container}>
      <View>
        <Animated.Text entering={FadeInDown.duration(800).delay(200)} style={styles.wordmark}>
          NUNCHI
        </Animated.Text>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.slate,
  },
  wordmark: {
    color: Colors.white,
    fontFamily: Fonts.raleway,
    fontSize: 48,
    letterSpacing: 6.72,
    textAlign: 'center',
  },
});
