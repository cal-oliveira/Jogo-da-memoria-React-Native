import { Stack } from "expo-router";
import { StatusBar } from "react-native";

export default function Layout() {
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
