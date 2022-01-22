import React, { useEffect, useState } from "react";
import MapView, { Marker } from "react-native-maps";
import { CommonActions } from "@react-navigation/routers";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  FlatList,
  Animated,
  Image,
  Pressable,
  TouchableOpacity,
  Modal,
  Button,
  Alert,
  Platform,
} from "react-native";
import { mapStyle } from "../../Component/Utils/PumpScreen/mapStylesUtil";
import PumpInfoModal from "../../Component/Utils/PumpScreen/PumpInfoModelUtil";
import { Modalize } from "react-native-modalize";
import Color from "../../../assets/Color";
// import ListPump from "../component/listPump";
// import MapHeader from "../component/MapHeader";
import { AntDesign } from "@expo/vector-icons";
import Dash from "react-native-dash";
import { useNavigationState } from "@react-navigation/core";
import styles from "./PumpStyles/PumpscreenStyles";
const { width, height } = Dimensions.get("window");

import MapViewDirections from "react-native-maps-directions";
import getDirections from "react-native-google-maps-directions";
import { showLocation } from "react-native-map-link";
import { useSelector } from "react-redux";

const pumpLocation = ({ navigation, route }) => {
  const { location } = route.params;
  //console.log("PumpScreen:", location.coords);
  const origin = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
  const [selectedPump, setSelectedPump] = useState(null);
  const GOOGLE_MAPS_APIKEY =
    Platform.OS === "android"
      ? "AIzaSyDkqyDGvoPwEuPXniKNb_JceM37MJscerE"
      : "AIzaSyDsDKH-37DS6ZnGY_oIi7t5YE0oAAZ-V88";

  const handleGetDirections = () => {
    const data = {
      source: origin,
      destination: {
        latitude: parseFloat(selectedPump.latitude),
        longitude: parseFloat(selectedPump.longitude),
      },
      params: [
        {
          key: "travelmode",
          value: "driving", // may be "walking", "bicycling" or "transit" as well
        },
        {
          key: "dir_action",
          value: "navigate", // this instantly initializes navigation using the given travel mode
        },
      ],
      // waypoints: [
      //   {
      //     latitude: -33.8600025,
      //     longitude: 18.697452
      //   },
      //   {
      //     latitude: -33.8600026,
      //     longitude: 18.697453
      //   },
      //      {
      //     latitude: -33.8600036,
      //     longitude: 18.697493
      //   }
      // ]
    };

    getDirections(data);
  };
  const listofPump = useSelector((state) => state.pumpStation.stationList);
  console.log("LISTOFPUMP", listofPump);
  // const listofPump = [
  //   { name: "Volttic Charging Station", lat: "19.00013", long: "73.10938" },
  //   { name: "ChargeGrid", lat: "19.07434", long: "72.9869988" },
  //   { name: "XYZ Station", lat: "19.08551", long: "72.88764" },
  // ];

  const listOfCity = [
    { name: "Delhi", lat: "28.7041", long: "77.1025" },
    { name: "Mumbai", lat: "19.0760", long: "72.8777" },
    { name: "Bangalore", lat: "12.9716", long: "77.5946" },
    { name: "Hyderabad", lat: "17.3850", long: "78.4867" },
    { name: "Chennai", lat: "19.08551", long: "72.88764" },
  ];

  const modalizeRef = React.useRef(null);
  const [pumpInfo, setPumpInfo] = React.useState();
  const pumpRef = React.useRef(null);
  const [select, setSelect] = React.useState(false);

  const onLocationPress = (item) => {
    setPumpInfo(item);
    console.log("Item", item);
    pumpRef?.current?.open();
    setSelectedPump({
      latitude: item.lat,
      longitude: item.long,
    });
  };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };
  const onLocationCity = async (item, index) => {
    await setSelect(index);
    setPumpInfo(item);
  };

  const [exit, setExit] = useState(false);
  const index = useNavigationState((state) => state);
  // console.log(
  //   "PumpScreen to Homescreen state====>",
  //   index.routes[0].state.routes
  // );
  useEffect(() => {
    console.log("Selected", selectedPump);
    console.log("Origin", origin);
  }, [selectedPump]);
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      setExit(true);
      Alert.alert(
        "Are you sure?",
        "If you leave you would be directed to Home Screen",
        [
          { text: "Stay", style: "cancel", onPress: () => {} },
          {
            text: "Leave",
            style: "destructive",
            // If the user confirmed, then we dispatch the action we blocked earlier
            // This will continue the action that had triggered the removal of the screen
            onPress: () => {
              navigation.dispatch(
                CommonActions.navigate({
                  name: "Home",
                  key: index.routes[0].state.routes[0].key,
                })
              );
            },
          },
        ]
      );
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <MapView
        userInterfaceStyle={"dark"}
        customMapStyle={mapStyle}
        region={{
          latitude: pumpInfo ? parseFloat(pumpInfo.lat) : origin.latitude,
          longitude: pumpInfo ? parseFloat(pumpInfo.long) : origin.longitude,
          latitudeDelta: 0.422,
          longitudeDelta: 0.421,
        }}
        style={styles.ScreenFuller}
      >
        {listofPump.map((item, i) => {
          return (
            <Marker
              key={i}
              onPress={async () => await onLocationPress(item)}
              coordinate={{
                latitude: parseFloat(item.lat),
                longitude: parseFloat(item.long),
              }}
            >
              <View style={styles.ImageView}>
                <Image
                  resizeMode="contain"
                  source={require("../../../assets/Images/map-pointer-multi.png")}
                  style={styles.ScreenFuller}
                />
              </View>
            </Marker>
          );
        })}
        {selectedPump && (
          <>
            <Marker
              onPress={async () => await onLocationPress(item)}
              coordinate={origin}
            >
              <View style={{ width: 30, height: 30 }}>
                <Image
                  resizeMode="contain"
                  source={require("../../../assets/Images/top-UberX.png")}
                  style={styles.ScreenFuller}
                />
              </View>
            </Marker>
            <MapViewDirections
              origin={origin}
              destination={{
                latitude: parseFloat(selectedPump.latitude),
                longitude: parseFloat(selectedPump.longitude),
              }}
              apikey={GOOGLE_MAPS_APIKEY}
              strokeWidth={3}
              strokeColor={Color.lightgreen}
            />
          </>
        )}
      </MapView>
      <View style={styles.TabArea}>
        <View style={styles.locationText}>
          <Text numberOfLines={1} style={styles.address}>
            Krishna Changa Naik Marg, Seawoods West, Sector 44A, Seawoods, Navi
            Mumbai, Maharashtra 400706
          </Text>
          <View style={styles.icon}>
            <AntDesign
              onPress={() => navigation.navigate("PumpSearch")}
              name="search1"
              size={24}
              color={Color.white}
            />
          </View>
        </View>
        <View style={{ width: "100%" }}>
          <Text style={styles.menuTitle}>Famous location search</Text>
          <FlatList
            horizontal
            data={listOfCity}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(x) => x.name}
            renderItem={({ item, index }) => {
              return (
                <Pressable
                  onPress={() => onLocationCity(item, index)}
                  style={[
                    {
                      marginLeft: index === 0 ? 8 : 0,
                      backgroundColor:
                        index === select ? Color.lightgreen : null,
                    },
                    styles.options,
                  ]}
                >
                  <Text
                    style={[
                      {
                        color:
                          index === select ? Color.black : Color.lightgreen,
                      },
                      styles.OptionText,
                    ]}
                  >
                    {item.name}
                  </Text>
                </Pressable>
              );
            }}
          />
        </View>
      </View>
      <PumpInfoModal
        modalRef={pumpRef}
        height={280}
        item={pumpInfo}
        direction={handleGetDirections}
      />
    </View>
  );
};

export default pumpLocation;
