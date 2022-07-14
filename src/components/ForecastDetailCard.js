import { View, Text, FlatList } from 'react-native'
import React from 'react'

export const ForecastDetailCard = ({data}) => {
    const morning = ['morning', data.hour[10]];
    const afternoon = ['afternoon', data.hour[14]];
    const evening = ['evening', data.hour[18]];
    const night = ['night', data.hour[22]];
    const hours = [morning, afternoon, evening, night].map(hour => hour);
    return (
   <View>
       <FlatList
        data={hours}
        renderItem={({item}) => (
          <View
            style={{
              height: '30%',
              backgroundColor: '#5cc7df',
              width: 100,
              borderRadius: 10,
              opacity: 0.5,
              margin: 10,
            }}>
            <View style={{flex: 1, padding: 10, alignItems: 'center'}}>
              <Text>{item[0]}</Text>
              <Text>{item[1].temp_c}</Text>
            </View>
          </View>
        )}
        keyExtractor={(item) => item[0]}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
   </View>
    );
  };
  