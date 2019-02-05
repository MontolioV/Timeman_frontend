import {
  REPLACE_INTERVAL,
  CREATE_INTERVAL,
  DELETE_INTERVAL,
  SET_INTERVALS,
} from './mutation-types';

export default {
  [SET_INTERVALS](state, timeIntervals) {
    state.timeIntervals = timeIntervals;
  },
  [CREATE_INTERVAL](state, timeInterval) {
    state.timeIntervals.unshift(timeInterval);
  },
  [REPLACE_INTERVAL](state, timeInterval) {
    const index = state.timeIntervals.findIndex(
      value => value._id === timeInterval._id
    );
    state.timeIntervals[index] = timeInterval;
  },
  [DELETE_INTERVAL](state, id) {
    const index = state.timeIntervals.findIndex(value => value._id === id);
    state.timeIntervals.splice(index, 1);
  },
};
