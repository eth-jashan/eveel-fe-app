import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../../../../assets/Color";
const styles = StyleSheet.create({
  screen: { paddingVertical: 15 },
  button: {
    borderWidth: 0.5,
    minWidth: 100,
    marginRight: 12,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: Color.lightgreen,
  },
  buttonText: { fontSize: 18, fontFamily: "semibold" },
});

export default styles;
