import { StyleSheet } from 'react-native';
import { SPACING, COLOR } from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    paddingHorizontal: SPACING.primary,
    paddingTop: SPACING.primary,
    backgroundColor: COLOR.background,
  },
});
