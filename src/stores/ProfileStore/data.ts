import I18n from 'services/i18n';
import { IItem } from './types';

export const listData: IItem[] = [
  {
    icon: 'photo-library',
    text: I18n.t('profile.list.shots'),
    number: 35,
  },
  {
    icon: 'favorite',
    text: I18n.t('profile.list.likes'),
    number: 236,
  },
  {
    icon: 'format-color-fill',
    text: I18n.t('profile.list.buckets'),
    number: 26,
  },
  {
    icon: 'local-offer',
    text: I18n.t('profile.list.tags'),
    number: 100,
  },
];
