import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavouriteScreen = () => (
  <View style={styles.container}>
    <View style={styles.messageContainer}>
      <Text>Favourite</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  messageContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

FavouriteScreen.navigationOptions = () => ({
  title: "Favourite"
});

export default FavouriteScreen;
