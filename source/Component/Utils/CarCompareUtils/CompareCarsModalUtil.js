import React, { useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import DifferenceBox from "./DifferenceBoxUtil";
import { MaterialIcons } from "@expo/vector-icons";
import styles from "./Styles/CompareCarsModalUtilStyle";

const CompareCarsUtil = (props) => {
  //From Props
  const vehicle1 = props.vehicle1;
  const vehicle2 = props.vehicle2;

  //Validation State

  const [moreSpecs, setMoreSpecs] = useState(false);

  /************Rendering***********/
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.screen}>
        <View>
          {/* Car Image Compare Panel */}

          <View style={styles.images}>
            <View style={styles.leftimageView}>
              <Image style={styles.image} source={{ uri: vehicle1.cover }} />
            </View>
            <View>
              <Image style={styles.image} source={{ uri: vehicle2.cover }} />
            </View>
          </View>

          {/* VS panel */}

          <View style={styles.VS}>
            <Text style={styles.VSText}>vs</Text>
          </View>
        </View>

        {/* Car Basic Info Panel */}

        <View style={styles.carname}>
          <View style={styles.carnameView}>
            <View>
              <Text style={styles.carnameText}>{vehicle1.name}</Text>
              <Text style={styles.carPriceText}>
                ₹{vehicle1.startPrice} onwards
              </Text>
            </View>
          </View>

          <View style={styles.carnameView}>
            <View>
              <Text style={[styles.carnameText, { textAlign: "right" }]}>
                {vehicle2.name}
              </Text>
              <Text style={[styles.carPriceText, { textAlign: "right" }]}>
                ₹{vehicle2.startPrice} onwards
              </Text>
            </View>
          </View>
        </View>

        {/* Change 2 car to compare with button Panel */}

        <TouchableOpacity
          style={styles.compareCarButton}
          onPress={() => {
            props.selected();
          }}
        >
          <Text style={styles.compareCarButtonText}>Change Car</Text>
        </TouchableOpacity>

        {/* Car Features Compare Panel */}

        <View style={styles.title}>
          {/* Basic Info Panel */}

          <View>
            <Text style={styles.titleText}>Basic Information</Text>
          </View>
          <DifferenceBox
            title="Brand name"
            car1={vehicle1.company}
            car2={vehicle2.company}
          />
          <DifferenceBox
            title="on Road Price"
            car1={`₹${vehicle1.startPrice}`}
            car2={`₹${vehicle2.startPrice}`}
          />
        </View>

        {/* Specific Info Panel */}

        <View style={styles.title}>
          <View>
            <Text style={styles.titleText}>Specifications</Text>
          </View>
          <DifferenceBox
            title="Horse"
            car1={vehicle1.horse}
            car2={vehicle2.horse}
          />
          <DifferenceBox
            title="Battery"
            car1={vehicle1.battery}
            car2={vehicle2.battery}
          />
          <DifferenceBox
            title="Range"
            car1={vehicle1.range}
            car2={vehicle2.range}
          />
          <DifferenceBox
            title="Speed"
            car1={vehicle1.speed}
            car2={vehicle2.speed}
          />

          {/* View More Button Panel */}

          {moreSpecs && (
            <View>
              <DifferenceBox
                title="Torque"
                car1={vehicle1.torque}
                car2={vehicle2.torque}
              />
            </View>
          )}
          <TouchableOpacity
            style={styles.viewMore}
            onPress={() => {
              setMoreSpecs((state) => !state);
            }}
          >
            <Text style={styles.viewMoreText}>
              View {moreSpecs ? "Less" : "More"}
            </Text>
            <MaterialIcons
              name={moreSpecs ? "keyboard-arrow-up" : "keyboard-arrow-down"}
              size={24}
              color={"white"}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default CompareCarsUtil;
