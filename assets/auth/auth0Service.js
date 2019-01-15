import auth0 from 'auth0-js';
import EventEmitter from 'eventemitter3';

class AuthService {
  accessToken;
  idToken;
  expiresAt;
  authenticated = this.isAuthenticated();
  authNotifier = new EventEmitter();
  //redirect function will be injected by plugins/contextInjector.js
  redirect = undefined;

  webAuth = new auth0.WebAuth({
    domain: 'timeman.auth0.com',
    clientID: 'PsEsUB705UNm8ovl3BqD8ZbeQpNn13Nu',
    redirectUri: 'http://localhost:3000/auth/cb',
    responseType: 'token id_token',
    scope: 'openid',
  });

  login() {
    this.webAuth.authorize();
  }

  handleAuthentication() {
    this.webAuth.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        this.redirect('/');
      } else if (err) {
        this.redirect('/');
        console.log(err);
      }
    });
  }

  setSession(authResult) {
    this.accessToken = authResult.accessToken;
    this.idToken = authResult.idToken;
    this.expiresAt = authResult.expiresIn * 1000 + new Date().getTime();

    this.authNotifier.emit('authChange', { authenticated: true });

    localStorage.setItem('loggedIn', true);
  }

  renewSession() {
    console.log('renewSession');

    this.webAuth.checkSession({}, (err, authResult) => {
      console.log('checkSession');
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
      } else if (err) {
        // this.logout();
        // console.log(err);
        //TODO:{ error: "login_required", error_description: "Login required" }
      }
    });
  }

  logout() {
    // Clear access token and ID token from local storage
    this.accessToken = null;
    this.idToken = null;
    this.expiresAt = null;
    this.authenticated = false;
    localStorage.removeItem('loggedIn');
    this.authNotifier.emit('authChange', false);
    // navigate to the home route
    this.webAuth.logout({
      returnTo: 'http://localhost:3000',
    });
  }

  getAuthenticatedFlag() {
    return localStorage.getItem('loggedIn');
  }

  isAuthenticated() {
    return (
      new Date().getTime() < this.expiresAt &&
      this.getAuthenticatedFlag() === 'true'
    );
  }
}

export default new AuthService();
