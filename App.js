import React, { Fragment } from "react";
import { StyleSheet, View, Text } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import HomeScreen from "./src/components/HomeScreen";
import FavouriteScreen from "./src/components/FavouriteScreen";

import { OFFSET } from "./src/utils/constants";

const TabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Favourite: FavouriteScreen
});

const AppContainer = createAppContainer(TabNavigator);

const App = () => {
  return (
    <View style={styles.container}>
      <AppContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
