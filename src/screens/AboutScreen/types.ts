import { ViewStyle, TextStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {}

export interface IStyle {
  content: ViewStyle;
  text: TextStyle;
}
