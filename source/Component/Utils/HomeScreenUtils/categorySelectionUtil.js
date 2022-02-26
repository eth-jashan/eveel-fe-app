import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import color from "../../../../assets/Color";
import styles from "./UtilStyles/categorySelectionUtilStyles";
const CategorySelection = (props) => {
  //constants

  const typeOfSelection = ["All", "Cars", "Scooty", "Cycle"];

  //Input state

  const [selected, setSelected] = useState(0);

  return (
    <View style={styles.screen}>
      {/* Category Render Panel */}

      <FlatList
        data={typeOfSelection}
        keyExtractor={(x) => x}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => {
                props.selected(item);
                setSelected(index);
              }}
              style={[
                {
                  marginLeft: index === 0 ? 16 : 0,
                  backgroundColor: index === selected ? color.lightgreen : null,
                },
                styles.button,
              ]}
            >
              {/* Cateogory Panel */}

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
