import React from 'react';
import {View, StyleSheet} from 'react-native';

const Loader = () => {
  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 100,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(34, 37, 43, 0.5)',
  },

});

export default Loader;
