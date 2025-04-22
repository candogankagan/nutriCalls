import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React from 'react';
import CoreText from '../Text';
import { BASE_WIDTH, Normalize } from '@/styles';
import { BaseColorType, BaseComponentProps } from '@/types';
import { useAppSelector } from '@/hooks';
import { GetCommonState } from '@/store';

const defaultItems = ['Günlük', 'Haftalık', 'Aylık'];

type SegmentedControlProps = BaseComponentProps & {
  items?: string[];
  activeIndex: number | null;
  setActiveIndex: (index: number) => void;
  header?: string;
};

const SegmentedControl: React.FC<SegmentedControlProps> = ({ items = defaultItems, activeIndex, setActiveIndex, header, customContainerStyle }) => {
  const { theme } = useAppSelector(GetCommonState);

  const pressedItem = (idx: number) => {
    setActiveIndex(idx);
  };

  return (
    <View style={[styles(theme).mainContainer, customContainerStyle]}>
      {header && <CoreText text={header} variant='labelBase/medium' customStyle={{ marginBottom: Normalize(12, 'height') }} />}
      <View style={[styles(theme).segmentContainer]}>
        {items.map((item, idx) => (
          <TouchableOpacity key={item} onPress={() => pressedItem(idx)} style={styles(theme, activeIndex, idx).segmentButton}>
            <CoreText text={item} variant='labelSmall/medium' customStyle={styles(theme, activeIndex, idx).textColor} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};
export default SegmentedControl;

const styles = (theme: BaseColorType, activeIndex?: number | null, idx?: number) => {
  return StyleSheet.create({
    mainContainer: { marginVertical: Normalize(12), width: BASE_WIDTH },
    segmentContainer: {
      flexDirection: 'row',
      padding: Normalize(4),
      borderRadius: 8,
      backgroundColor: theme.BG.WHITE,
      alignItems: 'center',
      justifyContent: 'space-between',

      shadowColor: 'rgba(21, 29, 48, 0.08)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 2.94,
      elevation: 2 // Android için
    },
    segmentButton: {
      height: Normalize(32, 'height'),
      paddingVertical: Normalize(3),
      paddingHorizontal: Normalize(10),
      borderRadius: 7,
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      backgroundColor: activeIndex === idx ? theme.BG.KOBE_BLUE : theme.BG.WHITE
    },
    textColor: {
      color: activeIndex === idx ? theme.TEXT.WHITE : theme.TEXT.SUB
    }
  });
};
