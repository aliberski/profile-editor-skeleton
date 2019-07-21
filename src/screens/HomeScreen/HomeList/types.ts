import { ViewStyle } from 'react-native';

export interface ICard {
  uri: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface IListItem {
  item: ICard;
  index: number;
  separators: any;
}

export interface IStyle {
  container: ViewStyle;
  card: ViewStyle;
}
