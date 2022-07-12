import React, { useState , useEffect} from 'react';
import {View, Text, TextInput, Image} from 'react-native';
import weatherApi from '../api/weatherApi';
import Background from '../components/Background';
import Search from '../components/Search';
import WeatherDetails from '../components/WeatherDetails';


export const MainScreen = () => {
    const [data, setData] = useState('')
    const getWeather = async () => {
       try {
        const res = await weatherApi.get('&q=London&aqi=no')
        return setData(res.data)
       } catch (error) {
        console.log(error)
       }
             }
  const [date, setDate] = useState('')
    useEffect(() => {
        const newDate = new Date().toDateString().slice(0, 10);
        setDate(newDate)
        getWeather()
        console.log(data)
    }, [])
  return (
    <Background>
      <View style={{marginTop: 35}}>
        <View>
            <Text>{date}</Text>
        </View>
        {/* Search */}
        <Search/>
        {/* Details */}
       <WeatherDetails/>
        {/* List of cities */}
        <View>
          <Text>List</Text>
        </View>
      </View>
    </Background>
  );
};
