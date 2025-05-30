import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';
import Button from '../../components/Core/Button';

interface AppointmentConfirmationProps {
  navigation: any;
  route: any;
}

const AppointmentConfirmation: React.FC<AppointmentConfirmationProps> = ({
  navigation,
  route,
}) => {
  const {selectedDates, selectedTimeSlots, nutritionist} = route.params;
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Format date for display
  const formatDateWithTime = (date: number, timeSlot: any) => {
    const currentMonth = new Date();
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const dateObj = new Date(year, month, date);
    const dayOfWeek = dateObj.toLocaleDateString('en-US', {weekday: 'long'});
    const monthName = dateObj.toLocaleDateString('en-US', {month: 'long'});

    return `${monthName} ${date} ${dayOfWeek} ${year} at ${timeSlot.time}`;
  };

  // Handle send button
  const handleSend = () => {
    // In a real app, this would send the appointment request to the backend
    setIsConfirmed(true);
  };

  // Render confirmation screen
  const renderConfirmationScreen = () => {
    return (
      <>
        <Text style={styles.headerTitle}>Selected Dates</Text>

        <ScrollView style={styles.scrollView}>
          {selectedDates.map((date: number) => (
            <View key={date} style={styles.dateItem}>
              <Text style={styles.dateText}>
                {formatDateWithTime(date, selectedTimeSlots[date])}
              </Text>
            </View>
          ))}
        </ScrollView>

        <View style={styles.buttonContainer}>
          <Button onPress={handleSend} label="SEND" />
        </View>
      </>
    );
  };

  // Render success screen
  const renderSuccessScreen = () => {
    return (
      <View style={styles.successContainer}>
        <Image
          source={require('../../assets/images/success.png')}
          style={styles.successImage}
          defaultSource={require('../../assets/images/success.png')}
        />

        <Text style={styles.successTitle}>
          We have send your selected dates to our professional.
        </Text>

        <Text style={styles.successSubtitle}>
          Nutritionist will plan your pre-call.
        </Text>

        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.homeButtonText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {!isConfirmed ? renderConfirmationScreen() : renderSuccessScreen()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginVertical: 24,
  },
  scrollView: {
    flex: 1,
    marginBottom: 16,
  },
  dateItem: {
    padding: 16,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
    marginBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 'auto',
    alignItems: 'center',
    marginBottom: 16,
  },
  sendButton: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#9C27B0',
  },
  sendButtonText: {
    color: '#9C27B0',
    fontWeight: 'bold',
    fontSize: 16,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  successImage: {
    width: 120,
    height: 120,
    marginBottom: 32,
  },
  successTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 16,
  },
  successSubtitle: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 48,
  },
  homeButton: {
    backgroundColor: '#9C27B0',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default AppointmentConfirmation;
