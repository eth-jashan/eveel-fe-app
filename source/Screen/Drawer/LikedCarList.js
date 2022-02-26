import React, { useEffect } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { useSelector } from "react-redux";
import Color from "../../../assets/Color";
import { CommonActions } from "@react-navigation/routers";
import AnimatedLottieView from "lottie-react-native";
import { useNavigationState } from "@react-navigation/core";
import styles from "./Styles/LikedCarListStyles";
const LikedCarList = ({ navigation }) => {
  //From redux

  const likedCarList = useSelector((state) => state.likedCars.likedCarList);
  const carList = useSelector((state) => state.car.vehicleList);

  //naviagtion state

  const index = useNavigationState((state) => state);

  //constants

  const list = [];

  //storing value in list

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

  /************UseEffects*********/

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
    <View style={styles.screen}>
      {/* Checking if the list is empty */}

      {list.length > 0 ? (
        <View style={styles.list}>
          <View style={styles.listContent}>
            <Text style={styles.title}>Liked Cars</Text>
          </View>

          {/*  Car List Rendering */}

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
                  <View style={styles.card}>
                    {/* Car Image Panel */}

                    <Image style={styles.image} source={{ uri: item.cover }} />

                    <View style={styles.TextBox}>
                      {/* Car Name panel */}

                      <View style={styles.carname}>
                        <Text style={styles.carNameText}>
                          {item.company} {item.name}
                        </Text>
                      </View>

                      {/* Car Price Panel */}

                      <View style={styles.carprice}>
                        <Text style={styles.carpriceText}>
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
        <View style={styles.noscreen}>
          <AnimatedLottieView
            style={styles.lottie}
            autoPlay={true}
            source={require("../../../assets/lottie-files/13525-empty.json")}
            // OR find more Lottie files @ https://lottiefiles.com/featured
            // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
          />
          <View>
            <Text
              style={styles.Sorry}
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
