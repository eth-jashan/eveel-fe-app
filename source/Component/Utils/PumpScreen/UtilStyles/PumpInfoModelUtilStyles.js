import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  modal: { backgroundColor: "black" },
  styleUp: {
    padding: 16,
  },
  styleDown: {
    flexDirection: "row",
    alignSelf: "center",
  },
  styleLeft: {
    width: 50,
    height: 50,
    alignSelf: "center",
  },
  styleRight: {
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  pumpstyle: {
    marginVertical:10,
    marginHorizontal: 18,
  },

  pumpModal: {
    fontSize: 22,
    fontFamily: "medium",
    color: "white",
  },
  styling: {
    fontFamily: "light",
    width: 200,
    fontSize: 16,
    color: "white",
  },
  fontStyle: {
    width: "80%",
    marginTop: 14,
    backgroundColor: "#1ec0af",
    padding: 8,
    alignSelf: "center",
    borderRadius: 20,
  },
  infoStyle: {
    width: "80%",
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  infoSheet: {
    alignSelf: "center",
  },
  lastStyle: {
    fontSize: 16,
    fontFamily: "book",
    alignSelf: "center",
    marginLeft: 14,
   
  },
});

export default styles;
