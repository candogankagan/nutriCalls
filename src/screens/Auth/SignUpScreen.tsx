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

type SignUpScreenNavigationProp = NativeStackNavigationProp<AuthStackParamList>;

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSignUp = () => {
    // Implement sign up logic
    console.log('Sign up with:', {username, email, password});
    // Navigate to the nutritionist selection screen after successful signup
    navigation.navigate('NutritionistSelection');
  };

  const toggleAgreement = () => {
    setAgreedToTerms(!agreedToTerms);
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
            <Text style={styles.label}>e-mail</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="e-mail"
              placeholderTextColor="#AAAAAA"
              keyboardType="email-address"
              autoCapitalize="none"
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

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Password</Text>
            <TextInput
              style={styles.input}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirm Password"
              placeholderTextColor="#AAAAAA"
              secureTextEntry
            />
          </View>

          <View style={styles.checkboxContainer}>
            <TouchableOpacity style={styles.checkbox} onPress={toggleAgreement}>
              {agreedToTerms && <View style={styles.checkboxInner} />}
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => console.log('Open user agreement')}>
              <Text style={styles.agreementText}>Read the user agreement.</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity style={styles.signUpButton} onPress={handleSignUp}>
            <Text style={styles.signUpButtonText}>Sign up</Text>
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
    marginTop: normalize(40, 'height'),
  },
  logo: {
    width: normalize(80),
    height: normalize(80),
  },
  appName: {
    fontSize: normalize(28),
    fontWeight: 'bold',
    color: 'white',
    marginTop: normalize(5, 'height'),
  },
  formContainer: {
    backgroundColor: 'white',
    borderRadius: normalize(20),
    width: '90%',
    padding: normalize(20),
    marginTop: normalize(20, 'height'),
  },
  inputGroup: {
    marginBottom: normalize(15, 'height'),
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: normalize(15, 'height'),
  },
  checkbox: {
    width: normalize(20),
    height: normalize(20),
    borderWidth: 1,
    borderColor: '#666',
    marginRight: normalize(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxInner: {
    width: normalize(12),
    height: normalize(12),
    backgroundColor: '#6A0DAD',
  },
  agreementText: {
    fontSize: normalize(14),
    color: '#6A0DAD',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: '#6A0DAD',
    borderRadius: normalize(8),
    paddingVertical: normalize(12, 'height'),
    alignItems: 'center',
    marginTop: normalize(10, 'height'),
  },
  signUpButtonText: {
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

export default SignUpScreen;
