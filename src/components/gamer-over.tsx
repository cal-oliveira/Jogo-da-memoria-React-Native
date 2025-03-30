import { useRouter } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function GameOver() {
  const router = useRouter();

  function newGame() {
    router.navigate("/");
  }

  return (
    <View style={styles.container}>
      <View style={styles.message}>
        <Text style={styles.textMessageGameOver}>Fim de Jogo</Text>

        <TouchableOpacity onPress={newGame} style={styles.newGameButton}>
          <Text style={styles.textMessage}>Novo Jogo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("screen").height,
    width: Dimensions.get("screen").width,
    backgroundColor: "rgba(0,0,0,0.6)",
    marginTop: -170,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center",
  },

  message: {
    width: 352,
    height: 208,
    backgroundColor: "#18181B",
    boxShadow: "10 10 10 rgba(0,0,0, 0.45))",
    borderRadius: 20,

    alignItems: "center",
    justifyContent: "space-around",
  },

  newGameButton: {
    width: 310,
    height: 52,
    borderRadius: 10,
    backgroundColor: "#05c3ff",
    boxShadow: "10 10 10 rgba(0,0,0, 0.45))",
    alignItems: "center",
    justifyContent: "center",
  },

  textMessageGameOver: {
    color: "#ddd",
    fontSize: 28,
    fontWeight: "bold",
  },

  textMessage: {
    color: "#ddd",
    fontSize: 16,
    fontWeight: "bold",
  },
});
