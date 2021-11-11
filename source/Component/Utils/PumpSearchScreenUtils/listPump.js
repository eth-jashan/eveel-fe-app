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
import styles from "./UtilStyles/listPumpStyles";
const { width, height } = Dimensions.get("window");

const ListPump = () => {
  const navigation = useNavigation();
  const pumpList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  return (
    <View style={styles.component}>
      <FlatList
        data={pumpList}
        keyExtractor={(x) => x}
        renderItem={({ item }) => {
          return (
            <View style={styles.pumpListContainer}>
              <View style={styles.ContentBox}>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ alignSelf: "center" }}>
                    <MapView style={styles.map} />
                  </View>

                  <View style={styles.Content}>
                    <Text style={styles.PumpName}>Tata Charging Station</Text>
                    <Text numberOfLines={2} style={styles.PumpAddress}>
                      Tata motar fortune, MIDC Industrial Area, Shiravane,
                      Nerul, Navi Mumbai, Maharashtra 400614
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
                  onPress={() => navigation.navigate("PumpScreen")}
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
