import React from "react";
import { View, TouchableOpacity, Dimensions } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import * as Cars from "../../../Store/action/likedCars";
import Color from "../../../../assets/Color";
const Header = (props) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: Dimensions.get("screen").width * 0.9,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "space-between",
        margin: 25,
      }}
    >
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Ionicons name="arrow-back" color={Color.white} size={25} />
      </TouchableOpacity>
      <TouchableOpacity
        style={{ marginTop: 10 }}
        onPress={async () => {
          props.changeState();
          if (!props.likedCar) {
            await dispatch(Cars.addLikedCar(props.carId));
          } else {
            await dispatch(Cars.dislikedCar(props.carId));
            await dispatch(Cars.fetchLikedCar());
          }
        }}
      >
        <AntDesign
          name={props.likedCar ? "heart" : "hearto"}
          size={24}
          color={props.likedCar ? Color.lightgreen : "white"}
          style={{
            backgroundColor: Color.darkgrey,
            padding: 8,
            borderRadius: 20,
            alignSelf: "center",
            overflow: "hidden",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
