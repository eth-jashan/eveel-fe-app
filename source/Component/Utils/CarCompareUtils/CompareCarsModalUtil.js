import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Color from "../../../../assets/Color";
import DifferenceBox from "./DifferenceBoxUtil";
import { MaterialIcons } from "@expo/vector-icons";

const CompareCarsUtil = (props) => {
  const vehicle1 = props.vehicle1;
  const vehicle2 = props.vehicle2;
  const [moreSpecs, setMoreSpecs] = useState(false);
  return (
    <ScrollView style={{ paddingTop: 80 }}>
      <View style={{ paddingBottom: 250 }}>
        <View>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <View style={{ paddingRight: 10 }}>
              <Image
                style={{
                  width: Dimensions.get("screen").width / 2.2,
                  height: 100,
                  borderTopLeftRadius: 20,
                }}
                source={{ uri: vehicle1.cover }}
              />
            </View>
            <View>
              <Image
                style={{
                  width: Dimensions.get("screen").width / 2.2,
                  height: 100,
                  borderTopRightRadius: 20,
                }}
                source={{ uri: vehicle2.cover }}
              />
            </View>
          </View>
          <View
            style={{
              backgroundColor: Color.darkgrey,
              position: "absolute",
              alignSelf: "center",
              marginTop: 30,
              padding: 8,
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                alignSelf: "center",
                fontFamily: "bold",
              }}
            >
              vs
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            margin: 15,
          }}
        >
          <View style={{ marginHorizontal: 15 }}>
            <View>
              <Text style={{ color: "white", fontFamily: "bold" }}>
                {vehicle1.name}
              </Text>
              <Text style={{ color: "white", fontFamily: "medium" }}>
                ₹{vehicle1.startPrice} onwards
              </Text>
            </View>
          </View>

          <View style={{ marginHorizontal: 15 }}>
            <View>
              <Text
                style={{
                  color: "white",
                  fontFamily: "bold",
                  textAlign: "right",
                }}
              >
                {vehicle2.name}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontFamily: "medium",
                  textAlign: "right",
                }}
              >
                ₹{vehicle2.startPrice} onwards
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            alignSelf: "flex-end",
            marginHorizontal: 30,
            backgroundColor: Color.darkgrey,
            padding: 10,
            borderRadius: 10,
          }}
          onPress={() => {
            props.selected();
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 14,
              alignSelf: "center",
              fontFamily: "bold",
            }}
          >
            Change Car
          </Text>
        </TouchableOpacity>
        <View style={{ margin: 15 }}>
          <View>
            <Text
              style={{
                color: "white",
                fontFamily: "black",
                fontSize: 24,
              }}
            >
              Basic Information
            </Text>
          </View>
          <DifferenceBox
            title="Brand name"
            car1={vehicle1.company}
            car2={vehicle2.company}
          />
          <DifferenceBox
            title="on Road Price"
            car1={`₹${vehicle1.startPrice}`}
            car2={`₹${vehicle2.startPrice}`}
          />
        </View>
        <View style={{ margin: 15 }}>
          <View>
            <Text
              style={{
                color: "white",
                fontFamily: "black",
                fontSize: 24,
              }}
            >
              Specifications
            </Text>
          </View>
          <DifferenceBox
            title="Horse"
            car1={vehicle1.horse}
            car2={vehicle2.horse}
          />
          <DifferenceBox
            title="Battery"
            car1={vehicle1.battery}
            car2={vehicle2.battery}
          />
          <DifferenceBox
            title="Range"
            car1={vehicle1.range}
            car2={vehicle2.range}
          />
          <DifferenceBox
            title="Speed"
            car1={vehicle1.speed}
            car2={vehicle2.speed}
          />
          {moreSpecs && (
            <View>
              <DifferenceBox
                title="Torque"
                car1={vehicle1.torque}
                car2={vehicle2.torque}
              />
            </View>
          )}
          <TouchableOpacity
            style={{
              margin: 15,
              borderBottomWidth: 1,
              borderColor: "white",
              alignSelf: "flex-start",
              flexDirection: "row",
            }}
            onPress={() => {
              setMoreSpecs((state) => !state);
            }}
          >
            <Text
              style={{
                color: "white",
                alignSelf: "center",
                fontSize: 16,
              }}
            >
              View {moreSpecs ? "Less" : "More"}
            </Text>
            <MaterialIcons
              name={moreSpecs ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={24}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CompareCarsUtil;
