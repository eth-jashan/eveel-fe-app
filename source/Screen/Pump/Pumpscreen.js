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
import { useSelector } from "react-redux";
import getGoogleDirections from "../../Component/Common/GetDirection";
const pumpLocation = ({ navigation, route }) => {
  const { location } = route.params;
  //console.log("PumpScreen:", location.coords);
  const origin = {
    latitude: location.coords.latitude,
    longitude: location.coords.longitude,
  };
  const [selectedPump, setSelectedPump] = useState(null);
  const GOOGLE_MAPS_APIKEY = "AIzaSyDsDKH-37DS6ZnGY_oIi7t5YE0oAAZ-V88";
  //const GOOGLE_MAPS_APIKEY = "AIzaSyDkqyDGvoPwEuPXniKNb_JceM37MJscerE"; //for testing have to open the above one for iphone aswell

  const handleGetDirections = () => {
    getGoogleDirections(selectedPump.latitude, selectedPump.longitude, origin);
  };
  let listofPump = useSelector((state) => state.pumpStation.stationList);
  console.log(listofPump.length);
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
  ];
  const [pumpInfo, setPumpInfo] = React.useState();
  const pumpRef = React.useRef(null);
  const [select, setSelect] = React.useState(false);

  const onLocationPress = (item) => {
    setPumpInfo(item);
    //console.log("Item", item);
    pumpRef?.current?.open();
    setSelectedPump({
      latitude: item.lat,
      longitude: item.long,
    });
  };
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
  //console.log(index.routes[0].state.routes[0].key);
  useEffect(() => {
    navigation.addListener("beforeRemove", (e) => {
      e.preventDefault();
      setExit(true);
      Alert.alert(
        "Are you sure?",
        "If you leave you would be directed to Home Screen",
        [
          { text: "Stay", onPress: () => {} },
          {
            text: "Leave",
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
              tracksViewChanges={false}
              onPress={async () => await onLocationPress(item)}
              coordinate={{
                latitude: parseFloat(item.lat),
                longitude: parseFloat(item.long),
              }}
              style={{ height: 10, width: 10 }}
              icon={require("../../../assets/Images/pumpMarker.png")}
            />
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
              onPress={() =>
                navigation.navigate("PumpSearch", { origin: origin })
              }
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
        height={200}
        item={pumpInfo}
        direction={handleGetDirections}
      />
    </View>
  );
};

export default pumpLocation;
