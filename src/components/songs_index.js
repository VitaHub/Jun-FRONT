import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs, deleteSong, ROOT_URL } from '../actions/index';
import AudioPlayer from './audio_player';
import { Link } from 'react-router';

class SongsIndex extends Component {
  componentWillMount() {
    this.props.fetchSongs();
  }

  test() {
    if (!!this.player) {
      this.player.togglePause();
    }
  }

  renderSongs() {
    return this.props.songs.map((song) => {
      return (
        <li className='list-group-item' key={song.id}>
          <button
            className='btn btn-default'>
            Play
          </button>
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
      return { url: `${ROOT_URL}${song.audio_url}`,
               displayText: `${song.title} - ${song.author}` };
    })

    return (
      <div>
        Songs
        <AudioPlayer
          playlist={playlist}
          ref={(element) => { this.player = element; }} />
        <button onClick={ this.test.bind(this) }>Play</button>
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

export default connect(mapStateToProps, { fetchSongs, deleteSong })(SongsIndex);
