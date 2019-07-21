import { INavigation } from 'constants/types';
import { IProfileStore } from 'stores/ProfileStore/types';

export interface IProps extends INavigation {
  profileStore: IProfileStore;
}
