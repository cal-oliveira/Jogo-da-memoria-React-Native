import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import { images } from "../scripts/images";
import { useState, useEffect, useRef } from "react";

export type CardProps = {
  id: string;
  icon: string;
  flipped: boolean;
  onPress: (id: string) => void;
  disabled?: boolean;
  matched: boolean;
};

export default function Card({
  id,
  icon,
  flipped,
  onPress,
  disabled,
  matched,
}: CardProps) {
  const [isFlipped, setIsFlipped] = useState(flipped);
  const flipAnimation = useRef(new Animated.Value(flipped ? 180 : 0)).current;

  useEffect(() => {
    Animated.timing(flipAnimation, {
      toValue: flipped ? 180 : 0,
      duration: 400,
      useNativeDriver: true,
    }).start();
  }, [flipped]);

  const showCard = () => {
    if (!disabled) {
      onPress(id);
    }
  };

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backAnimatedStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  return (
    <TouchableOpacity
      onPress={showCard}
      activeOpacity={0.7}
      disabled={disabled || matched} // Desabilita se já estiver combinada
    >
      <View style={styles.card}>
        <Animated.View style={[styles.card_front, frontAnimatedStyle]}>
          <Image style={styles.icon} source={images[icon]} />
        </Animated.View>

        <Animated.View style={[styles.card_back, backAnimatedStyle]}>
          <Text style={styles.text_card_back}>{"</>"}</Text>
        </Animated.View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 150 * 0.55,
    height: 150 * 0.55,
    position: "relative",
  },

  card_front: {
    backgroundColor: "#101c2c",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    boxShadow: "10 10 10 rgba(0,0,0, 0.45))",
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  card_back: {
    backgroundColor: "#05c3ff",
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    boxShadow: "10 10 10 rgba(0,0,0, 0.45))",
    position: "absolute",
    backfaceVisibility: "hidden",
  },

  text_card_back: {
    fontWeight: "bold",
    fontSize: 30,
    color: "#101c2c",
  },

  flip: {
    transform: "rotateY(180deg)",
  },
  icon: {
    width: "60%",
    height: "60%",
    resizeMode: "contain",
  },
});
