import { observable, action, computed, toJS } from 'mobx';
import { persist } from 'mobx-persist';
import facebookService from 'services/FacebookService';

// NOTE: I had some issues with persisting `userData` (mobx-persist bug?)
// so I stored only `accessToken` and I fetch the data after rehydrate

class ProfileStore {
  @observable public userData = null;
  @persist @observable public accessToken = '';
  @observable public loading = false;
  @observable public success = false;

  @computed public get user() {
    return toJS(this.userData);
  }

  @computed public get token() {
    return this.accessToken;
  }

  @action public setUserData = async () => {
    if (!this.accessToken) {
      return;
    }
    const userData = await facebookService.getUserData(this.accessToken);
    if (userData) {
      this.userData = toJS(userData);
      this.loading = false;
      this.success = true;
    }
  };

  @action public setAccessToken = async () => {
    const token = await facebookService.getAccessToken();
    if (token) {
      this.accessToken = token;
    }
  };

  @action public login = async () => {
    this.success = false;
    this.loading = true;
    await facebookService.login();
    await this.setAccessToken();
    await this.setUserData();
    this.loading = false;
    setTimeout(() => {
      // NOTE: yes I know it could be handled better :)
      this.success = false;
    }, 1000);
  };

  @action public logout = async () => {
    this.success = false;
    this.userData = null;
    this.accessToken = '';
    await facebookService.logOut();
    this.loading = false;
  };
}

export default new ProfileStore();
