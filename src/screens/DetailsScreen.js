import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useMemo} from 'react';
import Background from '../components/Background';
import Icon from 'react-native-vector-icons/Ionicons';
import {useForecastResponse} from '../hooks/useForecastResponse';
import {Loading} from '../components/Loading';
export const DetailsScreen = ({route, navigation}) => {
  const {item} = route.params;
  const {forecastResponse, isLoading} = useForecastResponse(item.location.name);
  const memoForecast = useMemo(() => forecastResponse, [forecastResponse]);
  const uri = `https:${item.current.condition.icon}`;
  return (
    <View style={styles.root}>
      <View style={styles.commonDetailContainer}>
        <Background>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={styles.backButton}>
            <Icon color="white" name="arrow-back-outline" size={30} />
          </TouchableOpacity>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-around',
              padding: 8,
            }}>
            <View style={{flex: 1, padding: 10}}>
              <Text>{`${item.location.name}, ${item.location.region}  `}</Text>
              <Text>{`${item.location.country} `}</Text>
            </View>

            <View>
              <Image source={{uri}} style={{width: 200, height: 200}} />
            </View>
          </View>
        </Background>
      </View>

      <View style={styles.detailContainer}>
        <Text>Forecast</Text>
        {isLoading ? (
          <Loading />
        ) : (
          <ForecastDetailCard data={memoForecast.forecast.forecastday[0]} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
  },
  backButton: {
    paddingLeft: 20,
    marginTop: 50,
  },
  commonDetailContainer: {
    flex: 40,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: '#822CB8',
    overflow: 'hidden',
  },

  detailContainer: {
    height: '60%',
  },
});

const ForecastDetailCard = ({data}) => {
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
