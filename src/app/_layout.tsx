import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Poppins_400Regular, Poppins_600SemiBold } from '@expo-google-fonts/poppins';
import { Raleway_400Regular, Raleway_600SemiBold, Raleway_700Bold } from '@expo-google-fonts/raleway';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';

import { Colors } from '@/constants/theme';
import { useSessionStore } from '@/store/session-store';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
    Raleway_400Regular,
    Raleway_600SemiBold,
    Raleway_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold,
  });
  const [dataLoaded, setDataLoaded] = useState(false);
  const [dataError, setDataError] = useState<Error | null>(null);
  const ready = (fontsLoaded || fontError !== null) && (dataLoaded || dataError !== null);

  useEffect(() => {
    useSessionStore
      .getState()
      .hydrate()
      .then(() => setDataLoaded(true), setDataError);
  }, []);

  useEffect(() => {
    if (ready) SplashScreen.hideAsync();
  }, [ready]);

  // Without the database nothing can be saved, so surface the error instead of carrying on.
  if (dataError) throw dataError;
  if (!ready) return null;

  return (
    <>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: Colors.mist } }}>
        <Stack.Screen name="index" options={{ animation: 'fade' }} />
        <Stack.Screen name="onboarding" options={{ animation: 'fade' }} />
        <Stack.Screen name="(tabs)" options={{ animation: 'fade' }} />
      </Stack>
    </>
  );
}
