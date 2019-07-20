import { StyleSheet } from 'react-native';
import { COLOR, SPACING } from 'constants/style';
import { IStyle } from './types';

export default StyleSheet.create<IStyle>({
  container: {
    width: 45,
    padding: SPACING.primary,
  },
  bar: {
    marginVertical: 2,
    backgroundColor: COLOR.font_light,
    width: '100%',
    height: 2.5,
    flexDirection: 'column',
  },
});
