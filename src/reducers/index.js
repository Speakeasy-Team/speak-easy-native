import { RECEIVE_SPEAK_EASIES, REQUEST_SPEAK_EASIES, SELECT_ACTIVE_SPEAKEASY } from '../actions';

const initialState = {
  speakEasies: [],
  isFetching: false
}

export default function(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_SPEAK_EASIES:
      return Object.assign({}, state, { isFetching: false, speakEasies: action.json.data });
    case REQUEST_SPEAK_EASIES:
      return Object.assign({}, state, { isFetching: true });
    case SELECT_ACTIVE_SPEAKEASY:
      return Object.assign({}, state, { activeSpeakEasy: action.id });
    default:
      return state;
  }
}
