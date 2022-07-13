/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Navigator from './src/navigator/Navigator';
import {PermissionsProvider} from './src/context/PermissionsContext';

const AppState = ({children}) => {
  return (
         <PermissionsProvider>
            {children}
         </PermissionsProvider>
         );
};

const App = () => {
  return (
    <NavigationContainer>
      <AppState>
        <StatusBar translucent currentHeight backgroundColor="transparent" />
        <Navigator />
      </AppState>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
