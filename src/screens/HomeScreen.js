import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import Post from "../components/Post";

import { OFFSET } from "../utils/constants";

const HomeScreen = () => (
  <View style={styles.container}>
    <View style={styles.postContainer}>
      <FlatList
        data={[
          {
            key: "1",
            uri:
              "https://images.unsplash.com/photo-1563377256546-b6379988d030?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
          },
          {
            key: "2",
            uri:
              "https://images.unsplash.com/photo-1563386732972-99222d5cacb3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
            description:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using"
          }
        ]}
        renderItem={({ item }) => (
          <View style={styles.postItem}>
            <Post uri={item.uri} description={item.description} />
          </View>
        )}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  postContainer: {
    flex: 1
  },
  postItem: {
    marginBottom: OFFSET
  }
});

HomeScreen.navigationOptions = () => ({
  title: "Instaleo"
});

export default HomeScreen;
