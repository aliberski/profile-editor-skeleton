import { ViewStyle, TextStyle } from 'react-native';

export interface IProps {
  icon: string;
  text: string;
  number: number | string;
  onPress?: () => void;
}

export interface IStyle {
  item: ViewStyle;
  contentWrapper: ViewStyle;
  content: ViewStyle;
  text: TextStyle;
  label: TextStyle;
}
