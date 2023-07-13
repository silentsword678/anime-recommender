import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import AnimeList from "./src/components/AnimeList";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./navigation/tabs";

const App = () => {
  return (
    // <View style={{ backgroundColor: "black", flex: 1 }}>
    //   <SafeAreaView style={styles.container}>
    //     <ScrollView>
    //       <AnimeList />
    //     </ScrollView>
    //   </SafeAreaView>
    // </View>
    <View style={styles.container}>
      <NavigationContainer style={styles}>
        <Tabs />
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});

export default App;
