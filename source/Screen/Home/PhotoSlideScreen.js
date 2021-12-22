import { AntDesign } from "@expo/vector-icons";
import React from "react";
import {
  FlatList,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";

const PhotoSlideScreen = (props) => {
  const { gallery, index } = props.route.params;

  return (
    <View style={{ flex: 1 }}>
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
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("SlideScreen", {
                    gallery,
                    index,
                  });
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: item.image }}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PhotoSlideScreen;
