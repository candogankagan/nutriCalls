import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CoreText} from '../../../components';

interface BadgeProps {
  text: string;
  textColor: string;
  backgroundColor: string;
}

const Badge: React.FC<BadgeProps> = ({text, textColor, backgroundColor}) => {
  return (
    <View style={[styles.container, {backgroundColor}]}>
      <CoreText variant="mini/medium" text={text} color={textColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 24,
    backgroundColor: '#BAECD1',
  },
});

export default Badge;
