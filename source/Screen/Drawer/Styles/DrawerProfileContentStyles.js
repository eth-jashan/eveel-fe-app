import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../assets/Color";

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: Color.black },
  ImageView: { marginTop: 40, margin: 15, alignSelf: "center" },
  image: { width: 100, height: 100, alignSelf: "center" },
  changeAvatar: { opacity: 0.5, paddingTop: 10 },
  changeAvatarText: {
    color: "white",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "medium",
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 50,
  },
  buttonText: { fontSize: 20, color: "white", fontFamily: "bold" },
  options: { marginVertical: 20, marginHorizontal: 30 },
  option: { flexDirection: "row", justifyContent: "space-between" },
  alignSelf: { alignSelf: "center" },
  optionText: {
    fontFamily: "bold",
    color: Color.lightgreen,
    fontSize: 20,
  },
});

export default styles;
