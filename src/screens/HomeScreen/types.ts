import { INavigation } from 'constants/types';
import { IHomeStore } from 'stores/HomeStore/types';

export interface IProps extends INavigation {
  homeStore: IHomeStore;
}
