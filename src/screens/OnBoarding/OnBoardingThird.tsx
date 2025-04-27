import {StyleSheet, View, Image} from 'react-native';
import React from 'react';
import {normalize, SCREEN_WIDTH, SCREEN_HEIGHT} from '../../utils/dimensions';
import {OnBoardingProps} from '.';
import Button from '../../components/Core/Button';
import {CoreText} from '../../components';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigator';

const OnBoardingSecond = ({step, setStep}: OnBoardingProps) => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AuthStackParamList>>();
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
        text="Save and track Meals with airtifical intelligence tools ."
        variant="headingLarge/semiBold"
        color="#fff"
      />
      <Image
        source={require('../../assets/images/onboardThird.png')}
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
        <Button
          label="Start Sign in"
          onPress={() => navigation.navigate('Landing')}
        />
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
