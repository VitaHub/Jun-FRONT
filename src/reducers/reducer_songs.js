const INITIAL_STATE = [];
import { FETCH_SONGS } from '../actions/index';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_SONGS:
    return action.payload.data;
  default:
    return state;
  }
}
