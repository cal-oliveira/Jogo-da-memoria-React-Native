import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  function toSecond() {
    console.log("clicou");
    router.navigate("/secondScreen");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>Tela Inicial</Text>
      <Button title="Ir para a Segunda Tela" onPress={() => toSecond} />
    </View>
  );
}
