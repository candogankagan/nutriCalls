import React, {useRef, useState} from 'react';
import {
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {styles} from './LandingScreenStyle';

const {width} = Dimensions.get('window');

// Her adımın tipi ve içeriği
type Step = {
  type: 'input' | 'select';
  title: string;
  options?: string[];
};

// Adımların listesi
const steps: Step[] = [
  {type: 'input', title: 'What would you like us to call you ?'},
  {
    type: 'select',
    title: 'What weight goals do you have in mind ?',
    options: ['Gain Weight', 'Maintain Healthy Weight', 'Lose Weight'],
  },
  {
    type: 'select',
    title: 'Please select your preferred language',
    options: ['Türkçe', 'English', 'Deutsch'],
  },
  {
    type: 'select',
    title: 'How often do you plan your meals?',
    options: ['Always', 'Usually', 'Sometimes', 'Rarely', 'Never'],
  },
  {
    type: 'select',
    title: 'Why didn’t you reach your weight goal?',
    options: [
      'Lack of time',
      'I did not enjoy what I ate',
      'I had difficulty in making food choices',
      'I could not continue with discipline',
      'Due to social life',
    ],
  },
  {
    type: 'select',
    title: 'What is your physical activity level ?',
    options: ['Not very active', 'Less active', 'Active', 'Very active'],
  },
];

const LandingScreen = () => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});

  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      flatListRef.current?.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(prev => prev + 1);
    } else {
      console.log('Completed! Answers:', answers);
      // Burası tamamlandığında yapılacak işlemler (API'ye gönderme vs.)
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      flatListRef.current?.scrollToIndex({index: currentIndex - 1});
      setCurrentIndex(prev => prev - 1);
    }
  };

  const handleSelect = (index: number, value: string) => {
    setAnswers(prev => ({...prev, [index]: value}));
  };

  const renderItem = ({item, index}: {item: Step; index: number}) => (
    <View style={styles.page}>
      <Text style={styles.title}>{item.title}</Text>

      {item.type === 'input' ? (
        <View style={styles.itemContainer}>
          <Text style={styles.text}>Preferred Name</Text>

          <TextInput
            placeholder="Preferred Name"
            style={styles.input}
            value={answers[index] || ''}
            onChangeText={text => handleSelect(index, text)}
          />
        </View>
      ) : (
        <View style={styles.itemContainer}>
          {item.options?.map(option => (
            <TouchableOpacity
              key={option}
              onPress={() => handleSelect(index, option)}
              style={[
                styles.optionButton,
                answers[index] === option && styles.optionButtonSelected,
              ]}>
              <Text
                style={[
                  styles.optionText,
                  answers[index] === option && styles.optionTextSelected,
                ]}>
                {option}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}

      <ImageBackground
        resizeMode="stretch"
        style={styles.background}
        source={require('../../assets/images/landingBackground.png')}>
        <View
          style={[
            styles.navigation,
            {justifyContent: currentIndex > 0 ? 'space-between' : 'center'},
          ]}>
          {currentIndex > 0 && (
            <Text
              onPress={handlePrev}
              style={[styles.navText, styles.backbutton]}>
              ⬅
            </Text>
          )}

          <TouchableOpacity onPress={handleNext} style={styles.navButton}>
            <Text style={styles.navText}>Next</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={steps}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default LandingScreen;
