export default function({ store }) {
  console.log(store);
  store.dispatch('Auth/setUser', {
    accessToken: 'one',
    idToken: 'two',
    expiresIn: 10,
  });
}
