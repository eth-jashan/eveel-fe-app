import React from "react";
import { View, Text, Dimensions } from "react-native";
import YoutubeIframe from "react-native-youtube-iframe";
import Color from "../../../../assets/Color";
const YoutubeCard = ({ link, description }) => {
  return (
    <View>
      <Text
        style={{
          marginBottom: 10,
          marginTop: 14,
          fontSize: 24,
          fontFamily: "semibold",
          color: Color.lightgreen,
          paddingLeft: 12,
        }}
      >
        About The Car
      </Text>
      <View style={{ marginBottom: 12 }}>
        <YoutubeIframe
          height={250}
          width={Dimensions.get("window").width * 0.98}
          webViewStyle={{ borderRadius: 10 }}
          play={true}
          videoId={link}
        />
      </View>
      <View
        style={{
          width: Dimensions.get("window").width * 0.98,
          padding: 8,
          marginVertical: 8,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 18,
            alignSelf: "center",
            color: Color.white,
            fontFamily: "book",
          }}
        >
          {description}
        </Text>
      </View>
    </View>
  );
};

export default YoutubeCard;
