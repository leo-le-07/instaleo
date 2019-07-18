import React from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

import { OFFSET, fontSizes } from "../utils/constants";

const Post = props => {
  const { description, uri } = props;
  const width = Dimensions.get("window").width;

  return (
    <View style={styles.container}>
      <View style={styles.createdDateContainer}>
        <Text style={styles.createdDate}>15/09/2019 lúc 8:00</Text>
      </View>
      <Image
        source={{ uri }}
        resizeMode="cover"
        style={{ height: OFFSET * 38, width }}
      />
      <View style={styles.actionContainer}>
        <Icon name="heart" size={25} light />
      </View>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  createdDateContainer: {
    paddingHorizontal: OFFSET / 1.25,
    paddingVertical: OFFSET * 1.25
  },
  createdDate: {
    fontSize: fontSizes.normal,
    fontWeight: "700"
  },
  actionContainer: {
    paddingHorizontal: OFFSET / 1.25,
    paddingVertical: OFFSET * 1.25
  },
  description: {
    paddingHorizontal: OFFSET / 1.25,
    fontSize: fontSizes.normal
  }
});

export default Post;
