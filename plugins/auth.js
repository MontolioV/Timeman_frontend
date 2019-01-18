import auth0Impl from '~/assets/auth0Impl';

export default function({ app }) {
  app.$auth.logoutAuth0 = () => {
    app.$auth.logout();
    auth0Impl.logout();
  };
}
