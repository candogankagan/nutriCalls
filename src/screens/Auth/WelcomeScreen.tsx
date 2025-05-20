import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigator';
import {normalize} from '../../utils/dimensions';

type WelcomeScreenNavigationProp =
  NativeStackNavigationProp<AuthStackParamList>;

const WelcomeScreen = () => {
  const navigation = useNavigation<WelcomeScreenNavigationProp>();

  const handleEmailSignUp = () => {
    navigation.navigate('SignUp', {referrerEmail: undefined});
  };

  const handleAppleSignUp = () => {
    // Implement Apple sign up logic
    console.log('Sign up with Apple');
  };

  const handleGoogleSignUp = () => {
    // Implement Google sign up logic
    console.log('Sign up with Google');
  };

  const navigateToLogin = () => {
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../../assets/images/background.png')}
      style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../assets/images/logo.png')}
            style={styles.logo}
            resizeMode="contain"
          />
        </View>

        <View style={styles.taglineContainer}>
          <Text style={styles.tagline}>Eat smarter. Live better.</Text>
          <Text style={styles.subTagline}>
            Personalized nutrition starts here.
          </Text>
        </View>

        <View style={styles.contentContainer}>
          <Text style={styles.welcomeText}>Welcome !</Text>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleEmailSignUp}>
            {/* <Image
              source={require('../../assets/images/email-icon.png')}
              style={styles.buttonIcon}
            /> */}
            <Text style={styles.buttonText}>Sign up with e-mail</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleAppleSignUp}>
            {/* <Image
              source={require('../../assets/images/apple-icon.png')}
              style={styles.buttonIcon}
            /> */}
            <Text style={styles.buttonText}>Sign up with Apple</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.signUpButton}
            onPress={handleGoogleSignUp}>
            {/* <Image
              source={require('../../assets/images/google-icon.png')}
              style={styles.buttonIcon}
            /> */}
            <Text style={styles.buttonText}>Sign up with Google</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={navigateToLogin}>
          <Text style={styles.privacyPolicy}>Privacy Policy</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    marginTop: normalize(60, 'height'),
  },
  logo: {
    width: normalize(120),
    height: normalize(120),
  },
  appName: {
    fontSize: normalize(32),
    fontWeight: 'bold',
    color: 'white',
    marginTop: normalize(10, 'height'),
  },
  taglineContainer: {
    alignItems: 'center',
    marginTop: normalize(20, 'height'),
  },
  tagline: {
    fontSize: normalize(16),
    color: 'white',
    fontWeight: '500',
  },
  subTagline: {
    fontSize: normalize(14),
    color: 'white',
    marginTop: normalize(5, 'height'),
  },
  contentContainer: {
    backgroundColor: 'white',
    borderRadius: normalize(30),
    width: '90%',
    padding: normalize(20),
    marginTop: normalize(40, 'height'),
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: normalize(28),
    fontWeight: 'bold',
    marginBottom: normalize(30, 'height'),
  },
  signUpButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: normalize(10),
    paddingVertical: normalize(12, 'height'),
    paddingHorizontal: normalize(20),
    marginBottom: normalize(15, 'height'),
    width: '100%',
  },
  buttonIcon: {
    width: normalize(24),
    height: normalize(24),
    marginRight: normalize(15),
  },
  buttonText: {
    fontSize: normalize(16),
    fontWeight: '500',
  },
  privacyPolicy: {
    color: 'white',
    fontSize: normalize(14),
    marginTop: normalize(20, 'height'),
    textDecorationLine: 'underline',
  },
});

export default WelcomeScreen;
