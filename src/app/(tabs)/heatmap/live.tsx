import { router } from 'expo-router';
import { ChevronRight, Volume2 } from 'lucide-react-native';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInLeft } from 'react-native-reanimated';

import { HeatCellView, ParticipantBadge } from '@/components/heat-cell';
import { ListenOverlay } from '@/components/listen-overlay';
import { PrimaryButton } from '@/components/primary-button';
import { RecordingBadge } from '@/components/recording-badge';
import { Colors, Fonts, HeatColors, Type } from '@/constants/theme';
import { createInitialGrid, driftGrid, formatElapsed, generateInsights } from '@/lib/mock-heatmap';
import { useSessionStore } from '@/store/session-store';

const DEFAULT_PARTICIPANTS = ['You', 'Person 2', 'Person 3'];

export default function HeatmapLiveScreen() {
  const currentActivity = useSessionStore((s) => s.currentActivity);
  const participants =
    currentActivity && currentActivity.participants.length > 0
      ? ['You', ...currentActivity.participants]
      : DEFAULT_PARTICIPANTS;

  // Keyed by start time so each new activity gets a fresh grid and timer.
  return (
    <LiveSession
      key={currentActivity?.startTime ?? 'demo'}
      participants={participants}
      isRunning={currentActivity !== null}
    />
  );
}

function LiveSession({ participants, isRunning }: { participants: string[]; isRunning: boolean }) {
  const endActivity = useSessionStore((s) => s.endActivity);
  const [grid, setGrid] = useState(() => createInitialGrid(participants.length));
  const [elapsed, setElapsed] = useState(0);
  const [showListen, setShowListen] = useState(false);
  const insights = useMemo(() => generateInsights(grid, participants), [grid, participants]);

  // Tab screens stay mounted, so only tick while an activity is running.
  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => setElapsed((t) => t + 1), 1000);
    const drift = setInterval(() => setGrid(driftGrid), 2000);
    return () => {
      clearInterval(timer);
      clearInterval(drift);
    };
  }, [isRunning]);

  const handleEnd = () => {
    endActivity({ duration: elapsed, insights, participants });
    router.navigate('/rate');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={Type.h3}>Heatmap</Text>
        <View style={styles.headerRight}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Listen to voice cues"
            onPress={() => setShowListen(true)}
            style={styles.iconBtn}>
            <Volume2 size={24} color={Colors.ink} />
          </Pressable>
          {isRunning && <RecordingBadge label={formatElapsed(elapsed)} />}
        </View>
      </View>

      <View style={styles.gridCard}>
        <View style={styles.grid}>
          {grid.map((row, r) => (
            <View key={r} style={styles.gridRow}>
              {row.map((cell, c) => (
                <HeatCellView
                  key={c}
                  value={cell.value}
                  participantNumber={cell.participantIndex === null ? null : cell.participantIndex + 1}
                />
              ))}
            </View>
          ))}
        </View>
        <View style={styles.legend}>
          <Text style={styles.legendText}>Calm</Text>
          <View style={styles.legendScale}>
            {HeatColors.map((color) => (
              <View key={color} style={[styles.legendSwatch, { backgroundColor: color }]} />
            ))}
          </View>
          <Text style={styles.legendText}>Tense</Text>
        </View>
      </View>

      <View style={styles.participants}>
        {participants.map((p, i) => (
          <View key={`${p}-${i}`} style={styles.participant}>
            <ParticipantBadge number={i + 1} />
            <Text style={styles.participantName}>{p}</Text>
          </View>
        ))}
      </View>

      <View style={styles.insights}>
        <Text style={Type.h3}>Quick Insights</Text>
        {insights.map((insight, i) => (
          <Animated.View key={`${insight}-${i}`} entering={FadeInLeft.delay(i * 100)} style={styles.insight}>
            <Text style={styles.insightText}>{insight}</Text>
            <ChevronRight size={18} color={Colors.slate} />
          </Animated.View>
        ))}
      </View>

      <View style={styles.center}>
        <PrimaryButton text="End Activity" onPress={handleEnd} style={styles.endButton} />
      </View>

      <ListenOverlay visible={showListen} onClose={() => setShowListen(false)} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 16,
    paddingHorizontal: 20,
    paddingTop: 16,
    paddingBottom: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  iconBtn: {
    padding: 4,
  },
  gridCard: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  grid: {
    padding: 12,
    gap: 3,
  },
  gridRow: {
    flexDirection: 'row',
    gap: 3,
  },
  legend: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  legendText: {
    color: Colors.mutedForeground,
    fontFamily: Fonts.inter,
    fontSize: 11,
  },
  legendScale: {
    flexDirection: 'row',
    gap: 2,
  },
  legendSwatch: {
    width: 16,
    height: 8,
    borderRadius: 2,
  },
  participants: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  participant: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  participantName: {
    color: Colors.mutedForeground,
    fontFamily: Fonts.interMedium,
    fontSize: 12,
  },
  insights: {
    gap: 8,
  },
  insight: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: 8,
    backgroundColor: 'rgba(129,169,229,0.15)',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  insightText: {
    flex: 1,
    color: Colors.ink,
    fontFamily: Fonts.inter,
    fontSize: 14,
  },
  center: {
    alignItems: 'center',
    paddingTop: 8,
  },
  endButton: {
    width: '100%',
    maxWidth: 300,
  },
});
