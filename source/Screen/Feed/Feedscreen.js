import React, { Component } from "react";
import Swiper from "react-native-deck-swiper";
import { Button, StyleSheet, Text, View, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinkPreview } from "@flyerhq/react-native-link-preview";
import Color from "../../../assets/Color";
// demo purposes only
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

export default class Feedscreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [...range(1, 50)],
      swipedAllCards: false,
      swipeDirection: "",
      cardIndex: 0,
    };
  }

  renderCard = (card, index) => {
    return (
      <View style={styles.card}>
        <Image
          style={{ width: "100%", height: "40%" }}
          source={{
            uri: "https://www.forbes.com/wheels/wp-content/uploads/2021/07/GM-EVgo-charger-1200px.jpg",
          }}
        />
        <View style={{ padding: 12 }}>
          <Text style={{ fontFamily: "black", fontSize: 22, color: "white" }}>
            Electric Vehicles: A roadmap to mass adoption in India
          </Text>
          <Text
            style={{
              fontFamily: "book",
              fontSize: 16,
              marginTop: 12,
              color: "white",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Contrary to popular
            belief, Lorem Ipsum is not simply random text. It has roots in a
            piece of classical Latin literature from 45 BC, making it over 2000
            years old.
          </Text>
          {/* <LinkPreview text='This link https://auto.economictimes.indiatimes.com/news/policy/jharkhand-to-have-e-vehicle-policy-by-26/88371019 can be extracted from the text' /> */}
        </View>
      </View>
    );
  };

  onSwiped = (type) => {
    console.log(`on swiped ${type}`);
  };

  onSwipedAllCards = () => {
    this.setState({
      swipedAllCards: true,
    });
  };

  swipeLeft = () => {
    this.swiper.swipeLeft();
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "black" }}>
        <Swiper
          ref={(swiper) => {
            this.swiper = swiper;
          }}
          containerStyle={{ backgroundColor: "black" }}
          onSwiped={() => this.onSwiped("general")}
          onSwipedLeft={() => this.onSwiped("left")}
          onSwipedRight={() => this.onSwiped("right")}
          onSwipedTop={() => this.onSwiped("top")}
          onSwipedBottom={() => this.onSwiped("bottom")}
          onTapCard={this.swipeLeft}
          cards={this.state.cards}
          cardIndex={this.state.cardIndex}
          cardVerticalMargin={80}
          renderCard={this.renderCard}
          onSwipedAll={this.onSwipedAllCards}
          stackSize={3}
          stackSeparation={15}
          overlayLabels={{
            bottom: {
              title: "BLEAH",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            },
            left: {
              title: "NOPE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: -30,
                },
              },
            },
            right: {
              title: "LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                  marginTop: 30,
                  marginLeft: 30,
                },
              },
            },
            top: {
              title: "SUPER LIKE",
              style: {
                label: {
                  backgroundColor: "black",
                  borderColor: "black",
                  color: "white",
                  borderWidth: 1,
                },
                wrapper: {
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                },
              },
            },
          }}
          animateOverlayLabelsOpacity
          animateCardOpacity
          swipeBackCard
        >
          {/* <Button onPress={() => this.swiper.swipeBack()} title='Swipe Back' /> */}
        </Swiper>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  card: {
    flex: 1,
    borderRadius: 4,
    // borderWidth: 0.5,
    // borderColor: '#EBEBEB',
    justifyContent: "flex-start",
    backgroundColor: Color.darkgrey,
  },
});
