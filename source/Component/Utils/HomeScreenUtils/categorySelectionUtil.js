import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import color from "../../../../assets/Color";
import styles from "./UtilStyles/categorySelectionUtilStyles";
const CategorySelection = () => {
  const typeOfSelection = ["All", "Cars", "Scooty", "Cycle"];
  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.screen}>
      <FlatList
        data={typeOfSelection}
        keyExtractor={(x) => x}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => setSelected(index)}
              style={[
                {
                  marginLeft: index === 0 ? 16 : 0,
                  backgroundColor: index === selected ? color.lightgreen : null,
                },
                styles.button,
              ]}
            >
              <Text
                style={[
                  {
                    color:
                      index === selected ? color.darkgreen : color.lightgreen,
                  },
                  styles.buttonText,
                ]}
              >
                {item}
              </Text>
            </Pressable>
          );
        }}
      />
    </View>
  );
};

export default CategorySelection;
