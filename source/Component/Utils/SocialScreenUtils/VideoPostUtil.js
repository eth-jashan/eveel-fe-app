import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import mustang from "../../../../assets/Images/mustang.jpeg";

const VideoPostUtil = (props) => {
  return (
    <View style={{ marginTop: 5 }}>
      <View>
        <Text style={{ fontSize: 16, fontFamily: "medium", color: "white" }}>
          Kobe’s passing is really sticking w/ me in a way I didn’t expect.
          {"\n\n"} He was an icon, the kind of person who wouldn’t die this way.
          My wife compared it to Princess Di’s accident.
          {"\n\n"} But the end can happen for anyone at any time, & I can’t help
          but think of anything else lately.
        </Text>
      </View>

      <TouchableOpacity style={{ width: "100%", height: "40%", marginTop: 20 }}>
        <Image
          source={mustang}
          style={{ width: "100%", height: "100%", borderRadius: 10 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default VideoPostUtil;
