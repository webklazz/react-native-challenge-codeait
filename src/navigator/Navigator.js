import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {MainScreen, DetailsScreen, PermissionScreen} from '../screens';
import {PermissionsContext} from '../context/PermissionsContext';
import {Loading} from '../components/Loading';

const Stack = createNativeStackNavigator();

function Navigator() {
  const {permissions} = useContext(PermissionsContext);

  if (permissions.locationStatus === 'unavailable') {
    return <Loading />;
  }
  return (
    <Stack.Navigator
      initialRouteName="Permission"
      screenOptions={{
        headerShown: false,
      }}>
      {permissions.locationStatus === 'granted' 
      ? (
        <>
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </> 
        ) 
      : (
          <Stack.Screen name="Permission" component={PermissionScreen} />
        )}
    </Stack.Navigator>
  );
}

export default Navigator;
