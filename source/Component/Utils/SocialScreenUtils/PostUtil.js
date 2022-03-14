import {
  AntDesign,
  Entypo,
  EvilIcons,
  Feather,
  Foundation,
  Ionicons,
} from "@expo/vector-icons";
import React from "react";
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
import image from "../../../../assets/Images/Round.png";
import { VIDEO, TWEET, IMAGE } from "../../../Screen/Feed/SocialScreen";
import ImagePostUtil from "./ImagePostUtil";
import TextPostUtil from "./TextPostUtil";
import VideoPostUtil from "./VideoPostUtil";

const PostUtil = (props) => {
  const getType = (data) => {
    switch (data) {
      case VIDEO:
        return <VideoPostUtil />;

      case IMAGE:
        return <ImagePostUtil />;

      case TWEET:
        return <TextPostUtil />;

      default:
        null;
    }
  };
  return (
    <View>
      {/* Border */}

      <View style={{ borderWidth: 0.25, borderColor: "#d3d3d3" }} />

      {/* Post content */}

      <View style={{ margin: 15 }}>
        {/* Like panel */}

        <View
          style={{
            flexDirection: "row",
            alignSelf: "center",
            justifyContent: "space-between",
          }}
        >
          <Foundation name="heart" size={20} color={"#687684"} />
          <Text
            style={{
              marginLeft: 20,
              alignSelf: "center",
              fontFamily: "light",
              fontSize: 14,
              color: "#687684",
            }}
          >
            Kieron Dotson and Zack John liked
          </Text>
        </View>

        {/* POst panel */}

        <View style={{ flexDirection: "row", margin: 15 }}>
          {/* Profile Photo */}

          <View style={{ width: "20%" }}>
            <Image source={image} style={{ width: 60, height: 60 }} />
          </View>

          {/* ID panel */}
          <View style={{ width: "80%" }}>
            <View style={{ flexDirection: "row" }}>
              <Text
                style={{
                  fontFamily: "bold",
                  fontSize: 16,
                  marginRight: 10,
                  color: "white",
                }}
              >
                Tabitha Potter
              </Text>
              <Text
                style={{ fontSize: 16, fontFamily: "medium", color: "grey" }}
              >
                @mis_potter
                <Entypo
                  name="dot-single"
                  size={16}
                  color="grey"
                  style={{ alignSelf: "center" }}
                />
                14h
              </Text>
            </View>

            {/* Content panel  */}

            {getType(props.type)}

            {/* Feedback panel */}

            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                justifyContent: "space-around",
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <EvilIcons name="comment" size={24} color="#687684" />
                <Text
                  style={{
                    fontFamily: "medium",
                    fontSize: 14,
                    color: "#687684",
                    marginLeft: 5,
                    alignSelf: "center",
                  }}
                >
                  7
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <AntDesign name="retweet" size={20} color="#687684" />
                <Text
                  style={{
                    fontFamily: "medium",
                    fontSize: 14,
                    color: "#687684",
                    marginLeft: 5,
                    alignSelf: "center",
                  }}
                >
                  1
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Ionicons name="heart-outline" size={20} color="#687684" />
                <Text
                  style={{
                    fontFamily: "medium",
                    fontSize: 14,
                    color: "#687684",
                    marginLeft: 5,
                    alignSelf: "center",
                  }}
                >
                  10
                </Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <Feather name="upload" size={24} color="#687684" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostUtil;
