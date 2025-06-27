
import CoreText from '../Text';
import {BASE_WIDTH, Colors, INPUT_HEIGHT, Normalize} from '../../../styles';
import React from 'react';
import {StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native';
import {TypographyVariant} from '../Text/TextTypography';

export type CoreButtonProps = {
  variant?:
    | 'primary'
    | 'outlined'
    | 'secondary'
    | 'tertiary'
    | 'quaternary'
    | 'promotion';
  state?: 'default' | 'disabled';
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  textVariant?: TypographyVariant;
  label?: string;
  customButtonTextColor?: string;
  customStyle?: ViewStyle;
  onPress?: () => void;
  buttonBackgroundColor?: string;
};

const CoreButton: React.FC<CoreButtonProps> = ({
  buttonBackgroundColor,
  customButtonTextColor,
  variant = 'primary',
  state = 'default',
  leftIcon,
  rightIcon,
  textVariant = 'labelBase/medium',
  label,
  onPress,
  customStyle,
}) => {
  const isDisabled = state === 'disabled';

  const getButtonStyles = () => {
    let buttonTextColor;
    if (isDisabled) {
      return {
        backgroundColor: Colors.LIGHT.BG.BUTTON_DISABLE,
        buttonTextColor: Colors.LIGHT.TEXT.WHITE,
      };
    }

    switch (variant) {
      case 'primary':
        buttonTextColor = Colors.LIGHT.TEXT.WHITE;
        return {
          backgroundColor: buttonBackgroundColor ?? Colors.LIGHT.BG.KOBE_BLUE,
          buttonTextColor,
        };
      case 'secondary':
        buttonTextColor = Colors.LIGHT.TEXT.KOBE_BLUE;
        return {
          backgroundColor: buttonBackgroundColor ?? Colors.LIGHT.BG.WHITE,
          buttonTextColor,
          borderWidth: 1.7,
          borderColor: Colors.LIGHT.STROKE.STRONG,
        };
      case 'outlined':
        buttonTextColor = Colors.LIGHT.TEXT.STRONG;
        return {
          backgroundColor: Colors.LIGHT.BG.WHITE,
          buttonTextColor,
          borderWidth: 1,
          borderColor: Colors.LIGHT.STROKE.STRONG,
        };
      case 'tertiary':
        buttonTextColor = Colors.LIGHT.TEXT.WHITE;
        return {
          backgroundColor: buttonBackgroundColor ?? Colors.LIGHT.RED[500],
          buttonTextColor,
        };
      default:
        return {};
    }
  };

  return (
    <TouchableOpacity
      style={[styles.container, getButtonStyles(), customStyle]}
      onPress={isDisabled ? undefined : onPress}
      activeOpacity={0.7}>
      <View style={styles.content}>
        {leftIcon && <View style={styles.leftIcon}>{leftIcon}</View>}
        <CoreText
          variant={textVariant}
          text={label ?? ''}
          color={customButtonTextColor ?? getButtonStyles().buttonTextColor}
        />
        {rightIcon && <View style={styles.rightIcon}>{rightIcon}</View>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: INPUT_HEIGHT,
    width: BASE_WIDTH,
    borderRadius: Normalize(12),
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftIcon: {
    marginRight: 8,
  },
  rightIcon: {
    marginLeft: 8,
  },
});

export default CoreButton;
