import React from "react";
import { StyleSheet, Image, SafeAreaView, View } from "react-native";

const AppHeader = () => {
  return (
    <SafeAreaView style={styles.AppHeader}>
      <Image
        source={require("../assets/Logo.png")}
        resizeMode="contain"
        style={{ height: 50 }}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  AppHeader: {
    width: "100%",
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    padding: 20,
  },
});

export default AppHeader;
