import {
  REPLACE_INTERVAL,
  CREATE_INTERVAL,
  DELETE_INTERVAL,
  SET_INTERVALS,
} from './mutation-types';

export default {
  async fetchTimeIntervals({ commit }, queryOptions) {
    const response = await this.$axios.post(
      '/rs/intervals/search',
      queryOptions
    );
    const intervalsFromBackEnd = response.data;
    commit(SET_INTERVALS, intervalsFromBackEnd);
  },

  createInterval({ commit }, timeInterval) {
    this.$axios
      .post('/rs/intervals', timeInterval)
      .then(res => {
        commit(CREATE_INTERVAL, res.data);
      })
      .catch(reason => console.log(reason));
  },

  closeInterval({ commit }, id) {
    this.$axios
      .patch(`/rs/intervals/${id}/close`)
      .then(res => {
        commit(REPLACE_INTERVAL, res.data);
      })
      .catch(reason => console.log(reason));
  },

  deleteInterval({ commit }, id) {
    this.$axios
      .delete(`/rs/intervals/${id}`)
      .then(() => commit(DELETE_INTERVAL, id))
      .catch(reason => console.log(reason));
  },
};
