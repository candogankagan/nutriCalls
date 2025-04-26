import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {normalize, SCREEN_WIDTH} from '../../utils/dimensions';
import {OnBoardingProps} from '.';
import Button from '../../components/Core/Button';
import CoreText from '../../components/Core/Text';
import {SCREEN_HEIGHT} from '../../styles';

const OnBoardingFirst = ({step, setStep}: OnBoardingProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/logo.png')}
        style={{width: 100, height: 100, resizeMode: 'contain'}}
      />
      <CoreText
        customStyle={{
          marginTop: normalize(20),
          marginBottom: normalize(10),
          paddingHorizontal: normalize(16),
        }}
        text="Hello!"
        variant="headingLarge/semiBold"
        color="#fff"
      />
      <Image
        source={require('../../assets/images/first.png')}
        style={{
          position: 'absolute',
          bottom: '18%',
          padding: normalize(4),
          borderRadius: 30,
          width: SCREEN_WIDTH,
          height: SCREEN_HEIGHT * 0.5,
          resizeMode: 'stretch',
        }}
      />
      <View style={{position: 'absolute', bottom: normalize(30)}}>
        <Button label="Let's start" onPress={() => setStep(step + 1)} />
      </View>
    </View>
  );
};

export default OnBoardingFirst;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: '23%',
  },
});
