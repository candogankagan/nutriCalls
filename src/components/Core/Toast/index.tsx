import { Cross, SuccessAlert } from '@/assets';
import { Normalize } from '@/styles';
import React, { useEffect, useState } from 'react';
import { Animated, Pressable, StyleSheet, View } from 'react-native';
import CoreText from '../Text';
import { useAppSelector } from '@/hooks';
import { GetCommonState } from '@/store';
import { BaseComponentProps } from '@/types';

type ToastProps = BaseComponentProps & {
  duration: number;
  message: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const Toast = ({ duration = 5000, message, visible, setVisible, customContainerStyle }: ToastProps) => {
  const [fadeAnim] = useState(new Animated.Value(0));
  const { theme } = useAppSelector(GetCommonState);

  useEffect(() => {
    if (visible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 500,
        useNativeDriver: true
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true
        }).start(() => setVisible(false));
      }, duration);

      return () => clearTimeout(timer);
    }

    return undefined;
  }, [visible, fadeAnim, duration, setVisible]);

  const styles = StyleSheet.create({
    container: {
      width: '100%',
      backgroundColor: theme.GREEN[500],
      borderRadius: 8,
      paddingHorizontal: Normalize(12),
      height: 48,
      flexDirection: 'row',
      gap: 12,
      alignItems: 'center'
    },
    crossIcon: {
      alignSelf: 'flex-end'
    }
  });

  return (
    <View style={[styles.container, { ...customContainerStyle }]}>
      <SuccessAlert />
      <CoreText text={message} variant='bodyXSmall/regular' color='white' />
      <Pressable
        onPress={() => {
          setVisible(false);
        }}
        style={{ flex: 1 }}
      >
        <Cross stroke='#FFFFFF' customContainerStyle={styles.crossIcon} />
      </Pressable>
    </View>
  );
};

export default Toast;
