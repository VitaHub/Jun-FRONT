const INITIAL_STATE = { all: [], current: null };
import { FETCH_SONGS, DELETE_SONG } from '../actions/index';

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_SONGS:
    return { ...state, all: action.payload.data };
  case DELETE_SONG:
    return { ...state, all: state.all.filter((song) => {
      return song.id.toString() != action.payload.data.id;
    }) };
  default:
    return state;
  }
}
