import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import CarList from "../../Component/Utils/CarCompareUtils/CarListUtil";
import CompareCarsModal from "../../Component/Utils/CarCompareUtils/CompareCarsModalUtil";
import styles from "./HomeStyles/CarProfileScreenStyles";

const CarCompareScreen = (props) => {
  //From Redux

  const vehicle1 = useSelector((state) => state.compareCar?.vehicle1);
  const vehicle2 = useSelector((state) => state.compareCar?.vehicle2);

  //Validarion State

  const [inList, setInList] = useState(true);

  /**********functions*********/

  const SelectedVehicle2 = () => {
    setInList((prevState) => !prevState);
  };

  /*********rendering**********/

  return (
    <View style={styles.screen}>
      {/* Car List Panel Selection of second car */}

      {inList ? (
        <CarList vehicle1={vehicle1} selected={SelectedVehicle2} />
      ) : (
        //Comparing the car panel

        <CompareCarsModal
          vehicle1={vehicle1}
          vehicle2={vehicle2}
          selected={SelectedVehicle2}
        />
      )}
    </View>
  );
};

export default CarCompareScreen;
