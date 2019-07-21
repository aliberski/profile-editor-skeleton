import { Dimensions } from 'react-native';

export const COLOR = {
  primary: '#f95959',
  secondary: '#fc8c8b',
  disabled: '#4f4f4f',
  background: '#fff',
  error: '#f00',

  facebook: '#3b5998',

  font: '#000',
  font_light: '#fff',

  home: '#03a9f4',
  about: '#8bc34a',
  profile: '#ffc107',
};

export const SPACING = {
  primary: 10,
  small: 5,
  medium: 15,
  big: 20,
  large: 50,
};

export const FONT_SIZE = {
  primary: 15,
  small: 13,
};

export const standardHeaderOptions = {
  headerTintColor: COLOR.primary,
  headerStyle: {
    backgroundColor: COLOR.primary,
  },
  headerTitleStyle: {
    fontSize: FONT_SIZE.primary,
    color: COLOR.font_light,
  },
};

export const DRAWER_WIDTH = Dimensions.get('window').width * 0.7;
