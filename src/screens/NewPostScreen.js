import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewPostScreen = () => (
  <View style={styles.container}>
    <View style={styles.messageContainer}>
      <Text>New Post Screen</Text>
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

NewPostScreen.navigationOptions = () => ({
  title: "New Post"
});

export default NewPostScreen;
