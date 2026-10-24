import { Image } from 'expo-image';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { AvatarIcon } from '@/components/icons';
import { Colors, Fonts, Type, heatColor } from '@/constants/theme';
import { mockInteractions, mockUser } from '@/data/mock';

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

export default function ProfileScreen() {
  const [expanded, setExpanded] = useState<number | null>(null);

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
        <Text style={[Type.h1, styles.name]}>{mockUser.fullName}</Text>
        <Text style={styles.role}>{mockUser.title}</Text>
      </View>

      <View style={styles.list}>
        <Text style={[Type.h2, styles.listTitle]}>Interactions today</Text>
        {mockInteractions.map((interaction, index) => (
          <Pressable
            key={interaction.title}
            accessibilityRole="button"
            accessibilityState={{ expanded: expanded === index }}
            onPress={() => setExpanded(expanded === index ? null : index)}
            style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>{interaction.title}</Text>
              <View style={styles.cardParticipants}>
                <Text style={styles.small}>Participants:</Text>
                {interaction.avatars.map((avatar, ai) => (
                  <Image
                    key={ai}
                    source={avatar}
                    style={styles.participantAvatar}
                    accessibilityLabel={interaction.participants[ai]}
                  />
                ))}
              </View>
            </View>

            <MiniHeatBar values={interaction.heatValues} />

            <View style={styles.cardLegend}>
              <Text style={styles.small}>Calm</Text>
              <Text style={styles.small}>Tense</Text>
            </View>

            {expanded === index && (
              <View style={styles.summary}>
                <Text style={styles.cardTitle}>Summary</Text>
                {interaction.summary.map((s, si) => (
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
