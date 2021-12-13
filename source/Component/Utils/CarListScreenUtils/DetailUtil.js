import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import StaggeringView from "../../Common/StaggeringView";
import {
  FontAwesome5,
  FontAwesome,
  MaterialCommunityIcons,
  Feather,
} from "@expo/vector-icons";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/DetailUtilStyles";

const DetailView = ({ data, color, index }) => {
  return (
    <StaggeringView style={styles.DetailView}>
      <View style={styles.DetailInfoparts}>
        <View style={styles.features}>
          <View>
            <FontAwesome5
              style={styles.IconArrange}
              name="road"
              size={24}
              color={Color.lightgreen}
            />
            <Text style={styles.feaText}>Range</Text>
          </View>
          <Text
            style={[
              {
                color: color,
              },
              styles.feaNum,
            ]}
          >
            {data[index].range}
          </Text>
        </View>

        <View style={styles.features}>
          <View>
            <FontAwesome5
              style={styles.IconArrange}
              name="horse-head"
              size={24}
              color={Color.lightgreen}
            />
            <Text style={styles.feaText}>Horse</Text>
          </View>
          <Text
            style={[
              {
                color: color,
              },
              styles.feaNum,
            ]}
          >
            {data[index].horse}
          </Text>
        </View>
      </View>

      <View style={styles.DetailInfoparts}>
        <View style={styles.features}>
          <View>
            <FontAwesome
              style={styles.IconArrange}
              name="gears"
              size={24}
              color={Color.lightgreen}
            />
            <Text style={styles.feaText}>torque</Text>
          </View>
          <Text
            style={[
              {
                color: color,
              },
              styles.feaNum,
            ]}
          >
            {data[index].torque}
          </Text>
        </View>

        <View style={styles.features}>
          <View>
            <MaterialCommunityIcons
              style={styles.IconArrange}
              name="speedometer"
              size={24}
              color={Color.lightgreen}
            />
            <Text style={styles.feaText}>Range</Text>
          </View>
          <Text
            style={[
              {
                color: color,
              },
              styles.feaNum,
            ]}
          >
            {data[index].speed}
          </Text>
        </View>
      </View>

      <View style={styles.DetailsInfoP3}>
        <View>
          <Feather
            style={styles.IconArrange}
            name="battery-charging"
            size={50}
            color={Color.lightgreen}
          />
          <Text style={styles.ChargeText}>Charge Time</Text>
        </View>
        <Text
          style={[
            {
              color: color,
            },
            styles.ChargeDuration,
          ]}
        >
          {data[index].battery}
        </Text>
      </View>
    </StaggeringView>
  );
};

export default DetailView;
