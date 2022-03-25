import { Foundation } from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import eveels from "../../../assets/Images/header-logo.png";
import ImagePostUtil from "../../Component/Utils/SocialScreenUtils/ImagePostUtil";
import PostUtil from "../../Component/Utils/SocialScreenUtils/PostUtil";
import TextPostUtil from "../../Component/Utils/SocialScreenUtils/TextPostUtil";
import VideoPostUtil from "../../Component/Utils/SocialScreenUtils/VideoPostUtil";
export const VIDEO = "VIDEO";
export const IMAGE = "IMAGE";
export const TWEET = "TWEET";

const SocialScreen = (props) => {
  const data = [VIDEO, IMAGE, TWEET];
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
      <View style={{ width: "40%", height: "5%", margin: 8 }}>
        <Image source={eveels} style={{ width: "100%", height: "100%" }} />
      </View>
      {/* Post panel */}
      <FlatList
        data={[VIDEO, IMAGE, IMAGE, TWEET, TWEET, TWEET]}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{ paddingBottom: 300 }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                flex: 1,
                maxHeight: Dimensions.get("screen").height * 0.8,
              }}
            >
              <PostUtil type={item} />
            </View>
          );
        }}
      />
    </SafeAreaView>
    // <View style={{ flex: 1, backgroundColor: "black" }}></View>
  );
};

export default SocialScreen;
