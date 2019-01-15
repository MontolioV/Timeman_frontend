import auth0 from '~/assets/auth/auth0Service';

export default context => {
  auth0.redirect = context.redirect;
};
