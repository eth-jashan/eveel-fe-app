import React from "react";
import { Text, View } from "react-native";

const TextPostUtil = (props) => {
  return (
    <View style={{ marginTop: 5 }}>
      <Text style={{ fontSize: 16, fontFamily: "medium", color: "white" }}>
        Kobe’s passing is really sticking w/ me in a way I didn’t expect.
        {"\n\n"} He was an icon, the kind of person who wouldn’t die this way.
        My wife compared it to Princess Di’s accident.
        {"\n\n"} But the end can happen for anyone at any time, & I can’t help
        but think of anything else lately.
      </Text>
    </View>
  );
};

export default TextPostUtil;
