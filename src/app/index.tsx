import { useRouter } from "expo-router";
import {
  Linking,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  function newGame() {
    router.navigate("/new-game");
  }

  function showTechs() {
    router.navigate("/show-techs");
  }

  function goToLinkedin(url: string) {
    Linking.openURL(url).catch((err) =>
      console.error("Erro ao abrir URL:", err)
    );
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

      <View style={styles.developedContainer}>
        <TouchableOpacity
          onPress={() =>
            goToLinkedin("https://www.linkedin.com/in/calebe-b-oliveira/")
          }
        >
          <Text style={styles.developedText}>
            Developed by
            <Text style={styles.devName}> Calebe Oliveira</Text>
          </Text>
        </TouchableOpacity>
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
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 10, height: 10 },
    textShadowRadius: 4,
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

  developedContainer: {
    position: "absolute",
    bottom: 30,
  },

  developedText: {
    color: "#ddd",
    fontWeight: 200,
    fontSize: 12,
  },

  devName: {
    color: "#05c3ff",
    fontWeight: 700,
  },
});
