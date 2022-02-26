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
import styles from "./UtilStyles/SmallSlidePhotoUtilStyles";
const SmallSlide = ({
  thumbRef,
  gallery,
  scrollToActiveIndex,
  activeIndex,
}) => {
  return (
    <View style={styles.container}>
      {/* Photo Slide Panel */}

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
              {/* Image Panel */}

              <Image
                style={[
                  styles.image,
                  {
                    borderColor:
                      index === activeIndex ? Color.lightgreen : "transparent",
                  },
                ]}
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
