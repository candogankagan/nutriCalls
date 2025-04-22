import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {GetCommonState} from '../../../store';
import {useAppSelector} from '../../../hooks';
import {Typography, TypographyVariant} from './TextTypography';

interface CoreTextProps {
  variant?: TypographyVariant;
  text: string;
  customStyle?: TextStyle;
  color?: string;
  onPress?: () => void;
  children?: React.ReactNode;
  numberOfLines?: number;
}

const CoreText: React.FC<CoreTextProps> = ({
  variant = 'body1/regular',
  text,
  customStyle,
  color,
  onPress,
  children,
  numberOfLines = 10,
}) => {
  const [variantType, variantStyle] = variant.split('/') as [
    keyof typeof Typography,
    keyof (typeof Typography)[keyof typeof Typography],
  ];

  const textStyle =
    Typography[variantType]?.[variantStyle] ?? Typography.bodyBase.regular;
  const {theme} = useAppSelector(GetCommonState);

  const styles = StyleSheet.create({
    text: {
      fontSize: textStyle?.fontSize ?? 16,
      lineHeight: textStyle?.lineHeight ?? 20,
      color: color ?? theme.TEXT.STRONG,
      fontFamily: textStyle?.fontFamily ?? 'defaultFontFamily',
    },
  });

  return (
    <Text
      style={[styles.text, customStyle]}
      onPress={onPress}
      numberOfLines={numberOfLines}>
      {text}
      {children}
    </Text>
  );
};

export default CoreText;
