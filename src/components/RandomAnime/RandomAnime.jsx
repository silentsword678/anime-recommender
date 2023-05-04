import { Text, View } from 'react-native'
import React, { Component } from 'react'

const RandomAnime = () => {
    const randomNumber = Math.floor(Math.random() * 11)
    return (
      <View>
        <Text>{randomNumber}</Text>
      </View>
    )
  }

export default RandomAnime