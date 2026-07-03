import "@/global.css";
import "@/lib/nativewind-interop";
import "@/lib/fixed-font-scale";

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { AppDataProvider } from "@/store/appData";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <AppDataProvider>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="(tabs)" />
            <Stack.Screen name="professional-dashboard" />
            <Stack.Screen name="views" />
            <Stack.Screen name="editor" />
            <Stack.Screen name="reel" />
            <Stack.Screen name="reel-insights" />
          </Stack>
          <StatusBar style="dark" />
        </AppDataProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}
