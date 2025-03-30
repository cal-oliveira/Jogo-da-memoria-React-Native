import { useRouter } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { startGame } from "../scripts";

export default function HomeScreen() {
  const router = useRouter();
  const cards = startGame();

  function newGame() {
    router.navigate("/new-game");
  }

  function showTechs() {
    router.navigate("/show-techs");
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.subContainer}>
        <Text style={styles.logoGame}>{"Jogo da Memória </>"}</Text>

        <View style={styles.buttons}>
          <TouchableOpacity onPress={newGame} style={styles.newGameButton}>
            <Text style={styles.newGameText}>Novo Jogo</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={showTechs} style={styles.showTechsButton}>
            <Text style={styles.showTechsText}>Ver Techs</Text>
          </TouchableOpacity>
        </View>
      </View>
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

  subContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    height: "40%",
  },

  buttons: {
    gap: 18,
  },

  logoGame: {
    fontSize: 38,
    fontWeight: "bold",
    color: "#ddd",
    textShadowColor: "rgba(0, 0, 0, 0.75)", // Cor da sombra
    textShadowOffset: { width: 10, height: 10 }, // Posição da sombra
    textShadowRadius: 4, // Desfoque da sombra
  },

  newGameButton: {
    width: 352,
    height: 52,
    borderRadius: 10,
    backgroundColor: "#05c3ff",
    boxShadow: "10 10 10 rgba(0,0,0, 0.45))",
    alignItems: "center",
    justifyContent: "center",
  },

  showTechsButton: {
    width: 352,
    height: 52,
    borderRadius: 10,
    backgroundColor: "transparent",
    borderColor: "#ddd",
    color: "#ddd",
    alignItems: "center",
    justifyContent: "center",
  },

  newGameText: {
    color: "#09090A",
    fontSize: 16,
    fontWeight: "bold",
  },

  showTechsText: {
    color: "#ddd",
    fontSize: 16,
    fontWeight: "bold",
  },
});
