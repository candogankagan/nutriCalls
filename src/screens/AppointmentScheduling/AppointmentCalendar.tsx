import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Button from '../../components/Core/Button';
import {SafeAreaView} from 'react-native-safe-area-context';

const {width} = Dimensions.get('window');

const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const AppointmentCalendar = ({navigation, route}: any) => {
  const {nutritionist} = route.params;
  const [selectedDates, setSelectedDates] = useState<number[]>([]);
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Format month and year display
  const monthYearText = `${
    MONTHS[currentMonth.getMonth()]
  } ${currentMonth.getFullYear()}`;

  // Get days in month
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const days = [];

    // Add empty spaces for days before the first day of month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(i);
    }

    return days;
  };

  // Check if a date is available (for this example, we'll mark some dates as available)
  const isDateAvailable = (day: number) => {
    // For demo purposes, let's say days 10, 14, 19, and 26 are available
    return [10, 14, 19, 26].includes(day);
  };

  // Handle date selection
  const handleDateSelect = (day: number) => {
    if (!day) {
      return;
    } // Skip empty days

    if (selectedDates.includes(day)) {
      // Deselect the date
      setSelectedDates(selectedDates.filter(d => d !== day));
    } else {
      // Select the date (max 2)
      if (selectedDates.length < 2) {
        setSelectedDates([...selectedDates, day]);
      }
    }
  };

  // Navigate to previous month
  const goToPreviousMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() - 1);
    setCurrentMonth(newMonth);
  };

  // Navigate to next month
  const goToNextMonth = () => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(newMonth.getMonth() + 1);
    setCurrentMonth(newMonth);
  };

  // Handle continue button
  const handleContinue = () => {
    if (selectedDates.length > 0) {
      // Navigate to time slot selection screen with selected dates
      navigation.navigate('TimeSlotSelection', {selectedDates, nutritionist});
    }
  };

  // Render calendar
  const renderCalendar = () => {
    const days = generateCalendarDays();

    return (
      <View style={styles.calendarContainer}>
        {/* Month navigation */}
        <View style={styles.monthNavigation}>
          <TouchableOpacity onPress={goToPreviousMonth}>
            <Text style={styles.navigationArrow}>{'<'}</Text>
          </TouchableOpacity>
          <Text style={styles.monthYearText}>{monthYearText}</Text>
          <TouchableOpacity onPress={goToNextMonth}>
            <Text style={styles.navigationArrow}>{'>'}</Text>
          </TouchableOpacity>
        </View>

        {/* Day headers */}
        <View style={styles.weekDaysContainer}>
          {DAYS.map((day, index) => (
            <Text key={index} style={styles.weekDayText}>
              {day}
            </Text>
          ))}
        </View>

        {/* Calendar grid */}
        <View style={styles.daysContainer}>
          {days.map((day, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.dayButton,
                day && isDateAvailable(day) ? styles.availableDay : undefined,
                day && selectedDates.includes(day)
                  ? styles.selectedDay
                  : undefined,
              ]}
              onPress={() => day && handleDateSelect(day)}
              disabled={!day || !isDateAvailable(day)}>
              <Text
                style={[
                  styles.dayText,
                  day && isDateAvailable(day)
                    ? styles.availableDayText
                    : undefined,
                  day && selectedDates.includes(day)
                    ? styles.selectedDayText
                    : undefined,
                ]}>
                {day || ''}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Select available 2 days for you</Text>
      </View>

      {renderCalendar()}

      <View style={styles.buttonContainer}>
        <Button
          customStyle={[
            styles.continueButton,
            selectedDates.length === 0 ? styles.disabledButton : undefined,
          ]}
          label="Continue"
          onPress={handleContinue}
          disabled={selectedDates.length === 0}
        />
        {/* <TouchableOpacity
          style={[
            styles.continueButton,
            selectedDates.length === 0 ? styles.disabledButton : undefined,
          ]}
          onPress={handleContinue}
          disabled={selectedDates.length === 0}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </TouchableOpacity> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    paddingVertical: 20,
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  calendarContainer: {
    paddingHorizontal: 10,
  },
  monthNavigation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
  },
  navigationArrow: {
    fontSize: 24,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
  monthYearText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    paddingVertical: 5,
  },
  weekDayText: {
    width: width / 7 - 10,
    textAlign: 'center',
    fontSize: 14,
    color: '#666',
  },
  daysContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  dayButton: {
    width: width / 7 - 10,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 20,
  },
  dayText: {
    fontSize: 16,
    color: '#999',
  },
  availableDay: {
    backgroundColor: '#F0F0F0',
  },
  availableDayText: {
    color: '#8E44AD',
    fontWeight: 'bold',
  },
  selectedDay: {
    backgroundColor: '#4CAF50',
    borderWidth: 2,
    borderColor: '#4CAF50',
  },
  selectedDayText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  buttonContainer: {
    padding: 20,
    marginTop: 'auto',
    alignItems: 'center',
  },
  continueButton: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  disabledButton: {
    backgroundColor: '#D3D3D3',
  },
});

export default AppointmentCalendar;
