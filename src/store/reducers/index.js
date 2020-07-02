import { combineReducers } from 'redux';

import sampleReducer from './sampleReducer';
import * as actions from '../types';

const appReducer = combineReducers({
  sample: sampleReducer
});

const rootReducer = (state, action) => {
  if (action.type === actions.USER_LOGOUT) {
    // eslint-disable-next-line no-param-reassign
    state = undefined;
  }

  return appReducer(state, action);
};

export default rootReducer;
