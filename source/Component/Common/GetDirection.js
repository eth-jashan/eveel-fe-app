import getDirections from "react-native-google-maps-directions";
const getGoogleDirections = (lat, long, origin) => {
  const data = {
    source: origin,
    destination: {
      latitude: parseFloat(lat),
      longitude: parseFloat(long),
    },
    params: [
      {
        key: "travelmode",
        value: "driving", // may be "walking", "bicycling" or "transit" as well
      },
      {
        key: "dir_action",
        value: "navigate", // this instantly initializes navigation using the given travel mode
      },
    ],
    // waypoints: [
    //   {
    //     latitude: -33.8600025,
    //     longitude: 18.697452
    //   },
    //   {
    //     latitude: -33.8600026,
    //     longitude: 18.697453
    //   },
    //      {
    //     latitude: -33.8600036,
    //     longitude: 18.697493
    //   }
    // ]
  };

  getDirections(data);
};

export default getGoogleDirections;
