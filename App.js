import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Home from "./src/components/Home";
import AnimeList from "./src/components/AnimeList";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <AnimeList />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
