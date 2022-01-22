import React from "react";
import {
  View,
  FlatList,
  Text,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MapView from "react-native-maps";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import getGoogleDirections from "../../Common/GetDirection";
import styles from "./UtilStyles/listPumpStyles";
import { useSelector } from "react-redux";
const { width, height } = Dimensions.get("window");

const ListPump = (props) => {
  const navigation = useNavigation();
  const pumpList = useSelector((state) => state.pumpStation.stationList);
  console.log(props);
  return (
    <View style={styles.component}>
      <FlatList
        data={pumpList}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.pumpListContainer}>
              <View style={styles.ContentBox}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ alignSelf: "center" }}>
                    <MapView style={styles.map} />
                  </View>

                  <View style={styles.Content}>
                    <Text style={styles.PumpName}>{item.station}</Text>
                    <Text numberOfLines={2} style={styles.PumpAddress}>
                      {item.address}
                    </Text>
                  </View>
                </View>
                <AntDesign
                  name="infocirlceo"
                  size={24}
                  color={Color.white}
                  style={styles.IconArrange}
                />
              </View>

              <View style={styles.NavigationButtonView}>
                <TouchableOpacity
                  onPress={() => {
                    console.log("Hello")
                    getGoogleDirections(item.lat, item.long, props.origin);
                  }}
                  style={styles.NavButton}
                >
                  <View
                    style={{
                      width: "80%",
                      alignSelf: "center",
                      flexDirection: "row",
                      justifyContent: "center",
                    }}
                  >
                    <Ionicons
                      name="ios-navigate-circle"
                      size={18}
                      style={styles.IconArrange}
                      color={Color.black}
                    />
                    <Text style={styles.NavButtonText}>12 kms away</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ListPump;
