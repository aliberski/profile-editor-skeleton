import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  avatar: string;
  title: string;
  subtitle?: string;
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
