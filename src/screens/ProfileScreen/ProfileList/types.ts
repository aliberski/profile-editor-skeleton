import { IProps as IListItemProps } from 'components/ListItem/types';

export interface IProps {
  data: IListItemProps[];
}

export interface IListItem {
  item: IListItemProps;
  index: number;
  separators: any;
}
