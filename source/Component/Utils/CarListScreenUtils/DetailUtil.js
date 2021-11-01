import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import StaggeringView from "../../Common/StaggeringView";
import { FontAwesome5, FontAwesome, MaterialCommunityIcons, Feather } from "@expo/vector-icons";
import Color from "../../../../assets/Color";

const { width, height } = Dimensions.get("screen");
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
            {data[index].singleCharge}
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
            142.7 PS
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
            353 Nm
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
            2.4 sec
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
          4 hrs
        </Text>
      </View>
    </StaggeringView>
  );
};

const styles = StyleSheet.create({
  DetailView: {
    overflow: "hidden",
    marginVertical: 20,
    width: width * 0.85,
    padding: 16,
    alignSelf: "center",
  },
  DetailInfoparts: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 16,
  },
  DetailsInfoP3: { flexDirection: "row", alignSelf: "center" },
  features: { flexDirection: "row" },
  IconArrange: { alignSelf: "center" },
  feaText: {
    fontFamily: "book",
    color: "#1ec0af",
    alignSelf: "center",
  },
  feaNum: {
    fontSize: 22,
    fontFamily: "light",
    alignSelf: "center",
    marginHorizontal: 10,
  },
  ChargeText: {
    fontFamily: "book",
    color: "#1ec0af",
    alignSelf: "center",
    fontSize: 20,
  },
  ChargeDuration: {
    fontSize: 30,
    fontFamily: "light",
    alignSelf: "center",
  },
});

export default DetailView;
