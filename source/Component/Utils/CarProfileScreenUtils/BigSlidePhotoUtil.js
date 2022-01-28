import React from "react";
import {
  View,
  FlatList,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const { width, height } = Dimensions.get("window");
const BigSlide = ({ topRef, gallery, scrollToActiveIndex }) => {
  const navigation = useNavigation();
  return (
    <View>
      <FlatList
        ref={topRef}
        horizontal
        keyExtractor={(_, i) => i.toString()}
        data={gallery}
        snapToAlignment={"center"}
        snapToInterval={Dimensions.get("window").width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width)
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={{ width: width, height: 250 }}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SlideScreen", {
                    gallery,
                    index,
                  });
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={{ uri: item.image }}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};
export default BigSlide;
