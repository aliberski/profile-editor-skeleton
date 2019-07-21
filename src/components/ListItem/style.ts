import { StyleSheet } from 'react-native';
import { COLOR, SPACING } from 'constants/style';
import { IStyle } from './types';

export const ICON_SIZE = 25;
export const ITEM_COLOR = COLOR.disabled;

export default StyleSheet.create<IStyle>({
  item: {
    flexDirection: 'row',
    width: '100%',
    marginBottom: SPACING.primary,
    paddingVertical: SPACING.small,
  },
  contentWrapper: {
    marginLeft: SPACING.primary,
    flex: 1,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: SPACING.small,
  },
  text: {
    color: ITEM_COLOR,
  },
  label: {
    flex: 1,
    fontWeight: 'bold',
  },
});
