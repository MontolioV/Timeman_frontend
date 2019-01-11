export default class User {
  constructor({ accessToken, idToken, expiresIn }) {
    this.accessToken = accessToken;
    this.idToken = idToken;
    this.expiresAt = expiresIn * 1000 + new Date().getTime();
  }

  expired() {
    return new Date() < this.expiresAt;
  }
}
