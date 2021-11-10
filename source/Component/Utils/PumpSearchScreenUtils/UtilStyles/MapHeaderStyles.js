import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../../assets/Color";
const styles = StyleSheet.create({
  LocationBar: {
    width: Dimensions.get("window").width,
    padding: 16,
    backgroundColor: Color.black,
    alignSelf: "center",
  },
  LocHeader: { alignSelf: "center", flexDirection: "row" },
  IconArrange: { alignSelf: "center" },
  Address: {
    color: Color.white,
    width: "80%",
    fontFamily: "book",
    fontSize: 14,
    marginLeft: 8,
    alignSelf: "center",
  },
  FilterIcon: { alignSelf: "center", marginLeft: 10 },
  Dash: {
    backgroundColor: Color.white,
    width: "80%",
    height: 1,
    alignSelf: "center",
  },
  SearchBar: {
    height: 40,
    width: "90%",
    backgroundColor: Color.darkgrey,
    padding: 12,
    borderRadius: 10,
    alignSelf: "center",
    marginTop: 12,
    flexDirection: "row",
  },
  placeholder: { fontFamily: "light", width: "90%", marginLeft: 12 },
});

export default styles;
