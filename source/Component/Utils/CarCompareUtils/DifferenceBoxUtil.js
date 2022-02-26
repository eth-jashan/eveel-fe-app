import React from "react";
import { View, Text } from "react-native";
import Color from "../../../../assets/Color";
import styles from "./Styles/DifferenceBoxUtil";

const DifferenceBox = (props) => {
  return (
    <View>
      {/* Title Panel */}

      <View style={styles.title}>
        <Text style={styles.titleText}>{props.title}</Text>
      </View>

      {/* Compare panel */}
      <View>
        <View style={styles.compare}>
          {/* Left Car */}

          <View style={[styles.eachcomp, { borderRightWidth: 1 }]}>
            <Text style={styles.feature}>{props.car1}</Text>
          </View>

          {/* Right car panel */}

          <View style={styles.eachcomp}>
            <Text style={styles.feature}>{props.car2}</Text>
          </View>
        </View>

        {/* Differentiate Line */}

        <View style={styles.differ}>
          <Text style={styles.differText}>|</Text>
        </View>
      </View>
    </View>
  );
};

export default DifferenceBox;
