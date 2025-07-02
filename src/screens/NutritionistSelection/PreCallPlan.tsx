import React from 'react';
import {View, Text, Image, StatusBar} from 'react-native';
import {styles} from './PreCallPlanStyle';
import Button from '../../components/Core/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

const PreCallPlan = ({route, navigation}: any) => {
  const {nutritionist} = route.params;

  const handleMakePlan = () => {
    navigation.navigate('AppointmentScheduling', {nutritionist});
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Lets make a pre-call plan</Text>
      </View>

      <View style={styles.nutritionistContainer}>
        <Image source={nutritionist.image} style={styles.nutritionistImage} />
        <Text style={styles.nutritionistName}>{nutritionist.name}</Text>
        <Text style={styles.nutritionistTitle}>{nutritionist.title}</Text>
      </View>

      <Text style={styles.infoText}>
        You can make a free pre-call with professional nutritionists
      </Text>

      <View style={styles.buttonContainer}>
        <Button label="Make a plan" onPress={handleMakePlan} />
      </View>
    </SafeAreaView>
  );
};

export default PreCallPlan;
