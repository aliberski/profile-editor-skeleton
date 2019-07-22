import { observable, computed, toJS } from 'mobx';

import { cards, chips } from './data';

class HomeStore {
  @observable public cardsData = cards;
  @observable public chipsData = chips;

  @computed public get cards() {
    return toJS(this.cardsData);
  }

  @computed public get chips() {
    return toJS(this.chipsData);
  }
}

export default new HomeStore();
