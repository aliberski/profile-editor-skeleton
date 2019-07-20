import { StyleSheet } from 'react-native';
import { COLOR, SPACING } from 'constants/style';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    flex: 1,
    backgroundColor: COLOR.background,
  },
  buttonWrapper: {
    padding: SPACING.primary,
    paddingTop: SPACING.big,
  },
});
