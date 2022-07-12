import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import React from 'react';

const Background = ({children}) => {
  return (
    <View style={styles.root}>
      <LinearGradient
        colors={['#5cc7df','#8A5FEE','#A638EB']}
        style={{...StyleSheet.absoluteFillObject}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
      />
      {children}
    </View>
  );
};

export default Background;

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
});
