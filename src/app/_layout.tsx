import { Stack } from "expo-router";
// Rest of the import statements
import { Roboto_900Black, useFonts } from "@expo-google-fonts/roboto";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const [loaded, error] = useFonts({
    Roboto_900Black,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <Stack>
      {/* Definir opções para a tela inicial */}
      <Stack.Screen name="index" options={{ headerShown: false }} />

      {/* Outras telas */}
      <Stack.Screen name="new-game" options={{ headerShown: false }} />
      <Stack.Screen name="show-techs" options={{ headerShown: false }} />
    </Stack>
  );
}
