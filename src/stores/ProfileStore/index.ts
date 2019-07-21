import { observable, action, computed } from 'mobx';
import facebookService from 'services/FacebookService';

class ProfileStore {
  @observable public userData = null;
  @observable public accessToken = '';
  @observable public loading = false;
  @observable public success = false;

  @computed public get user() {
    return this.userData;
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
      this.userData = userData;
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
  };

  @action public logout = async () => {
    await facebookService.logOut();
    this.accessToken = '';
    this.userData = null;
    this.success = false;
    this.loading = false;
  };
}

export default new ProfileStore();
