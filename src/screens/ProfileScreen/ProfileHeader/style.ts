import { StyleSheet } from 'react-native';
import { COLOR, SPACING, FONT_SIZE } from 'constants/style';
import { IStyle } from './types';

export const HEADER_ICON_SIZE = 30;
export const HEADER_COLOR = COLOR.font_light;
export const AVATAR_SIZE = 100;

export default StyleSheet.create<IStyle>({
  container: {
    backgroundColor: COLOR.secondary,
    paddingVertical: SPACING.big,
    paddingHorizontal: SPACING.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingBottom: SPACING.primary,
  },
  headerText: {
    color: HEADER_COLOR,
  },
  footerText: {
    color: HEADER_COLOR,
    fontSize: FONT_SIZE.primary,
  },
  userDetails: {
    marginVertical: SPACING.primary,
    alignItems: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  footerItem: {
    alignItems: 'center',
    marginHorizontal: SPACING.big,
  },
});
