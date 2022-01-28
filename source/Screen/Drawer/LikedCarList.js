import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../../assets/Color";
import { CommonActions } from "@react-navigation/routers";
import AnimatedLottieView from "lottie-react-native";
import { useNavigationState } from "@react-navigation/core";
const LikedCarList = ({ navigation }) => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchLikedCar());
  // }, []);
  const likedCarList = useSelector((state) => state.likedCars.likedCarList);
  const carList = useSelector((state) => state.car.vehicleList);
  const index = useNavigationState((state) => state);
  const list = [];
  for (const likecar in likedCarList) {
    const car = carList.filter(
      (item) => item.carId == likedCarList[likecar].carId
    );
    if (car.length != 0) {
      for (const c in car) {
        list.push(car[c]);
      }
    }
  }
  useEffect(() => {
    if (index?.routes[0]?.state?.routes[0]?.key) {
      navigation.addListener("beforeRemove", (e) => {
        e.preventDefault();
        navigation.dispatch(
          CommonActions.navigate({
            name: "Home",
            key: index.routes[0].state.routes[0].key,
          })
        );
      });
    }
  }, [navigation]);

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      {list.length > 0 ? (
        <View style={{ marginTop: 50 }}>
          <View style={{ margin: 15 }}>
            <Text
              style={{
                color: "white",
                fontSize: 24,
                textAlign: "center",
                fontFamily: "bold",
              }}
            >
              Liked Cars
            </Text>
          </View>
          <FlatList
            data={list}
            keyExtractor={(_, i) => i.toString()}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  style={{}}
                  onPress={() => {
                    navigation.navigate("CarProfile", { item: item });
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
        </View>
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <AnimatedLottieView
            style={{
              alignSelf: "center",
              maxWidth: 300,
              height: 300,
            }}
            autoPlay={true}
            source={require("../../../assets/lottie-files/13525-empty.json")}
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          />
          <View>
            <Text
              style={{
                color: Color.lightgreen,
                padding: 10,
                fontSize: 20,
                fontFamily: "bold",
                textAlign: "center",
              }}
            >
              Liked Cars will be Shown here
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

export default LikedCarList;
