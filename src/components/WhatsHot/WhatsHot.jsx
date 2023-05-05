import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import AnimeListCard from "../Cards/AnimeList/AnimeListCard";
import { useRouter } from "expo-router";
import useGraphQLFetch from "../../../hooks/useGraphQLFetch";
import { ActivityIndicator } from "react-native";
import { Alert } from "react-native";
import { ScrollView } from "react-native";

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
    const currentDate = new Date()
    var currentYear = currentDate.getFullYear()
    // console.log("This is the current year: ", currentYear)
    var currentMonth = currentDate.getMonth()
    let season

    switch (currentMonth) {
      case 0:
      case 1:
      case 11:
        season = "WINTER"
        currentYear = currentYear + 1
        break;
      case 2:
      case 3:
      case 4: 
        season = "SPRING"
        break;
      case 5:
      case 6:
      case 7:
        season = "SUMMER"
      case 8:
      case 9:
      case 10:
        season = "FALL"
      default:
        season = "WINTER"
        break;
    }
    
    var variables = {
        page: 1,
        perPage: 5,
        seasonYear: currentYear,
        season: season
    };
    
    const { data, isLoading, error, refetch } = useGraphQLFetch(query, variables);
    console.log(JSON.stringify(data))

  const handleClick = () => {
    refetch();
  };

    return(
        <ScrollView style={{backgroundColor: "black"}}>
           <View style={{marginTop: 16, backgroundColor:"black"}}>
            {/* <AnimeListCard/> */}
            <View>
                {isLoading ? (
                    <ActivityIndicator></ActivityIndicator>
                ): error ? (
                    Alert.alert(
                        'Alert Title', // Title of the alert
                        'Alert message goes here', // Alert message
                        [
                          {
                            text: 'Cancel',
                            onPress: () => console.log('Cancel Pressed'),
                            style: 'cancel',
                          },
                          {
                            text: 'OK',
                            onPress: () => console.log('OK Pressed'),
                          },
                        ],
                        {
                          cancelable: true, // Allows the alert to be dismissed by tapping outside of the alert box
                        }
                      )) : (
                        // console.log(data.Page.media.map),
                        data?.Page?.media?.map((animeData) => (
                            <AnimeListCard 
                                key={animeData.id}
                                animeData={animeData}
                            
                            />
                        ))
                      )
                }
            </View>



        </View>
         </ScrollView>
        
    )
}

export default WhatsHot
