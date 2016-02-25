export const REQUEST_SPEAK_EASIES = 'REQUEST_SPEAK_EASIES';
export const RECEIVE_SPEAK_EASIES = 'RECEIVE_SPEAK_EASIES';

const API_URL = 'http://dry-hamlet-63070.herokuapp.com';

function requestSpeakEasies() {
  return { type: REQUEST_SPEAK_EASIES }
}

function receiveSpeakEasies(json) {
  return {
    type: RECEIVE_SPEAK_EASIES,
    json
  }
}

export function loadSpeakEasies() {
  return dispatch => {
    dispatch(requestSpeakEasies());

    return fetch(`${API_URL}/locations`)
      .then(res => res.json())
      .then(json => dispatch(receiveSpeakEasies(json)));
  }
}
