export interface IChip {
  icon: string | undefined;
  text: string;
}

export interface ICard {
  uri: string;
  title: string;
  subtitle: string;
  icon: string;
}

export interface IHomeStore {
  cards: ICard[];
  cardsData: ICard[];
  chips: IChip[];
  chipsData: IChip[];
}
