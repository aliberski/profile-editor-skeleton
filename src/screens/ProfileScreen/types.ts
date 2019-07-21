import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';
import { IProfileStore } from 'stores/ProfileStore/types';

export interface IProps extends INavigation {
  profileStore: IProfileStore;
}

export interface IStyle {
  buttonWrapper: ViewStyle;
}
