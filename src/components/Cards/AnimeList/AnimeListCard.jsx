import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

const AnimeListCard = () => {
    return(
            <TouchableOpacity style={styles.containerBtn}>
                <Image source={require('../../../../assets/02099991.jpg')} resizeMode="contain" style={{width: 60, height: 60}}/>
                <Text>Hello I will be an anime soon!</Text>

            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    containerBtn: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row"
    }})

export default AnimeListCard
