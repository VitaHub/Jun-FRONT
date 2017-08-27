import axios from 'axios';

export const FETCH_SONGS = 'FETCH_SONGS';
export const ADD_SONG = 'ADD_SONG';
export const ROOT_URL = 'http://localhost:3000';

export function fetchSongs() {
  const request = axios.get(`${ROOT_URL}/songs`);

  return {
    type: FETCH_SONGS,
    payload: request
  };
}

export function addSong(props) {
  const request = axios.post(`${ROOT_URL}/songs`, props);

  return {
    type: ADD_SONG,
    payload: request
  };
}
