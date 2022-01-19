import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import CarList from "../../Component/Utils/CarCompareUtils/CarListUtil";
import CompareCarsModal from "../../Component/Utils/CarCompareUtils/CompareCarsModalUtil";

const CarCompareScreen = (props) => {
  const [inList, setInList] = useState(true);
  const vehicle1 = useSelector((state) => state.compareCar?.vehicle1);
  const vehicle2 = useSelector((state) => state.compareCar?.vehicle2);
  useEffect(() => {
    //console.log("CAR1===>", vehicle1);
    //console.log("CAR2=====>", vehicle2);
  }, [vehicle2, vehicle1]);
  const SelectedVehicle2 = () => {
    setInList((prevState) => !prevState);
  };
  //console.log(vehicle1);
  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {inList ? (
        <CarList vehicle1={vehicle1} selected={SelectedVehicle2} />
      ) : (
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
