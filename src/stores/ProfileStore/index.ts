import { observable, action, computed, toJS } from 'mobx';
import { persist } from 'mobx-persist';
import facebookService from 'services/FacebookService';
import { listData } from './data';

class ProfileStore {
  @persist @observable public userData = '';
  @persist @observable public accessToken = '';
  @observable public listData = listData;
  @observable public loading = false;
  @observable public success = false;

  @computed public get user() {
    return JSON.parse(this.userData);
  }

  @computed public get token() {
    return this.accessToken;
  }

  @computed public get list() {
    return toJS(this.listData);
  }

  @action public editName = (first_name: string, last_name: string) => {
    if (!this.userData) {
      return;
    }
    const user: any = this.user;
    if (typeof user === 'object') {
      this.userData = JSON.stringify({
        ...user,
        first_name,
        last_name,
      });
    }
  };

  @action public setUserData = async () => {
    if (!this.accessToken) {
      return;
    }
    const userData = await facebookService.getUserData(this.accessToken);
    if (userData) {
      this.userData = JSON.stringify(userData);
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
      this.success = false;
    }, 1000);
  };

  @action public logout = async () => {
    this.success = false;
    this.userData = '';
    this.accessToken = '';
    await facebookService.logOut();
    this.loading = false;
  };
}

export default new ProfileStore();
