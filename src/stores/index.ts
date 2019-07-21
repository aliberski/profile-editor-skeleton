import profileStore from './ProfileStore';

export enum store {
  profile = 'profileStore',
}

export default {
  [store.profile]: profileStore,
};
