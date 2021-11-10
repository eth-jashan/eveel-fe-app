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

// import MapViewDirections from 'react-native-maps-directions';
// import getDirections from 'react-native-google-maps-directions'
// import { showLocation } from 'react-native-map-link'
const pumpLocation = ({ navigation }) => {
  //  const handleGetDirections = (lat, long) => {
  //     const data = {
  //       source:{latitude:19.0333, longitude:73.0216},
  //       destination: {
  //         latitude: parseFloat(lat),
  //         longitude: parseFloat(long)
  //       },
  //       params: [
  //         {
  //           key: "travelmode",
  //           value: "driving"        // may be "walking", "bicycling" or "transit" as well
  //         },
  //         {
  //           key: "dir_action",
  //           value: "navigate"       // this instantly initializes navigation using the given travel mode
  //         }
  //       ],
  //       // waypoints: [
  //       //   {
  //       //     latitude: -33.8600025,
  //       //     longitude: 18.697452
  //       //   },
  //       //   {
  //       //     latitude: -33.8600026,
  //       //     longitude: 18.697453
  //       //   },
  //       //      {
  //       //     latitude: -33.8600036,
  //       //     longitude: 18.697493
  //       //   }
  //       // ]
  //     }

  //     getDirections(data)
  //   }
  const listofPump = [
    { name: "Volttic Charging Station", lat: "19.00013", long: "73.10938" },
    { name: "ChargeGrid", lat: "19.07434", long: "72.9869988" },
    { name: "XYZ Station", lat: "19.08551", long: "72.88764" },
  ];

  const listOfCity = [
    { name: "Delhi", lat: "28.7041", long: "77.1025" },
    { name: "Mumbai", lat: "19.0760", long: "72.8777" },
    { name: "Bangalore", lat: "12.9716", long: "77.5946" },
    { name: "Hyderabad", lat: "17.3850", long: "78.4867" },
    { name: "Chennai", lat: "19.08551", long: "72.88764" },
  ];

  const modalizeRef = React.useRef(null);
  const [pumpInfo, setPumpInfo] = React.useState({
    name: "ChargeGrid",
    lat: "19.07434",
    long: "72.9869988",
  });
  const pumpRef = React.useRef(null);
  const [select, setSelect] = React.useState(false);

  const onLocationPress = (item) => {
    console.log("mappppp", item);
    setPumpInfo(item);
    pumpRef?.current?.open();
  };

  const onLocationCity = (item, index) => {
    setSelect(index);
    setPumpInfo(item);
  };

  const [exit, setExit] = useState(false);
  const index = useNavigationState((state) => state);
  // console.log(
  //   "PumpScreen to Homescreen state====>",
  //   index.routes[0].state.routes
  // );

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
        customMapStyle={mapStyle}
        region={{
          latitude: parseFloat(pumpInfo.lat),
          longitude: parseFloat(pumpInfo.long),
          latitudeDelta: 0.422,
          longitudeDelta: 0.421,
        }}
        style={styles.ScreenFuller}
      >
        {listofPump.map((item, i) => {
          return (
            <Marker
              key={i}
              onPress={() => onLocationPress(item)}
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
      <PumpInfoModal modalRef={pumpRef} height={250} item={pumpInfo} />
    </View>
  );
};

export default pumpLocation;
