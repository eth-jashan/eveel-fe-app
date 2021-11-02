import { StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("screen");
const styles = StyleSheet.create({
  DetailView: {
    overflow: "hidden",
    marginVertical: 20,
    width: width * 0.85,
    padding: 16,
    alignSelf: "center",
  },
  DetailInfoparts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  DetailsInfoP3: { flexDirection: "row", alignSelf: "center" },
  features: { flexDirection: "row" },
  IconArrange: { alignSelf: "center" },
  feaText: {
    fontFamily: "book",
    color: "#1ec0af",
    alignSelf: "center",
  },
  feaNum: {
    fontSize: 22,
    fontFamily: "light",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  ChargeText: {
    fontFamily: "book",
    color: "#1ec0af",
    alignSelf: "center",
    fontSize: 20,
  },
  ChargeDuration: {
    fontSize: 30,
    fontFamily: "light",
    alignSelf: "center",
  },
});
export default styles;
