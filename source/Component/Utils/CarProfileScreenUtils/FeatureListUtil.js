import React from "react";
import { View, FlatList, Text } from "react-native";
import PerformanceCard from "./PerformanceCardUtil";
import {
  FontAwesome5,
  Feather,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import Color from "../../../../assets/Color";
const FeatureList = ({ item }) => {
  const features = [
    {
      value: item.battery,
      title: "Battery",
      component: (
        <Feather
          style={{ alignSelf: "center" }}
          name="battery-charging"
          size={24}
          color={"white"}
        />
      ),
    },
    {
      value: item.range,
      title: "Range",
      component: (
        <FontAwesome5
          style={{ alignSelf: "center" }}
          name="road"
          size={24}
          color={"white"}
        />
      ),
    },
    {
      value: item.horse,
      title: "Horse",
      component: (
        <FontAwesome5
          style={{ alignSelf: "center" }}
          name="horse-head"
          size={24}
          color={"white"}
        />
      ),
    },
    {
      value: item.torque,
      title: "Torque",
      component: (
        <FontAwesome
          style={{ alignSelf: "center" }}
          name="gears"
          size={24}
          color={"white"}
        />
      ),
    },
    {
      value: item.speed,
      title: "0-100Km/h",
      component: (
        <MaterialCommunityIcons
          style={{ alignSelf: "center" }}
          name="speedometer"
          size={24}
          color={"white"}
        />
      ),
    },
  ];
  return (
    <View>
      <Text
        style={{
          marginBottom: 10,
          fontSize: 24,
          fontFamily: "semibold",
          color: Color.lightgreen,
          paddingLeft: 12,
        }}
      >
        Key Specs
      </Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={features}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => {
          return (
            <PerformanceCard
              icon={item.component}
              title={item.title}
              number={item.value}
            />
          );
        }}
      />
    </View>
  );
};
export default FeatureList;
