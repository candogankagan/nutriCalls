import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {normalize, SCREEN_WIDTH, SCREEN_HEIGHT} from '../../utils/dimensions';
import {OnBoardingProps} from '.';
import Button from '../../components/Core/Button';
import {CoreText} from '../../components';

const OnBoardingSecond = ({step, setStep}: OnBoardingProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{
          width: 100,
          height: 100,
          resizeMode: 'contain',
          marginBottom: normalize(30),
        }}
      />
      <CoreText
        customStyle={{
          marginBottom: normalize(10),
          paddingHorizontal: normalize(16),
          textAlign: 'center',
        }}
        text="Choose your nutritionist and plan your videocall."
        variant="headingLarge/semiBold"
        color="#fff"
      />
      <Image
        source={require('../../assets/images/onboardSecond.png')}
        style={{
          position: 'absolute',
          bottom: '18%',
          padding: normalize(4),
          borderRadius: 30,
          width: SCREEN_WIDTH * 0.95,
          height: SCREEN_HEIGHT * 0.4,
          resizeMode: 'cover',
        }}
      />
      <View style={{position: 'absolute', bottom: normalize(30)}}>
        <Button label="Continue" onPress={() => setStep(step + 1)} />
      </View>
    </View>
  );
};

export default OnBoardingSecond;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '23%',
  },
});
