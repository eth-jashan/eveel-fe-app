import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width * 0.8,
    alignSelf: "center",
    bottom: 36,
    padding: 16,
    backgroundColor: Color.darkgrey,
    borderRadius: 14,
  },
  image: { width: "100%", height: "100%", borderWidth: 0.7 },
});

export default styles;
