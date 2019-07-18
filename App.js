import React from "react";
import { StyleSheet, View } from "react-native";
import {
  createBottomTabNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome5";

import HomeScreen from "./src/screens/HomeScreen";
import FavouriteScreen from "./src/screens/FavouriteScreen";

import { OFFSET, routes } from "./src/utils/constants";

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName = "question";

  if (routeName === routes.homeStack.path) {
    iconName = "home";
  } else if (routeName === routes.favouriteStack.path) {
    iconName = "heart";
  }

  return <Icon name={iconName} light size={25} color={tintColor} />;
};

const HomeStack = createStackNavigator(
  {
    [routes.homeScreen.path]: HomeScreen
  },
  {
    initialRouteName: routes.homeScreen.path,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#3cb72c"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: OFFSET * 1.5
      }
    }
  }
);

const FavouriteStack = createStackNavigator(
  {
    [routes.favouriteScreen.path]: FavouriteScreen
  },
  {
    initialRouteName: routes.favouriteScreen.path,
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#3cb72c"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontSize: OFFSET * 1.5
      }
    }
  }
);

const TabNavigator = createBottomTabNavigator(
  {
    [routes.homeStack.path]: HomeStack,
    [routes.favouriteStack.path]: FavouriteStack
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
