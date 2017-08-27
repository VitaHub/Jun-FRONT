import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { addSong } from '../actions/index';
import PromiseFileReader from 'promise-file-reader';

class SongsNew extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    PromiseFileReader.readAsDataURL(props.audio[0])
      .then((result) => {
        this.props.addSong(
          { song: { ...props, audio: result,
                    extension: props.audio[0].name.split('.').pop() }}
        ).then(() => {
          this.context.router.push('/');
        });
      });
  }

  render() {
    const { fields: { title, author, audio }, handleSubmit } = this.props;

    return (
      <form onSubmit={ handleSubmit(this.onSubmit.bind(this)) }>
        <h3>Add a New Song</h3>

        <div className='form-group'>
          <label>Audio</label>
          <input
            type='file'
            className='form-control'
            accept='.mp3'
            onChange={this.props.fields['audio'].onChange} />
        </div>

        <div className='form-group'>
          <label>Author</label>
          <input type='text' className='form-control'  {...author} />
        </div>

        <div className='form-group'>
          <label>Title</label>
          <input type='text' className='form-control' {...title} />
        </div>

        <button type='submit' className='btn btn-primary'>Submit</button>

        <Link to='' className='btn btn-danger'>
          Cancel
        </Link>
      </form>
    );
  }
}

export default reduxForm({
  form: 'SongsNewForm',
  fields: ['title', 'author', 'audio']
}, null, { addSong })(SongsNew);
