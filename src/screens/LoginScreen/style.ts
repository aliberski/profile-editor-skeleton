import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/globalStyle';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  content: {
    paddingTop: SPACING.big,
  },
  text: {
    textAlign: 'center',
  },
  buttonWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
