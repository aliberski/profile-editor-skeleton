import { ViewStyle } from 'react-native';

export interface IChip {
  icon: string | undefined;
  text: string;
}

export interface IStyle {
  container: ViewStyle;
  chip: ViewStyle;
}
