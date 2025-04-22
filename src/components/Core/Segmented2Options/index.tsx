import { useAppSelector } from '@/hooks';
import { GetCommonState } from '@/store';
import { Normalize } from '@/styles';
import { BaseColorType, BaseComponentProps } from '@/types';
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import CoreText from '../Text';

interface Segmented2OptionsProps extends BaseComponentProps {
  items?: [string, string];
  activeIndex: number | undefined | null;
  setActiveIndex: (index: number) => void;
  header?: string;
}
const Segmented2Options: React.FC<Segmented2OptionsProps> = ({
  items = ['Evet', 'Hayır'],
  activeIndex,
  setActiveIndex,
  header,
  customContainerStyle = {}
}) => {
  const { theme } = useAppSelector(GetCommonState);
  const styles = getStyles(theme);
  const renderButton = (text: string, index: number) => {
    const isActive = activeIndex === index;
    const isFirstButton = index === 0;
    const buttonStyle = [
      styles.segmentButton,
      {
        backgroundColor: isActive ? theme.BG.KOBE_BLUE : theme.BG.WHITE,
        ...(isFirstButton
          ? { borderRightWidth: 1, borderRightColor: theme.STROKE.SOFT, borderTopLeftRadius: Normalize(8), borderBottomLeftRadius: Normalize(8) }
          : { borderTopRightRadius: Normalize(8), borderBottomRightRadius: Normalize(8) })
      }
    ];
    return (
      <TouchableOpacity key={text} onPress={() => setActiveIndex(index)} style={buttonStyle}>
        <CoreText text={text} variant='labelSmall/medium' customStyle={{ color: isActive ? theme.TEXT.WHITE : theme.TEXT.SUB }} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={[styles.mainContainer, customContainerStyle]}>
      {header && <CoreText text={header} variant='labelBase/medium' customStyle={{ marginBottom: Normalize(12, 'height') }} />}
      <View style={styles.segmentContainer}>{items.map((item, index) => renderButton(item, index))}</View>
    </View>
  );
};
const getStyles = (theme: BaseColorType) =>
  StyleSheet.create({
    mainContainer: { width: '100%' },
    segmentContainer: {
      flexDirection: 'row',
      borderRadius: Normalize(8),
      backgroundColor: theme.BG.WHITE,
      alignItems: 'center',
      justifyContent: 'space-between',
      borderWidth: 1,
      borderColor: theme.STROKE.SOFT
    },
    segmentButton: { height: Normalize(40, 'height'), alignItems: 'center', justifyContent: 'center', flex: 1 }
  });
export default Segmented2Options;
