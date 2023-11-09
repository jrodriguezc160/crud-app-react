import React, { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetails';
import Loader from './Loader';
import HelpHttp from '../helpers/HelpHttp';

const SongSearch = () => {
  const [search, setSearch] = useState(null);
  const [lyrics, setLyrics] = useState(null);
  const [bio, setBio] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (search === null) return;

    const fetchData = async () => {
      let { artist, song } = search;

      artist = artist.toLowerCase();
      song = song.toLowerCase();

      let artistURL = `https://theaudiodb.com/api/v1/json/2/search.php?s=${artist}`;
      let songURL = `https://api.lyrics.ovh/v1/${artist}/${song}`;

      console.log(artistURL, songURL);

      setLoading(true);

      const [artistRes, songRes] = await Promise.all([
        HelpHttp().get(artistURL),
        HelpHttp().get(songURL),
      ]);

      console.log(artistRes, songRes);

      setBio(artistRes);
      setLyrics(songRes);
      setLoading(false);
    };

    fetchData();
  }, [search]);

  const handleSearch = (data) => {
    // console.log(data);
    setSearch(data);
  };

  return (
    <div>
      <h2>SONG SEARCH</h2>

      {loading && <Loader />}
      <SongForm handleSearch={handleSearch} />
      <SongDetails search={search} lyric={lyrics} bio={bio} />
    </div>
  );
};

export default SongSearch;
