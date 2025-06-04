import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import BottomTabBar from '../../components/Core/BottomTabBar';
import assets from '../../assets';

const MealsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NutriCalls</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.nutritionSummary}>
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>2600</Text>
            <Text style={styles.summaryLabel}>Kcal</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>0</Text>
            <Text style={styles.summaryLabel}>KFAL</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>0</Text>
            <Text style={styles.summaryLabel}>FITNESS</Text>
          </View>
          <View style={styles.summaryDivider} />
          <View style={styles.summaryItem}>
            <Text style={styles.summaryValue}>0</Text>
            <Text style={styles.summaryLabel}>REMAIN</Text>
          </View>
        </View>

        <View style={styles.mealSection}>
          <View style={styles.mealHeader}>
            <View style={styles.mealIconContainer}>
              <Image source={assets.breakfast} style={styles.mealIcon} />
            </View>
            <Text style={styles.mealTitle}>BREAKFAST</Text>
          </View>
          <TouchableOpacity style={styles.addMealButton}>
            <Text style={styles.addMealButtonText}>Add a meal</Text>
            <Text style={styles.addMealButtonIcon}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mealSection}>
          <View style={styles.mealHeader}>
            <View style={styles.mealIconContainer}>
              <Image source={assets.lunch} style={styles.mealIcon} />
            </View>
            <Text style={styles.mealTitle}>LUNCH</Text>
          </View>
          <TouchableOpacity style={styles.addMealButton}>
            <Text style={styles.addMealButtonText}>Add a meal</Text>
            <Text style={styles.addMealButtonIcon}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mealSection}>
          <View style={styles.mealHeader}>
            <View style={styles.mealIconContainer}>
              <Image source={assets.dinner} style={styles.mealIcon} />
            </View>
            <Text style={styles.mealTitle}>DINNER</Text>
          </View>
          <TouchableOpacity style={styles.addMealButton}>
            <Text style={styles.addMealButtonText}>Add a meal</Text>
            <Text style={styles.addMealButtonIcon}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mealSection}>
          <View style={styles.mealHeader}>
            <View style={styles.mealIconContainer}>
              <Image source={assets.snack} style={styles.mealIcon} />
            </View>
            <Text style={styles.mealTitle}>SNACK</Text>
          </View>
          <TouchableOpacity style={styles.addMealButton}>
            <Text style={styles.addMealButtonText}>Add a meal</Text>
            <Text style={styles.addMealButtonIcon}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.mealSection}>
          <View style={styles.mealHeader}>
            <View style={styles.mealIconContainer}>
              <Image source={assets.water} style={styles.mealIcon} />
            </View>
            <Text style={styles.mealTitle}>WATER</Text>
          </View>
          <TouchableOpacity style={styles.addMealButton}>
            <Text style={styles.addMealButtonText}>Add water</Text>
            <Text style={styles.addMealButtonIcon}>+</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="meals" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 15,
    backgroundColor: 'white',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  nutritionSummary: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  summaryItem: {
    flex: 1,
    alignItems: 'center',
  },
  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  summaryLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  summaryDivider: {
    width: 1,
    height: '100%',
    backgroundColor: '#e0e0e0',
  },
  mealSection: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  mealHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  mealIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  mealIcon: {
    width: 25,
    height: 25,
  },
  mealTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  addMealButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  addMealButtonText: {
    color: '#666',
  },
  addMealButtonIcon: {
    fontSize: 20,
    color: '#4CAF50',
    fontWeight: 'bold',
  },
});

export default MealsScreen;
