import { View, Platform, StatusBar, StyleSheet } from 'react-native';
import React, { PropsWithChildren } from 'react';
import { ThemedViewProps } from '@/types/components/Core/themedItems';
import { GetCommonState } from '@/store';
import { useAppSelector } from '@/hooks';
import { hasNotch } from 'react-native-device-info';
import { BASE__CONTAINER_PADDING, BASE_GAP } from '@/styles';

const ThemedView = (props: PropsWithChildren<ThemedViewProps>) => {
  const { theme } = useAppSelector(GetCommonState);
  const { bgColor = theme.BG.WHITE, androidStatusBarColor = theme.BG.WHITE } = props;
  const { children, customStyle, isParent } = props;

  const padding = BASE__CONTAINER_PADDING;
  let paddingTop = BASE__CONTAINER_PADDING;

  if (isParent) {
    paddingTop = 20 + BASE__CONTAINER_PADDING;

    if (hasNotch()) {
      paddingTop = 44 + BASE__CONTAINER_PADDING;
    }
  }

  const renderStatusBar = Platform.OS === 'android' && <StatusBar backgroundColor={androidStatusBarColor} barStyle='dark-content' />;

  const styles = StyleSheet.create({
    viewContainer: {
      flex: 1,
      backgroundColor: bgColor,
      gap: BASE_GAP,
      padding,
      paddingTop
    }
  });

  return (
    <View style={[styles.viewContainer, { ...customStyle }]}>
      {renderStatusBar}
      {children}
    </View>
  );
};

export default ThemedView;
