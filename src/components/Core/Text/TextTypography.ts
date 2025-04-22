import {Normalize} from '../../../styles';

type TextVariant =
  | 'mini'
  | 'bodyXSmall'
  | 'bodySmall'
  | 'bodyBase'
  | 'labelXSmall'
  | 'labelSmall'
  | 'labelBase'
  | 'labelLarge'
  | 'headingXSmall'
  | 'headingSmall'
  | 'headingMedium'
  | 'headingLarge'
  | 'headingXLarge'
  | 'titleLarge'
  | 'titleXLarge'
  | 'headingXLarge';

interface TypographyStyle {
  fontSize: number;
  lineHeight: number;
  weight: string;
  fontFamily: string;
}

type SubVariant = 'regular' | 'medium' | 'semiBold';

type VariantStyles = {
  [Key in TextVariant]: {
    [SubKey in SubVariant]?: TypographyStyle;
  };
};

export const Typography: VariantStyles = {
  mini: {
    regular: {
      fontSize: Normalize(10, 'height'),
      lineHeight: Normalize(12, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(10, 'height'),
      lineHeight: Normalize(12, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(10, 'height'),
      lineHeight: Normalize(12, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  bodyXSmall: {
    regular: {
      fontSize: Normalize(12, 'height'),
      lineHeight: Normalize(16, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(12, 'height'),
      lineHeight: Normalize(16, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(12, 'height'),
      lineHeight: Normalize(16, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  bodySmall: {
    regular: {
      fontSize: Normalize(14, 'height'),
      lineHeight: Normalize(20, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(14, 'height'),
      lineHeight: Normalize(20, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(14, 'height'),
      lineHeight: Normalize(20, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  bodyBase: {
    regular: {
      fontSize: Normalize(16, 'height'),
      lineHeight: Normalize(24, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(16, 'height'),
      lineHeight: Normalize(24, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(16, 'height'),
      lineHeight: Normalize(24, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  labelXSmall: {
    regular: {
      fontSize: Normalize(12, 'height'),
      lineHeight: Normalize(16, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(12, 'height'),
      lineHeight: Normalize(16, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(12, 'height'),
      lineHeight: Normalize(16, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  labelSmall: {
    regular: {
      fontSize: Normalize(14, 'height'),
      lineHeight: Normalize(20, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(14, 'height'),
      lineHeight: Normalize(20, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(14, 'height'),
      lineHeight: Normalize(20, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  labelBase: {
    regular: {
      fontSize: Normalize(16, 'height'),
      lineHeight: Normalize(24, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(16, 'height'),
      lineHeight: Normalize(24, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(16, 'height'),
      lineHeight: Normalize(24, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  labelLarge: {
    regular: {
      fontSize: Normalize(18, 'height'),
      lineHeight: Normalize(24, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(18, 'height'),
      lineHeight: Normalize(24, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(18, 'height'),
      lineHeight: Normalize(24, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  headingXSmall: {
    regular: {
      fontSize: Normalize(20, 'height'),
      lineHeight: Normalize(28, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(20, 'height'),
      lineHeight: Normalize(28, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(20, 'height'),
      lineHeight: Normalize(28, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  headingSmall: {
    regular: {
      fontSize: Normalize(24, 'height'),
      lineHeight: Normalize(32, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(24, 'height'),
      lineHeight: Normalize(32, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(24, 'height'),
      lineHeight: Normalize(32, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  headingMedium: {
    regular: {
      fontSize: Normalize(28, 'height'),
      lineHeight: Normalize(36, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(28, 'height'),
      lineHeight: Normalize(36, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(28, 'height'),
      lineHeight: Normalize(36, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  headingLarge: {
    regular: {
      fontSize: Normalize(32, 'height'),
      lineHeight: Normalize(40, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(32, 'height'),
      lineHeight: Normalize(40, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(32, 'height'),
      lineHeight: Normalize(40, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  headingXLarge: {
    regular: {
      fontSize: Normalize(40, 'height'),
      lineHeight: Normalize(44, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(40, 'height'),
      lineHeight: Normalize(44, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(40, 'height'),
      lineHeight: Normalize(44, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  titleLarge: {
    regular: {
      fontSize: Normalize(48, 'height'),
      lineHeight: Normalize(56, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(48, 'height'),
      lineHeight: Normalize(56, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(48, 'height'),
      lineHeight: Normalize(56, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
  titleXLarge: {
    regular: {
      fontSize: Normalize(56, 'height'),
      lineHeight: Normalize(64, 'height'),
      weight: '400',
      fontFamily: 'Aspekta-400',
    },
    medium: {
      fontSize: Normalize(56, 'height'),
      lineHeight: Normalize(64, 'height'),
      weight: '500',
      fontFamily: 'Aspekta-500',
    },
    semiBold: {
      fontSize: Normalize(56, 'height'),
      lineHeight: Normalize(64, 'height'),
      weight: '600',
      fontFamily: 'Aspekta-600',
    },
  },
} as const;

export type TypographyVariant = `${TextVariant}/${SubVariant}`;
