import { CoreButton, CoreText } from '@/components';
import { useAppSelector } from '@/hooks';
import { GetCommonState } from '@/store';
import { Normalize, SCREEN_WIDTH } from '@/styles';
import { Colors } from '@/styles/colorPallets';
import { CoreModalProps } from '@/types/components/Core/themedItems';
import React from 'react';
import { Modal as RNModal, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const CoreModal: React.FC<CoreModalProps> = ({
  isVisible,
  onClose,
  icon,
  title,
  subtitle,
  primaryButton = {
    show: false,
    text: '',
    onPress: () => {},
    variant: 'primary'
  },
  secondaryButton = {
    show: false,
    text: '',
    onPress: () => {},
    variant: 'secondary'
  }
}) => {
  const { theme } = useAppSelector(GetCommonState);

  return (
    <RNModal transparent visible={isVisible} animationType='fade' onRequestClose={onClose}>
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay}>
          <TouchableWithoutFeedback>
            <View style={styles.modalContainer}>
              {icon && <View style={styles.iconContainer}>{icon}</View>}

              <View style={styles.textContainer}>
                <CoreText variant='labelBase/medium' text={title} color={Colors.LIGHT.TEXT.STRONG} customStyle={styles.titleText} />
                {subtitle && (
                  <CoreText variant='labelSmall/regular' text={subtitle} color={Colors.LIGHT.TEXT.SUB} customStyle={styles.subtitleText} />
                )}
              </View>

              <View style={styles.buttonContainer}>
                {primaryButton?.show && (
                  <CoreButton
                    label={primaryButton.text}
                    onPress={primaryButton.onPress}
                    variant={primaryButton.variant || 'primary'}
                    customStyle={{ width: '100%' }}
                  />
                )}
                {secondaryButton?.show && (
                  <CoreButton
                    label={secondaryButton.text}
                    onPress={secondaryButton.onPress || onClose}
                    variant={secondaryButton.variant || 'secondary'}
                    customStyle={{ width: '100%' }}
                    customButtonTextColor={theme.TEXT.STRONG}
                  />
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </RNModal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'flex-end',
    paddingBottom: Normalize(24),
    alignItems: 'center'
  },
  modalContainer: {
    width: SCREEN_WIDTH - Normalize(32),
    backgroundColor: Colors.LIGHT.BG.WHITE,
    borderRadius: Normalize(20),
    padding: Normalize(24),
    alignItems: 'center'
  },
  iconContainer: {
    marginBottom: Normalize(16)
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: Normalize(24)
  },
  titleText: {
    textAlign: 'center',
    marginBottom: Normalize(8)
  },
  subtitleText: {
    textAlign: 'center'
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: Normalize(8),
    alignItems: 'stretch'
  },
  secondaryButton: {
    marginTop: Normalize(12)
  }
});

export default CoreModal;
