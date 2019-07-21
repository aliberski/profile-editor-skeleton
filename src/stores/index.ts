// NOTE: I know that `AsyncStorage` should be imported from the `react-native-community` library,
// but I had some issues with that

import { AsyncStorage } from 'react-native';
import { create } from 'mobx-persist';

import profileStore from './ProfileStore';

export enum store {
  profile = 'profileStore',
}

export const hydrate = create({ storage: AsyncStorage });

export default {
  [store.profile]: profileStore,
};
