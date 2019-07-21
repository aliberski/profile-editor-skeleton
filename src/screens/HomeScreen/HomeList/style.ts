import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/style';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    paddingTop: SPACING.primary,
    flex: 1,
    width: '100%',
  },
  card: {
    marginBottom: SPACING.primary,
  },
});
