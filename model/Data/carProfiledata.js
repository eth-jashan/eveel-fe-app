import React from "react";
import {
  Ionicons,
  FontAwesome5,
  Feather,
  AntDesign,
  FontAwesome,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export const imageGallery = [
  "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV/7042/1576845369560/front-left-side-47.jpg?tr=w-375",
  "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV/7042/1596541097799/rear-left-view-121.jpg?tr=w-375",
  "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Nexon-EV/7042/1576845369560/front-view-118.jpg?tr=w-375",
  "https://stimg2.cardekho.com/images/roadTestimages/930x620/20200121_083834/654/tata0.jpg?tr=w-375",
];
export const exteriorInterior = [
  "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Kona/Interior/pc/Hyundai_Kona_electric_interior_bottom_PC_512x340_1_wireless-charging.jpg",
  "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Kona/Interior/pc/Hyundai_Kona_electric_interior_bottom_PC_512x340_2_electronic_brake.jpg",
  "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Kona/Interior/pc/Hyundai_Kona_electric_interior_bottom_PC_512x340_3_adjustable_driver_seat.jpg",
  "https://www.hyundai.com/content/dam/hyundai/in/en/data/find-a-car/Kona/Interior/pc/Hyundai_Kona_electric_interior_bottom_PC_512x340_4_driver_only_AC_adjustment.jpg",
];
export const features = [
  {
    value: "90 min",
    title: "Battery",
    component: (
      <Feather
        style={{ alignSelf: "center" }}
        name="battery-charging"
        size={24}
        color={"white"}
      />
    ),
  },
  {
    value: 452,
    title: "Range",
    component: (
      <FontAwesome5
        style={{ alignSelf: "center" }}
        name="road"
        size={24}
        color={"white"}
      />
    ),
  },
  {
    value: "127 bhp",
    title: "Horse",
    component: (
      <FontAwesome5
        style={{ alignSelf: "center" }}
        name="horse-head"
        size={24}
        color={"white"}
      />
    ),
  },
  {
    value: "245nm",
    title: "Torque",
    component: (
      <FontAwesome
        style={{ alignSelf: "center" }}
        name="gears"
        size={24}
        color={"white"}
      />
    ),
  },
  {
    value: "9.9s",
    title: "0-100Km/h",
    component: (
      <MaterialCommunityIcons
        style={{ alignSelf: "center" }}
        name="speedometer"
        size={24}
        color={"white"}
      />
    ),
  },
];
export const variantList = [
    { name: "Premium", price: "₹ 23.79 Lakh*" },
    { name: "Premium Dual Tone", price: "₹ 23.97 Lakh*" },
  ];
 export const colorVariantList = [
    { name: "Typhoon\n Silver", hexCode: "#9d9e9f" },
    { name: "Phantom\n Black", hexCode: "#171416" },
    { name: "Marine\n Blue", hexCode: "#708fbe" },
    { name: "Polar\n White DT", hexCode: "white" },
    { name: "Polar\n White", hexCode: "#e1e2ce" },
  ];