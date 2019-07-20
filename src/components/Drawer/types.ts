import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {}

export interface IDrawerItem {
  label: string;
  route: string;
}

export interface IStyle {
  container: ViewStyle;
  buttonWrapper: ViewStyle;
}
