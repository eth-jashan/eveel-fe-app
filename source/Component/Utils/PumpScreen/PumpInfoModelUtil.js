import React from "react";
import { View, Image, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Modalize } from "react-native-modalize";
import { Ionicons } from "@expo/vector-icons";

const PumpInfoModal = ({ height, modalRef, item }) => {
  return (
    <Modalize
      modalStyle={styles.modalStyle}
      modalHeight={height}
      ref={modalRef}
    >
      <View style={styles.styleUp}>
        <View style={styles.styleDown}>
          <View style={styles.styleLeft}>
            <Image
              resizeMode="contain"
              source={require("../../../../assets/Images/map-pointer-multi.png")}
              style={styles.styleRight}
            />
          </View>
          <View style={styles.pumpstyle}>
            <Text style={styles.pumpModal}>Tata Charging Station</Text>
            <Text style={styles.styling}>
              Tata motar fortune, MIDC Industrial Area, Shiravane, Nerul, Navi
              Mumbai, Maharashtra 400614
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.fontStyle}>
          <View style={styles.infoStyle}>
            <Ionicons
              name="ios-navigate-circle"
              size={18}
              style={styles.infoSheet}
              color="black"
            />
            <Text style={styles.lastStyle}>12 kms away</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modalize>
  );
};
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
    marginLeft: 22,
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

export default PumpInfoModal;
