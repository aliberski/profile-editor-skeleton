import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/style';
import { IStyle } from './types';

export const ICON_SIZE = 30;

export default StyleSheet.create<IStyle>({
  container: {
    padding: SPACING.primary,
  },
});
