import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";

const styles = StyleSheet.create({
  screen: {
    height: Dimensions.get("window").height * 0.75,
    backgroundColor: Color.black,
    padding: 10,
  },
  firstline: {
    marginTop: 16,
    fontSize: 20,
    fontFamily: "header",
    color: Color.lightgreen,
    alignSelf: "center",
  },
  secondLine: { fontFamily: "medium", fontSize: 24 },
});

export default styles;
