import auth0 from 'auth0-js';

class Auth0Impl {
  webAuth = new auth0.WebAuth({
    domain: 'timeman.auth0.com',
    clientID: 'PsEsUB705UNm8ovl3BqD8ZbeQpNn13Nu',
    returnTo: process.env.PROD_URL
      ? process.env.PROD_URL + '/auth/cb'
      : 'http://localhost:3000/auth/cb',
    responseType: 'token',
    audience: 'https://montoliov.ml/rs',
    scope: 'openid profile email',
  });

  logout(returnTo) {
    this.webAuth.logout({ returnTo });
  }

  checkForEmailError() {
    let result = false;
    this.webAuth.parseHash({}, function(err, authResult) {
      result =
        err &&
        err.errorDescription === 'Please verify your email before logging in.';
    });
    return result;
  }
}

export default new Auth0Impl();
