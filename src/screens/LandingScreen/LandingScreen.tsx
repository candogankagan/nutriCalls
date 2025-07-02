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
  Image,
  Platform,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {styles} from './LandingScreenStyle';

const {width} = Dimensions.get('window');

// Her adımın tipi ve içeriği
type Step = {
  type: 'input' | 'select' | 'date';
  title: string;
  options?: string[];
  multiSelect?: boolean;
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
  {
    type: 'date',
    title: "What's your birthday?",
  },
  {
    type: 'select',
    title: 'Please, tell us about yourself',
    options: ['Male', 'Female'],
  },
  {
    type: 'select',
    title: 'Have you ever had a professional nutritional support before ?',
    options: ['YES', 'NO'],
  },
  {
    type: 'input',
    title:
      'When are you more available for video calling to your nutritionist ?',
  },
];

const LandingScreen = ({navigation}: any) => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleNext = () => {
    if (currentIndex < steps.length - 1) {
      flatListRef.current?.scrollToIndex({index: currentIndex + 1});
      setCurrentIndex(prev => prev + 1);
    } else {
      console.log('Completed! Answers:', answers);
      // Navigate to Welcome screen after completing the survey
      navigation.navigate('Welcome');
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
          {index === 0 ? <Text style={styles.text}>Preferred Name</Text> : null}

          <TextInput
            placeholder={index === 0 ? 'Preferred Name' : 'Enter your answer'}
            style={styles.input}
            value={answers[index] || ''}
            onChangeText={text => handleSelect(index, text)}
            multiline={index === steps.length - 1}
            numberOfLines={index === steps.length - 1 ? 4 : 1}
          />
        </View>
      ) : item.type === 'date' ? (
        <View style={styles.dateContainer}>
          {Platform.OS === 'android' && (
            <TouchableOpacity
              style={[
                styles.dateButton,
                !answers[index] && styles.dateButtonDefault,
              ]}
              onPress={() => setShowDatePicker(true)}>
              <Text
                style={[
                  styles.dateButtonText,
                  !answers[index] && styles.dateButtonDefaultText,
                ]}>
                {answers[index] ? answers[index] : 'Select Date'}
              </Text>
            </TouchableOpacity>
          )}
          {(Platform.OS === 'ios' || showDatePicker) && (
            <DateTimePicker
              value={selectedDate || new Date()}
              mode="date"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={(event, date) => {
                if (Platform.OS === 'android') {
                  setShowDatePicker(false);
                }
                if (date) {
                  setSelectedDate(date);
                  const day = date.getDate().toString().padStart(2, '0');
                  const month = (date.getMonth() + 1)
                    .toString()
                    .padStart(2, '0');
                  const year = date.getFullYear().toString();
                  const formattedDate = `${day} ${month} ${year}`;
                  handleSelect(index, formattedDate);
                }
              }}
              maximumDate={new Date()}
            />
          )}
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
            <TouchableOpacity onPress={handlePrev}>
              <Image
                source={require('../../assets/images/leftArrow.png')}
                style={{width: 35, height: 35}}
              />
            </TouchableOpacity>
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
