/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Information, VisibilityOff, VisibilityOn } from '@/assets';
import { CoreText } from '@/components';
import { useAppSelector } from '@/hooks';
import { GetCommonState } from '@/store';
import { INPUT_HEIGHT, Normalize } from '@/styles';
import { BaseColorType } from '@/types';
import { Currency } from '@/utils/constants';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle
} from 'react-native';

export interface InputProps extends TextInputProps {
  type?: 'text' | 'password';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerStyle?: ViewStyle;
  animatedLabelStyle?: TextStyle;
  errorStyle?: TextStyle;
  errorText?: string;
  isMultiLine?: boolean;
  disabled?: boolean;
  currencyType?: Currency;
}

const CoreInput: React.FC<InputProps> = ({
  isMultiLine = false,
  type = 'text',
  leftIcon,
  rightIcon,
  containerStyle,
  animatedLabelStyle: customLabelStyle,
  errorStyle,
  errorText = '',
  placeholder = '',
  value,
  onFocus,
  onBlur,
  currencyType: symbol,
  disabled = false,
  ...inputProps
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [localValue, setLocalValue] = useState(value || '');
  const [labelVariant, setLabelVariant] = useState<'labelBase/regular' | 'labelXSmall/regular'>('labelBase/regular');

  const inputRef = useRef<TextInput>(null);
  const animatedLabelValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  const { theme } = useAppSelector(GetCommonState);

  const animateLabel = (toValue: number, callback?: () => void) => {
    Animated.timing(animatedLabelValue, {
      toValue,
      duration: 150,
      useNativeDriver: false
    }).start(callback);
  };

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(true);
    animateLabel(1);
    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    setIsFocused(false);
    if (!localValue) {
      animateLabel(0, () => setLabelVariant('labelBase/regular'));
    }
    onBlur?.(e);
  };

  const handleChangeText = (text: string) => {
    setLocalValue(text);
    inputProps.onChangeText?.(text);
  };

  useEffect(() => {
    const isLabelUp = !!localValue || isFocused;
    setLabelVariant(isLabelUp ? 'labelXSmall/regular' : 'labelBase/regular');
  }, [localValue, isFocused]);

  useEffect(() => {
    if (!isFocused) {
      const effectiveValue = value ?? localValue;
      animateLabel(effectiveValue ? 1 : 0);
    }
  }, [value, localValue]);

  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  const styles = getStyles(theme, isMultiLine);

  const getContainerStyle = () => [styles.container, isFocused && styles.focusedContainer, errorText && styles.errorContainer];

  const getBackgroundColor = () => {
    if (errorText) return theme.RED[50];
    if (isFocused) return theme.BG.INPUT_ACTIVE;
    return disabled ? theme.DARK_BLUE[50] : theme.BG.WHITE;
  };

  const getIconColor = () => {
    if (errorText) return theme.RED[500];
    if (isFocused) return theme.STROKE.KOBE_BLUE;
    return theme.ICON.SOFT;
  };

  const defaultAnimatedLabelStyle = {
    position: 'absolute' as const,
    left: Normalize(16),
    top: animatedLabelValue.interpolate({
      inputRange: [0, 1],
      outputRange: [value ? 0 : 16, 8]
    }),
    fontSize: animatedLabelValue.interpolate({
      inputRange: [0, 1],
      outputRange: [value ? 10 : 24, 10]
    }),
    color: theme.TEXT.SUB,
    flex: 1,
    textAlignVertical: 'center' as const
  };

  const renderPasswordToggle = () => (
    <TouchableOpacity style={styles.passwordToggleContainer} onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
      {isPasswordVisible ? <VisibilityOff stroke={getIconColor()} /> : <VisibilityOn stroke={getIconColor()} />}
    </TouchableOpacity>
  );

  const renderErrorMessage = () => (
    <View style={styles.errorTextContainer}>
      <Information />
      <CoreText variant='labelXSmall/regular' text={errorText} color={theme.RED[500]} customStyle={errorStyle} />
    </View>
  );

  const getPaddingLeft = () => {
    if ((symbol && localValue) || (symbol && !localValue && isFocused && !errorText)) {
      return Normalize(0);
    }
    if (leftIcon) {
      return Normalize(40);
    }
    return Normalize(16);
  };

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <Animated.Text style={[defaultAnimatedLabelStyle, { zIndex: 1 }, customLabelStyle]} onPress={() => inputRef.current?.focus()}>
        <CoreText variant={labelVariant} text={placeholder} color={errorText ? theme.RED[500] : theme.TEXT.SOFT} />
      </Animated.Text>

      <View style={getContainerStyle()}>
        {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}

        {symbol && (localValue !== '' || isFocused) && !errorText && (
          <CoreText
            customStyle={{
              ...styles.input,
              flex: 0,
              paddingLeft: Normalize(16),
              backgroundColor: getBackgroundColor()
            }}
            text={symbol}
          />
        )}
        <TextInput
          {...inputProps}
          editable={inputProps?.editable !== undefined ? inputProps?.editable : !disabled}
          autoCapitalize='none'
          ref={inputRef}
          style={[
            styles.input,
            {
              color: disabled ? theme.TEXT.DISABLE : theme.TEXT.STRONG,
              paddingLeft: getPaddingLeft(),
              paddingRight: type === 'password' || rightIcon ? Normalize(48) : Normalize(16),
              backgroundColor: getBackgroundColor()
            }
          ]}
          placeholderTextColor={theme.TEXT.SOFT}
          secureTextEntry={type === 'password' && !isPasswordVisible}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={localValue}
          onChangeText={handleChangeText}
          multiline={isMultiLine}
          numberOfLines={isMultiLine ? 3 : 1}
        />

        {type === 'password' && renderPasswordToggle()}
        {rightIcon && type !== 'password' && <View style={styles.rightIconContainer}>{rightIcon}</View>}
      </View>

      {errorText && renderErrorMessage()}
    </View>
  );
};

const getStyles = (theme: BaseColorType, isMultiLine: boolean) =>
  StyleSheet.create({
    wrapper: {
      width: '100%',
      marginTop: Normalize(16),
      zIndex: 0
    },
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'transparent',
      borderRadius: 10,
      borderWidth: 0.7,
      borderColor: theme.STROKE.SUB,
      height: isMultiLine ? 92 : INPUT_HEIGHT,
      overflow: 'hidden'
    },
    focusedContainer: {
      borderColor: theme.STROKE.KOBE_BLUE,
      backgroundColor: theme.BG.INPUT_ACTIVE
    },
    errorContainer: {
      borderColor: theme.RED[500]
    },
    input: {
      flex: 1,
      fontSize: 16,
      fontWeight: '500',
      height: '100%',
      textAlignVertical: 'center',
      paddingTop: isMultiLine ? Normalize(24, 'height') : Normalize(16, 'height'),
      paddingBottom: 0
    },
    leftIconContainer: {
      position: 'absolute',
      left: Normalize(10),
      zIndex: 1
    },
    rightIconContainer: {
      position: 'absolute',
      right: Normalize(10),
      zIndex: 1
    },
    passwordToggleContainer: {
      position: 'absolute',
      right: Normalize(8),
      zIndex: 1,
      padding: Normalize(8)
    },
    errorTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Normalize(4),
      marginTop: Normalize(4, 'height')
    }
  });

export default CoreInput;
