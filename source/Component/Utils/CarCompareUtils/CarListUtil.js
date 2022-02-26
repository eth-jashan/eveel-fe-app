import React from "react";
import {
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Color from "../../../../assets/Color";
import { addVechile_2 } from "../../../Store/action/compareCar";
import styles from "./Styles/CarListUtilStyles";
const CarList = (props) => {
  //Hooks

  const dispatch = useDispatch();

  //from redux

  const List =
    props.vehicle1.type === "car"
      ? useSelector((state) => state.car.carList)
      : useSelector((state) => state.car.scootyList);
  const list = List.filter((item) => item.carId !== props.vehicle1.carId);

  return (
    <View style={styles.screen}>
      {/* Title panel */}

      <View style={styles.title}>
        <Text style={styles.titleText}>Select a vehicle</Text>
      </View>

      {/* List rendering panel */}

      <FlatList
        data={list}
        style={styles.mapping}
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
              {/* Card Panel */}

              <View style={styles.card}>
                {/* Car Image Panel */}

                <Image style={styles.image} source={{ uri: item.cover }} />

                {/* Car Info Panel */}

                <View style={styles.content}>
                  <View style={{ paddingBottom: 10 }}>
                    <Text style={styles.carName}>
                      {item.company} {item.name}
                    </Text>
                  </View>
                  <View style={styles.carPrice}>
                    <Text style={styles.carPriceText}>
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
  );
};

export default CarList;
