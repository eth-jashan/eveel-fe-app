import React from "react";
import { View, FlatList, Dimensions, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./UtilStyles/BigSlidePhotoUtilStyles";
const { width, height } = Dimensions.get("window");
const BigSlide = ({ topRef, gallery, scrollToActiveIndex, carId }) => {
  const navigation = useNavigation();

  return (
    <View>
      {/* Photos Slide Panel */}
      <FlatList
        ref={topRef}
        horizontal
        keyExtractor={(_, i) => i.toString()}
        data={gallery}
        snapToAlignment={"center"}
        snapToInterval={width}
        decelerationRate="fast"
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={(ev) => {
          scrollToActiveIndex(
            Math.floor(ev.nativeEvent.contentOffset.x / width)
          );
        }}
        renderItem={({ item, index }) => {
          return (
            <View style={styles.screen}>
              {/* Image Panel */}

              {/* <TouchableOpacity
                onPress={() => {
                  navigation.navigate("SlideScreen", {
                    carId,
                    index,
                  });
                }}
              > */}
              <Image style={styles.image} source={{ uri: item.image }} />
              {/* </TouchableOpacity> */}
            </View>
          );
        }}
      />
    </View>
  );
};
export default BigSlide;
