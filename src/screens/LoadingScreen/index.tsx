// route: LOADING

import React, { useEffect } from 'react';
import { inject, observer } from 'mobx-react';

import FullPageLoader from 'components/FullPageLoader/index';

import { compose } from 'helpers';
import { store } from 'stores';
import routes from 'constants/routes';
import { IProps } from './types';

const LoadingScreen = (props: IProps) => {
  const resolveStartRoute = async () => {
    const {
      navigation: { navigate },
      profileStore: { token },
    } = props;
    if (token) {
      navigate(routes.HOME);
    } else {
      navigate(routes.LOGIN);
    }
  };

  useEffect(() => {
    resolveStartRoute();
  }, []);

  return <FullPageLoader />;
};

export default compose(
  inject(store.profile),
  observer,
)(LoadingScreen);
