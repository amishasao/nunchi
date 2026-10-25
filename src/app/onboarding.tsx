import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { PrimaryButton } from '@/components/primary-button';
import { Colors, Fonts, MaxContentWidth, Type } from '@/constants/theme';
import { DEFAULT_RECORDING_RANGE, useSessionStore } from '@/store/session-store';

const consentPoints = [
  'Nunchi listens through your microphone only while an activity you started is running.',
  "Let the people you're talking with know that Nunchi is listening.",
  'Your activities and ratings are saved on this phone.',
  'You can change this any time in Settings.',
];

// First launch: ask for a name, then for consent to record. Both are saved together at the end.
export default function OnboardingScreen() {
  const completeOnboarding = useSessionStore((s) => s.completeOnboarding);
  const [step, setStep] = useState<'name' | 'consent'>('name');
  const [name, setName] = useState('');
  const [focused, setFocused] = useState(false);
  const [saving, setSaving] = useState(false);

  const finish = async (recordingConsent: boolean) => {
    setSaving(true);
    try {
      await completeOnboarding({ name: name.trim(), recordingConsent, recordingRange: DEFAULT_RECORDING_RANGE });
      router.replace('/home');
    } finally {
      setSaving(false);
    }
  };

  return (
    <View style={styles.page}>
      <SafeAreaView style={styles.app}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          {step === 'name' ? (
            <Animated.View key="name" entering={FadeIn} style={styles.step}>
              <View style={styles.intro}>
                <Text style={[Type.h1, styles.center]}>Welcome to Nunchi</Text>
                <Text style={styles.body}>
                  Nunchi (눈치) is the art of reading the room. What should we call you?
                </Text>
              </View>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder="Your name"
                placeholderTextColor={Colors.placeholder}
                autoCapitalize="words"
                autoComplete="name"
                returnKeyType="next"
                onSubmitEditing={() => name.trim() && setStep('consent')}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                style={[styles.input, focused && styles.inputFocused]}
              />
              <PrimaryButton text="Continue" onPress={() => setStep('consent')} disabled={!name.trim()} />
            </Animated.View>
          ) : (
            <Animated.View key="consent" entering={FadeIn} style={styles.step}>
              <View style={styles.intro}>
                <Text style={[Type.h1, styles.center]}>Before you start</Text>
                <Text style={styles.body}>
                  To read the room, Nunchi needs to hear the conversation. Here is how that works.
                </Text>
              </View>
              <View style={styles.points}>
                {consentPoints.map((point) => (
                  <View key={point} style={styles.point}>
                    <View style={styles.bullet} />
                    <Text style={styles.pointText}>{point}</Text>
                  </View>
                ))}
              </View>
              <View style={styles.actions}>
                <PrimaryButton
                  text="Allow recording"
                  onPress={() => finish(true)}
                  disabled={saving}
                  style={styles.fullWidth}
                />
                <Pressable
                  accessibilityRole="button"
                  onPress={() => finish(false)}
                  disabled={saving}
                  style={styles.secondary}>
                  <Text style={styles.secondaryText}>Not now</Text>
                </Pressable>
              </View>
            </Animated.View>
          )}
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: Colors.mist,
    alignItems: 'center',
  },
  app: {
    flex: 1,
    width: '100%',
    maxWidth: MaxContentWidth,
    backgroundColor: Colors.white,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    paddingVertical: 32,
  },
  step: {
    alignItems: 'center',
    gap: 32,
  },
  intro: {
    alignItems: 'center',
    gap: 12,
  },
  center: {
    textAlign: 'center',
  },
  body: {
    color: Colors.mutedForeground,
    fontFamily: Fonts.inter,
    fontSize: 15,
    lineHeight: 22,
    textAlign: 'center',
  },
  input: {
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: Colors.ink,
    fontFamily: Fonts.inter,
    fontSize: 16,
  },
  inputFocused: {
    borderColor: Colors.slate,
  },
  points: {
    alignSelf: 'stretch',
    gap: 16,
  },
  point: {
    flexDirection: 'row',
    gap: 12,
  },
  bullet: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginTop: 7,
    backgroundColor: Colors.sage,
  },
  pointText: {
    flex: 1,
    color: Colors.ink,
    fontFamily: Fonts.inter,
    fontSize: 14,
    lineHeight: 22,
  },
  actions: {
    alignSelf: 'stretch',
    alignItems: 'center',
    gap: 8,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
  secondary: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  secondaryText: {
    color: Colors.mutedForeground,
    fontFamily: Fonts.interMedium,
    fontSize: 15,
  },
});
