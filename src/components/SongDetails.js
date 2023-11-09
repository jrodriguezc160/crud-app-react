import React from 'react';
import SongArtist from './SongArtist';
import SongLyrics from './SongLyrics';

const SongDetails = ({ search, lyric, bio }) => {
  return (
    <div>
      <h3>Detalles</h3>
      <SongArtist />
      <SongLyrics />
    </div>
  );
};

export default SongDetails;
