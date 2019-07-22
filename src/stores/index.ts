// NOTE: I know that `AsyncStorage` should be imported from the `react-native-community` library,
// but I had some issues with that

import { AsyncStorage } from 'react-native';
import { create } from 'mobx-persist';

import profileStore from './ProfileStore';
import homeStore from './HomeStore';

export enum store {
  profile = 'profileStore',
  home = 'homeStore',
}

export const hydrate = create({ storage: AsyncStorage });

export default {
  [store.profile]: profileStore,
  [store.home]: homeStore,
};
