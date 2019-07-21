import { IProps as IListItemProps } from 'components/ListItem/types';

export interface IItem extends IListItemProps {}

export interface IListItem {
  item: IItem;
  index: number;
  separators: any;
}
