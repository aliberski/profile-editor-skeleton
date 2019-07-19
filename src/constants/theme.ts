import { Platform } from 'react-native';
import { COLOR } from 'constants/globalStyle';

const fonts = Platform.select({
  ios: {
    regular: 'Helvetica Neue',
    medium: 'HelveticaNeue-Medium',
    light: 'HelveticaNeue-Light',
    thin: 'HelveticaNeue-Thin',
  },
  default: {
    regular: 'sans-serif',
    medium: 'sans-serif-medium',
    light: 'sans-serif-light',
    thin: 'sans-serif-thin',
  },
});

export default {
  dark: true,
  roundness: 4,
  colors: {
    primary: COLOR.primary,
    background: COLOR.background,
    surface: 'white',
    accent: COLOR.secondary,
    error: COLOR.error,
    text: COLOR.font,
    disabled: COLOR.disabled,
    placeholder: COLOR.disabled,
    backdrop: 'black',
  },
  fonts,
};
