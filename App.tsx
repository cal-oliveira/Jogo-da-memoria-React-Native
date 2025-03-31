import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.newGameButton}>
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
