import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.messageContainer}>
      <Text>Hello Home</Text>
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

HomeScreen.navigationOptions = () => ({
  title: "Instaleo"
});

export default HomeScreen;
