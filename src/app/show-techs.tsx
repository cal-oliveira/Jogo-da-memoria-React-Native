import { Image, ScrollView, StyleSheet, View, Text } from "react-native";

export default function ShowTechs() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/bootstrap.png")}
          />

          <Text style={styles.techViewText}>Bootstrap</Text>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/react.png")}
          />

          <Text style={styles.techViewText}>React</Text>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/electron.png")}
          />

          <Text style={styles.techViewText}>Electron</Text>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/css.png")}
          />

          <Text style={styles.techViewText}>CSS</Text>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/html.png")}
          />

          <Text style={styles.techViewText}>HTML</Text>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/javascript.png")}
          />

          <Text style={styles.techViewText}>JavaScript</Text>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/jquery.png")}
          />

          <Text style={styles.techViewText}>Jquery</Text>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/mongo.png")}
          />

          <Text style={styles.techViewText}>Mongo</Text>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/firebase.png")}
          />

          <Text style={styles.techViewText}>Firebase</Text>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/node.png")}
          />

          <Text style={styles.techViewText}>Node</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121214",
    height: "100%",
    paddingTop: 50,
    paddingBottom: 50,
  },

  techView: {
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    width: "60%",
  },

  techViewText: {
    color: "#ddd",
    fontSize: 16,
    textAlign: "left",
  },

  icon: {
    height: 100,
  },
});
