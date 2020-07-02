import * as actions from '../types';

export const INITIAL_STATE = {
  samples: [test, test],
};

const sampleReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actions.SET_SAMPLES:
      return {
        ...state,
        samples: action.locations,
      };
    default:
      return state;
  }
};

export default sampleReducer;
