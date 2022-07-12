import { View, Text, Image } from 'react-native'
import React from 'react'

const WeatherDetails = () => {
    const uri = 'https://cdn.weatherapi.com/weather/64x64/day/113.png';
  return (
    <View>
    <Text
      style={{
        fontSize: 60,
        fontWeight: 'bold',
        color: 'white',
        padding: 10,
        marginHorizontal: 20,
      }}>
      18 °C
    </Text>
    <View style={{flexDirection: 'row'}}>
      <Image source={{uri}} style={{width: 200, height: 200}} />

      <View>
        <Text>Wind</Text>
        <Text>Humidit</Text>
        <Text>Detailed</Text>
      </View>
    </View>
  </View>
  )
}

export default WeatherDetails