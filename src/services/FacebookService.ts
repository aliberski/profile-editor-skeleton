import { LoginManager, AccessToken } from 'react-native-fbsdk';

class FacebookService {
  private dataUrl = 'https://graph.facebook.com';
  private permissions = ['public_profile', 'email'];
  private fields = ['id', 'first_name', 'last_name', 'picture'];

  public getUserData = async (token: string) => {
    const fieldsString = this.fields.join(',');
    const url = `${
      this.dataUrl
    }/me?fields=${fieldsString}&access_token=${token}`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  };

  public getAccessToken = async () => {
    const data = await AccessToken.getCurrentAccessToken();
    return data ? data.accessToken : null;
  };

  public login = async () => {
    const response = await LoginManager.logInWithPermissions(this.permissions);
    return response;
  };

  public logOut = async () => {
    await LoginManager.logOut();
  };
}

export default new FacebookService();
