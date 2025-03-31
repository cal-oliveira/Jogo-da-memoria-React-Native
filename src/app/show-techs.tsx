import { Image, ScrollView, StyleSheet, View, Text } from "react-native";

export default function ShowTechs() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/react.png")}
          />

          <View style={styles.textAling}>
            <Text style={styles.techViewText}>React</Text>
          </View>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/html.png")}
          />

          <View style={styles.textAling}>
            <Text style={styles.techViewText}>HTML</Text>
          </View>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/css.png")}
          />

          <View style={styles.textAling}>
            <Text style={styles.techViewText}>CSS</Text>
          </View>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/javascript.png")}
          />

          <View style={styles.textAling}>
            <Text style={styles.techViewText}>JavaScript</Text>
          </View>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/bootstrap.png")}
          />

          <View style={styles.textAling}>
            <Text style={styles.techViewText}>Bootstrap</Text>
          </View>
        </View>

        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/electron.png")}
          />
          <View style={styles.textAling}>
            <Text style={styles.techViewText}>Electron</Text>
          </View>
        </View>

        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/jquery.png")}
          />
          <View style={styles.textAling}>
            <Text style={styles.techViewText}>Jquery</Text>
          </View>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/mongo.png")}
          />
          <View style={styles.textAling}>
            <Text style={styles.techViewText}>Mongo</Text>
          </View>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/firebase.png")}
          />
          <View style={styles.textAling}>
            <Text style={styles.techViewText}>Firebase</Text>
          </View>
        </View>
        <View style={styles.techView}>
          <Image
            style={styles.icon}
            source={require("../../assets/images/node.png")}
          />
          <View style={styles.textAling}>
            <Text style={styles.techViewText}>Node</Text>
          </View>
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
    width: "80%",
    backgroundColor: "#05c3ff",
    marginBottom: 5,
    marginLeft: 10,
    paddingLeft: 10,
    borderRadius: 10,
  },

  textAling: {
    width: 90,
  },

  techViewText: {
    color: "#ddd",
    fontSize: 16,
    textAlign: "left",
    fontWeight: "bold",
  },

  icon: {
    height: 100,
  },
});
