import React, { useState, useEffect } from 'react';
import SongForm from './SongForm';
import SongDetails from './SongDetails';
import Loader from './Loader';
import { helpHttp } from '../helpers/helpHttp';

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

      console.log(artistURL);

      setLoading(true);

      // Usamos la API de Genius ya que la propuesta en el curso no funciona
      const url = `https://genius-song-lyrics1.p.rapidapi.com/song/lyrics/?id=2396871`;
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            'eece6f4002msh72672a9098e27bep123268jsn799ba6432c79',
          'X-RapidAPI-Host': 'genius-song-lyrics1.p.rapidapi.com',
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
      } catch (error) {
        console.error(error);
      }

      const [artistRes, songRes] = await Promise.all([
        helpHttp().get(artistURL),
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
