import { AntDesign, Ionicons } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Color from "../../../assets/Color";

const PhotoSlideScreen = (props) => {
  //navigator

  const navigation = useNavigation();

  //from props

  const { gallery, index } = props.route.params;

  return (
    <View style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ justifyContent: "center", alignSelf: "center" }}>
        <FlatList
          initialScrollIndex={index}
          horizontal
          keyExtractor={(_, i) => i.toString()}
          data={gallery}
          snapToAlignment={"center"}
          snapToInterval={Dimensions.get("window").width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  width: Dimensions.get("window").width,
                  height: Dimensions.get("screen").height,
                  padding: 15,
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: item.image }}
                  resizeMode="contain"
                />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
};

export default PhotoSlideScreen;
