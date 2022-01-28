import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Image,
} from "react-native";
import Color from "../../../../assets/Color";
const SmallSlide = ({
  thumbRef,
  gallery,
  scrollToActiveIndex,
  activeIndex,
}) => {
  return (
    <View
      style={{
        width: Dimensions.get("window").width * 0.8,
        alignSelf: "center",
        bottom: 36,
        padding: 16,
        backgroundColor: Color.darkgrey,
        borderRadius: 14,
      }}
    >
      <FlatList
        ref={thumbRef}
        horizontal
        data={gallery}
        keyExtractor={(_, i) => i.toString()}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              style={{ width: 100, height: 60, marginHorizontal: 8 }}
              onPress={() => scrollToActiveIndex(index)}
            >
              <Image
                style={{
                  width: "100%",
                  height: "100%",
                  borderWidth: 0.7,
                  borderColor:
                    index === activeIndex ? Color.lightgreen : "transparent",
                }}
                source={{ uri: item.image }}
              />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default SmallSlide;
