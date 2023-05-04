import React from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native'

const AnimeDetails = () => {
  return (
    <View style={styles.container}>

    </View>
  )
}

const styles = StyleSheet.create({
    containerBtn: {
      justifyContent: "center",
      alignItems: "center",
      paddingVertical: 10,
      paddingHorizontal: 20,
      backgroundColor: "#444444",
    },
    container: {
      padding: 10,
      flex: 1
    },
    animeImage: {
      width: 150,
      height: 150,
    },
    containerImageAndText: {
      flexDirection: "row",
      alignItems: "center",
    },
    animeDescription: {
      marginLeft: 10,
      flex: 1,
      flexWrap: "wrap",
      color: "white",
    },
  });

export default AnimeDetails