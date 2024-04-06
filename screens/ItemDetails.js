import React from "react";
import { Button, Image, Platform, StyleSheet, Text, View } from "react-native";
import CustomButton from "../components/CustomButton";

const ItemDetails = ({ route }) => {
  const mealData = route.params.data;
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: mealData?.image,
        }}
      />
      <Text
        style={{
          fontSize: 24,
          textAlign: "center",
          color: "maroon",
          fontWeight: "bold",
        }}
      >
        {mealData?.title}{" "}
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "200",
          color: "indigo",
          textAlign: "center",
          marginTop: 20,
        }}
      >
        {mealData?.description}
      </Text>
      <CustomButton>Buy Meal</CustomButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 2,
    borderWidth: 1,
    borderColor: "lightgray",
    margin: 10,
    borderRadius: 10,
    backgroundColor: "white",
    elevation: 4, //ANDROID
    shadowColor: "black", //IOS
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible", //ENSURES RIPPLE EFFECT IS HIDDEN IN ANDROID
  },
  img: {
    marginTop: 2,
    width: "100%",
    height: 250,
    resizeMode: "cover",
    borderRadius: 10,

    alignSelf: "center",
  },
});

export default ItemDetails;
