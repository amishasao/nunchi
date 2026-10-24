import { Image } from 'expo-image';
import { Play } from 'lucide-react-native';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { Overlay } from '@/components/overlay';
import { PrimaryButton } from '@/components/primary-button';
import { Colors, Fonts } from '@/constants/theme';

// Voice cue player. Playback is wired up in Phase 3.
export function ListenOverlay({ visible, onClose }: { visible: boolean; onClose: () => void }) {
  return (
    <Overlay visible={visible} onClose={onClose}>
      <View style={styles.body}>
        <Text style={styles.title}>Tap to Listen</Text>
        <Text style={styles.description}>{"Here's a link to hear voiceover cues to help you right now."}</Text>
      </View>
      <View style={styles.player}>
        <Pressable accessibilityRole="button" accessibilityLabel="Play voice cue" style={styles.play}>
          <Play size={40} color={Colors.ink} fill={Colors.ink} />
        </Pressable>
        <Image
          source={require('@/assets/images/waveform.png')}
          style={styles.waveform}
          contentFit="cover"
          accessibilityLabel="Audio waveform"
        />
      </View>
      <PrimaryButton text="Done!" onPress={onClose} style={styles.fullWidth} />
    </Overlay>
  );
}

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: Colors.heading,
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 28,
    letterSpacing: -0.5,
  },
  description: {
    color: Colors.mutedText,
    fontFamily: Fonts.poppins,
    fontSize: 15,
    textAlign: 'center',
  },
  player: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  play: {
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  waveform: {
    width: 180,
    height: 56,
    borderRadius: 18,
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
});
