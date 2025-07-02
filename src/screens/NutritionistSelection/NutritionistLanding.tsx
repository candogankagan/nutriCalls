import React from 'react';
import {View, Text, Image, FlatList} from 'react-native';
import {styles} from './NutritionistLandingStyle';
import Button from '../../components/Core/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

const nutritionists = [
  {
    id: '1',
    name: 'Anna Smith',
    title: 'Nutritionist',
    image: require('../../assets/images/nutritionists/17.png'),
  },
  {
    id: '2',
    name: 'Michael Johnson',
    title: 'Nutritionist',
    image: require('../../assets/images/nutritionists/18.png'),
  },
  {
    id: '3',
    name: 'Sarah Wilson',
    title: 'Nutritionist',
    image: require('../../assets/images/nutritionists/19.png'),
  },
  {
    id: '4',
    name: 'David Martinez',
    title: 'Nutritionist',
    image: require('../../assets/images/nutritionists/20.png'),
  },
];

const features = [
  {
    id: '1',
    text: 'You can take meal suggestions with artificial intelligence bot',
    icon: require('../../assets/images/icons/q54.png'),
  },
  {
    id: '2',
    text: 'You can make a video-call',
    icon: require('../../assets/images/icons/q55.png'),
  },
  {
    id: '3',
    text: 'You can take a professional diet plan by subscribing with our nutritionists',
    icon: require('../../assets/images/icons/q56.png'),
  },
  {
    id: '4',
    text: 'You can switch your nutritionists whenever you like',
    icon: require('../../assets/images/icons/q57.png'),
  },
  {
    id: '5',
    text: 'You can track your meals fast and easy',
    icon: require('../../assets/images/icons/q58.png'),
  },
];

const NutritionistLanding = ({navigation}: any) => {
  const handleContinue = () => {
    navigation.navigate('NutritionistSelection');
  };

  const renderNutritionistCircles = () => {
    return (
      <View style={styles.nutritionistsCircleContainer}>
        <View style={styles.circleContainer}>
          <View style={[styles.nutritionistCircle, styles.centerCircle]}>
            <Image source={nutritionists[3].image} style={styles.circleImage} />
          </View>

          <View style={[styles.nutritionistCircle, styles.topCircle]}>
            <Image source={nutritionists[2].image} style={styles.circleImage} />
          </View>

          <View style={[styles.nutritionistCircle, styles.leftCircle]}>
            <Image source={nutritionists[0].image} style={styles.circleImage} />
          </View>

          <View style={[styles.nutritionistCircle, styles.rightCircle]}>
            <Image source={nutritionists[1].image} style={styles.circleImage} />
          </View>
        </View>
      </View>
    );
  };

  const renderFeature = ({item}: {item: (typeof features)[0]}) => (
    <View style={styles.featureItem}>
      <Image
        resizeMode="contain"
        source={item.icon}
        style={styles.featureIcon}
      />
      <Text style={styles.featureText}>{item.text}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          We will list most appropriate nutritionists according to your answers.
        </Text>
      </View>

      {renderNutritionistCircles()}

      <View style={styles.featuresContainer}>
        <FlatList
          data={features}
          renderItem={renderFeature}
          keyExtractor={item => item.id}
          scrollEnabled={false}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button label="Select Nutritionist" onPress={handleContinue} />
      </View>
    </SafeAreaView>
  );
};

export default NutritionistLanding;
