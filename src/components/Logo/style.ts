import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/style';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    alignItems: 'center',
    width: '100%',
    backgroundColor: 'white',
    padding: SPACING.primary,
  },
});
