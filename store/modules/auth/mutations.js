import { SET_USER, REMOVE_USER, CHECK_AUTH } from './mutation-types';

export default {
  [SET_USER](state, user) {
    state.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  },
  [REMOVE_USER](state) {
    state.user = null;
    localStorage.removeItem('user');
  },
  [CHECK_AUTH](state) {
    if (!state.user || state.user.expired()) {
      state.authenticated = false;
    } else {
      state.authenticated = true;
    }
  },
};
