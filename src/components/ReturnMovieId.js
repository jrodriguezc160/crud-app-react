import React, { useState, useEffect } from 'react';

const ImdbId = async function (title) {
  // Simula una llamada a una API que devuelve información sobre la película
  const apiUrl = `http://www.imdb.com/find?s=all&q=${encodeURIComponent(
    title
  )}`;
  const response = await fetch(apiUrl);
  const data = await response.json();

  if (!data.id) {
    throw new Error('ID not found');
  }

  console.log(data.id);
  return data.id;
};

const ReturnMovieId = () => {
  useEffect(() => {
    const fetchImdbId = async () => {
      try {
        const imdbId = await ImdbId('Star Wars');
        console.log(imdbId);
      } catch (error) {
        console.error(error.message);
      }
    };

    fetchImdbId();
  }, []);

  return ImdbId;
};

export default ReturnMovieId;
