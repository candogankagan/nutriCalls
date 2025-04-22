import React, { useState } from 'react';
import { NativeSyntheticEvent, TextInputFocusEventData } from 'react-native';
import CoreInput, { InputProps } from '../Input';

interface PhoneInputProps extends Omit<InputProps, 'value' | 'onChangeText'> {
  value: string;
  onChangeText: (text: string) => void;
}

export const unformatPhoneNumber = (formattedNumber: string): string => {
  if (!formattedNumber) return '';
  // Remove all non-digit characters and +90 prefix
  const cleaned = formattedNumber.replace(/\D/g, '');

  if (cleaned.startsWith('90')) {
    return `0${cleaned.slice(2)}`;
  }
  if (cleaned.startsWith('0')) {
    return cleaned;
  }
  return `0${cleaned}`;
};

const formatPhoneNumber = (text: string, isInitialFormat = false) => {
  // Handle empty or +90 cases
  if (!text || (!isInitialFormat && text === '+90 ')) return text;

  // Remove all non-digit characters and handle leading 0
  const cleaned = isInitialFormat ? text.replace(/^0/, '').replace(/\D/g, '') : text.replace(/\D/g, '');

  // Remove +90 prefix if exists
  const withoutPrefix = cleaned.startsWith('90') ? cleaned.slice(2) : cleaned;

  // If no digits left after cleaning, return empty string
  if (withoutPrefix.length === 0) return '';

  // Format the number
  let formatted = '+90';
  if (withoutPrefix.length >= (isInitialFormat ? 3 : 1)) formatted = `${formatted} ${withoutPrefix.slice(0, 3)}`;
  if (withoutPrefix.length >= (isInitialFormat ? 6 : 4)) formatted = `${formatted} ${withoutPrefix.slice(3, 6)}`;
  if (withoutPrefix.length >= (isInitialFormat ? 8 : 7)) formatted = `${formatted} ${withoutPrefix.slice(6, 8)}`;
  if (withoutPrefix.length >= (isInitialFormat ? 10 : 9)) formatted = `${formatted} ${withoutPrefix.slice(8, 10)}`;

  return formatted;
};

const PhoneInput: React.FC<PhoneInputProps> = ({ value, onChangeText, onFocus, onBlur, ...props }) => {
  const [localValue, setLocalValue] = useState(formatPhoneNumber(value, true));

  const handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (!localValue) {
      setLocalValue('+90 ');
      onChangeText('+90 ');
    }
    onFocus?.(e);
  };

  const handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    if (localValue === '+90 ') {
      setLocalValue('');
      onChangeText('');
    }
    onBlur?.(e);
  };

  const handleChangeText = (text: string) => {
    const formatted = formatPhoneNumber(text);
    setLocalValue(formatted);
    onChangeText(formatted);
  };

  return (
    <CoreInput
      {...props}
      value={localValue}
      onChangeText={handleChangeText}
      onFocus={handleFocus}
      onBlur={handleBlur}
      keyboardType='number-pad'
      maxLength={17} // +90 XXX XXX XX XX format length
    />
  );
};

export default PhoneInput;
