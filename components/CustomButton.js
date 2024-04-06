import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

const CustomButton = ({ children }) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          pressed ? [styles.btn, styles.pressed] : styles.btn,
        ]}
        android_ripple={{ color: "purple" }}
      >
        <Text style={styles.btnText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 20,
    backgroundColor: "blue",
    overflow: Platform.OS === "android" ? "hidden" : "visible", //ENSURES RIPPLE EFFECT IS HIDDEN IN ANDROID
    marginBottom: 4,
  },
  btn: {
    paddingHorizontal: 60,
    paddingVertical: 6,
  },
  pressed: {
    opacity: 0.5,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
});

export default CustomButton;
