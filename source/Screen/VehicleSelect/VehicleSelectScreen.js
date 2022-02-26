import React, { useEffect, useState } from "react";
import { ColorPropType, SafeAreaView, Text, View } from "react-native";
import Color from "../../../assets/Color";
import AnimatedLottieView from "lottie-react-native";
import SelectOptionUtil from "../../Component/Utils/VehicleSelectUtils/SelectOptionUtil";
import VehicleDetail from "../../Component/Utils/VehicleSelectUtils/VehicleDetail";
import { useDispatch, useSelector } from "react-redux";
import { addOwnedCar } from "../../Store/action/ownedCar";
const VehicleSelectScreen = (props) => {
  //Hookes
  const dispatch = useDispatch();

  //Input state
  const [selectedVehicle, setSelectedVehicle] = useState();

  //From redux
  const car = useSelector((state) => state.ownedCar);

  /**********functions*********/
  const Submitted = (name, mileage) => {
    //console.log(name, mileage, selectedVehicle);
    dispatch(addOwnedCar(selectedVehicle, name, mileage));
    props.navigation.navigate("Home");
  };

  const Select = (type) => {
    setSelectedVehicle(type);
  };

  /*************render**********/
  return selectedVehicle ? (
    <VehicleDetail selected={selectedVehicle} submit={Submitted} />
  ) : (
    <SelectOptionUtil select={Select} />
  );
};

export default VehicleSelectScreen;
