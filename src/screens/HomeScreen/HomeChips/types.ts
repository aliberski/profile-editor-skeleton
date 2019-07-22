import { ViewStyle } from 'react-native';
import { IChip } from 'stores/HomeStore/types';

export interface IProps {
  data: IChip[];
}

export interface IStyle {
  container: ViewStyle;
  chip: ViewStyle;
}
