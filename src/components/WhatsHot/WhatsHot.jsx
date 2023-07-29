import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import AnimeListCard from "../Cards/AnimeList/AnimeListCard";
import useGraphQLFetch from "../../../hooks/useGraphQLFetch";
import { ActivityIndicator } from "react-native";
import { Alert } from "react-native";
import { styleProps } from "react-native-web/dist/cjs/modules/forwardedProps";

const WhatsHot = () => {
  //Get the top 5 anime
  var query = `
    query ($page: Int, $perPage: Int, $seasonYear: Int, $season: MediaSeason) {
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          #This filters by season year and finds the top rated.
          media (sort: SCORE_DESC, seasonYear: $seasonYear, season: $season) {
            id
            seasonYear
            season
            coverImage {
              medium
            }
            averageScore
            title {
              romaji
              english
              native
            }
          }
        }
      }
      
    `;
  // get the current date and add to query for the current season
  const currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  // console.log("This is the current year: ", currentYear)
  var currentMonth = currentDate.getMonth();
  let season;

  switch (currentMonth) {
    case 0:
    case 1:
    case 11:
      season = "WINTER";
      currentYear = currentYear + 1;
      break;
    case 2:
    case 3:
    case 4:
      season = "SPRING";
      break;
    case 5:
    case 6:
    case 7:
      season = "SUMMER";
      break;
    case 8:
    case 9:
    case 10:
      season = "FALL";
      break;
    default:
      season = "WINTER";
      break;
  }

  console.log("This is the current currentMonth: ", currentMonth)

  console.log("This is the current season: ", season)

  var variables = {
    page: 1,
    perPage: 5,
    seasonYear: currentYear,
    season: season,
  };

  const { data, isLoading, error, refetch } = useGraphQLFetch(query, variables);

  const handleClick = () => {
    refetch();
  };

  return (
    <View style={{ marginTop: 16, backgroundColor: "black", flex: 1 }}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : error ? (
          <Alert
            title={"Alert Title"}
            message={"Alert message goes here"}
            buttons={[
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel",
              },
              { text: "OK", onPress: () => console.log("OK Pressed") },
            ]}
            cancelable={true}
          />
        ) : (
          <FlatList
            // style={{ backgroundColor: "black" }}
            data={data?.Page?.media}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => <AnimeListCard animeData={item} />}
            contentContainerStyle={{ columnGap: 8 }}
          />
        )}
      </View>
    </View>
  );
};

export default WhatsHot;
