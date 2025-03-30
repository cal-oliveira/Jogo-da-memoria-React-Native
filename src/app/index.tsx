import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { startGame } from "../scripts";

export default function HomeScreen() {
  const router = useRouter();
  const cards = startGame();

  function newGame() {
    router.navigate("/new-game");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={newGame} style={styles.newGameButton}>
        <Text style={styles.newGameText}>Novo Jogo</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    backgroundColor: "#121214",
    color: "#ddd",
  },

  newGameButton: {
    width: 352,
    height: 52,
    backgroundColor: "#F7DD43",
    alignItems: "center",
    justifyContent: "center",
  },

  newGameText: {
    color: "#09090A",
    fontSize: 16,
    fontWeight: "bold",
  },
});
