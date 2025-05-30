import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
    paddingTop: 40,
    paddingHorizontal: 20,
    paddingBottom: 20,
    alignItems: 'center',
    width: '100%',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
  },
  nutritionistContainer: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  nutritionistImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 16,
    backgroundColor: '#f0f0f0',
  },
  nutritionistName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#333',
  },
  nutritionistTitle: {
    fontSize: 16,
    color: '#757575',
  },
  infoText: {
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 30,
    marginTop: 30,
    marginBottom: 40,
    lineHeight: 24,
    color: '#333',
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 30,
    marginTop: 'auto',
    marginBottom: 40,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#8E44AD',
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  statusBar: {
    height: 30,
    backgroundColor: '#f5f5f5',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    width: '100%',
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
});
