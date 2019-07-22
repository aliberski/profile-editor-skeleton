import { IProps as IListItemProps } from 'components/ListItem/types';

export interface IItem extends IListItemProps {}

export type TokenType = string;

export interface IPicture {
  data: {
    height: number;
    width: number;
    is_silhouette: boolean;
    url: string;
  };
}

export interface IUserData {
  id: string;
  first_name: string;
  last_name: string;
  picture: IPicture;
  email: string;
}

export interface IProfileStore {
  accessToken: TokenType;
  userData: string;
  loading: boolean;
  success: boolean;
  token: TokenType;
  user: IUserData;
  list: IItem[];
  listData: IItem[];
  editName: (first_name: string, last_name: string) => void;
  login: () => void;
  logout: () => void;
  setAccessToken: () => void;
  setUserData: () => void;
}
