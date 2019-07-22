import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'mobx-persist';

import profileStore from './ProfileStore';
import homeStore from './HomeStore';
import navigationStore from './NavigationStore';

export enum store {
  profile = 'profileStore',
  home = 'homeStore',
  navigation = 'navigationStore',
}

export const hydrate = create({ storage: AsyncStorage });

export default {
  [store.profile]: profileStore,
  [store.home]: homeStore,
  [store.navigation]: navigationStore,
};
