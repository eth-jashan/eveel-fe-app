import React from "react";
import { View, Text } from "react-native";
import Color from "../../../../assets/Color";

const DifferenceBox = (props) => {
  return (
    <View style={{}}>
      <View style={{ padding: 8 }}>
        <Text
          style={{
            color: "white",
            fontFamily: "medium",
            fontSize: 16,
            textAlign: "center",
          }}
        >
          {props.title}
        </Text>
      </View>
      <View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 8,
            borderBottomWidth: 2,
            borderColor: "white",
          }}
        >
          <View style={{ padding: 10, borderRightWidth: 1 }}>
            <Text
              style={{
                color: "white",
                fontFamily: "bold",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {props.car1}
            </Text>
          </View>

          <View style={{ padding: 10 }}>
            <Text
              style={{
                color: "white",
                fontFamily: "bold",
                fontSize: 16,
                textAlign: "center",
              }}
            >
              {props.car2}
            </Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "medium",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            |
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DifferenceBox;
