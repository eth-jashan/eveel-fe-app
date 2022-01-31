import React from "react";
import { Modalize } from "react-native-modalize";
import { View, Text, Dimensions } from "react-native";
import Color from "../../../../assets/Color";
import ParallaxGallery from "./ParallaxGalleryUtil";
const FeatureModel = ({ modalize, firstLine, secondLine, List }) => {
  return (
    <Modalize
      modalHeight={Dimensions.get("window").height * 0.7}
      ref={modalize}
    >
      <View
        style={{
          height: Dimensions.get("window").height * 0.75,
          backgroundColor: Color.black,
          padding: 10,
        }}
      >
        <Text
          style={{
            marginTop: 16,
            fontSize: 20,
            fontFamily: "header",
            color: Color.lightgreen,
            alignSelf: "center",
          }}
        >
          {firstLine}
          <Text style={{ fontFamily: "medium", fontSize: 24 }}>& </Text>
          {secondLine}
        </Text>
        <ParallaxGallery imageList={List} />
      </View>
    </Modalize>
  );
};

export default FeatureModel;
