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
const PostUtil = (props) => {
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
                style={{ fontFamily: "bold", fontSize: 16, marginRight: 10 }}
              >
                Tabitha Potter
              </Text>
              <Text
                style={{ fontSize: "16", fontFamily: "medium", color: "grey" }}
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

            <View style={{ marginTop: 5 }}>
              <Text style={{ fontSize: "16", fontFamily: "medium" }}>
                Kobe’s passing is really sticking w/ me in a way I didn’t
                expect.{"\n\n"} He was an icon, the kind of person who wouldn’t
                die this way. My wife compared it to Princess Di’s accident.
                {"\n\n"} But the end can happen for anyone at any time, & I
                can’t help but think of anything else lately.
              </Text>
            </View>

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
