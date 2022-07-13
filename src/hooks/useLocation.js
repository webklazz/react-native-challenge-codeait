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
        setCurrentPosition({
          latitude,
          longitude,
        });
        setHasLocation(true);
      },
      err => console.log(err),
      {enableHighAccuracy: true},
    );
  }, []);

  return {
    hasLocation,
    currentPosition,
  };
};
