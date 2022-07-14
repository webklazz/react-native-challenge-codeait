import { View, TextInput } from 'react-native'
import React from 'react'

export const Search = () => {
  return (
    <View style={{marginVertical: 20}}>
    <TextInput
      style={{
        backgroundColor: 'white',
        marginHorizontal: 20,
        borderRadius: 15,
      }}>
      Search
    </TextInput>
  </View>
  )
}

