import { Foundation } from "@expo/vector-icons";
import React from "react";
import { Dimensions, SafeAreaView, ScrollView, Text, View } from "react-native";
import PostUtil from "../../Component/Utils/SocialScreenUtils/PostUtil";

const SocialScreen = (props) => {
  return (
    <SafeAreaView>
      {/* Post panel */}
      <ScrollView>
        <PostUtil />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SocialScreen;
