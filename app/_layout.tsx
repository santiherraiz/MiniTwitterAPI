import { useFonts } from 'expo-font';
import { Slot } from 'expo-router';
import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ActivityIndicator, View } from 'react-native';
import "./global.css";

const queryClient = new QueryClient();

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    'Chirp-Regular': require('../assets/fonts/Chirp-Regular.ttf'),
    'Chirp-Medium': require('../assets/fonts/Chirp-Medium.ttf'),
    'Chirp-Bold': require('../assets/fonts/Chirp-Bold.ttf'),
  });

  if (!fontsLoaded && !error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <Slot />
    </QueryClientProvider>
  )
}

export default RootLayout