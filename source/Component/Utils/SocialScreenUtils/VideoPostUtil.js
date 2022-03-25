import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import mustang from "../../../../assets/Images/mustang.jpeg";
import dummy_video from "../../../../assets/IMG_7517.mp4";
import Video from "react-native-video";

const VideoPostUtil = (props) => {
  return (
    <View style={{ marginTop: 5 }}>
      <View>
        <Text style={{ fontSize: 16, fontFamily: "medium", color: "white" }}>
          Kobe’s passing is really sticking w/ me in a way I didn’t expect.
          {"\n\n"} He was an icon, the kind of person who wouldn’t die this way.
          My wife compared it to Princess Di’s accident.
          {"\n\n"} But the end can happen for anyone at any time, & I can’t help
          but think of anything else lately.
        </Text>
      </View>

      <TouchableOpacity style={{ width: "100%", height: "40%", marginTop: 20 }}>
        <Image
          source={dummy_video}
          style={{ width: "100%", height: "100%", borderRadius: 10 }}
        />
        {/* <Video
          source={dummy_video}
          ref={(ref) => {
            this.player = ref;
          }} // Store reference
          onBuffer={this.onBuffer} // Callback when remote video is buffering
          onError={this.videoError} // Callback when video cannot be loaded
          style={styles.backgroundVideo}
        /> */}
      </TouchableOpacity>
    </View>
  );
};

export default VideoPostUtil;
