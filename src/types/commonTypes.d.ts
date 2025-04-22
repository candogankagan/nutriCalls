import React from 'react';
import { ViewStyle } from 'react-native';
import { CoreModalProps } from './components/Core/themedItems';

export type BaseValueLabelResponse = {
  valuesAndLabels: BaseValueLabel[];
};

export type BaseValueLabel = {
  value: string;
  label: string;
};

export type Dispatch<T> = React.Dispatch<React.SetStateAction<T>>;
export type PropsWithChildren<T> = React.PropsWithChildren<T>;

export type BaseComponentProps = {
  customContainerStyle?: ViewStyle;
};

export type ColorScale = {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export type BaseColorType = {
  PRIMARY: { KobeBlue: string; KobeGreen: string };
  SECONDARY: { Orange: string; Yellow: string };
  GREEN: ColorScale;
  RED: ColorScale;
  ORANGE: ColorScale;
  YELLOW: ColorScale;
  BLUE: ColorScale;
  DARK_BLUE: ColorScale;
  PINK: ColorScale;
  PURPLE: ColorScale;
  BG: {
    WHITE: string;
    INPUT_ACTIVE: string;
    PRIMARY: string;
    DISABLE: string;
    BUTTON_DISABLE: string;
    SOFT: string;
    SUB: string;
    STRONG: string;
    KOBE_BLUE: string;
  };
  TEXT: {
    WHITE: string;
    DISABLE: string;
    SOFT: string;
    SUB: string;
    STRONG: string;
    KOBE_BLUE: string;
  };
  STROKE: {
    SOFT: string;
    SUB: string;
    STRONG: string;
    KOBE_BLUE: string;
  };
  ICON: {
    WHITE: string;
    DISABLE: string;
    SOFT: string;
    SUB: string;
    STRONG: string;
    KOBE_BLUE: string;
  };
};

export type BaseSVGProps = {
  customContainerStyle?: ViewStyle;
  width?: number;
  height?: number;
  fill?: string;
  iconColor?: string;
  onPress?: () => void;
  isFocused?: boolean;
  stroke?: string;
};

export type MultiModalTypes = Partial<CoreModalProps>;
