import I18n from 'services/i18n';

export const getScreenTitle = (key: string): string => {
  return I18n.t(key).toUpperCase();
};
