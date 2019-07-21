export type TokenType = string;
export interface IUserData {}

export interface IProfileStore {
  accessToken: TokenType;
  userData: IUserData;
  loading: boolean;
  success: boolean;
  token: () => void;
  user: () => void;
  login: () => void;
  logout: () => void;
  setAccessToken: () => void;
  setUserData: () => void;
}
