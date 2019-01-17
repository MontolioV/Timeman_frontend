import auth0 from 'auth0-js';

class Auth0Impl {
  webAuth = new auth0.WebAuth({
    domain: 'timeman.auth0.com',
    clientID: 'PsEsUB705UNm8ovl3BqD8ZbeQpNn13Nu',
    redirectUri: 'http://localhost:3000/auth/cb',
    returnTo: 'http://localhost:3000',
    responseType: 'token id_token',
    scope: 'openid',
  });

  logout() {
    this.webAuth.logout();
  }
}

export default new Auth0Impl();
