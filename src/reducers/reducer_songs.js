const INITIAL_STATE = { all: [], current: null };
import { FETCH_SONGS } from '../actions/index';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_SONGS:
    return { ...state, all: action.payload.data };
  default:
    return state;
  }
}
