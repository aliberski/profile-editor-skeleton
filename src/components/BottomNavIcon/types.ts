import routes from 'constants/routes';
import { INavigation } from 'constants/types';

export interface IProps extends INavigation {
  route: routes;
}
