import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    width,
    backgroundColor: '#fff',
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  text: {
    color: '#c5c5c5',
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    marginTop: 30,
    paddingHorizontal: 10,

    width: '80%',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  itemContainer: {
    paddingHorizontal: 10,
    height: '60%',
    justifyContent: 'center',
  },
  backbutton: {
    fontSize: 30,
    textAlign: 'center',
    height: 50,
    width: 50,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 99,
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    textAlign: 'center',
    borderWidth: 2,
    borderBottomColor: '#D8D8D8',
    marginBottom: 20,
    borderRadius: 5,
    fontSize: 16,
    paddingVertical: 10,
    color: '#000',
  },
  optionButton: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    marginVertical: 5,
    borderRadius: 8,
  },
  optionButtonSelected: {
    backgroundColor: '#800080',
  },
  optionText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
  },
  optionTextSelected: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  navigation: {
    width: '90%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  navButton: {
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#fff',
    borderRadius: 99,
    paddingVertical: 6,
  },
  navText: {
    color: '#800080',
    fontSize: 20,
    fontWeight: 'bold',
  },
  dateContainer: {
    paddingHorizontal: 10,
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateButton: {
    backgroundColor: '#800080',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
    width: '80%',
    alignItems: 'center',
  },
  dateButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  dateButtonDefault: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#800080',
  },
  dateButtonDefaultText: {
    color: '#800080',
  },
  dateRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  dateInput: {
    textAlign: 'center',
    borderWidth: 1,
    borderColor: '#D8D8D8',
    marginHorizontal: 5,
    borderRadius: 5,
    fontSize: 16,
    paddingVertical: 10,
    paddingHorizontal: 10,
    color: '#000',
    width: 80,
  },
  dateInputButton: {
    width: '80%',
    padding: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#D8D8D8',
  },
  dateText: {
    fontSize: 16,
    color: '#333',
  },
});
