import React from 'react';
import { View, StyleSheet } from 'react-native';
import LottieView from 'lottie-react-native';
import Assets from '@/assets';

const Loader = () => {
  return (
    <View style={styles.container}>
      <LottieView source={Assets.LoadingJSON} autoPlay loop style={styles.animation} />
    </View>
  );
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
    backgroundColor: 'rgba(34, 37, 43, 0.5)'
  },
  animation: { width: 72, height: 72 }
});

export default Loader;
