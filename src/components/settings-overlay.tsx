import { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Checkbox } from '@/components/checkbox';
import { Overlay } from '@/components/overlay';
import { PrimaryButton } from '@/components/primary-button';
import { RangeSlider } from '@/components/range-slider';
import { Colors, Fonts } from '@/constants/theme';
import { useSessionStore } from '@/store/session-store';

export function SettingsOverlay({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <Overlay visible={visible} onClose={onClose} contentStyle={styles.content}>
      {/* Mounted only while open, so each opening starts from the saved values. */}
      {visible && <SettingsForm onClose={onClose} />}
    </Overlay>
  );
}

function SettingsForm({ onClose }: { onClose: () => void }) {
  const saveSettings = useSessionStore((s) => s.saveSettings);
  const [range, setRange] = useState(() => useSessionStore.getState().recordingRange);
  const [agreed, setAgreed] = useState(() => useSessionStore.getState().recordingConsent);

  const handleSave = () => {
    saveSettings({ recordingRange: range, recordingConsent: agreed });
    onClose();
  };

  return (
    <>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.sections}>
        <View style={styles.section}>
          <Text style={styles.label}>Range</Text>
          <Text style={styles.hint}>How far Nunchi listens. Lower it in busy places to skip nearby conversations.</Text>
          <RangeSlider value={range} onChange={setRange} accessibilityLabel="Listening range" />
        </View>

        <View style={styles.section}>
          <Text style={styles.consentLabel}>Allow Nunchi to record conversations</Text>
          <Pressable
            accessibilityRole="checkbox"
            accessibilityState={{ checked: agreed }}
            onPress={() => setAgreed(!agreed)}
            style={styles.agreeRow}>
            <Checkbox checked={agreed} />
            <Text style={styles.agreeText}>Agree</Text>
          </Pressable>
        </View>
      </View>

      <PrimaryButton text="Save and Exit" onPress={handleSave} style={styles.fullWidth} />
    </>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingVertical: 40,
    gap: 40,
  },
  title: {
    color: Colors.ink,
    fontFamily: Fonts.ralewayBold,
    fontSize: 30,
    letterSpacing: -0.5,
  },
  sections: {
    alignSelf: 'stretch',
    gap: 32,
  },
  section: {
    gap: 8,
  },
  label: {
    color: Colors.ink,
    fontFamily: Fonts.interSemiBold,
    fontSize: 18,
  },
  hint: {
    color: Colors.mutedText,
    fontFamily: Fonts.inter,
    fontSize: 12,
  },
  consentLabel: {
    color: Colors.ink,
    fontFamily: Fonts.interSemiBold,
    fontSize: 14,
  },
  agreeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 4,
  },
  agreeText: {
    color: Colors.ink,
    fontFamily: Fonts.inter,
    fontSize: 14,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
});
