/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Information, Visa } from '@/assets';
import { CoreText, ToolTip } from '@/components';
import { useAppDispatch, useAppSelector } from '@/hooks';
import useCustomTranslation from '@/hooks/useTranslation';
import { GetCommonState } from '@/store';
import { INPUT_HEIGHT, Normalize } from '@/styles';
import { BaseColorType } from '@/types';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import {
  Animated,
  NativeSyntheticEvent,
  StyleSheet,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle
} from 'react-native';

interface InputProps extends TextInputProps {
  type?: 'CardNumber' | 'SKT' | 'CVV';
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerStyle?: ViewStyle;
  animatedLabelStyle?: TextStyle;
  errorStyle?: TextStyle;
  errorText?: string;
}

const PaymentInput: React.FC<InputProps> = ({
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
  type = 'CardNumber',
  ...inputProps
}) => {
  let INPUT_LENGTH = 19;

  if (type === 'CVV') INPUT_LENGTH = 3;
  if (type === 'SKT') INPUT_LENGTH = 7;

  const [isFocused, setIsFocused] = useState(false);
  const [showLogo, setShowLogo] = useState(false);
  const [localValue, setLocalValue] = useState(value || '');
  const [labelVariant, setLabelVariant] = useState<'labelBase/regular' | 'labelXSmall/regular'>('labelBase/regular');
  const { customTranslate } = useCustomTranslation();

  const dispatch = useAppDispatch();
  const inputRef = useRef<TextInput>(null);
  const animatedLabelValue = useRef(new Animated.Value(value ? 1 : 0)).current;

  const { theme } = useAppSelector(GetCommonState);
  // const { amount } = useAppSelector(GetPaymentState);

  useEffect(() => {
    const isLabelUp = (animatedLabelValue as any).__getValue() >= 0.5 || !!localValue || isFocused;
    setLabelVariant(isLabelUp ? 'labelXSmall/regular' : 'labelBase/regular');
  }, [animatedLabelValue, localValue, isFocused]);

  useEffect(() => {
    const effectiveValue = value ?? localValue;
    animateLabel(effectiveValue ? 1 : 0);
  }, [value, localValue]);

  useEffect(() => {
    if (value === undefined) return;

    setLocalValue(value);
  }, [value]);

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

  const formatPaymentCard = (text: string) => {
    const cleaned = text.replace(/\D/g, '');

    if (type === 'SKT') {
      let sktFormatted = cleaned;

      if (cleaned.length > 2) {
        sktFormatted = `${cleaned.slice(0, 2)} / ${cleaned.slice(2, 4)}`;
      }

      return sktFormatted ?? '';
    }

    const formatted = cleaned.match(/.{1,4}/g)?.join(' ');

    return formatted ?? '';
  };

  const handleChangeText = (text: string) => {
    const trimmedText = text.replace(/\s+/g, '');

    if (trimmedText.length === 6 && type === 'CardNumber') {
      setShowLogo(true);
      checkCardTypeInstallments(trimmedText);
    }
    setLocalValue(formatPaymentCard(text));
    inputProps.onChangeText?.(formatPaymentCard(text));
  };

  const styles = getStyles(theme);

  const getContainerStyle = () => [styles.container, isFocused && styles.focusedContainer, errorText && styles.errorContainer];

  const getBackgroundColor = () => {
    if (errorText) return theme.RED[50];
    if (isFocused) return theme.BG.INPUT_ACTIVE;
    return theme.BG.WHITE;
  };

  const renderErrorMessage = () => (
    <View style={styles.errorTextContainer}>
      <Information />
      <CoreText variant='labelXSmall/regular' text={errorText} color={theme.RED[500]} customStyle={errorStyle} />
    </View>
  );

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

  const checkCardTypeInstallments = async (cardNumber: string) => {
    // const { isSuccess, uiError } = await dispatch(
    //   getCreditCardInfo({
    //     currencyCode: 'TRY',
    //     cardNumber,
    //     amount: Number(amount)
    //   })
    // ).unwrap();

    // if (!isSuccess) {
    //   Alert.alert(uiError || 'Taksit hatası oluştu');
    //   return;
    // }

    setShowLogo(true);
  };

  return (
    <View style={[styles.wrapper, containerStyle]}>
      <Animated.Text style={[defaultAnimatedLabelStyle, { zIndex: 1 }, customLabelStyle]} onPress={() => inputRef.current?.focus()}>
        <CoreText variant={labelVariant} text={placeholder} color={errorText ? theme.RED[500] : theme.TEXT.SOFT} />
      </Animated.Text>
      <View style={[getContainerStyle(), { backgroundColor: getBackgroundColor() }]}>
        <TextInput
          {...inputProps}
          autoCapitalize='none'
          ref={inputRef}
          style={[
            styles.input,
            {
              paddingLeft: leftIcon ? Normalize(40) : Normalize(16),
              paddingRight: rightIcon ? Normalize(48) : Normalize(16),
              backgroundColor: getBackgroundColor()
            }
          ]}
          placeholderTextColor={theme.TEXT.SOFT}
          onFocus={handleFocus}
          onBlur={handleBlur}
          value={localValue}
          onChangeText={handleChangeText}
          keyboardType='numeric'
          maxLength={INPUT_LENGTH}
        />
        {showLogo && type === 'CardNumber' && (
          <View style={styles.rightIconContainer}>
            <Visa />
          </View>
        )}
        {type === 'CVV' && <ToolTip text={customTranslate('tooltip', 'cvv')} errorText={errorText} placement='bottom' />}
      </View>
      {errorText && renderErrorMessage()}
    </View>
  );
};

const getStyles = (theme: BaseColorType) =>
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
      height: INPUT_HEIGHT,
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
      color: theme.TEXT.STRONG,
      fontSize: 16,
      fontWeight: '500',
      height: '100%',
      textAlignVertical: 'center',
      paddingTop: Normalize(16, 'height'),
      paddingBottom: 0,
      backgroundColor: theme.BG.WHITE
    },
    rightIconContainer: {
      position: 'absolute',
      right: Normalize(16),
      zIndex: 1
    },
    errorTextContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: Normalize(4),
      marginTop: Normalize(4, 'height')
    }
  });

export default PaymentInput;
