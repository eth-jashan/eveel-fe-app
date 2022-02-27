import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";

const styles = StyleSheet.create({
  title: { margin: 15, paddingTop: 30 },
  titleText: { color: Color.white, fontFamily: "bold", fontSize: 28 },
  inputBox: {
    backgroundColor: Color.darkgrey,
    margin: 15,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
  },
  countryCode: {
    fontSize: 24,
    color: "white",
    paddingRight: 10,
  },
  input: { fontSize: 24, color: Color.white },
  desc: { marginHorizontal: 15 },
  descText: { color: "white", fontSize: 18, fontFamily: "medium" },
  ButtonBox: {
    alignSelf: "center",
    paddingTop: 100,
  },
  button: {
    width: Dimensions.get("screen").width * 0.8,
    padding: 8,
    backgroundColor: Color.darkgrey,
    flexDirection: "row",
    borderRadius: 8,
    alignSelf: "center",
    justifyContent: "space-around",
    marginVertical: 8,
  },
  buttonText: {
    color: Color.white,
    fontFamily: "bold",
    fontSize: 20,
  },
});

export default styles;
