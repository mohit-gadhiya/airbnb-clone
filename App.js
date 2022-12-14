/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import { SafeAreaView, StatusBar, Text, useColorScheme } from "react-native";

import { Colors } from "react-native/Libraries/NewAppScreen";
import DestinationSearch from "./src/screens/DestinationSearch";
import Guests from "./src/screens/Guests";
import HomeScreen from "./src/screens/Home/Home";
import SearchResultScreen from "./src/screens/SearchResult";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* <HomeScreen /> */}
      {/* <SearchResultScreen /> */}
      {/* <DestinationSearch /> */}
      <Guests />
    </SafeAreaView>
  );
};

export default App;
