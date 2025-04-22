import {CoreText} from '../../components';
import {useAppSelector} from '../../hooks';
import {GetCommonState} from '../../store';
import {Normalize} from '../../styles';
import React from 'react';
import {StyleSheet, View} from 'react-native';

interface HeaderProps {
  hideLogo?: boolean;
  label?: string;
  message?: string;
  showLabel?: boolean;
  showMessage?: boolean;
}

const ContentHeader = ({
  hideLogo = false,
  label,
  message,
  showLabel = true,
  showMessage = true,
}: HeaderProps) => {
  const {theme} = useAppSelector(GetCommonState);

  return (
    <View style={styles.container}>
      {!hideLogo && (
        <View style={styles.logoContainer}>{/* <KobeLogo /> */}</View>
      )}
      <View
        style={{
          ...styles.titleContainer,
          marginTop: hideLogo ? Normalize(8) : 0,
        }}>
        {showLabel && (
          <CoreText
            variant="headingSmall/medium"
            color={theme.TEXT.STRONG}
            text={label ?? ''}
          />
        )}
        {showMessage && (
          <CoreText
            variant="bodyBase/regular"
            color={theme.TEXT.SUB}
            text={message ?? ''}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-start',
    gap: Normalize(16, 'height'),
  },
  logoContainer: {
    alignSelf: 'flex-start',
    marginTop: Normalize(12),
  },
  titleContainer: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    gap: Normalize(8, 'height'),
  },
});

export default ContentHeader;
