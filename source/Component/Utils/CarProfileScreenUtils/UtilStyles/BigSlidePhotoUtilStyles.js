import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  screen: { width: width, height: 250 },
  image: { width: "100%", height: "100%" },
});

export default styles;
