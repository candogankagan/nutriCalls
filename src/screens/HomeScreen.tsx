import {StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Image} from 'react-native';
import React from 'react';

const HomeScreen = ({navigation}: any) => {
  const handleFindNutritionist = () => {
    navigation.navigate('NutritionistSelection');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>NutriCalls</Text>
        <Text style={styles.subHeaderText}>Connect with professional nutritionists</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/nutritionists/nutritionist1.jpg')}
            style={styles.image}
          />
        </View>
        <Text style={styles.title}>Find Your Perfect Nutritionist</Text>
        <Text style={styles.description}>
          Connect with professional nutritionists who can help you achieve your health and fitness goals.
        </Text>

        <TouchableOpacity style={styles.button} onPress={handleFindNutritionist}>
          <Text style={styles.buttonText}>Find Nutritionist</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#800080',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  subHeaderText: {
    fontSize: 16,
    color: '#f0f0f0',
    marginTop: 5,
  },
  content: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 3,
    borderColor: '#800080',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#555',
  },
  button: {
    backgroundColor: '#800080',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
    width: '80%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
