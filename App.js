import React from "react";
import { View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import Home from "./src/components/Home";
import AnimeList from "./src/components/AnimeList";

const App = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <AnimeList />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
