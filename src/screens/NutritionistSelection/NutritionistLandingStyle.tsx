import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  nutritionistsCircleContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleContainer: {
    width: 300,
    height: 200,
    position: 'relative',
  },
  nutritionistCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#f0f0f0',
    overflow: 'hidden',
    position: 'absolute',
    borderWidth: 2,
    borderColor: '#fff',
  },
  centerCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    bottom: 0,
    left: 110,
    zIndex: 1,
  },
  topCircle: {
    width: 80,
    height: 80,
    borderRadius: 40,
    top: 10,
    left: 110,
    zIndex: 0,
  },
  leftCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    top: 50,
    left: 10,
    zIndex: 0,
  },
  rightCircle: {
    width: 100,
    height: 100,
    borderRadius: 50,
    top: 50,
    right: 10,
    zIndex: 0,
  },
  selectedNutritionistContainer: {
    borderColor: '#4CAF50',
    borderWidth: 2,
  },
  nutritionistImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  nutritionistInfo: {
    flex: 1,
  },
  nutritionistName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  nutritionistTitle: {
    fontSize: 14,
    color: '#757575',
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#800080',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    alignItems: 'center',
    width: '90%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  featuresContainer: {
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginHorizontal: 20,
    marginTop: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginBottom: 20,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  featureIcon: {
    width: 30,
    height: 30,
    marginRight: 20,
  },
  featureText: {
    fontSize: 14,
    color: '#333',
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
  listContainer: {
    paddingHorizontal: 10,
  },
  circleImage: {
    width: '100%',
    height: '100%',
  },
});
