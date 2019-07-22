import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/style';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  inputWrapper: {
    marginBottom: SPACING.primary,
  },
});
