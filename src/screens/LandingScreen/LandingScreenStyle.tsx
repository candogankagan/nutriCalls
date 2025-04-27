import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

export const styles = StyleSheet.create({
  page: {
    width,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    paddingTop: 40,
    justifyContent: 'space-between',
  },
  text: {
    color: '#c5c5c5',
    textAlign: 'center',
    marginBottom: 20,
  },
  title: {
    width: '80%',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  itemContainer: {
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
    flex: 0.5,
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
    width: '100%',
    paddingHorizontal: 20,
    flexDirection: 'row',
    marginTop: 30,
  },
  navButton: {
    justifyContent: 'center',
    height: 50,
    paddingHorizontal: 70,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 99,
    padding: 10,
  },
  navText: {
    color: '#800080',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
