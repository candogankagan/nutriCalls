import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/dimensions';
import {OnBoardingProps} from '.';
import Button from '../../components/Core/Button';

const OnBoardingSecond = ({step, setStep}: OnBoardingProps) => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <View style={styles.border}>
          <View style={styles.bottom}>
            <View style={{flex: 1}}>
              <Image
                source={require('../../assets/images/logo.png')}
                style={{width: 112, height: 24, resizeMode: 'contain'}}
              />
              <View
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  marginBottom: normalize(16, 'height'),
                }}></View>
            </View>
          </View>
          <Button onPress={() => setStep(step + 1)} />
        </View>
      </View>
    </View>
  );
};

export default OnBoardingSecond;

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'red',
    flex: 1,
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
});
