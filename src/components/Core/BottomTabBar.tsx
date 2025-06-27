import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TabStackParamList} from '@/navigation/TabNavigator';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

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
      navigation.navigate('Main', {screen: screenName});
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigateToScreen('home')}>
        <Icon
          name="home-outline"
          size={24}
          color={activeTab === 'home' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)'}
        />
        <Text
          style={[
            styles.tabLabel,
            activeTab === 'home' && styles.activeTabLabel,
          ]}>
          Main
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigateToScreen('meetings')}>
        <Icon
          name="view-grid-outline"
          size={24}
          color={
            activeTab === 'meetings' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)'
          }
        />
        <Text
          style={[
            styles.tabLabel,
            activeTab === 'meetings' && styles.activeTabLabel,
          ]}>
          Plan
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.centerTab}
        onPress={() => navigateToScreen('camera')}>
        <View style={styles.plusButton}>
          <Icon name="plus" size={24} color="#8E24AA" />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigateToScreen('meals')}>
        <Icon
          name="food-apple-outline"
          size={24}
          color={activeTab === 'meals' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)'}
        />
        <Text
          style={[
            styles.tabLabel,
            activeTab === 'meals' && styles.activeTabLabel,
          ]}>
          Meals
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigateToScreen('profile')}>
        <Icon
          name="account-outline"
          size={24}
          color={
            activeTab === 'profile' ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)'
          }
        />
        <Text
          style={[
            styles.tabLabel,
            activeTab === 'profile' && styles.activeTabLabel,
          ]}>
          Profile
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 70,
    backgroundColor: '#4CAF50',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingBottom: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  centerTab: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  plusButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabLabel: {
    fontSize: 12,
    marginTop: 4,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  activeTabLabel: {
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default BottomTabBar;
