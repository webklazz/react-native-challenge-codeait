import { StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import React from 'react'

export const Loading = () => {
  return (
    <View style={styles.root}>
      <ActivityIndicator size={80} color="#A638EB" />
    </View>
  )
}



const styles = StyleSheet.create({
  root:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

