import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";
import AnimeListCard from "./Cards/AnimeList/AnimeListCard";
import { useRouter } from "expo-router";
import useGraphQLFetch from "../../hooks/useGraphQLFetch";
import { ActivityIndicator } from "react-native";
import { Alert } from "react-native";

const AnimeList = () => {
    var query = `
    query ($id: Int, $page: Int, $perPage: Int, $search: String) {
      Page (page: $page, perPage: $perPage) {
        pageInfo {
          total
          currentPage
          lastPage
          hasNextPage
          perPage
        }
        media (id: $id, search: $search) {
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
        perPage: 25
    };
    
    const { data, isLoading, error, refetch } = useGraphQLFetch(query, variables);
    console.log(JSON.stringify(data))

  const handleClick = () => {
    refetch();
  };

    return(
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
                        // console.log(data.Page.media.map)
                        data?.Page?.media?.map((animeData) => (
                            <AnimeListCard 
                                animeData={animeData}
                            
                            />
                        ))
                      )
                }
            </View>



        </View>
    )
}

export default AnimeList
