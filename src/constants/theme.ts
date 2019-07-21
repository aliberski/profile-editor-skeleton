import { DefaultTheme } from 'react-native-paper';
import { COLOR } from 'constants/style';

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLOR.primary,
    accent: COLOR.secondary,
    error: COLOR.error,
    text: COLOR.font,
    disabled: COLOR.disabled,
  },
};
