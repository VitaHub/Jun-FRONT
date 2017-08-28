import MusicPlayer from 'react-responsive-audio-player';

class AudioPlayer extends MusicPlayer {
  constructor() {
    super()
  }

  touchSong(index, shouldPlay = true) {
    if (!this.audio) {
      return;
    }
    if (this.currentTrackIndex != index) {
      this.audio.pause();
      if (!this.props.playlist || !this.props.playlist.length) {
        return;
      }
      let i = index;
      if (i >= this.props.playlist.length) {
        i = 0;
      }
      this.currentTrackIndex = i;
      this.setState({
        activeTrackIndex: -1,
        displayedTime: 0
      }, () => {
        this.updateSource();
        const shouldPauseOnCycle = (!this.props.cycle && i === 0);
        const shouldPause = shouldPauseOnCycle || (typeof shouldPlay === 'boolean' ? !shouldPlay : false);
        this.togglePause(shouldPause);
      });
    } else {
      this.togglePause();
    }
  }

  current(index) {
    return index == this.currentTrackIndex;
  }
}

export default AudioPlayer;
