import React from "react";
import { View, Text, Dimensions, ScrollView, FlatList } from "react-native";
import SkeletonContent from "react-native-skeleton-content";
import Color from "../../../../assets/Color";

const HomeScreenLoadingUtil = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Color.black,
      }}
    >
      <SkeletonContent
        containerStyle={{
          paddingTop: 30,
          margin: 15,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
        boneColor={Color.darkgrey}
        highlightColor={Color.shadow}
        animationDirection="horizontalLeft"
      >
        <View
          style={{
            height: 50,
            width: 150,
            borderRadius: 50,
            alignSelf: "center",
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            borderRadius: 50,
            alignSelf: "center",
          }}
        />
      </SkeletonContent>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      >
        <SkeletonContent
          containerStyle={{
            margin: 15,
            paddingTop: 30,
          }}
          boneColor={Color.darkgrey}
          highlightColor={Color.shadow}
          animationDirection="horizontalLeft"
        >
          <View
            style={{
              width: Dimensions.get("screen").width * 0.8,
              height: 20,
              borderRadius: 20,
            }}
          />
          <View
            style={{
              width: Dimensions.get("screen").width * 0.6,
              height: 20,
              borderRadius: 20,
              marginTop: 10,
            }}
          />
          <View
            style={{
              width: Dimensions.get("screen").width * 0.2,
              height: 20,
              borderRadius: 20,
              marginTop: 10,
            }}
          />
        </SkeletonContent>
        <FlatList
          horizontal
          data={["1", "2", "3", "4", "5"]}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(x) => x}
          snapToInterval={310}
          decelerationRate="fast"
          snapToAlignment="start"
          renderItem={({ item, index }) => {
            return (
              <SkeletonContent
                containerStyle={{ paddingTop: 10 }}
                boneColor={Color.darkgrey}
                highlightColor={Color.shadow}
                animationDirection="horizontalLeft"
              >
                <View
                  style={{
                    marginLeft: index === 0 ? 16 : 0,
                    width: 300,
                    height: 175,
                    marginRight: 15,
                    borderRadius: 8,
                    marginBottom: 12,
                  }}
                ></View>
              </SkeletonContent>
            );
          }}
        />
        <FlatList
          data={["1", "2", "3", "4"]}
          keyExtractor={(x) => x}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ index }) => {
            return (
              <SkeletonContent
                containerStyle={{ paddingTop: 10 }}
                boneColor={Color.darkgrey}
                highlightColor={Color.shadow}
                animationDirection="horizontalLeft"
              >
                <View
                  style={{
                    marginLeft: index === 0 ? 16 : 0,
                    width: 120,
                    height: 50,
                    marginRight: 12,
                    borderRadius: 20,
                  }}
                />
              </SkeletonContent>
            );
          }}
        />
        <SkeletonContent
          containerStyle={{
            paddingTop: 20,
            margin: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          boneColor={Color.darkgrey}
          highlightColor={Color.shadow}
          animationDirection="horizontalLeft"
        >
          <View
            style={{
              height: 30,
              width: 150,
              borderRadius: 50,
              alignSelf: "center",
            }}
          />
          <View
            style={{
              width: 60,
              height: 30,
              borderRadius: 50,
              alignSelf: "center",
            }}
          />
        </SkeletonContent>
        <FlatList
          decelerationRate="fast"
          snapToAlignment="start"
          horizontal
          showsHorizontalScrollIndicator={false}
          data={["1", "2", "3", "4"]}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item, index }) => {
            return (
              <SkeletonContent
                containerStyle={{
                  paddingTop: 10,
                  margin: 15,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
                boneColor={Color.darkgrey}
                highlightColor={Color.shadow}
                animationDirection="horizontalLeft"
              >
                <View style={{ width: 300, height: 150, borderRadius: 15 }} />
              </SkeletonContent>
            );
          }}
        />
        <SkeletonContent
          containerStyle={{
            paddingTop: 10,
            margin: 15,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          boneColor={Color.darkgrey}
          highlightColor={Color.shadow}
          animationDirection="horizontalLeft"
        >
          <View
            style={{
              height: 30,
              width: 150,
              borderRadius: 50,
              alignSelf: "center",
            }}
          />
          <View
            style={{
              width: 60,
              height: 30,
              borderRadius: 50,
              alignSelf: "center",
            }}
          />
        </SkeletonContent>
        <FlatList
          data={["1", "2", "3", "4", "5"]}
          decelerationRate="fast"
          snapToAlignment="start"
          horizontal
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, i) => i}
          renderItem={({ item, index }) => {
            return (
              <View
                style={{
                  backgroundColor: "#141414",
                  marginHorizontal: 20,
                  marginTop: 20,
                  paddingBottom: 10,
                  marginBottom: 40,
                  borderRadius: 20,
                }}
              >
                <SkeletonContent
                  containerStyle={{
                    paddingTop: 10,
                    margin: 15,
                  }}
                  boneColor={Color.darkgrey}
                  highlightColor={Color.shadow}
                  animationDirection="horizontalLeft"
                >
                  <View
                    style={{
                      margin: 20,
                      width: Dimensions.get("screen").width / 1.5,
                      height: Dimensions.get("screen").width / 2.5,
                      borderRadius: 10,
                      alignSelf: "center",
                    }}
                  />
                  <View
                    style={{
                      width: "80%",
                      height: 10,
                      margin: 15,
                      borderRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      width: "50%",
                      height: 10,
                      margin: 15,
                      borderRadius: 10,
                    }}
                  />
                  <View
                    style={{
                      width: "90%",
                      height: 15,
                      margin: 15,
                      borderRadius: 15,
                    }}
                  />
                  <View
                    style={{
                      width: "90%",
                      height: 15,
                      margin: 15,
                      borderRadius: 15,
                    }}
                  />
                  <View
                    style={{
                      width: "90%",
                      height: 15,
                      margin: 15,
                      borderRadius: 15,
                    }}
                  />
                </SkeletonContent>
              </View>
            );
          }}
        />
      </ScrollView>
    </View>
  );
};

export default HomeScreenLoadingUtil;
