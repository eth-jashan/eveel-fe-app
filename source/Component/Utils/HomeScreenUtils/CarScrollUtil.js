import React from "react";
import { ProgressBar } from "react-native-paper";
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/CarScrollUtilStyles";
const CarScroll = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.headingBar}>
        <Text style={styles.title}>Top Model</Text>
        <Text
          onPress={() => {
            navigation.navigate("carlist");
          }}
          style={styles.more}
        >
          See All
        </Text>
      </View>
      <View>
        <FlatList
          data={["1", "2", "3", "4", "5"]}
          decelerationRate="fast"
          snapToAlignment="start"
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                style={styles.Box}
                onPress={() => {
                  navigation.navigate("CarProfile");
                }}
              >
                <View style={styles.imgview}>
                  <Image
                    source={require("../../../../assets/Images/car.png")}
                    style={styles.image}
                  />
                </View>
                <View style={{ margin: 15 }}>
                  <Text style={styles.name}>Hyundai Kona Electric</Text>
                  <Text style={styles.price}>Starting @ ₹12.5 Lakhs</Text>
                  <View>
                    <View style={styles.progressView}>
                      <Text style={styles.feature}>Battery</Text>
                      <Text style={styles.featureNumber}>90 mins</Text>
                    </View>
                    <ProgressBar
                      progress={0.5}
                      color={Color.lightgreen}
                      style={styles.progressBar}
                    />
                  </View>
                  <View>
                    <View style={styles.progressView}>
                      <Text style={styles.feature}>Range</Text>
                      <Text style={styles.featureNumber}>312 km</Text>
                    </View>
                    <ProgressBar
                      progress={0.8}
                      color={Color.lightgreen}
                      style={styles.progressBar}
                    />
                  </View>
                  <View>
                    <View style={styles.progressView}>
                      <Text style={styles.feature}>0-100 km/h</Text>
                      <Text style={styles.featureNumber}>9.9 sec</Text>
                    </View>
                    <ProgressBar
                      progress={0.5}
                      color={Color.lightgreen}
                      style={styles.progressBar}
                    />
                  </View>
                </View>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};

export default CarScroll;
