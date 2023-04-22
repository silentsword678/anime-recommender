import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const AnimeListCard = () => {
  const [animeData, setAnimeData] = useState({
    Media: {
      title: {
        romaji: "",
        english: "",
        native: "",
      },
      coverImage: {
        medium: "",
      },
    },
  });

  useEffect(() => {
    const getAnimeData = async () => {
      // Here we define our query as a multi-line string
      // Storing it in a separate .graphql/.gql file is also possible
      var query = `
            query ($id: Int) { # Define which variables will be used in the query (id)
              Media (id: $id, type: ANIME) { # Insert our variables into the query arguments (id) (type: ANIME is hard-coded in the query)
                id
                title {
                  romaji
                  english
                  native
                }
                coverImage {
                  medium
                }
              }
            }
          `;

      // Define our query variables and values that will be used in the query request
      var variables = {
        id: 15125,
      };

      // Define the config we'll need for our Api request
      var url = "https://graphql.anilist.co",
        options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            query: query,
            variables: variables,
          }),
        };

      try {
        // Make the HTTP Api request
        const response = await fetch(url, options);
        const data = await response.json();
        // console.log(JSON.stringify(data));
        setAnimeData(data.data);
        // console.log("AnimeData: ", JSON.stringify(data))
      } catch (error) {
        alert("Error, check console");
        console.error(error);
      }
    };

    getAnimeData();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.containerBtn}>
        <View style={styles.containerImageAndText}>
          <Image
            source={
              animeData?.Media?.coverImage?.medium
                ? { uri: animeData.Media.coverImage.medium }
                : require("../../../../assets/02099991.jpg")
            }
            resizeMode="contain"
            style={styles.animeImage}
          />
          <Text style={styles.animeDescription}>
            {animeData?.Media?.title?.english} {animeData?.Media?.title?.native}
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
    backgroundColor: "#00AA00",
  },
  container: {
    padding: 10,
    backgroundColor: "#FF0000",
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
  },
});

export default AnimeListCard;
