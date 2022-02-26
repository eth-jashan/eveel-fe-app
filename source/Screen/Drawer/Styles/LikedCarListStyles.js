import React from "react";
import { StyleSheet } from "react-native";
import Color from "../../../../assets/Color";

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "black" },
  list: { marginTop: 50 },
  listContent: { margin: 15 },
  title: {
    color: "white",
    fontSize: 24,
    textAlign: "center",
    fontFamily: "bold",
  },
  card: { flexDirection: "row", margin: 15 },
  image: { width: 100, height: 100, borderRadius: 15 },
  TextBox: { padding: 15 },
  carname: { paddingBottom: 10 },
  carNameText: {
    color: "white",
    fontFamily: "bold",
    fontSize: 22,
  },
  carprice: {
    backgroundColor: Color.darkgreen,
    borderRadius: 20,
  },
  carpriceText: {
    color: Color.lightgreen,
    padding: 10,
    fontSize: 14,
    fontFamily: "medium",
  },
  noscreen: { flex: 1, justifyContent: "center" },
  lottie: {
    alignSelf: "center",
    maxWidth: 300,
    height: 300,
  },
  Sorry: {
    color: Color.lightgreen,
    padding: 10,
    fontSize: 20,
    fontFamily: "bold",
    textAlign: "center",
  },
});

export default styles;
