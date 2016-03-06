import {
  RECEIVE_SPEAK_EASIES, REQUEST_SPEAK_EASIES, RECEIVE_CURRENT_LOCATION,
} from '../actions';

const initialState = {
  isFetching: false,
  currentLocation: {},
}

export function rootReducer(state = initialState, action) {
  switch(action.type) {
    case RECEIVE_SPEAK_EASIES:
      return Object.assign({}, state, { isFetching: false });
    case REQUEST_SPEAK_EASIES:
      return Object.assign({}, state, { isFetching: true });
    case RECEIVE_CURRENT_LOCATION:
      return Object.assign({}, state, { currentLocation: action.location });
    default:
      return state;
  }
};

const initialEntitiesState = {
  location: {},
};

export function entitiesReducer(state = initialEntitiesState, action) {
  if (action.json && action.json.entities) {
    return Object.assign({}, state, action.json.entities)
  }

  return state
};
