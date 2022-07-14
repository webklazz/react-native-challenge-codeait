import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export const CardOfCities = ({data}) => {
  const uri = `https:${data.item.current.condition.icon}`;
  const navigation = useNavigation()
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Details', data)}
    >
    <View style={styles.root}>
      <View style={{flexDirection: 'row'}}>
        <Image source={{uri}} style={{width: 70, height: 70}} />
        <View
          style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'flex-start',
            padding: 2,
          }}>
          <Text style={styles.title}>Location</Text>
          <Text style={styles.name}>{data.item.location.name}</Text>
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
        <View>
          <Text style={styles.titleIndicators}>Wind</Text>
          <Text style={styles.indicators}>{data.item.current.wind_kph}</Text>
        </View>
        <View>
          <Text style={styles.titleIndicators}>Temp</Text>
          <Text style={styles.indicators}>{data.item.current.temp_c} º C</Text>
        </View>
        <View>
          <Text style={styles.titleIndicators}>Humidit</Text>
          <Text style={styles.indicators}>{data.item.current.humidity} %</Text>
        </View>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  root: {
    padding: 10,
    backgroundColor: '#822CB8',
    marginLeft: 20,
    marginRight: 10,
    borderRadius: 15,
    width: 220,
  },
  name: {
    fontSize: 25,
    color: 'white',
  },
  title: {
    color: 'white',
    fontSize: 15,
  },
  indicators:{
    color:'white',
    fontSize: 20,
  },
  titleIndicators:{
    color:'#5cc7df',
    fontSize: 15,
  }
});
