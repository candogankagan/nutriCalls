import { ViewStyle } from 'react-native';


export type ThemedViewProps = {
  bgColor?: string;
  safeAreaColor?: string;
  androidStatusBarColor?: string;
  customStyle?: ViewStyle;
  isParent?: boolean;
};

export type CoreModalButtonProps = {
  show: boolean;
  text: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'tertiary' | 'outlined';
};

export interface CoreModalProps {
  isVisible: boolean;
  onClose: () => void;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  primaryButton: Partial<CoreModalButtonProps>;
  secondaryButton?: Partial<CoreModalButtonProps>;
}
