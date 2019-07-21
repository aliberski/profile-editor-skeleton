// route: LOADING

import React, { useEffect, useState } from 'react';
import { inject, observer } from 'mobx-react';

import FullPageLoader from 'components/FullPageLoader/index';

import { hydrate, store } from 'stores';
import profileStore from 'stores/ProfileStore';
import { compose } from 'helpers';
import routes from 'constants/routes';
import { IProps } from './types';

const LoadingScreen = (props: IProps) => {
  const [hydrated, setHydrated] = useState<boolean>(false);
  const {
    profileStore: { token, setUserData },
  } = props;

  const resolveStartRoute = async () => {
    const {
      navigation: { navigate },
    } = props;
    if (token) {
      navigate(routes.HOME);
    } else {
      navigate(routes.LOGIN);
    }
  };

  useEffect(() => {
    hydrate(store.profile, profileStore).then(async () => {
      console.log(`${store.profile} hydrated...`);
      await setUserData();
      setHydrated(true);
    });
    if (hydrated) {
      resolveStartRoute();
    }
  }, [hydrated]);

  return <FullPageLoader />;
};

export default compose(
  inject(store.profile),
  observer,
)(LoadingScreen);
