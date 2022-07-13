import React, { useContext } from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import { PermissionsContext } from '../context/PermissionsContext';

export const PermissionScreen = () => {
const {permissions , askLocationPermission} = useContext(PermissionsContext)
 
  return (
    <View style={styles.root}>
      <Button title="Permission" onPress={askLocationPermission} />
      <Text>{JSON.stringify(permissions, null, 5)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
