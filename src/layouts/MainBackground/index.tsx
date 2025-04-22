/* eslint-disable @typescript-eslint/no-explicit-any */
import { BASE__CONTAINER_PADDING, Normalize, SCREEN_WIDTH } from '@/styles';
import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CoreText, ThemedView } from '@/components';
import { BaseComponentProps, PropsWithChildren } from '@/types';
import { useAppSelector } from '@/hooks';
import { GetAuthState, GetCommonState } from '@/store';
import Dropdown from '@/assets/icons/Dropdown';
import { LanguagesKey } from '@/store/slices/commonSlicer';
import { Arabic, English, Turkish } from '@/assets';

type MainBackgroundLayoutProps = PropsWithChildren<BaseComponentProps> & {
  onPressLanguageButton?: any;
};

const getLanguageIcon = (val: LanguagesKey) => {
  if (val === LanguagesKey.AR) {
    return <Arabic customContainerStyle={{ marginRight: 8 }} />;
  }
  if (val === LanguagesKey.EN) {
    return <English customContainerStyle={{ marginRight: 8 }} />;
  }

  return <Turkish customContainerStyle={{ marginRight: 8 }} />;
};

const MainBackgroundLayout = ({ children, customContainerStyle, onPressLanguageButton }: MainBackgroundLayoutProps) => {
  const { isLoggedIn } = useAppSelector(GetAuthState);
  const { theme, language } = useAppSelector(GetCommonState);

  return (
    <View style={{ flex: 1, ...customContainerStyle }}>
      <View style={styles.imageBg}>
        <View style={styles.headerContainer}>
          {isLoggedIn ? (
            <View style={styles.imageContainer}>
              <View style={{ backgroundColor: theme.BLUE[100], ...styles.userProfile }}>
                <CoreText color={theme.TEXT.KOBE_BLUE} text='AA' variant='labelSmall/medium' />
              </View>
            </View>
          ) : (
            <TouchableOpacity onPress={onPressLanguageButton} style={styles.buttonStyle}>
              {getLanguageIcon(language)}
              <CoreText color='white' text={language.toLocaleUpperCase()} variant='labelXSmall/regular' />
              <Dropdown stroke='#fff' />
            </TouchableOpacity>
          )}
        </View>
      </View>
      <ThemedView customStyle={{ ...styles.customView, backgroundColor: theme.BG.PRIMARY }}>{children}</ThemedView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: BASE__CONTAINER_PADDING,
    paddingTop: Normalize(70, 'height')
  },
  imageContainer: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
    height: Normalize(32)
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 6,
    height: Normalize(32),
    borderRadius: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.16)'
  },
  userProfile: {
    width: Normalize(40),
    height: Normalize(40),
    borderRadius: 999,
    justifyContent: 'center',
    alignItems: 'center'
  },
  customView: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    marginTop: Normalize(-85, 'height'),
    gap: Normalize(16, 'height'),
    padding: BASE__CONTAINER_PADDING,
    alignItems: 'center'
  },
  imageBg: {
    width: SCREEN_WIDTH,
    backgroundColor: 'red',
    height: Normalize(210)
  },
  logo: {
    width: 141,
    height: 24
  }
});

export default MainBackgroundLayout;
