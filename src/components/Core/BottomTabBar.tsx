import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
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
      navigation.navigate('Main', {screen: screenName});
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigateToScreen('home')}>
        <Image
          source={
            activeTab === 'home'
              ? require('../../assets/images/121.png')
              : require('../../assets/images/117.png')
          }
          style={{width: 24, height: 24}}
          resizeMode="contain"
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
        <Image
          source={
            activeTab === 'meetings'
              ? require('../../assets/images/122.png')
              : require('../../assets/images/118.png')
          }
          style={{width: 24, height: 24}}
          resizeMode="contain"
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
        activeOpacity={0.9}
        style={styles.centerTab}
        onPress={() => navigateToScreen('camera')}>
        <Image
          source={require('../../assets/images/101.png')}
          style={{width: 24, height: 24}}
          resizeMode="contain"
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.tabItem}
        onPress={() => navigateToScreen('meals')}>
        <Image
          source={
            activeTab === 'meals'
              ? require('../../assets/images/123.png')
              : require('../../assets/images/119.png')
          }
          style={{width: 24, height: 24}}
          resizeMode="contain"
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
        <Image
          source={
            activeTab === 'profile'
              ? require('../../assets/images/124.png')
              : require('../../assets/images/116.png')
          }
          style={{width: 24, height: 24}}
          resizeMode="contain"
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
