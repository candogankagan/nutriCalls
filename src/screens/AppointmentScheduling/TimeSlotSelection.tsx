import React, {useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import Button from '../../components/Core/Button';

interface TimeSlotSelectionProps {
  navigation: any;
  route: any;
}

interface TimeSlot {
  [date: string]: {
    period: string;
    time: string;
  };
}

const TimeSlotSelection: React.FC<TimeSlotSelectionProps> = ({
  navigation,
  route,
}) => {
  const {selectedDates, nutritionist} = route.params;
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<TimeSlot>({});
  const [selectedPeriods, setSelectedPeriods] = useState<{
    [key: string]: string;
  }>({});

  // Format date for display
  const formatDate = (date: number) => {
    const currentMonth = new Date();
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const dateObj = new Date(year, month, date);
    const dayOfWeek = dateObj.toLocaleDateString('en-US', {weekday: 'long'});
    const monthName = dateObj.toLocaleDateString('en-US', {month: 'long'});

    return `${monthName} ${date} ${dayOfWeek} ${year}`;
  };

  // Time slots for each period
  const morningSlots = [
    '9:00',
    '9:30',
    '10:00',
    '10:30',
    '11:00',
    '11:30',
    '12:00',
    '12:30',
  ];
  const afternoonSlots = [
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
    '16:30',
  ];
  const eveningSlots = [
    '18:00',
    '18:30',
    '19:00',
    '19:30',
    '20:00',
    '20:30',
    '21:00',
    '21:30',
  ];

  // Handle period selection
  const handlePeriodSelect = (date: number, period: string) => {
    setSelectedPeriods({
      ...selectedPeriods,
      [date]: period,
    });
  };

  // Handle time slot selection
  const handleTimeSlotSelect = (date: number, time: string) => {
    setSelectedTimeSlots({
      ...selectedTimeSlots,
      [date]: {
        period: selectedPeriods[date] || '',
        time,
      },
    });
  };

  // Check if time slot is selected
  const isTimeSlotSelected = (date: number, time: string) => {
    return selectedTimeSlots[date]?.time === time;
  };

  // Handle continue button
  const handleContinue = () => {
    // Check if all selected dates have a time slot
    const allDatesHaveTimeSlots = selectedDates.every(
      (date: number) => selectedTimeSlots[date],
    );

    if (allDatesHaveTimeSlots) {
      navigation.navigate('AppointmentConfirmation', {
        selectedDates,
        selectedTimeSlots,
        nutritionist,
      });
    }
  };

  // Render time slots for a specific period
  const renderTimeSlots = (date: number, period: string) => {
    let slots: string[] = [];

    switch (period) {
      case 'Morning':
        slots = morningSlots;
        break;
      case 'Afternoon':
        slots = afternoonSlots;
        break;
      case 'Evening':
        slots = eveningSlots;
        break;
      default:
        slots = [];
    }

    return (
      <View style={styles.timeSlotsContainer}>
        {slots.map((time, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.timeSlot,
              isTimeSlotSelected(date, time) && styles.selectedTimeSlot,
            ]}
            onPress={() => handleTimeSlotSelect(date, time)}>
            <Text
              style={[
                styles.timeSlotText,
                isTimeSlotSelected(date, time) && styles.selectedTimeSlotText,
              ]}>
              {time}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  };

  // Render date section with period tabs and time slots
  const renderDateSection = (date: number) => {
    const formattedDate = formatDate(date);
    const currentPeriod = selectedPeriods[date] || 'Morning';

    return (
      <View style={styles.dateSection} key={date}>
        <Text style={styles.dateText}>{formattedDate}</Text>

        <View style={styles.periodTabsContainer}>
          <TouchableOpacity
            style={[
              styles.periodTab,
              currentPeriod === 'Morning' && styles.selectedPeriodTab,
            ]}
            onPress={() => handlePeriodSelect(date, 'Morning')}>
            <Text
              style={[
                styles.periodTabText,
                currentPeriod === 'Morning' && styles.selectedPeriodTabText,
              ]}>
              Morning
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.periodTab,
              currentPeriod === 'Afternoon' && styles.selectedPeriodTab,
            ]}
            onPress={() => handlePeriodSelect(date, 'Afternoon')}>
            <Text
              style={[
                styles.periodTabText,
                currentPeriod === 'Afternoon' && styles.selectedPeriodTabText,
              ]}>
              Afternoon
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.periodTab,
              currentPeriod === 'Evening' && styles.selectedPeriodTab,
            ]}
            onPress={() => handlePeriodSelect(date, 'Evening')}>
            <Text
              style={[
                styles.periodTabText,
                currentPeriod === 'Evening' && styles.selectedPeriodTabText,
              ]}>
              Evening
            </Text>
          </TouchableOpacity>
        </View>

        {renderTimeSlots(date, currentPeriod)}
        <View style={styles.separator} />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>
          Select available hours for selected days
        </Text>
      </View>

      <ScrollView style={styles.scrollView}>
        {selectedDates.map((date: number) => renderDateSection(date))}
      </ScrollView>

      <View style={styles.buttonContainer}>
        <Button
          customStyle={[
            styles.continueButton,
            Object.keys(selectedTimeSlots).length !== selectedDates.length &&
              styles.disabledButton,
          ]}
          onPress={handleContinue}
          disabled={
            Object.keys(selectedTimeSlots).length !== selectedDates.length
          }
          label="Continue"
        />
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
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  dateSection: {
    marginBottom: 24,
  },
  dateText: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  periodTabsContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  periodTab: {
    flex: 1,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedPeriodTab: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  periodTabText: {
    color: '#333',
    fontWeight: '500',
  },
  selectedPeriodTabText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  timeSlotsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  timeSlot: {
    width: '48%',
    paddingVertical: 12,
    marginVertical: 8,
    borderWidth: 1,
    // borderColor: '#4CAF50',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedTimeSlot: {
    backgroundColor: '#4CAF50',
  },
  timeSlotText: {
    // color: '#4CAF50',
    fontWeight: '500',
  },
  selectedTimeSlotText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    marginVertical: 16,
  },
  buttonContainer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  continueButton: {
    backgroundColor: '#9C27B0',
    paddingVertical: 16,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    backgroundColor: '#E0E0E0',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default TimeSlotSelection;
