import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width } = Dimensions.get('screen');
const { height } = Dimensions.get('screen');

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 852;

const scaleWidth = width / DESIGN_WIDTH;
const scaleHeight = height / DESIGN_HEIGHT;

export const Normalize = (size: number, based: 'width' | 'height' = 'width') => {
  const scale = based === 'height' ? scaleHeight : scaleWidth;

  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
};

const BASE_CONTAINER_PADDING_MULTIPLIER = 0.045;

export const BASE__CONTAINER_PADDING = width * BASE_CONTAINER_PADDING_MULTIPLIER;
export const BASE_WIDTH = width * (1 - BASE_CONTAINER_PADDING_MULTIPLIER * 2);

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const INPUT_HEIGHT = 56;
export const BASE_MARGIN = Normalize(16, 'height');
export const BASE_PADDING = Normalize(16, 'width');
export const BASE_GAP = Normalize(16, 'height');

const Container = { flex: 1, padding: BASE__CONTAINER_PADDING };

const CenterRow = {
  display: 'flex' as const,
  flexDirection: 'row' as const,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
};

const CenterColumn = {
  display: 'flex' as const,
  flexDirection: 'row' as const,
  justifyContent: 'center' as const,
  alignItems: 'center' as const,
};

export const CommonStyles = StyleSheet.create({
  Container,
  CenterRow,
  CenterColumn,
  Shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
