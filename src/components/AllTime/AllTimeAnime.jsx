import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import AnimeListCard from "../Cards/AnimeList/AnimeListCard";
import { useRouter } from "expo-router";
import useGraphQLFetch from "../../../hooks/useGraphQLFetch";
import { ActivityIndicator } from "react-native";
import { Alert } from "react-native";
import { ScrollView } from "react-native";

const AllTimeAnime = () => {
    //Get the top 5 anime
    var query = `
    query ($page: Int, $perPage: Int) {
        Page(page: $page, perPage: $perPage) {
          pageInfo {
            total
            currentPage
            lastPage
            hasNextPage
            perPage
          }
          media (sort: SCORE_DESC) {
            id
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
    
    var variables = {
        page: 1,
        perPage: 5,
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

export default AllTimeAnime
