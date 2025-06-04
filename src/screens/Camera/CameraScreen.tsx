import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import BottomTabBar from '../../components/Core/BottomTabBar';

const CameraScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>NutriCalls</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.pageTitle}>Meetings</Text>

        <View style={styles.cameraOptions}>
          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>📷</Text>
            </View>
            <Text style={styles.optionText}>UPLOAD</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.optionCard}>
            <View style={styles.optionIconContainer}>
              <Text style={styles.optionIcon}>🔍</Text>
            </View>
            <Text style={styles.optionText}>SCAN</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.aiChatSection}>
          <TouchableOpacity style={styles.aiChatButton}>
            <View style={styles.aiChatIconContainer}>
              <Text style={styles.aiChatIcon}>🤖</Text>
            </View>
            <Text style={styles.aiChatText}>NUTRICHAT</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Bottom Tab Bar */}
      <BottomTabBar activeTab="camera" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222',
  },
  header: {
    padding: 15,
    backgroundColor: '#333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  cameraOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 40,
  },
  optionCard: {
    alignItems: 'center',
  },
  optionIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  optionIcon: {
    fontSize: 30,
  },
  optionText: {
    color: 'white',
    fontWeight: 'bold',
  },
  aiChatSection: {
    alignItems: 'center',
  },
  aiChatButton: {
    alignItems: 'center',
  },
  aiChatIconContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#444',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  aiChatIcon: {
    fontSize: 30,
  },
  aiChatText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default CameraScreen;
