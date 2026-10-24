import { StyleSheet, Text, View } from 'react-native';

import { Overlay } from '@/components/overlay';
import { PrimaryButton } from '@/components/primary-button';
import { Colors, Fonts } from '@/constants/theme';
import type { Tip } from '@/data/mock';

export function TipOverlay({ tip, onClose }: { tip: Tip | null; onClose: () => void }) {
  return (
    <Overlay visible={tip !== null} onClose={onClose}>
      {tip && (
        <>
          {/* Illustration placeholder */}
          <View style={styles.tile}>
            <Text style={styles.tileLetter}>{tip.title.charAt(0)}</Text>
          </View>
          <View style={styles.body}>
            <Text style={styles.title}>{tip.title}</Text>
            <Text style={styles.description}>{tip.description}</Text>
          </View>
          <PrimaryButton text="I got it!" onPress={onClose} style={styles.fullWidth} />
        </>
      )}
    </Overlay>
  );
}

const styles = StyleSheet.create({
  tile: {
    width: 140,
    height: 140,
    borderRadius: 12,
    backgroundColor: Colors.tipTile,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tileLetter: {
    color: Colors.white,
    fontFamily: Fonts.ralewayBold,
    fontSize: 48,
  },
  body: {
    alignItems: 'center',
    gap: 8,
  },
  title: {
    color: Colors.heading,
    fontFamily: Fonts.poppinsSemiBold,
    fontSize: 28,
    letterSpacing: -0.5,
    textAlign: 'center',
  },
  description: {
    color: Colors.mutedText,
    fontFamily: Fonts.poppins,
    fontSize: 16,
    textAlign: 'center',
  },
  fullWidth: {
    alignSelf: 'stretch',
  },
});
