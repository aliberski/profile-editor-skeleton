import { ViewStyle } from 'react-native';
import { INavigation } from 'constants/types';
import { IProfileStore } from 'stores/ProfileStore/types';

export interface IProps extends INavigation {
  profileStore: IProfileStore;
}

export interface IDrawerItem {
  label: string;
  route: string;
}

export interface IStyle {
  container: ViewStyle;
  buttonWrapper: ViewStyle;
}
