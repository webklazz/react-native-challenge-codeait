import {useEffect, useState} from 'react';
import weatherApi from '../api/weatherApi';
import {useLocation} from './useLocation';
/* Modificar q para cambiar ciudad */
const URIS = {
  FIRST_CITY: '/current.json?&q=Concepcion',
  SECOND_CITY: '/current.json?&q=Paris',
  THIRD_CITY: '/current.json?&q=Berlin',
  FOURTH_CITY: '/current.json?&q=Madrid',
  FIFTH_CITY: '/current.json?&q=Rome',
};

export const useLocationResponses = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [locationResponses, setLocationResponses] = useState({
    currentLocationResponse: [],
    firstCityResponse: [],
    secondCityResponse: [],
    thirdCityResponse: [],
    fourthCityResponse: [],
    fifthCityResponse: [],
  });

  const {hasLocation, currentPosition} = useLocation();
  const getLocationResponses = async () => {
    const currentPositionPromise = weatherApi.get(
      `/current.json?&q=${currentPosition.latitude},${currentPosition.longitude}`,
    );
    const firstCityPromise = weatherApi.get(URIS.FIRST_CITY);
    const secondCityPromise = weatherApi.get(URIS.SECOND_CITY);
    const thirdCityPromise = weatherApi.get(URIS.THIRD_CITY);
    const fourthCityPromise = weatherApi.get(URIS.FOURTH_CITY);
    const fifthCityPromise = weatherApi.get(URIS.FIFTH_CITY);

    const responses = await Promise.all([
      currentPositionPromise,
      firstCityPromise,
      secondCityPromise,
      thirdCityPromise,
      fourthCityPromise,
      fifthCityPromise,
    ]);
    setLocationResponses({
      currentLocationResponse: responses[0].data,
      firstCityResponse: responses[1].data,
      secondCityResponse: responses[2].data,
      thirdCityResponse: responses[3].data,
      fourthCityResponse: responses[4].data,
      fifthCityResponse: responses[5].data,
    });
    setIsLoading(false);
  };

  useEffect(() => {
    getLocationResponses();
  }, []);

  return {isLoading, ...locationResponses};
};
