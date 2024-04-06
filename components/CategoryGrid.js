import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
  ImageBackground,
} from "react-native";

const CategoryGrid = ({ title, color, description, image, handlePress }) => {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Pressable
        style={({ pressed }) => [
          styles.btn,
          pressed ? styles.btnPressed : null,
        ]}
        android_ripple={{ color: "lightblue" }}
        onPress={handlePress}
      >
        <View style={styles.innerGrid}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "600",
              color: "black",
              padding: 10,
            }}
          >
            {title}
          </Text>
          {/* <Text
            style={{
              fontSize: 14,
              fontWeight: "200",
              color: "gray",
            }}
          >
            {description}
          </Text> */}
        </View>
      </Pressable>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 14,
    height: 160,
    borderRadius: 4,
    elevation: 8, //ANDROID
    shadowColor: "black", //IOS
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible", //ENSURES RIPPLE EFFECT IS HIDDEN IN ANDROID
  },
  btn: {
    flex: 1,
  },
  btnPressed: {
    opacity: 0.5,
  },
  innerGrid: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default CategoryGrid;
