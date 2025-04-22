import { Dispatch } from '@/types';
import { ViewStyle } from 'react-native';

export type SwitchProps = {
  customContainer?: ViewStyle;
  label: string;
  isEnabled: boolean;
  setIsEnabled: Dispatch<boolean>;
};
