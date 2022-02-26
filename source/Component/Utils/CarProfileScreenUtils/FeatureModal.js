import React from "react";
import { Modalize } from "react-native-modalize";
import { View, Text, Dimensions } from "react-native";
import Color from "../../../../assets/Color";
import ParallaxGallery from "./ParallaxGalleryUtil";
import styles from "./UtilStyles/FeatureModalUtlStyles";
const FeatureModel = ({ modalize, firstLine, secondLine, List }) => {
  return (
    <Modalize
      modalHeight={Dimensions.get("window").height * 0.7}
      ref={modalize}
    >
      {/* Content Panel */}

      <View style={styles.screen}>
        {/* Title Panel */}

        <Text style={styles.firstline}>
          {firstLine}
          <Text style={styles.secondLine}>& </Text>
          {secondLine}
        </Text>

        {/* Images Slide Panel */}

        <ParallaxGallery imageList={List} />
      </View>
    </Modalize>
  );
};

export default FeatureModel;
