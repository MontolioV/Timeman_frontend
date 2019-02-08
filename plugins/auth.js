import auth0Impl from '~/assets/js/auth0Impl';

export default function({ app }) {
  app.$auth.logoutAuth0 = () => {
    app.$auth.logout();
    auth0Impl.logout();
  };

  // TODO: 25.01.19 Not all requests must contain auth token.
  (() => {
    const token = app.$auth.$storage.getUniversal('_token.auth0');
    app.$axios.defaults.headers.common.Authorization = token;
  })();
}
