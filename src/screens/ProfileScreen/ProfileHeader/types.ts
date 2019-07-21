import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  avatar: string;
  name: string;
  country?: string;
}

export interface IStyle {
  container: ViewStyle;
  header: ViewStyle;
  headerText: ViewStyle;
  footerText: ViewStyle;
  userDetails: ViewStyle;
  footer: ViewStyle;
  footerItem: ViewStyle;
}
