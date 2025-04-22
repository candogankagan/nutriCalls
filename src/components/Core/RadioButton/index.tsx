import { Normalize } from '@/styles';
import React from 'react';
import { StyleProp, StyleSheet, Text, TouchableOpacity, View, ViewStyle } from 'react-native';

interface RadioButtonProps {
  label?: string;
  selected: boolean;
  onPress: () => void;
  customContainerStyle?: StyleProp<ViewStyle>;
}

const RadioButton: React.FC<RadioButtonProps> = ({ label, selected, onPress, customContainerStyle }) => {
  return (
    <TouchableOpacity style={[styles.container, customContainerStyle]} onPress={onPress}>
      <View style={{ ...styles.radioCircle, ...(!selected ? styles.border : {}), ...(label ? { marginRight: Normalize(8) } : {}) }}>
        {selected && (
          <View style={styles.selectedDot}>
            <View style={styles.selectedDotCircle} />
          </View>
        )}
      </View>
      {label && <Text style={[styles.label, selected && styles.selectedLabel]}>{label}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8
  },
  border: {
    borderWidth: 1,
    borderColor: 'rgba(225, 228, 234, 1)'
  },
  radioCircle: {
    height: Normalize(22),
    width: Normalize(22),
    borderRadius: Normalize(11),
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedDot: {
    width: '100%',
    height: '100%',
    borderRadius: Normalize(12),
    backgroundColor: 'rgba(55, 0, 186, 1)',
    alignItems: 'center',
    justifyContent: 'center'
  },
  selectedDotCircle: {
    height: Normalize(10),
    width: Normalize(10),
    borderRadius: Normalize(5),
    backgroundColor: '#fff'
  },
  label: {
    fontSize: 16,
    color: '#2c3e50'
  },
  selectedLabel: {
    color: '#000'
  }
});

export default RadioButton;
