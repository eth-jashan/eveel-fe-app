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
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
    //   <View style={{ width: "40%", height: "5%", margin: 8 }}>
    //     <Image source={eveels} style={{ width: "100%", height: "100%" }} />
    //   </View>
    //   {/* Post panel */}
    //   <FlatList
    //     data={[VIDEO, IMAGE, TWEET]}
    //     keyExtractor={(_, i) => i.toString()}
    //     contentContainerStyle={{ paddingBottom: 600 }}
    //     renderItem={({ item, index }) => {
    //       return <PostUtil type={item} />;
    //     }}
    //   />
    // </SafeAreaView>
    <View style={{ flex: 1, backgroundColor: "black" }}></View>
  );
};

export default SocialScreen;
