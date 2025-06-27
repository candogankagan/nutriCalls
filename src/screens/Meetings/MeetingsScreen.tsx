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

const MeetingsScreen = () => {
  // Mock data for nutritionist
  const nutritionist = {
    name: 'Hasan Karadağ',
    image: require('../../assets/images/20.png'),
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity style={styles.activeTab}>
          <Text style={styles.activeTabText}>Planned Calls</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.inactiveTab}>
          <Text style={styles.inactiveTabText}>History</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.nutritionistCard}>
          <View style={styles.nutritionistInfo}>
            <Image
              source={nutritionist.image}
              style={styles.nutritionistImage}
            />
            <View style={styles.nutritionistDetails}>
              <Text style={styles.nutritionistName}>{nutritionist.name}</Text>
              <TouchableOpacity style={styles.searchIcon}>
                <Text>🔍</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity style={styles.planMeetingButton}>
            <Text style={styles.planMeetingButtonText}>Plan a meeting</Text>
          </TouchableOpacity>

          <View style={styles.meetingTimeInfo}>
            <Text style={styles.meetingTimeIcon}>📅</Text>
            <Text style={styles.meetingTimeText}>
              May 20 Monday 2025 at 15:30
            </Text>
            <Text style={styles.meetingDuration}>30 minutes meeting</Text>
          </View>

          <TouchableOpacity style={styles.joinButton}>
            <Text style={styles.joinButtonText}>Join</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.dietPlanSection}>
          <Text style={styles.dietPlanTitle}>My diet plan</Text>

          <TouchableOpacity style={styles.dietPlanCard}>
            <View style={styles.dietPlanContent}>
              <View>
                <Text style={styles.dietPlanCardTitle}>Your Diet Plan</Text>
                <Text style={styles.dietPlanCardSubtitle}>Click Here!</Text>
              </View>
              <Image
                source={require('../../assets/images/35.png')}
                style={styles.dietPlanImage}
              />
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="meetings" />
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    margin: 15,
    overflow: 'hidden',
  },
  activeTab: {
    flex: 1,
    padding: 12,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  inactiveTab: {
    flex: 1,
    padding: 12,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
  },
  activeTabText: {
    color: 'white',
    fontWeight: 'bold',
  },
  inactiveTabText: {
    color: '#666',
  },
  content: {
    flex: 1,
    padding: 15,
  },
  nutritionistCard: {
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
  nutritionistInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  nutritionistImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#e0e0e0',
  },
  nutritionistDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 15,
  },
  nutritionistName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  searchIcon: {
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 15,
  },
  planMeetingButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    marginBottom: 15,
  },
  planMeetingButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  meetingTimeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  meetingTimeIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  meetingTimeText: {
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  meetingDuration: {
    fontSize: 12,
    color: '#666',
  },
  joinButton: {
    backgroundColor: '#4CAF50',
    borderRadius: 20,
    padding: 8,
    width: 80,
    alignItems: 'center',
  },
  joinButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  dietPlanSection: {
    marginBottom: 80, // Space for bottom tab bar
  },
  dietPlanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  dietPlanCard: {
    backgroundColor: '#F44336', // Red color as in the image
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  dietPlanContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  dietPlanCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  dietPlanCardSubtitle: {
    fontSize: 14,
    color: 'white',
    marginTop: 5,
  },
  dietPlanImage: {
    width: 180,
    height: 80,
    borderRadius: 5,
    backgroundColor: '#e0e0e0',
  },
});

export default MeetingsScreen;
