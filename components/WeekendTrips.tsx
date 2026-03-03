import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import React from "react";

const places = [
  {
    name: "Bengaluru",
    image: require("../assets/brand/Bengaluru.jpg"),
  },
  {
    name: "Agumbe",
    image: require("../assets/brand/agumbe11.jpg"),
  },
  {
    name: "Sakeshpur",
    image: require("../assets/brand/sakeshpur.jpg"),
  },
  {
    name: "Mysore",
    image: require("../assets/brand/mysore11.jpg"),
  },
  {
    name: "Madikeri",
    image: require("../assets/brand/Madikeri1.jpg"),
  },
  {
    name: "Ooty",
    image: require("../assets/brand/ootytrain.jpg"),
  },
];

const WeekendTrips = () => {
  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {places.map((place, index) => (
          <View key={index} className="mr-4 relative">
            <Image source={place.image} style={styles.image} />
            <View className="absolute bottom-0 left-0 right-0 h-14 rounded-b-2xl justify-center items-center">
              <Text className="text-white font-bold text-xl">{place.name}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 160, // equivalent to w-40
    height: 208, // equivalent to h-52
    borderRadius: 16, // equivalent to rounded-2xl
    resizeMode: "cover",
  },
});

export default WeekendTrips;
