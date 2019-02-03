import {
  CLOSE_INTERVAL,
  CREATE_INTERVAL,
  DELETE_INTERVAL,
  SET_INTERVALS,
} from './mutation-types';

export default {
  async fetchTimeIntervals({ commit }) {
    const response = await this.$axios.get('/rs/intervals');
    const intervalsFromBackEnd = response.data;
    commit(SET_INTERVALS, intervalsFromBackEnd);
  },

  createInterval({ commit }, timeInterval) {
    commit(CREATE_INTERVAL, timeInterval);
  },

  deleteInterval({ commit }, id) {
    commit(DELETE_INTERVAL, id);
  },

  closeInterval({ commit }, id) {
    commit(CLOSE_INTERVAL, id);
  },
};
