import { createTheme } from '@mui/material';
import './index.d';

const fontFace = {
  graphikSemiBold: {
    fontFamily: 'Graphik-SemiBold',
    src: `url('/assets/fonts/graphik/GraphikSemibold.otf')`
  },
  graphikRegular: {
    fontFamily: 'Graphik-Regular',
    src: `url('/assets/fonts/graphik/GraphikRegular.otf')`
  },
  graphikMedium: {
    fontFamily: 'Graphik-Medium',
    src: `url('/assets/fonts/graphik/GraphikMedium.otf')`
  }
};

export const pxToRem = (fontSize: number) => {
  return `${fontSize / 16}rem`;
};

export const theme = createTheme({
  spacing: [4, 8, 12, 16, 20, 24, 32],
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          '&.Mui-disabled': {
            backgroundColor: '#CCE3FF',
            color: '#FFFFFF'
          },
          textTransform: 'none',
          boxShadow: 'none'
        },
        startIcon: {
          '&.MuiButton-startIcon': {
            marginTop: '-3px'
          }
        }
      }
    }
  },
  palette: {
    primary: {
      100: '#FAFCFF',
      300: '#66A1FF',
      500: '#0052FF',
      700: '#002EB7',
      900: '#00177A',
      400: '#627EEA33'
    },
    success: {
      100: '#E9F7EC',
      500: '#20B03F'
    },
    warning: {
      100: '#FFF6ED',
      300: '#FFA74F',
      500: '#FFA74F'
    },
    error: {
      100: '#F3E6EB',
      500: '#B71A33'
    },
    gray: {
      50: '#F2F2F7',
      100: '#E8E8F7',
      300: '#B4B4CF',
      500: '#4B4B60',
      700: '#252545',
      900: '#0E0E2E',
      1100: '#D0D5DD',
      1300: '#667085',
      white: '#FFFFFF'
    },
    textColor: {
      lowEmp: '#B2B2B9',
      medEmp: '#7D7D89',
      highEmp: '#343446'
    },
    structural: {
      blue: '#CCE3FF'
    }
  },

  typography: {
    h4: {
      '@font-face': fontFace.graphikSemiBold,
      fontFamily: 'Graphik-SemiBold',
      fontSize: pxToRem(40),
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: pxToRem(54),
      letterSpacing: pxToRem(-0.4),
      textTransform: 'none'
    },
    h6: {
      '@font-face': fontFace.graphikSemiBold,
      fontFamily: 'Graphik-SemiBold',
      fontSize: pxToRem(24),
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: pxToRem(34),
      textTransform: 'none'
    },
    subtitle1: {
      '@font-face': fontFace.graphikSemiBold,
      fontFamily: 'Graphik-SemiBold',
      fontSize: pxToRem(20),
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: pxToRem(28),
      letterSpacing: pxToRem(0.1),
      textTransform: 'none'
    },
    subtitle2: {
      '@font-face': fontFace.graphikRegular,
      fontFamily: 'Graphik-Regular',
      fontSize: pxToRem(20),
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: pxToRem(28),
      letterSpacing: pxToRem(0.1),
      textTransform: 'none'
    },
    body1: {
      '@font-face': fontFace.graphikSemiBold,
      fontFamily: 'Graphik-SemiBold',
      fontSize: pxToRem(16),
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: pxToRem(22),
      letterSpacing: pxToRem(0.16),
      textTransform: 'none'
    },
    body2: {
      '@font-face': fontFace.graphikRegular,
      fontFamily: 'Graphik-Regular',
      fontSize: pxToRem(16),
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: pxToRem(22),
      letterSpacing: pxToRem(0.16),
      textTransform: 'none'
    },
    button: {
      '@font-face': fontFace.graphikSemiBold,
      fontFamily: 'Graphik-SemiBold',
      fontSize: pxToRem(14),
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: pxToRem(42),
      letterSpacing: pxToRem(0.14),
      textTransform: 'none'
    },
    caption1: {
      '@font-face': fontFace.graphikMedium,
      fontFamily: 'Graphik-Medium',
      fontSize: pxToRem(14),
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: pxToRem(16),
      letterSpacing: pxToRem(0.14),
      textTransform: 'none'
    },
    caption2: {
      '@font-face': fontFace.graphikRegular,
      fontFamily: 'Graphik-Regular',
      fontSize: pxToRem(14),
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: pxToRem(16),
      letterSpacing: pxToRem(0.14),
      textTransform: 'none'
    },
    overline: {
      '@font-face': fontFace.graphikRegular,
      fontFamily: 'Graphik-Regular',
      fontSize: pxToRem(12),
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: pxToRem(14),
      letterSpacing: pxToRem(0.06),
      textTransform: 'none'
    }
  }
});
