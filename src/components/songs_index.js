import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSongs } from '../actions/index';

class SongsIndex extends Component {
  componentWillMount() {
    this.props.fetchSongs();
  }

  render() {
    return (
      <div>Songs Index Component</div>
    );
  }
}

function mapStateToProps(state) {
  return { songs: state.songs };
}

export default connect(mapStateToProps, { fetchSongs })(SongsIndex);
