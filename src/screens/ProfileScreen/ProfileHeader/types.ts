import { ViewStyle } from 'react-native';

export interface IProps {
  avatar: string;
  title: string;
  onEditPress: () => void;
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
