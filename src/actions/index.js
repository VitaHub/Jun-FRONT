import axios from 'axios';

export const FETCH_SONGS = 'FETCH_SONGS';
const ROOT_URL = 'http://localhost:3000'

export function fetchSongs() {
  const request = axios.get(`${ROOT_URL}/songs`);

  return {
    type: FETCH_SONGS,
    payload: request
  };
}
