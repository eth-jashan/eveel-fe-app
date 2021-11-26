import React, { useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";

const PNumber = (props) => {
  const [phonenumber, setPhoneNumber] = useState("");
  return (
    <View>
      <View style={{ margin: 15, paddingTop: 30 }}>
        <Text style={{ color: Color.white, fontFamily: "bold", fontSize: 28 }}>
          Enter Phone number
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Color.darkgrey,
          margin: 15,
          padding: 10,
          borderRadius: 10,
          flexDirection: "row",
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 24,
              color: "white",
              paddingRight: 10,
            }}
          >
            +91
          </Text>
        </View>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor="grey"
          keyboardType="numeric"
          value={phonenumber}
          onChangeText={(num) => {
            setPhoneNumber(num);
          }}
          style={{ fontSize: 24, color: Color.white }}
        />
      </View>
      <View style={{ marginHorizontal: 15 }}>
        <Text style={{ color: "white", fontSize: 18, fontFamily: "medium" }}>
          We'll send you code by SMS to confirm your phone number.
        </Text>
      </View>
      <View
        style={{
          alignSelf: "center",
          paddingTop: 100,
        }}
      >
        <TouchableOpacity
          style={{
            backgroundColor: Color.darkgreen,
            padding: 15,
            borderRadius: 20,
          }}
          onPress={() => {
            props.change(phonenumber);
          }}
        >
          <Text
            style={{
              color: Color.white,
              fontFamily: "bold",
              fontSize: 20,
              paddingHorizontal: 10,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PNumber;
