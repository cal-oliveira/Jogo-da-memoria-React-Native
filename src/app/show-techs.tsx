import { Image, StyleSheet, View } from "react-native";

export default function ShowTechs() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.icon}
          source={require("../../assets/images/bootstrap.png")}
        />
      </View>
      <Image
        style={styles.icon}
        source={require("../../assets/images/react.png")}
      />
      <Image
        style={styles.icon}
        source={require("../../assets/images/electron.png")}
      />
      <Image
        style={styles.icon}
        source={require("../../assets/images/css.png")}
      />
      <Image
        style={styles.icon}
        source={require("../../assets/images/html.png")}
      />
      <Image
        style={styles.icon}
        source={require("../../assets/images/javascript.png")}
      />
      <Image
        style={styles.icon}
        source={require("../../assets/images/jquery.png")}
      />
      <Image
        style={styles.icon}
        source={require("../../assets/images/mongo.png")}
      />
      <Image
        style={styles.icon}
        source={require("../../assets/images/firebase.png")}
      />
      <Image
        style={styles.icon}
        source={require("../../assets/images/node.png")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121214",
    height: "100%",
  },

  icon: {
    height: 100,
  },
});
