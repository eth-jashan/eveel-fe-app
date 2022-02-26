import React from "react";
import { Dimensions, View, Text, TextInput, StyleSheet } from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Dash from "react-native-dash";
import { LinearGradient } from "expo-linear-gradient";
import { SearchBar } from "react-native-elements";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./UtilStyles/MapHeaderStyles";
import Color from "../../../../assets/Color";
const MapHeader = ({ active }) => {
  //Hookf
  const navigation = useNavigation();

  /***********Function************/

  const onPress = () => {
    navigation.navigate("PumpSearch");
  };

  /***********Rendering************/

  return (
    <Pressable style={styles.LocationBar}>
      {/* Location Panel */}
      <View style={styles.LocHeader}>
        <MaterialIcons
          name="location-on"
          size={28}
          color={Color.lightgreen}
          style={styles.IconArrange}
        />
        <Text numberOfLines={1} style={styles.Address}>
          Krishna Changa Naik Marg, Seawoods West, Sector 44A, Seawoods, Navi
          Mumbai, Maharashtra 400706
        </Text>

        <MaterialIcons
          name="tune"
          size={24}
          color={Color.lightgreen}
          style={styles.FilterIcon}
        />
      </View>

      {/* Border Panel */}

      <Dash style={styles.Dash} />

      {/* Search Panel */}

      <View style={styles.SearchBar}>
        <Ionicons name="search" size={16} color={Color.lightgreen} />
        <TextInput
          placeholderTextColor={"white"}
          placeholder="Search in locality"
          style={styles.placeholder}
        />
      </View>
    </Pressable>
  );
};

export default MapHeader;
