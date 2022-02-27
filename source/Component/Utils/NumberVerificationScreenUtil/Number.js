import React, { useState } from "react";
import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./Styles.js/NumberStyles";

const PNumber = (props) => {
  //Inout State

  const [phonenumber, setPhoneNumber] = useState("");

  /***********Functions***********/

  const validate = () => {
    if (phonenumber.length != 10) {
      alert("Enter a valid number");
      return;
    }
    if (phonenumber[0] < 6 || phonenumber[0] > 9) {
      alert("Enter a valid number");
      return;
    }
    props.change(phonenumber);
  };

  /************Rendering***********/
  return (
    <View>
      {/* Title Panel */}

      <View style={styles.title}>
        <Text style={styles.titleText}>Enter Phone number</Text>
      </View>

      {/* Input Panel */}

      <View style={styles.inputBox}>
        <View>
          <Text style={styles.countryCode}>+91</Text>
        </View>
        <TextInput
          placeholder="Phone number"
          placeholderTextColor="grey"
          keyboardType="numeric"
          value={phonenumber}
          onChangeText={(num) => {
            setPhoneNumber(num);
          }}
          style={styles.input}
        />
      </View>
      <View style={styles.desc}>
        <Text style={styles.descText}>
          We'll send you code by SMS to confirm your phone number.
        </Text>
      </View>

      {/* Submit Button Panel */}

      <View style={styles.ButtonBox}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            validate();
          }}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PNumber;
