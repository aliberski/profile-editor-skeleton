// route: LOADING

import React, { useEffect } from 'react';

import FullPageLoader from 'components/FullPageLoader/index';

import routes from 'constants/routes';
import { IProps } from './types';

const LoadingScreen = (props: IProps) => {
  const resolveStartRoute = () => {
    const {
      navigation: { navigate },
    } = props;
    // TODO: resolve start route
    if (false) {
      navigate(routes.HOME);
    } else {
      navigate(routes.LOGIN);
    }
  };

  useEffect(() => {
    setTimeout(resolveStartRoute, 1000); // TODO: remove fake delay
  }, []);

  return <FullPageLoader />;
};

export default LoadingScreen;
