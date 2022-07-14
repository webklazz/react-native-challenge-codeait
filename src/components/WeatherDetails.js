import React from 'react'
import { View, Text, Image , StyleSheet, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export const WeatherDetails = ({data}) => {
  const uri = `https:${data.current.condition.icon}`;
 const navigation = useNavigation()
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
      {data.current.temp_c} º C
    </Text>
    <View style={{flexDirection: 'row', alignItems:'center'}}>
      <Image source={{uri}} style={{width: 240, height: 240}} />

      <View>
        <Text style={styles.titleIndicators}>Wind</Text>
        <Text style={styles.indicators}>{data.current.wind_kph}</Text>
        <Text style={styles.titleIndicators}>Humidt</Text>
        <Text style={styles.indicators}>{data.current.humidity}%</Text>
        <TouchableOpacity   onPress={() => navigation.navigate('Details',{
          item: data
        })}>
        <Text style={styles.titleIndicators}>Detailed</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
  )
}

const styles = StyleSheet.create({
  titleIndicators:{
    fontSize: 18,
    color:'#5cc7df'
  },
  indicators:{
    fontSize: 35  ,
    color: 'white',
  }
})