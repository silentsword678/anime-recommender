import React from "react";
import {View, Text, StyleSheet} from "react-native";
import AnimeListCard from "./Cards/AnimeList/AnimeListCard";

const AnimeList = () => {
    return(
        <View style={{marginTop: 16}}>
            <AnimeListCard/>
            <AnimeListCard/>
            <AnimeListCard/>
            <AnimeListCard/>



        </View>
    )
}

export default AnimeList
