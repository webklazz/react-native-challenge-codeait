import React, {useState, useEffect, useMemo} from 'react';
import {View, Text, FlatList} from 'react-native';
import  {Background, Loading, Search, CardOfCities, WeatherDetails} from '../components';
import {useLocationResponses} from '../hooks/useLocationResponses';
import { getDate } from '../utils/getDate';

export const MainScreen = () => {
  const {
    isLoading,
    currentLocationResponse,
    firstCityResponse,
    secondCityResponse,
    thirdCityResponse,
    fourthCityResponse,
    fifthCityResponse,

  } = useLocationResponses();
  /* MEMO */
  const memoizedCurrentLocationResponse = useMemo(
    () => currentLocationResponse,
    [currentLocationResponse],
  );
  const memoFirstCity = useMemo(
    () => firstCityResponse,
    [firstCityResponse],
  );
  const memoSecondCity = useMemo(
    () => secondCityResponse,
    [secondCityResponse],
  );
  const memoThirdCity = useMemo(
    () => thirdCityResponse,
    [thirdCityResponse],
  );
  const memoFourthCity = useMemo(
    () => fourthCityResponse,
    [fourthCityResponse],
  );  
  const memoFifthCity = useMemo(
    () => fifthCityResponse,
    [fifthCityResponse],
  );
  /* MEMO */
  const { date } = getDate();
  const memodate =useMemo(() => date, [date])
  if (isLoading) {
    return <Loading />;
  }
  const listofCities = [
    memoFirstCity,
    memoSecondCity,
    memoThirdCity,
    memoFourthCity,
    memoFifthCity,
  ].map((city) => city)
  return (
    <Background>
      <View style={{marginTop: 35}}>
        <View>
          <Text style={{color: 'white', marginHorizontal: 20, fontSize: 20}}>
            {memodate}
          </Text>
        </View>
        {/* Search */}
        <Search />
        {/* Details */}
        <WeatherDetails data={memoizedCurrentLocationResponse} />
        {/* List of cities */}
        <Text
          style={{
            color: 'white',
            marginHorizontal: 20,
            marginVertical: 20,
            fontSize: 20,
          }}>
          Other Cities
        </Text>
        <View>
         <FlatList
              data={listofCities}
              renderItem={city => <CardOfCities data={city} />}
              horizontal
              keyExtractor={(item) => item.location.name.toString()} 
              showsHorizontalScrollIndicator={false}
            />  
        </View>
      </View>
    </Background>
  );
};
