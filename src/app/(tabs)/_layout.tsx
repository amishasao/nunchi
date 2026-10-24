import { Tabs } from 'expo-router/js-tabs';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { BottomNav } from '@/components/bottom-nav';
import { Colors, MaxContentWidth } from '@/constants/theme';

export default function TabsLayout() {
  return (
    <View style={styles.page}>
      <SafeAreaView edges={['top']} style={styles.app}>
        <Tabs
          tabBar={() => <BottomNav />}
          screenOptions={{ headerShown: false, sceneStyle: { backgroundColor: Colors.white } }}>
          <Tabs.Screen name="home" />
          <Tabs.Screen name="heatmap/index" />
          <Tabs.Screen name="heatmap/live" />
          <Tabs.Screen name="activity" />
          <Tabs.Screen name="profile" />
          <Tabs.Screen name="rate" />
        </Tabs>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  // On tablets and the web the app stays phone-width, like the prototype.
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
    overflow: 'hidden',
  },
});
