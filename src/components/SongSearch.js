import React, { useState, useEffect } from 'react';

const SongSearch = () => {
  const [search, searchSet] = useState(null);
  const [lyric, lyricSet] = useState(null);
  const [bio, bioSet] = useState(null);
  const [loading, loadingSet] = useState(false);

  return (
    <div>
      <h3>SONG SEARCH</h3>
    </div>
  );
};

export default SongSearch;
