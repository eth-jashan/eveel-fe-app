import { StyleSheet, Dimensions } from "react-native";
import Color from "../../../../assets/Color";

const styles = StyleSheet.create({
  ScreenFuller: { height: "100%", width: "100%" },
  container: {
    flex: 1,
  },
  centeredview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: Color.black,
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: Color.white,
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: Color.white,
    marginBottom: 15,
    textAlign: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("screen").height,
  },
  ImageView: { width: 20, height: 20 },
  TabArea: {
    width: "100%",
    backgroundColor: "black",
    padding: 14,
    position: "absolute",
    bottom: 0,
  },
  locationText: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  address: {
    color: Color.white,
    width: "80%",
    fontFamily: "medium",
    fontSize: 18,
    alignSelf: "center",
  },
  icon: { padding: 6, borderRadius: 20, backgroundColor: "#2a2c33" },
  menuTitle: { fontFamily: "book", color: "white" },
  options: {
    marginTop: 6,
    borderWidth: 0.5,
    minWidth: 100,
    marginRight: 8,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    borderColor: Color.lightgreen,
  },
  OptionText: { fontSize: 16, fontFamily: "book" },
});

export default styles;
