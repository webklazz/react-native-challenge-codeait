import React, {createContext, useEffect, useState} from 'react';
import {AppState, Platform} from 'react-native';
import {check, PERMISSIONS, request} from 'react-native-permissions';

export const permissionInitState = {
  locationStatus: 'unavailable',
};
export const PermissionsContext = createContext({});

export const PermissionsProvider = ({children}) => {
  const [permissions, setPermissions] = useState(permissionInitState);

  useEffect(() => {
    AppState.addEventListener('change', state => {
      if (state !== 'active') return;
      checkLocationPermission();
    });
  }, []);

  const askLocationPermission = async () => {
    let permissionStatus;
    if (Platform.OS === 'android') {
      permissionStatus = await request(
        PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
      );
    } else {
      throw new Error('Platform not supported');
    }
    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };
  const checkLocationPermission = async () => {
    let permissionStatus;
    if (Platform.OS === 'android') {
      permissionStatus = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
    } else {
      throw new Error('Platform not supported');
    }
    setPermissions({
      ...permissions,
      locationStatus: permissionStatus,
    });
  };

  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        askLocationPermission,
        checkLocationPermission,
      }}>
      {children}
    </PermissionsContext.Provider>
  );
};
