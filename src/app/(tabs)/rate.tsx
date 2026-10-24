import { router, useFocusEffect } from 'expo-router';
import { Star } from 'lucide-react-native';
import { useCallback, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInUp, ZoomIn } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { PrimaryButton } from '@/components/primary-button';
import { Colors, Fonts, Type } from '@/constants/theme';
import { useSessionStore } from '@/store/session-store';

export default function RateInteractionScreen() {
  const lastSession = useSessionStore((s) => s.lastSession);
  const rateLastSession = useSessionStore((s) => s.rateLastSession);
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  // Tab screens stay mounted, so reset each time the screen is shown.
  useFocusEffect(
    useCallback(() => {
      setRating(0);
      setSubmitted(false);
    }, []),
  );

  useEffect(() => {
    if (!submitted) return;
    const timer = setTimeout(() => router.navigate('/home'), 1500);
    return () => clearTimeout(timer);
  }, [submitted]);

  const handleSubmit = () => {
    rateLastSession(rating);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <View style={styles.container}>
        <Animated.View entering={ZoomIn.springify().damping(15)} style={styles.check}>
          <Svg width={40} height={30} viewBox="0 0 40 30" fill="none">
            <Path d="M4 15L15 26L36 4" stroke={Colors.white} strokeWidth={4} strokeLinecap="round" strokeLinejoin="round" />
          </Svg>
        </Animated.View>
        <Text style={[Type.h2, styles.centerText]}>Thank you!</Text>
        <Text style={styles.muted}>Your interaction has been saved. Redirecting to home...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Animated.View entering={FadeInUp} style={styles.content}>
        <Text style={styles.title}>Rate the Interaction</Text>

        {lastSession && (
          <View style={styles.summary}>
            <Text style={styles.muted}>
              Duration: {Math.floor(lastSession.duration / 60)}m {lastSession.duration % 60}s
            </Text>
            <Text style={styles.muted}>Participants: {lastSession.participants.join(', ')}</Text>
          </View>
        )}

        <View style={styles.stars}>
          {[1, 2, 3, 4, 5].map((star) => {
            const filled = star <= rating;
            const color = filled ? Colors.star : Colors.starEmpty;
            return (
              <Pressable
                key={star}
                accessibilityRole="button"
                accessibilityLabel={`${star} star${star > 1 ? 's' : ''}`}
                accessibilityState={{ selected: filled }}
                onPress={() => setRating(star)}
                style={({ pressed }) => [styles.star, pressed && styles.starPressed]}>
                <Star size={42} color={color} fill={color} strokeWidth={1} />
              </Pressable>
            );
          })}
        </View>

        <PrimaryButton text="Submit!" onPress={handleSubmit} disabled={rating === 0} style={styles.fullWidth} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 24,
    paddingHorizontal: 32,
  },
  content: {
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    gap: 32,
  },
  title: {
    color: Colors.heading,
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 30,
    letterSpacing: -0.5,
    lineHeight: 36,
    textAlign: 'center',
  },
  summary: {
    alignItems: 'center',
    gap: 4,
  },
  muted: {
    color: Colors.mutedForeground,
    fontFamily: Fonts.inter,
    fontSize: 14,
    textAlign: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  stars: {
    flexDirection: 'row',
    gap: 8,
  },
  star: {
    padding: 4,
  },
  starPressed: {
    transform: [{ scale: 1.2 }],
  },
  check: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: Colors.sage,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
});
