import React from "react";
import { ProgressBar } from "react-native-paper";
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";
import color from "../../../assets/Color";
import Color from "../../../assets/Color";

const CarScroll = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          margin: 15,
        }}
      >
        <Text
          style={{
            fontFamily: "bold",
            color: 'white',
            fontSize: 22,
            alignSelf: "center",
          }}
        >
          Top Model
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: "medium",
            padding: 5,
            color: "white",
            borderWidth: 1,
            borderRadius: 15,
            borderColor: color.lightgreen,
            alignSelf: "center",
          }}
        >
          See All
        </Text>
      </View>
      <View>
        <FlatList
          data={["1", "2", "3", "4", "5"]}
          decelerationRate="fast"
          snapToAlignment="start"
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                style={{
                  backgroundColor: "#222222",
                  marginHorizontal: 20,
                  marginTop: 20,
                  paddingBottom: 10,
                  marginBottom: 40,
                  borderRadius: 20,
                  shadowColor: "grey",
                  shadowOffset: {
                    width: 0,
                    height: 12,
                  },
                  shadowOpacity: 0.58,
                  shadowRadius: 16.0,

                  elevation: 24,
                }}
              >
                <View
                  style={{
                    shadowColor: "grey",
                    shadowOffset: {
                      width: 0,
                      height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    elevation: 5,
                  }}
                >
                  <Image
                    source={require("../../../assets/Images/car.png")}
                    style={{
                      margin: 20,
                      width: Dimensions.get("screen").width / 1.5,
                      height: Dimensions.get("screen").width / 2.5,
                      borderRadius: 10,

                      alignSelf: "center",
                    }}
                  />
                </View>
                <View style={{ margin: 15 }}>
                  <Text style={{ fontSize: 20, fontFamily: "semibold" , color:'white'}}>
                    Hyundai Kona Electric
                  </Text>
                  <Text style={{ fontSize: 18, fontFamily: "light", color:'white'}}>
                    Starting @ ₹12.5 Lakhs
                  </Text>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: 10,
                      }}
                    >
                      <Text
                        style={{
                          color: color.lightgreen,
                          fontSize: 16,
                          fontFamily: "light",
                        }}
                      >
                        Battery
                      </Text>
                      <Text
                        style={{
                          color: color.lightgreen,
                          fontSize: 16,
                          fontFamily: "bold",
                        }}
                      >
                        90 mins
                      </Text>
                    </View>
                    <ProgressBar
                      progress={0.5}
                      color={color.lightgreen}
                      style={{
                        height: 8,
                        borderRadius: 10,
                        backgroundColor: "#D3D3D3",
                      }}
                    />
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: 10,
                      }}
                    >
                      <Text
                        style={{
                          color: color.lightgreen,
                          fontSize: 16,
                          fontFamily: "light",
                        }}
                      >
                        Range
                      </Text>
                      <Text
                        style={{
                          color: color.lightgreen,
                          fontSize: 16,
                          fontFamily: "bold",
                        }}
                      >
                        312 km
                      </Text>
                    </View>
                    <ProgressBar
                      progress={0.8}
                      color={color.lightgreen}
                      style={{
                        height: 8,
                        borderRadius: 10,
                        backgroundColor: "#D3D3D3",
                      }}
                    />
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingVertical: 10,
                      }}
                    >
                      <Text
                        style={{
                          color: color.lightgreen,
                          fontSize: 16,
                          fontFamily: "light",
                        }}
                      >
                        0-100 km/h
                      </Text>
                      <Text
                        style={{
                          color: color.lightgreen,
                          fontSize: 16,
                          fontFamily: "bold",
                        }}
                      >
                        9.9 sec
                      </Text>
                    </View>
                    <ProgressBar
                      progress={0.5}
                      color={color.lightgreen}
                      style={{
                        height: 8,
                        borderRadius: 10,
                        backgroundColor: "#D3D3D3",
                      }}
                    />
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CarScroll;
