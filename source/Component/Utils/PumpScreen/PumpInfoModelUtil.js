import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Modalize } from "react-native-modalize";
import { Ionicons } from "@expo/vector-icons";
import styles from "./UtilStyles/PumpInfoModelUtilStyles";
const PumpInfoModal = ({ height, modalRef, item, direction }) => {
  return (
    <Modalize modalStyle={styles.modal} modalHeight={height} ref={modalRef}>
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
            <Text numberOfLines={2} style={styles.pumpModal}>
              {item?.station}
            </Text>
            <Text style={styles.styling}>{item?.address}</Text>
          </View>
        </View>

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
