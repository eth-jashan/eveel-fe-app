import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { Ionicons } from "@expo/vector-icons";
import styles from "./UtilStyles/PumpInfoModelUtilStyles";
const PumpInfoModal = ({ height, modalRef, item, direction }) => {
  //constants

  const address = item?.address ? item?.address : "";
  return (
    <Modalize modalStyle={styles.modal} modalHeight={height} ref={modalRef}>
      {/* Content Panel */}

      <View style={styles.styleUp}>
        <View style={styles.styleDown}>
          {/* Eveels Logo */}

          <View style={styles.styleLeft}>
            <Image
              resizeMode="contain"
              source={require("../../../../assets/Images/map-pointer-multi.png")}
              style={styles.styleRight}
            />
          </View>

          {/* Station Panel */}

          <View style={styles.pumpstyle}>
            <Text numberOfLines={1} style={styles.pumpModal}>
              {item?.station}
            </Text>
            <Text style={styles.styling}>
              {address.slice(0, 50)}
              {address.length > 75 ? "..." : ""}
            </Text>
          </View>
        </View>

        {/* Go TO location Panel */}

        <TouchableOpacity
          style={styles.fontStyle}
          onPress={() => {
            //console.log("hello");
            direction();
          }}
        >
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

export default PumpInfoModal;
