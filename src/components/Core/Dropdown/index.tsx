/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {useState, useRef, ReactNode, useEffect} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
  Animated,
  Pressable,
} from 'react-native';
import {Normalize, INPUT_HEIGHT} from '../../../styles';
import {CoreText} from '../../../components';
import {useAppSelector} from '../../../hooks';
import {GetCommonState} from '../../../store';
import {BaseColorType} from '../../../types';

interface DropdownProps extends TextInputProps {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  containerStyle?: ViewStyle;
  animatedLabelStyle?: TextStyle;
  errorStyle?: TextStyle;
  errorText?: string;
  onPress?: () => void;
}

const CoreDropdown: React.FC<DropdownProps> = ({
  leftIcon,
  rightIcon = <Dropdown />,
  containerStyle,
  animatedLabelStyle: customLabelStyle,
  errorStyle,
  errorText,
  placeholder,
  value,
  onPress,
}) => {
  const inputRef = useRef<TextInput>(null);
  const animatedLabelValue: any = useRef(
    new Animated.Value(value ? 1 : 0),
  ).current;
  const [localValue, setLocalValue] = useState(value || '');
  const [labelVariant, setLabelVariant] = useState<
    'labelBase/regular' | 'labelXSmall/regular'
  >('labelBase/regular');

  const {theme} = useAppSelector(GetCommonState);

  useEffect(() => {
    const isLabelUp = animatedLabelValue.__getValue() >= 0.5 || !!localValue;
    setLabelVariant(isLabelUp ? 'labelXSmall/regular' : 'labelBase/regular');
  }, [animatedLabelValue, localValue]);

  useEffect(() => {
    const effectiveValue = value ?? localValue;
    Animated.timing(animatedLabelValue, {
      toValue: effectiveValue ? 1 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [value, localValue]);

  useEffect(() => {
    if (value !== undefined) {
      setLocalValue(value);
    }
  }, [value]);

  const defaultAnimatedLabelStyle = {
    position: 'absolute' as const,
    left: Normalize(16),
    top: animatedLabelValue.interpolate({
      inputRange: [0, 1],
      outputRange: [value ? 0 : 16, 8],
    }),
    fontSize: animatedLabelValue.interpolate({
      inputRange: [0, 1],
      outputRange: [value ? 10 : 24, 10],
    }),
    color: theme.TEXT.SUB,
    flex: 1,
    textAlignVertical: 'center' as const,
  };

  const {
    wrapper,
    container,
    errorContainer,
    errorTextStyle,
    input,
    leftIconContainer,
    rightIconContainer,
  } = styles(theme);

  const getContainerStyle = () => [container, errorText && errorContainer];

  const getBackgroundColor = () => {
    if (errorText) return theme.RED[50];
    return theme.BG.WHITE;
  };

  const pressPlaceHolderText = () => {
    inputRef.current?.focus();
    if (onPress) onPress();
  };

  return (
    <View style={[wrapper, containerStyle]}>
      <Pressable onPress={onPress}>
        <Animated.Text
          style={[defaultAnimatedLabelStyle, {zIndex: 1}, customLabelStyle]}
          onPress={pressPlaceHolderText}>
          <CoreText
            variant={labelVariant}
            text={placeholder || ''}
            color={errorText ? theme.RED[500] : theme.TEXT.SOFT}
          />
        </Animated.Text>
        <View style={getContainerStyle()}>
          {leftIcon && <View style={leftIconContainer}>{leftIcon}</View>}

          <CoreText
            customStyle={{
              ...input,
              paddingLeft: leftIcon ? Normalize(40) : Normalize(16),
              paddingRight: rightIcon ? Normalize(61) : Normalize(16),
              paddingTop: Normalize(24, 'height'),
              backgroundColor: getBackgroundColor(),
            }}
            text={value ?? ''}
          />

          {rightIcon && <View style={rightIconContainer}>{rightIcon}</View>}
        </View>
        {errorText && (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: Normalize(4),
              marginTop: Normalize(4, 'height'),
            }}>
            <CoreText
              variant="labelXSmall/regular"
              text={errorText}
              color={theme.RED[500]}
              customStyle={{...errorTextStyle, ...errorStyle}}
            />
          </View>
        )}
      </Pressable>
    </View>
  );
};

const styles = (theme: BaseColorType) => {
  return StyleSheet.create({
    wrapper: {width: '100%', marginTop: Normalize(16)},
    container: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: theme.BG.WHITE,
      borderRadius: Normalize(10),
      borderWidth: 0.7,
      borderColor: theme.STROKE.SUB,
      height: Normalize(INPUT_HEIGHT),
      overflow: 'hidden',
    },
    focusedContainer: {
      borderColor: theme.STROKE.KOBE_BLUE,
      backgroundColor: theme.BG.INPUT_ACTIVE,
    },
    errorContainer: {
      borderColor: theme.RED[500],
    },
    input: {
      width: '100%',
      color: theme.TEXT.STRONG,
      fontSize: Normalize(16),
      fontWeight: '500',
      height: '100%',
      textAlignVertical: 'center',
      paddingTop: Normalize(16, 'height'),
      paddingBottom: 0,
      borderRadius: 10,
    },
    leftIconContainer: {
      left: Normalize(10),
    },
    rightIconContainer: {
      right: Normalize(35),
    },
    errorTextStyle: {
      marginTop: Normalize(4),
    },
  });
};

export default CoreDropdown;
