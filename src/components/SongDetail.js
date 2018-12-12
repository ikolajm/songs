import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({song}) => {
  if (!song) {
    return <h3>Please select a song!</h3>;
  } else {
    return (
      <div>
        <h3>Song Details</h3>
        <p>Title: {song.title}</p>
        <p>Duration: {song.duration}</p>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
