import {
  CLOSE_INTERVAL,
  CREATE_INTERVAL,
  DELETE_INTERVAL,
  SET_INTERVALS,
} from './mutation-types';

export default {
  [SET_INTERVALS](state, timeIntervals) {
    state.timeIntervals = timeIntervals;
  },
  [CREATE_INTERVAL](state, timeInterval) {
    return null;
  },
  [CLOSE_INTERVAL](state, id) {
    return null;
  },
  [DELETE_INTERVAL](state, id) {
    return null;
  },
};
