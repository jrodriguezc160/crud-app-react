import React, { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetails';
import Loader from './Loader';

const SongSearch = () => {
  const [search, searchSet] = useState(null);
  const [lyric, lyricSet] = useState(null);
  const [bio, bioSet] = useState(null);
  const [loading, loadingSet] = useState(false);

  const handleSearch = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h2>SONG SEARCH</h2>

      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyric} bio={bio} />
    </div>
  );
};

export default SongSearch;
