import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  type ScrollViewInstance,
} from 'react-native';

import { DoubleArrowIcon, SettingsHeartIcon } from '@/components/icons';
import { PrimaryButton } from '@/components/primary-button';
import { SettingsOverlay } from '@/components/settings-overlay';
import { TipOverlay } from '@/components/tip-overlay';
import { Colors, Fonts, Shadow, Type } from '@/constants/theme';
import { dayLabels, moodLabels, mockUser, recommendedTips, weeklyMoodGrid, type Tip } from '@/data/mock';

const cellColors = [Colors.ink, Colors.slate, Colors.mint];

const cardGradients: { colors: [string, string, ...string[]]; locations?: [number, number, ...number[]] }[] = [
  { colors: [Colors.slate, Colors.sage] },
  { colors: [Colors.sage, Colors.mint, Colors.slate], locations: [0, 0.6, 1] },
  { colors: [Colors.ink, Colors.slate, Colors.sage], locations: [0, 0.8, 1] },
];

export default function HomeScreen() {
  const [selectedTip, setSelectedTip] = useState<Tip | null>(null);
  const [showSettings, setShowSettings] = useState(false);
  const [showScrollBtn, setShowScrollBtn] = useState(true);
  const tipsRef = useRef<ScrollViewInstance>(null);
  const scrollX = useRef(0);

  const onTipsScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const { contentOffset, contentSize, layoutMeasurement } = e.nativeEvent;
    scrollX.current = contentOffset.x;
    setShowScrollBtn(contentOffset.x + layoutMeasurement.width < contentSize.width - 10);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.nextInteraction}>Next Interaction: {mockUser.nextInteraction}</Text>
        <Pressable accessibilityRole="button" accessibilityLabel="Settings" onPress={() => setShowSettings(true)}>
          <SettingsHeartIcon />
        </Pressable>
      </View>

      <View style={styles.welcomeCard}>
        <Image source={require('@/assets/images/welcome.jpg')} style={StyleSheet.absoluteFill} contentFit="cover" />
        <View style={styles.welcomeShade} />
        <Text style={styles.welcomeText}>Welcome {mockUser.firstName}</Text>
      </View>

      <View style={styles.section}>
        <Text style={Type.h3}>Insights</Text>
        <View style={styles.grid}>
          {weeklyMoodGrid.map((row, ri) => (
            <View key={moodLabels[ri]} style={styles.gridRow}>
              <Text style={styles.moodLabel}>{moodLabels[ri]}</Text>
              {row.map((cell, ci) => (
                <View key={ci} style={[styles.cell, { backgroundColor: cellColors[cell] }]} />
              ))}
            </View>
          ))}
          <View style={[styles.gridRow, styles.dayRow]}>
            <View style={styles.moodLabelSpacer} />
            {dayLabels.map((day, i) => (
              <Text key={i} style={styles.dayLabel}>
                {day}
              </Text>
            ))}
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={Type.h3}>Recommended</Text>
        <View>
          <ScrollView
            ref={tipsRef}
            horizontal
            showsHorizontalScrollIndicator={false}
            onScroll={onTipsScroll}
            scrollEventThrottle={32}
            contentContainerStyle={styles.tips}>
            {recommendedTips.map((tip, index) => (
              <Pressable key={tip.title} onPress={() => setSelectedTip(tip)} style={styles.tip}>
                <LinearGradient
                  colors={cardGradients[index].colors}
                  locations={cardGradients[index].locations}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 1 }}
                  style={styles.tipCard}
                />
                <Text style={styles.tipTitle}>{tip.title}</Text>
              </Pressable>
            ))}
          </ScrollView>
          {showScrollBtn && (
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Scroll right"
              onPress={() => tipsRef.current?.scrollTo({ x: scrollX.current + 160, animated: true })}
              style={styles.scrollBtn}>
              <DoubleArrowIcon />
            </Pressable>
          )}
        </View>
      </View>

      <View style={styles.center}>
        <PrimaryButton text="Start Activity" onPress={() => router.navigate('/activity')} />
      </View>

      <TipOverlay tip={selectedTip} onClose={() => setSelectedTip(null)} />
      <SettingsOverlay visible={showSettings} onClose={() => setShowSettings(false)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 32,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 24,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  nextInteraction: {
    color: Colors.ink,
    fontFamily: Fonts.interBold,
    fontSize: 14,
  },
  welcomeCard: {
    height: 106,
    borderRadius: 9,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  welcomeShade: {
    ...StyleSheet.absoluteFill,
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  welcomeText: {
    color: Colors.mist,
    fontFamily: Fonts.ralewayBold,
    fontSize: 32,
    lineHeight: 38,
    margin: 12,
  },
  section: {
    gap: 8,
  },
  grid: {
    gap: 12,
  },
  gridRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 11,
  },
  moodLabel: {
    width: 73,
    color: Colors.ink,
    fontFamily: Fonts.inter,
    fontSize: 13,
  },
  moodLabelSpacer: {
    width: 73,
  },
  cell: {
    width: 28,
    height: 28,
    borderRadius: 4,
  },
  dayRow: {
    marginTop: 0,
  },
  dayLabel: {
    width: 28,
    textAlign: 'center',
    color: Colors.ink,
    fontFamily: Fonts.ralewaySemiBold,
    fontSize: 16,
  },
  tips: {
    gap: 20,
    paddingBottom: 8,
    paddingHorizontal: 4,
  },
  tip: {
    width: 132,
    gap: 12,
  },
  tipCard: {
    width: 132,
    height: 132,
    borderRadius: 8,
    ...Shadow.card,
  },
  tipTitle: {
    color: Colors.ink,
    fontFamily: Fonts.interSemiBold,
    fontSize: 15,
    textAlign: 'center',
  },
  scrollBtn: {
    position: 'absolute',
    right: -4,
    top: 50,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: 'rgba(255,255,255,0.9)',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  center: {
    alignItems: 'center',
  },
});
