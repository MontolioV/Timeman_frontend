import { SET_USER, REMOVE_USER, CHECK_AUTH } from './mutation-types';
import User from './user';

export default {
  setUser({ commit }, authResult) {
    commit(SET_USER, new User(authResult));
  },

  removeUser({ commit }) {
    commit(REMOVE_USER);
  },

  checkUserAuth({ commit }) {
    commit(CHECK_AUTH);
  },
};
