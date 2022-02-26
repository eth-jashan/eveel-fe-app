import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";

const styles = StyleSheet.create({
  container: { margin: 15, paddingTop: 30 },
  title: { color: Color.white, fontFamily: "bold", fontSize: 28 },
  inputView: {
    backgroundColor: Color.darkgrey,
    margin: 15,
    marginHorizontal: 30,
    borderRadius: 10,
    alignContent: "center",
  },
  input: {
    fontSize: 24,
    color: Color.white,
    padding: 15,
    textAlign: "center",
  },
  desc: {
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  descText: { color: "white", fontSize: 18 },
  buttonBox: {
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
    paddingHorizontal: 10,
  },
});
export default styles;
