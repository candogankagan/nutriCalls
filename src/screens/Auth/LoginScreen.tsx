import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {AuthStackParamList} from '../../navigation/AuthNavigator';
import {normalize} from '../../utils/dimensions';

type LoginScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement login logic
    console.log('Login with:', {username, password});
    // Navigate to the main app after successful login
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUp', {referrerEmail: undefined});
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

        <View style={styles.formContainer}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>User Name</Text>
            <TextInput
              style={styles.input}
              value={username}
              onChangeText={setUsername}
              placeholder="User Name"
              placeholderTextColor="#AAAAAA"
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#AAAAAA"
              secureTextEntry
            />
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => console.log('Open privacy policy')}>
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
  formContainer: {
    backgroundColor: 'white',
    borderRadius: normalize(20),
    width: '90%',
    padding: normalize(20),
    marginTop: normalize(40, 'height'),
  },
  inputGroup: {
    marginBottom: normalize(20, 'height'),
  },
  label: {
    fontSize: normalize(16),
    fontWeight: '500',
    marginBottom: normalize(5, 'height'),
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: normalize(8),
    paddingHorizontal: normalize(15),
    paddingVertical: normalize(10, 'height'),
    fontSize: normalize(16),
    backgroundColor: '#F5F5F5',
  },
  loginButton: {
    backgroundColor: '#6A0DAD',
    borderRadius: normalize(8),
    paddingVertical: normalize(12, 'height'),
    alignItems: 'center',
    marginTop: normalize(10, 'height'),
  },
  loginButtonText: {
    color: 'white',
    fontSize: normalize(16),
    fontWeight: 'bold',
  },
  privacyPolicy: {
    color: 'white',
    fontSize: normalize(14),
    marginTop: normalize(20, 'height'),
    textDecorationLine: 'underline',
  },
});

export default LoginScreen;
