import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";


const AnimeListCard = ({animeData}) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerBtn}>
        <View style={styles.containerImageAndText}>
          <Image
            source={
              animeData?.coverImage?.medium
                ? { uri: animeData.coverImage.medium }
                : require("../../../../assets/noImageAvailable.jpg")
            }
            resizeMode="contain"
            style={styles.animeImage}
          />
          <Text style={styles.animeDescription}>
            {animeData?.title?.english ? animeData?.title?.english : animeData?.title?.romaji} {"\n"}
            {animeData?.title?.native}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

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

export default AnimeListCard;
