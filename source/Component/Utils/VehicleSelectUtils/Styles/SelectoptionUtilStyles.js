import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Color.black },
  title: { flex: 1, backgroundColor: Color.black },
  lottie: {
    alignSelf: "center",
    maxWidth: 300,
    height: 300,
  },
  or: { margin: 15 },
  orText: {
    fontFamily: "bold",
    color: Color.lightgreen,
    fontSize: 24,
    textAlign: "center",
  },
});

export default styles;
