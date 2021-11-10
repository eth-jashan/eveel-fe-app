import React from "react";
import { ProgressBar } from "react-native-paper";
import { View, Text, Image, Pressable, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/CarScrollUtilStyles";
import { useSelector } from "react-redux";
const CarScroll = () => {
  const navigation = useNavigation();
  const carList = useSelector(x=>x.car.carList)
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
          data={carList}
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
                  <Text style={styles.name}>{item.company} {item.name}</Text>
                  <Text style={styles.price}>Starting @ ₹{item.startPrice}</Text>
                  <View>
                    <View style={styles.progressView}>
                      <Text style={styles.feature}>Battery</Text>
                      <Text style={styles.featureNumber}>{item.battery}</Text>
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
                      <Text style={styles.featureNumber}>{item.range}</Text>
                    </View>
                    <ProgressBar
                      progress={0.8}
                      color={Color.lightgreen}
                      style={styles.progressBar}
                    />
                  </View>
                  <View>
                    <View style={styles.progressView}>
                      <Text style={styles.feature}>{item.type === 'car'? '0-100 km/h':'0-60 km/h'}</Text>
                      <Text style={styles.featureNumber}>{item.speed}</Text>
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
