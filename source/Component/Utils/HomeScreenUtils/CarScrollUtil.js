import React from "react";
import { ProgressBar } from "react-native-paper";
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/core";
import { FlatList } from "react-native-gesture-handler";
import Color from "../../../../assets/Color";
import styles from "./UtilStyles/CarScrollUtilStyles";
import { useSelector } from "react-redux";
import { AntDesign } from "@expo/vector-icons";
const CarScroll = (props) => {
  const navigation = useNavigation();
  const vehicleList = props.vehicleList;
  //console.log("vehicleList", vehicleList);
  return (
    <View>
      <View style={styles.headingBar}>
        <Text style={styles.title}>Top Model</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("carlist", { list: vehicleList });
          }}
          style={styles.more}
        >
          <AntDesign name="arrowright" color="white" size={24} />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={vehicleList}
          decelerationRate="fast"
          snapToAlignment="start"
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => {
            return (
              <Pressable
                style={styles.Box}
                onPress={() => {
                  navigation.navigate("CarProfile", { item: item });
                }}
              >
                <View style={styles.imgview}>
                  <Image
                    source={{ uri: vehicleList[index].cover }}
                    style={styles.image}
                  />
                </View>
                <View style={{ margin: 15 }}>
                  <Text style={styles.name}>
                    {item.company} {item.name}
                  </Text>
                  {/* <Text style={styles.price}>
                    Starting @ ₹{item.startPrice}
                  </Text> */}
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
                      <Text style={styles.feature}>
                        {item.type === "car" ? "0-100 km/h" : "0-60 km/h"}
                      </Text>
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
