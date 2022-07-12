import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, DetailsScreen} from '../screens';

const Stack = createNativeStackNavigator();

function Navigator() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerShown: false,
        /*   contentStyle: {  }, */
      }}>
      <Stack.Screen name="Main" component={MainScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default Navigator;
