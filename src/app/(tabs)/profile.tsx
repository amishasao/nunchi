import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AvatarIcon } from '@/components/icons';
import { Colors, Fonts, Type, heatColor } from '@/constants/theme';
import { formatDuration, formatWhen } from '@/lib/format';
import { useSessionStore } from '@/store/session-store';

function MiniHeatBar({ values }: { values: number[] }) {
  return (
    <View style={styles.heatBar}>
      {values.map((v, i) => (
        <View
          key={i}
          style={[
            styles.heatSegment,
            { backgroundColor: heatColor(v) },
            i === 0 && styles.heatStart,
            i === values.length - 1 && styles.heatEnd,
          ]}
        />
      ))}
    </View>
  );
}

function Initials({ name }: { name: string }) {
  return (
    <View style={styles.participantAvatar} accessibilityLabel={name}>
      <Text style={styles.initials}>{name.trim().charAt(0).toUpperCase()}</Text>
    </View>
  );
}

export default function ProfileScreen() {
  const profile = useSessionStore((s) => s.profile);
  const history = useSessionStore((s) => s.history);
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        <View style={styles.banner} />
        <View style={styles.avatarWrap}>
          <View style={styles.avatar}>
            <AvatarIcon />
          </View>
        </View>
      </View>

      <View style={styles.info}>
        <Text style={[Type.h1, styles.name]}>{profile?.name}</Text>
        <Text style={styles.role}>Nunchi Practitioner</Text>
      </View>

      <View style={styles.list}>
        <Text style={[Type.h2, styles.listTitle]}>Recent interactions</Text>
        {history.length === 0 && (
          <Text style={styles.empty}>Interactions you finish will show up here.</Text>
        )}
        {history.map((interaction) => (
          <Pressable
            key={interaction.id}
            accessibilityRole="button"
            accessibilityState={{ expanded: expanded === interaction.id }}
            onPress={() => setExpanded(expanded === interaction.id ? null : interaction.id)}
            style={styles.card}>
            <View style={styles.cardHeader}>
              <View style={styles.cardHeading}>
                <Text style={styles.cardTitle} numberOfLines={1}>
                  {interaction.name}
                </Text>
                <Text style={styles.small}>
                  {formatWhen(interaction.startTime)} · {formatDuration(interaction.duration)}
                </Text>
              </View>
              {interaction.participants.length > 0 && (
                <View style={styles.cardParticipants}>
                  <Text style={styles.small}>Participants:</Text>
                  {interaction.participants.map((name, ni) => (
                    <Initials key={`${name}-${ni}`} name={name} />
                  ))}
                </View>
              )}
            </View>

            <MiniHeatBar values={interaction.heatValues} />

            <View style={styles.cardLegend}>
              <Text style={styles.small}>Calm</Text>
              <Text style={styles.small}>Tense</Text>
            </View>

            {expanded === interaction.id && (
              <View style={styles.summary}>
                <Text style={styles.cardTitle}>Summary</Text>
                {interaction.rating !== null && <Text style={styles.small}>Your rating: {interaction.rating}/5</Text>}
                {interaction.insights.map((s, si) => (
                  <Text key={si} style={styles.small}>
                    {si + 1}. {s}
                  </Text>
                ))}
              </View>
            )}
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 16,
  },
  banner: {
    height: 120,
    backgroundColor: Colors.slate,
  },
  avatarWrap: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: -45,
    alignItems: 'center',
  },
  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#eaddff',
    borderWidth: 4,
    borderColor: Colors.white,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },
  info: {
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 8,
  },
  name: {
    fontSize: 28,
    lineHeight: 39,
    textAlign: 'center',
  },
  role: {
    color: Colors.mutedForeground,
    fontFamily: Fonts.interMedium,
    fontSize: 14,
    textAlign: 'center',
  },
  list: {
    paddingHorizontal: 16,
    paddingTop: 16,
    gap: 12,
  },
  listTitle: {
    fontSize: 20,
    lineHeight: 30,
    paddingHorizontal: 4,
  },
  card: {
    backgroundColor: Colors.sage,
    borderRadius: 16,
    padding: 12,
    gap: 8,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  cardHeading: {
    flexShrink: 1,
    gap: 2,
  },
  cardTitle: {
    color: Colors.ink,
    fontFamily: Fonts.interSemiBold,
    fontSize: 12,
  },
  cardParticipants: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  participantAvatar: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: Colors.slate,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initials: {
    color: Colors.white,
    fontFamily: Fonts.interSemiBold,
    fontSize: 10,
  },
  empty: {
    color: Colors.mutedForeground,
    fontFamily: Fonts.inter,
    fontSize: 14,
    paddingHorizontal: 4,
  },
  small: {
    color: Colors.ink,
    fontFamily: Fonts.inter,
    fontSize: 10,
  },
  heatBar: {
    flexDirection: 'row',
    gap: 1,
  },
  heatSegment: {
    flex: 1,
    height: 12,
  },
  heatStart: {
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
  },
  heatEnd: {
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
  cardLegend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  summary: {
    gap: 4,
    paddingTop: 4,
    borderTopWidth: 1,
    borderTopColor: 'rgba(127,167,184,0.3)',
  },
});
