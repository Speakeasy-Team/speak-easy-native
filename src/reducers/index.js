import {
  RECEIVE_SPEAK_EASIES, REQUEST_SPEAK_EASIES, RECEIVE_CURRENT_LOCATION,
} from '../actions';

const initialState = {
  speakEasies: [],
  isFetching: false,
  currentLocation: {},
}

export default function(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_SPEAK_EASIES:
      return Object.assign({}, state, { isFetching: false, speakEasies: action.json.data });
    case REQUEST_SPEAK_EASIES:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_CURRENT_LOCATION:
      return Object.assign({}, state, { currentLocation: action.location });
    default:
      return state;
  }
}
