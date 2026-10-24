import { router } from 'expo-router';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { Checkbox } from '@/components/checkbox';
import { PrimaryButton } from '@/components/primary-button';
import { Colors, Fonts, Type } from '@/constants/theme';
import { intentionOptions } from '@/data/mock';
import { useSessionStore } from '@/store/session-store';

export default function StartActivityScreen() {
  const startActivity = useSessionStore((s) => s.startActivity);
  const [activityName, setActivityName] = useState('');
  const [selectedIntentions, setSelectedIntentions] = useState<string[]>([]);
  const [intentionOther, setIntentionOther] = useState('');
  const [participants, setParticipants] = useState('');
  const [focused, setFocused] = useState<string | null>(null);

  const toggleIntention = (intention: string) => {
    setSelectedIntentions((prev) =>
      prev.includes(intention) ? prev.filter((i) => i !== intention) : [...prev, intention],
    );
  };

  const isValid = activityName.trim() !== '' && (selectedIntentions.length > 0 || intentionOther.trim() !== '');

  const handleStart = () => {
    if (!isValid) return;
    startActivity({
      name: activityName.trim(),
      intentions: [...selectedIntentions, ...(intentionOther.trim() ? [intentionOther.trim()] : [])],
      participants: participants
        .split(',')
        .map((p) => p.trim())
        .filter(Boolean),
      startTime: new Date().toISOString(),
    });
    router.navigate('/heatmap/live');
  };

  const inputStyle = (name: string) => [styles.input, focused === name && styles.inputFocused];

  return (
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={[Type.h1, styles.title]}>Start a new Activity</Text>

      <View style={styles.field}>
        <Text style={Type.label}>
          Name of Activity<Text style={styles.required}>*</Text>
        </Text>
        <TextInput
          value={activityName}
          onChangeText={setActivityName}
          placeholder="Name of Activity"
          placeholderTextColor={Colors.placeholder}
          onFocus={() => setFocused('name')}
          onBlur={() => setFocused(null)}
          style={inputStyle('name')}
        />
      </View>

      <View style={styles.field}>
        <Text style={styles.smallLabel}>
          Select your Intention(s)<Text style={styles.required}>*</Text>
        </Text>
        <View style={styles.options}>
          {intentionOptions.map((intention) => {
            const checked = selectedIntentions.includes(intention);
            return (
              <Pressable
                key={intention}
                accessibilityRole="checkbox"
                accessibilityState={{ checked }}
                onPress={() => toggleIntention(intention)}
                style={styles.option}>
                <Checkbox checked={checked} />
                <Text style={styles.optionText}>{intention}</Text>
              </Pressable>
            );
          })}
        </View>
      </View>

      <View style={styles.field}>
        <Text style={Type.label}>Intention Other</Text>
        <TextInput
          value={intentionOther}
          onChangeText={setIntentionOther}
          placeholder="Describe another intention..."
          placeholderTextColor={Colors.placeholder}
          multiline
          numberOfLines={2}
          onFocus={() => setFocused('other')}
          onBlur={() => setFocused(null)}
          style={[inputStyle('other'), styles.textarea]}
        />
      </View>

      <View style={styles.field}>
        <Text style={Type.label}>Participants</Text>
        <TextInput
          value={participants}
          onChangeText={setParticipants}
          placeholder="e.g. Sarah, Mike, Alex"
          placeholderTextColor={Colors.placeholder}
          autoCapitalize="words"
          onFocus={() => setFocused('participants')}
          onBlur={() => setFocused(null)}
          style={inputStyle('participants')}
        />
      </View>

      <View style={styles.center}>
        <PrimaryButton text="Start Activity" onPress={handleStart} disabled={!isValid} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 20,
    paddingHorizontal: 40,
    paddingTop: 16,
    paddingBottom: 24,
  },
  title: {
    textAlign: 'center',
  },
  field: {
    gap: 4,
  },
  required: {
    color: Colors.danger,
  },
  smallLabel: {
    color: Colors.ink,
    fontFamily: Fonts.inter,
    fontSize: 14,
    lineHeight: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 5,
    paddingHorizontal: 16,
    paddingVertical: 12,
    color: Colors.ink,
    fontFamily: Fonts.inter,
    fontSize: 14,
  },
  inputFocused: {
    borderColor: Colors.slate,
  },
  textarea: {
    minHeight: 64,
    textAlignVertical: 'top',
  },
  options: {
    gap: 2,
  },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 6,
  },
  optionText: {
    color: Colors.ink,
    fontFamily: Fonts.inter,
    fontSize: 14,
  },
  center: {
    alignItems: 'center',
    paddingTop: 8,
  },
});
