import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Color.black },
  lottie: {
    alignSelf: "center",
    maxWidth: 300,
    height: 300,
  },
  title: { margin: 15 },
  titleText: {
    fontSize: 20,
    fontFamily: "bold",
    color: "white",
    textAlign: "center",
  },
  inputTitle: {
    fontSize: 18,
    fontFamily: "medium",
    color: "white",
  },
  input: {
    backgroundColor: Color.darkgrey,
    padding: 20,
    marginTop: 10,
    borderRadius: 15,
    fontFamily: "bold",
    color: "white",
    fontSize: 20,
  },
  error: {
    fontSize: 18,
    fontFamily: "medium",
    color: "white",
  },
  button: {
    marginVertical: 30,
    alignItems: "center",
    width: "94%",
    borderRadius: 12,
    padding: 12,
    backgroundColor: Color.lightgreen,
    alignSelf: "center",
  },
  buttonText: {
    fontSize: 20,
    fontFamily: "bold",
    color: "black",
    textAlign: "center",
  },
});

export default styles;
