import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../assets/Color";

const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  screen: { height: height, width: width, backgroundColor: "black" },
  carlist: {
    height: height,
    width: width,
  },
  carAnimate: { width: 315, height: 150, alignSelf: "center", top: 75 },
  car: { width: "100%", height: "100%" },
  button: {
    backgroundColor: Color.lightgreen,
    width: "90%",
    borderRadius: 12,
    alignSelf: "center",
    position: "absolute",
    bottom: 50,
  },
  buttonText: {
    fontSize: 18,
    color: Color.darkgreen,
    padding: 8,
    alignSelf: "center",
    fontFamily: "semibold",
  },
});

export default styles;
