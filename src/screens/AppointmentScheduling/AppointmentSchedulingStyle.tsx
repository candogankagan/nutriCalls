import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subHeaderText: {
    fontSize: 14,
    color: '#757575',
    marginTop: 5,
    textAlign: 'center',
  },
  calendarContainer: {
    paddingHorizontal: 20,
  },
  timeSelectionContainer: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 10,
    textAlign: 'center',
  },
  timeSlotContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  timeSlot: {
    width: '48%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 5,
    marginBottom: 10,
    alignItems: 'center',
  },
  selectedTimeSlot: {
    borderColor: '#4CAF50',
    backgroundColor: '#E8F5E9',
    borderWidth: 2,
  },
  timeSlotText: {
    fontSize: 14,
  },
  buttonContainer: {
    padding: 20,
    alignItems: 'center',
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
  dayPeriodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  dayPeriodButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  selectedDayPeriod: {
    backgroundColor: '#4CAF50',
    borderColor: '#4CAF50',
  },
  dayPeriodText: {
    fontSize: 14,
  },
  selectedDayPeriodText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  selectedDatesContainer: {
    padding: 15,
    backgroundColor: '#f5f5f5',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 10,
  },
  selectedDateItem: {
    marginBottom: 8,
    fontSize: 14,
  },
  successContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  successIcon: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  successText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 24,
  },
  statusBar: {
    height: 30,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  statusTime: {
    fontSize: 12,
    color: '#333',
  },
  statusIcons: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
  iconContainer: {
    marginLeft: 5,
  },
  nutritionistInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  nutritionistImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  nutritionistName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
  nutritionistTitle: {
    fontSize: 14,
    color: '#757575',
  },
  disabledButton: {
    opacity: 0.5,
  },
  successIconStyle: {
    fontSize: 50,
    marginBottom: 20,
  },
  centerAligned: {
    alignItems: 'center',
  },
});
