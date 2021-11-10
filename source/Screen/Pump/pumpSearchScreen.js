import BottomSheet, { TouchableWithoutFeedback } from "@gorhom/bottom-sheet";
import React, { useMemo, useRef } from "react";
import { Text } from "react-native";
import { Dimensions, View, StyleSheet } from "react-native";
import { Modalize } from "react-native-modalize";
import { SafeAreaView } from "react-native-safe-area-context";
//import CustomBackground from "../component/customBackground";
import ListPump from "../../Component/Utils/PumpSearchScreenUtils/listPump";
import MapHeader from "../../Component/Utils/PumpSearchScreenUtils/MapHeader";
//import PumpMapView from "../component/PumpMapView";
import styles from "./PumpStyles/PumpSearchScreenStyles";
const PumpSearchScreen = () => {
  const bottomSheetRef = useRef(null);
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);

  return (
    <SafeAreaView style={styles.screens}>
      <MapHeader />
      <ListPump />
    </SafeAreaView>
  );
};

export default PumpSearchScreen;
