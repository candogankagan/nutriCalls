import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import BottomTabBar from '../../components/Core/BottomTabBar';

const screenWidth = Dimensions.get('window').width;

const DashboardScreen = () => {
  // Mock data for the dashboard
  const caloriesConsumed = 2340;
  const carbsConsumed = 90;
  const fatConsumed = 50;
  const proteinConsumed = 210;

  // Mock data for the line chart
  const data = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        data: [152, 151, 149, 147, 145, 143, 142],
        color: () => '#4CAF50', // Green color
        strokeWidth: 2,
      },
    ],
    legend: ['Weight (kg)'],
  };

  const chartConfig = {
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    decimalPlaces: 0,
    color: () => '#4CAF50',
    labelColor: () => '#333333',
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '4',
      strokeWidth: '2',
      stroke: '#4CAF50',
    },
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Calories Circle */}
        <View style={styles.caloriesContainer}>
          <View style={styles.caloriesCircle}>
            <Text style={styles.caloriesNumber}>{caloriesConsumed}</Text>
            <Text style={styles.caloriesLabel}>Kcal</Text>
          </View>

          {/* Macros Circles */}
          <View style={styles.macrosContainer}>
            <View style={styles.macroCircleContainer}>
              <View style={[styles.macroCircle, styles.carbsCircle]}>
                <Text style={styles.macroNumber}>{carbsConsumed}</Text>
              </View>
              <Text style={styles.macroLabel}>Carbs</Text>
            </View>

            <View style={styles.macroCircleContainer}>
              <View style={[styles.macroCircle, styles.fatCircle]}>
                <Text style={styles.macroNumber}>{fatConsumed}</Text>
              </View>
              <Text style={styles.macroLabel}>Fat</Text>
            </View>

            <View style={styles.macroCircleContainer}>
              <View style={[styles.macroCircle, styles.proteinCircle]}>
                <Text style={styles.macroNumber}>{proteinConsumed}</Text>
              </View>
              <Text style={styles.macroLabel}>Protein</Text>
            </View>
          </View>
        </View>

        {/* Weight Chart */}
        <View style={styles.chartContainer}>
          <LineChart
            data={data}
            width={screenWidth - 40}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        </View>

        {/* Activity Summary */}
        <View style={styles.activityContainer}>
          <View style={styles.activityItem}>
            <View style={[styles.activityBar, styles.caloriesBar]} />
            <Text style={styles.activityLabel}>Calories</Text>
          </View>
          <View style={styles.activityItem}>
            <View style={[styles.activityBar, styles.stepsBar]} />
            <Text style={styles.activityLabel}>Steps</Text>
          </View>
          <View style={styles.activityItem}>
            <View style={[styles.activityBar, styles.waterBar]} />
            <Text style={styles.activityLabel}>Water</Text>
          </View>
          <View style={styles.activityItem}>
            <View style={[styles.activityBar, styles.sleepBar]} />
            <Text style={styles.activityLabel}>Sleep</Text>
          </View>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="home" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  scrollView: {
    flex: 1,
    paddingHorizontal: 20,
  },
  caloriesContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  caloriesCircle: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 15,
    borderColor: '#4CAF50',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  caloriesNumber: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  caloriesLabel: {
    fontSize: 18,
    color: '#666',
  },
  macrosContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  macroCircleContainer: {
    alignItems: 'center',
  },
  macroCircle: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  carbsCircle: {
    borderColor: '#9C27B0', // Purple
  },
  fatCircle: {
    borderColor: '#FF9800', // Orange
  },
  proteinCircle: {
    borderColor: '#2196F3', // Blue
  },
  macroNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  macroLabel: {
    fontSize: 14,
    marginTop: 5,
    color: '#666',
  },
  chartContainer: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  chart: {
    borderRadius: 10,
  },
  activityContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 30,
    marginBottom: 80, // Add space for bottom tab bar
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  activityItem: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 120,
  },
  activityBar: {
    width: 20,
    borderRadius: 10,
  },
  activityLabel: {
    fontSize: 12,
    marginTop: 5,
    color: '#666',
  },
  caloriesBar: {
    backgroundColor: '#FF9800',
    height: 100,
  },
  stepsBar: {
    backgroundColor: '#4CAF50',
    height: 80,
  },
  waterBar: {
    backgroundColor: '#2196F3',
    height: 60,
  },
  sleepBar: {
    backgroundColor: '#9C27B0',
    height: 40,
  },
});

export default DashboardScreen;
