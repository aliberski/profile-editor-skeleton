import I18n from 'services/i18n';
import { IChip, ICard } from './types';

export const chips: IChip[] = [
  {
    icon: 'details',
    text: I18n.t('home.chips.one'),
  },
  {
    icon: undefined,
    text: I18n.t('home.chips.two'),
  },
  {
    icon: 'directions-car',
    text: I18n.t('home.chips.three'),
  },
  {
    icon: 'directions-run',
    text: I18n.t('home.chips.four'),
  },
  {
    icon: undefined,
    text: I18n.t('home.chips.five'),
  },
  {
    icon: 'flag',
    text: I18n.t('home.chips.six'),
  },
  {
    icon: 'flight',
    text: I18n.t('home.chips.seven'),
  },
];

export const cards: ICard[] = [
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.one.title'),
    subtitle: I18n.t('home.cards.one.subtitle'),
    icon: 'folder',
  },
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.two.title'),
    subtitle: I18n.t('home.cards.two.subtitle'),
    icon: 'fingerprint',
  },
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.three.title'),
    subtitle: I18n.t('home.cards.three.subtitle'),
    icon: 'flash-on',
  },
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.four.title'),
    subtitle: I18n.t('home.cards.four.subtitle'),
    icon: 'flare',
  },
  {
    uri: 'https://picsum.photos/700',
    title: I18n.t('home.cards.five.title'),
    subtitle: I18n.t('home.cards.five.subtitle'),
    icon: 'games',
  },
];
