/* eslint-disable react-hooks/rules-of-hooks */
import {
  View,
  StyleSheet,
  Image,
  BackHandler,
  ImageBackground,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import OnBoardingFirst from './OnBoardingFirst';
import OnBoardingSecond from './OnBoardingSecond';
import OnBoardingThird from './OnBoardingThird';
import {normalize, SCREEN_HEIGHT} from '../../utils/dimensions';

export interface OnBoardingProps {
  step: number;
  setStep: any;
}

export default function Index() {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      () => true,
    );

    return () => {
      backHandler.remove();
    };
  }, []);

  const steps = {
    0: OnBoardingFirst,
    1: OnBoardingSecond,
    2: OnBoardingThird,
  };

  const images = {
    0: require('../../assets/images/first.png'),
    1: require('../../assets/images/second.png'),
    2: require('../../assets/images/third.png'),
  };

  const [step, setStep] = useState<number>(0);
  const CurrentStepComponent = steps[step as keyof typeof steps];

  return (
    <ImageBackground
      style={styles.page}
      source={require('../../assets/images/background.png')}>
      <View style={styles.header}>
        <View style={styles.progressBar}>
          <View style={styles.progressLine}>
            <View style={styles.gray} />
            <View
              style={{
                ...styles.red,
                width: step === 0 ? normalize(55) : normalize(115),
              }}
            />
          </View>
          <View style={styles.progressLine}>
            <View style={styles.gray} />
            {(step === 1 || step === 2) && (
              <View
                style={{
                  ...styles.red,
                  width: step === 1 ? normalize(55) : normalize(115),
                }}
              />
            )}
          </View>
          <View style={styles.progressLine}>
            <View style={styles.gray} />
            {step === 2 && (
              <View style={{...styles.red, width: normalize(55)}} />
            )}
          </View>
        </View>
      </View>
      <CurrentStepComponent step={step} setStep={setStep} />
    </ImageBackground>
  );
}

const imageHeight = () => {
  if (SCREEN_HEIGHT < 700) {
    return normalize(450, 'height');
  } else if (SCREEN_HEIGHT > 700 && SCREEN_HEIGHT < 800) {
    return normalize(470, 'height');
  } else {
    return normalize(500, 'height');
  }
};

const styles = StyleSheet.create({
  page: {flex: 1},
  image: {
    height: imageHeight(),
    width: '100%',
  },
  header: {
    position: 'absolute',
    marginHorizontal: 'auto',
    top: normalize(60, 'height'),
    width: '100%',
  },
  progressBar: {
    gap: normalize(8, 'width'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  progressLine: {position: 'relative'},
  gray: {
    backgroundColor: 'white',
    width: normalize(115, 'width'),
    height: normalize(4, 'height'),
    borderRadius: normalize(999),
  },
  red: {
    position: 'absolute',
    backgroundColor: 'purple',
    width: normalize(0, 'width'),
    height: normalize(4, 'height'),
    borderRadius: normalize(999),
  },
  container: {
    flex: 1,
  },
  border: {
    flex: 1,
    borderRadius: normalize(24),
    top: normalize(-22, 'height'),
  },
  bottom: {
    flex: 1,
    borderRadius: normalize(24),
    top: normalize(3, 'height'),
    paddingTop: normalize(32, 'height'),
    paddingHorizontal: normalize(24),
  },
  headerButton: {
    alignSelf: 'flex-end',
    borderWidth: normalize(1),
    borderRadius: normalize(999),
    width: normalize(84),
    height: normalize(28, 'height'),
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: normalize(16),
    marginTop: normalize(16, 'height'),
  },
});
