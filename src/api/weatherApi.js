import axios from 'axios';

const weatherApi = axios.create({
  baseURL: 'http://api.weatherapi.com/v1',
  params: {
    key: '6be8c28794924ed8a2a184922222905',
    aqi: 'no',
  },
});
export default weatherApi;
