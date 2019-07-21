// route: PROFILE

import React from 'react';
import { View } from 'react-native';
import { Button } from 'react-native-paper';

import ScreenWrapper from 'components/ScreenWrapper';
import BottomNavIcon from 'components/BottomNavIcon';
import ProfileHeader from './ProfileHeader/index';
import ProfileList from './ProfileList';

import I18n from 'services/i18n';
import routes from 'constants/routes';
import { COLOR } from 'constants/style';
import style from './style';
import { IProps } from './types';

const renderLogoutButton = (onPress: () => void) => (
  <View style={style.buttonWrapper}>
    <Button mode='contained' onPress={onPress}>
      {I18n.t('profile.buttonLogout')}
    </Button>
  </View>
);

// TODO: display profile data
const ProfileScreen = (props: IProps) => {
  const logout = () => {
    // TODO:
  };

  return (
    <>
      <ProfileHeader
        avatar='https://picsum.photos/700'
        name='John Doe'
        country='Poland'
      />
      <ScreenWrapper>
        <ProfileList />
        {renderLogoutButton(logout)}
      </ScreenWrapper>
    </>
  );
};

ProfileScreen.navigationOptions = {
  tabBarIcon: <BottomNavIcon route={routes.PROFILE} />,
  tabBarColor: COLOR.profile,
};

export default ProfileScreen;
