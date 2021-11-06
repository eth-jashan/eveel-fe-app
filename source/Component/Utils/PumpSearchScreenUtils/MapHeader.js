import React from "react";
import { Dimensions, View, Text, TextInput,StyleSheet } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Dash from "react-native-dash";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "react-native-elements";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

const MapHeader = ({ active }) => {
  const navigation = useNavigation();
  const onPress = () => {
    navigation.navigate("PumpSearch");
  };

  return (
    <Pressable style={styles.LocationBar}>
      <View style={styles.LocHeader}>
        <MaterialIcons
          name="location-on"
          size={28}
          color="#1ec0af"
          style={styles.IconArrange}
        />
        <Text numberOfLines={1} style={styles.Address}>
          Krishna Changa Naik Marg, Seawoods West, Sector 44A, Seawoods, Navi
          Mumbai, Maharashtra 400706
        </Text>

        <MaterialIcons
          name="tune"
          size={24}
          color="#1ec0af"
          style={styles.FilterIcon}
        />
      </View>

      <Dash style={styles.Dash} />

      <View style={styles.SearchBar}>
        <Ionicons name="search" size={16} color="#1ec0af" />
        <TextInput
          placeholderTextColor={"white"}
          placeholder="Search in locality"
          style={styles.placeholder}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
    LocationBar: {
      width: Dimensions.get("window").width,
      padding: 16,
      backgroundColor: "black",
      alignSelf: "center",
    },
    LocHeader: { alignSelf: "center", flexDirection: "row" },
    IconArrange: { alignSelf: "center" },
    Address: {
      color: "white",
      width: "80%",
      fontFamily: "book",
      fontSize: 14,
      marginLeft: 8,
      alignSelf: "center",
    },
    FilterIcon: { alignSelf: "center", marginLeft: 10 },
    Dash: {
      backgroundColor: "white",
      width: "80%",
      height: 1,
      alignSelf: "center",
    },
    SearchBar: {
      height: 40,
      width: "90%",
      backgroundColor: "#282629",
      padding: 12,
      borderRadius: 10,
      alignSelf: "center",
      marginTop: 12,
      flexDirection: "row",
    },
    placeholder: { fontFamily: "light", width: "90%", marginLeft: 12 },
  });
  

export default MapHeader;
