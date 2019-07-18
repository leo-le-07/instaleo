import React from "react";
import { StyleSheet, View } from "react-native";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

import HomeScreen from "./src/components/HomeScreen";
import FavouriteScreen from "./src/components/FavouriteScreen";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName = "question";

  if (routeName === "Home") {
    iconName = "home";
  } else if (routeName === "Favourite") {
    iconName = "heart";
  }

  return <Icon name={iconName} light size={25} color={tintColor} />;
};

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Favourite: FavouriteScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    })
  },
  {
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    }
  }
);

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
