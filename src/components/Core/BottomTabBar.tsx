import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabStackParamList} from '@/navigation/TabNavigator';

type TabName = keyof TabStackParamList;

type BottomTabBarProps = {
  activeTab: 'home' | 'meetings' | 'camera' | 'meals' | 'profile';
};

const tabNameMap: Record<string, TabName> = {
  home: 'Dashboard',
  meetings: 'Meetings',
  camera: 'Camera',
  meals: 'Meals',
  profile: 'Profile',
};

const BottomTabBar: React.FC<BottomTabBarProps> = ({activeTab}) => {
  const navigation = useNavigation();

  const navigateToScreen = (tabName: string) => {
    const screenName = tabNameMap[tabName];
    if (screenName) {
      // @ts-ignore - We know the screen name is valid
      navigation.navigate('Main', { screen: screenName });
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'home' && styles.activeTabItem]}
        onPress={() => navigateToScreen('home')}>
        <Text style={styles.tabIcon}>🏠</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tabItem,
          activeTab === 'meetings' && styles.activeTabItem,
        ]}
        onPress={() => navigateToScreen('meetings')}>
        <Text style={styles.tabIcon}>📊</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'camera' && styles.activeTabItem]}
        onPress={() => navigateToScreen('camera')}>
        <Text style={styles.tabIcon}>➕</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.tabItem, activeTab === 'meals' && styles.activeTabItem]}
        onPress={() => navigateToScreen('meals')}>
        <Text style={styles.tabIcon}>🍎</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[
          styles.tabItem,
          activeTab === 'profile' && styles.activeTabItem,
        ]}
        onPress={() => navigateToScreen('profile')}>
        <Text style={styles.tabIcon}>👤</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 60,
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activeTabItem: {
    borderTopWidth: 2,
    borderTopColor: '#4CAF50',
  },
  tabIcon: {
    fontSize: 24,
  },
});

export default BottomTabBar;
