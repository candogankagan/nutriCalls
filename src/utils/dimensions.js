import {Dimensions, PixelRatio, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

const DESIGN_WIDTH = 393;
const DESIGN_HEIGHT = 852;

const scaleWidth = SCREEN_WIDTH / DESIGN_WIDTH;
const scaleHeight = SCREEN_HEIGHT / DESIGN_HEIGHT;

function normalize(size, based = 'width') {
  const scale = based === 'height' ? scaleHeight : scaleWidth;
  return Math.round(PixelRatio.roundToNearestPixel(size * scale));
}

function androidMargin(size, based = 'width') {
  const scale = based === 'height' ? scaleHeight : scaleWidth;
  return Math.round(
    PixelRatio.roundToNearestPixel(
      Platform.OS === 'android' ? size * scale : 0,
    ),
  );
}

export {SCREEN_WIDTH, SCREEN_HEIGHT, normalize, androidMargin};
