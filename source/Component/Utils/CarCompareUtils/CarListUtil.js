import React from "react";
import { FlatList, Image, View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../../../assets/Color";
import { addVechile_2 } from "../../../Store/action/compareCar";
const CarList = (props) => {
  const dispatch = useDispatch();
  const List =
    props.vehicle1.type === "car"
      ? useSelector((state) => state.car.carList)
      : useSelector((state) => state.car.scootyList);
  const list = List.filter((item) => item.carId !== props.vehicle1.carId);
  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ margin: 15 }}>
        <Text
          style={{
            color: "white",
            fontSize: 24,
            textAlign: "center",
            fontFamily: "bold",
          }}
        >
          Select a vehicle
        </Text>
      </View>
      <FlatList
        data={list}
        keyExtractor={(item) => item.carId}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{}}
              onPress={() => {
                dispatch(addVechile_2(item));
                props.selected();
              }}
            >
              <View style={{ flexDirection: "row", margin: 15 }}>
                <Image
                  style={{ width: 100, height: 100, borderRadius: 15 }}
                  source={{ uri: item.cover }}
                />
                <View style={{ padding: 15 }}>
                  <View style={{ paddingBottom: 10 }}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "bold",
                        fontSize: 22,
                      }}
                    >
                      {item.company} {item.name}
                    </Text>
                  </View>
                  <View
                    style={{
                      backgroundColor: Color.darkgreen,
                      borderRadius: 20,
                    }}
                  >
                    <Text
                      style={{
                        color: Color.lightgreen,
                        padding: 10,
                        fontSize: 14,
                        fontFamily: "medium",
                      }}
                    >
                      Starting Price @ {item.startPrice}
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </ScrollView>
  );
};

export default CarList;
