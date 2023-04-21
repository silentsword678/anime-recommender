import React from "react";
import { View, StyleSheet } from "react-native";
import Home from './src/components/Home'
import AnimeList from './src/components/AnimeList'

const App = () =>{
    return(
        <View style={styles.container}>
            <AnimeList/>
        </View>

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center"
    }
})

export default App
