import { StyleSheet } from 'react-native';
import { SPACING } from 'constants/style';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    paddingVertical: SPACING.primary,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  chip: {
    marginRight: SPACING.small,
    marginBottom: SPACING.primary,
  },
});
