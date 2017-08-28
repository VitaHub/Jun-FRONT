import axios from 'axios';

export const FETCH_SONGS = 'FETCH_SONGS';
export const ADD_SONG = 'ADD_SONG';
export const DELETE_SONG = 'DELETE_SONG';

let root, storage;
if (window && window.location && window.location.host.match(/localhost/)) {
  root = 'http://localhost:3000';
  storage = 'http://localhost:3000';
} else {
  root = 'http://localhost:3000';
  storage = '';
}
export const ROOT_URL = root;
export const STORAGE_ROOT = storage;

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

export function deleteSong(id) {
  const request = axios.delete(`${ROOT_URL}/songs/${id}`);

  return {
    type: DELETE_SONG,
    payload: request
  };
}
