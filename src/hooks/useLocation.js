import {useEffect, useState} from 'react';
import Geolocation from '@react-native-community/geolocation';

export const useLocation = () => {
  const initialCurrentState = {
    latitude: null,
    longitude: null,
  };
  const [hasLocation, setHasLocation] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(initialCurrentState);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      info => {
        const {latitude, longitude} = info.coords;
        console.log(latitude, longitude);
        setCurrentPosition({
          latitude,
          longitude,
        });
        setHasLocation(true);
      },
      err => console.error('here',err),
      {enableHighAccuracy: false},
    );
  }, []);

  return {
    hasLocation,
    currentPosition,
  };
};
