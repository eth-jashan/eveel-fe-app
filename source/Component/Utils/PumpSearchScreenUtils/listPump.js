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

const { width, height } = Dimensions.get("window");

const ListPump = () => {
  const navigation = useNavigation();
  const pumpList = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];

  // for( let i=0; i<=20; i++){

  //     pumpList.push(i.toString())

  // }

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
                  color="white"
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
                      color="black"
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
const styles = StyleSheet.create({
  component: { flex: 1 },
  pumpListContainer: {
    marginVertical: 6,
    width: width * 0.98,
    borderRadius: 6,
    padding: 12,
    backgroundColor: "#282629",
    alignSelf: "center",
  },
  ContentBox: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  map: { height: 60, width: 60, borderRadius: 10 },
  Content: {
    marginLeft: 14,
    alignSelf: "center",
    width: "60%",
  },
  PumpName: {
    fontSize: 18,
    fontFamily: "medium",
    color: "white",
  },
  PumpAddress: {
    fontFamily: "light",
    fontSize: 14,
    color: "white",
  },
  IconArrange: { alignSelf: "center" },
  NavigationButtonView: { width: "100%", marginTop: 12 },
  NavButton: {
    width: "60%",
    backgroundColor: "#1ec0af",
    padding: 8,
    alignSelf: "center",
    borderRadius: 20,
  },
  NavButtonText: {
    fontSize: 16,
    fontFamily: "book",
    alignSelf: "center",
    marginLeft: 14,
  },
});

export default ListPump;
