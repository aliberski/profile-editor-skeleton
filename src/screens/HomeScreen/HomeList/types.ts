import { ViewStyle } from 'react-native';
import { ICard } from 'stores/HomeStore/types';

export interface IProps {
  data: ICard[];
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
