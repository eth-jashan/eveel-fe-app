import React, { useState } from "react";
import { Pressable, View, Text } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import color from "../../../assets/Color";
const CategorySelection = () => {
  const typeOfSelection = ["All", "Cars", "Scooty", "Cycle"];
  const [selected, setSelected] = useState(0);

  return (
    <View style={{ paddingVertical: 15 }}>
      <FlatList
        data={typeOfSelection}
        keyExtractor={(x) => x}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item, index }) => {
          return (
            <Pressable
              onPress={() => setSelected(index)}
              style={{
                marginLeft: index === 0 ? 16 : 0,
                backgroundColor: index === selected ? color.lightgreen : null,
                borderWidth: 0.5,
                minWidth: 100,
                marginRight: 12,
                padding: 10,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                borderColor: color.lightgreen,
              }}
            >
              <Text
                style={{
                  color:
                    index === selected ? color.darkgreen : color.lightgreen,
                  fontSize: 18,
                  fontFamily: "semibold",
                }}
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
