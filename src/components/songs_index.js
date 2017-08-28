import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs, deleteSong, STORAGE_ROOT } from '../actions/index';
import AudioPlayer from './audio_player';
import { Link } from 'react-router';

class SongsIndex extends Component {
  componentWillMount() {
    this.props.fetchSongs();
  }

  renderSongs() {
    return this.props.songs.map((song, index) => {
      return (
        <li className='list-group-item' key={song.id}>
          { !!this.player &&
            <button
              className='btn btn-default'
              onClick={() => { this.player.touchSong(index) }}>
              Play/Pause
            </button>
          }
          <button
            className='btn btn-danger'
            onClick={() => { this.props.deleteSong(song.id) } }>
            Delete
          </button>
          {`${song.title} - ${song.author}`}
        </li>
      );
    });
  }

  render() {
    const playlist = this.props.songs.map((song) => {
      return { url: `${STORAGE_ROOT}${song.audio_url}`,
               displayText: `${song.title} - ${song.author}` };
    });

    return (
      <div>
        <AudioPlayer
          playlist={playlist}
          ref={(element) => { this.player = element; }} />
        <ul className='list-group'>
          {this.renderSongs()}
        </ul>
        <Link to='/songs/new' className='btn btn-primary'>
          Add a Song
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs.all };
}

export default connect(
  mapStateToProps,
  { fetchSongs, deleteSong }
)(SongsIndex);
