import React, { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import OTPInputView from "@twotalltotems/react-native-otp-input";
const OTP = (props) => {
  const [code, setCode] = useState(null);
  useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <View>
      <View style={{ margin: 15, paddingTop: 30 }}>
        <Text style={{ color: Color.white, fontFamily: "bold", fontSize: 28 }}>
          We have you an OTP through SMS
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Color.darkgrey,
          margin: 15,
          marginHorizontal: 30,
          borderRadius: 10,
          alignContent: "center",
        }}
      >
        <TextInput
          placeholder="OTP"
          placeholderTextColor="grey"
          keyboardType="numeric"
          value={code}
          onChangeText={setCode}
          style={{
            fontSize: 24,
            color: Color.white,
            padding: 15,
            textAlign: "center",
          }}
        />
        {/* <OTPInputView
          style={{ width: "90%", height: 100, alignSelf: "center" }}
          pinCount={6}
          // code={this.state.code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
          onCodeChanged={(code) => {
            setCode(code);
          }}
          autoFocusOnLoad
          codeInputFieldStyle={{
            borderWidth: 0,
            borderBottomWidth: 1,
            color: "white",
            fontSize: 24,
          }}
          codeInputHighlightStyle={{ borderColor: "#03DAC6" }}
          // onCodeFilled={(code) => {
          //   console.log(`Code is ${code}, you are good to go!`);
          // }}
        /> */}
      </View>
      <View
        style={{
          marginHorizontal: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={{ color: "white", fontSize: 18, fontFamily: "light" }}>
          Haven't recieved the code
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.resend();
          }}
        >
          <Text style={{ color: "white", fontSize: 18, fontFamily: "bold" }}>
            Resend code?
          </Text>
        </TouchableOpacity>
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
            props.sendCode(code);
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
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTP;
