import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  component: { flex: 1 },
  pumpListContainer: {
    marginVertical: 6,
    width: width * 0.98,
    borderRadius: 6,
    padding: 12,
    backgroundColor: Color.darkgrey,
    alignSelf: "center",
  },
  ContentBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  map: { height: 60, width: 60, borderRadius: 10 },
  Content: {
    marginLeft: 14,
    alignSelf: "center",
    width: "60%",
  },
  PumpName: {
    fontSize: 18,
    fontFamily: "medium",
    color: Color.white,
  },
  PumpAddress: {
    fontFamily: "light",
    fontSize: 14,
    color: Color.white,
  },
  IconArrange: { alignSelf: "center" },
  NavigationButtonView: { width: "100%", marginTop: 12 },
  NavButton: {
    width: "60%",
    backgroundColor: Color.lightgreen,
    padding: 8,
    alignSelf: "center",
    borderRadius: 20,
  },
  NavButtonText: {
    fontSize: 16,
    fontFamily: "book",
    alignSelf: "center",
    marginLeft: 14,
  },
});

export default styles;
