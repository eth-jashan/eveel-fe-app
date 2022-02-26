import React, { useEffect, useState } from "react";
import { Dimensions, TouchableOpacity } from "react-native";
import { StyleSheet, View, Text, SafeAreaView } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./Styles.js/OTPStyles";
const OTP = (props) => {
  const [code, setCode] = useState(null);
  useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.title}>We have you an OTP through SMS</Text>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="OTP"
          placeholderTextColor="grey"
          keyboardType="numeric"
          value={code}
          onChangeText={setCode}
          style={styles.input}
        />
      </View>
      <View style={styles.desc}>
        <Text style={[styles.descText, { fontFamily: "light" }]}>
          Haven't recieved the code
        </Text>
        <TouchableOpacity
          onPress={() => {
            props.resend();
          }}
        >
          <Text style={[styles.descText, { fontFamily: "bold" }]}>
            Resend code?
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.sendCode(code);
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTP;
