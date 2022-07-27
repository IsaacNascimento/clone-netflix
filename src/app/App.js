import React, { useEffect, useState } from 'react';

import {
  getHomeList,
  getNetflixShows,
  getTrendingAllWeek,
  getTopRated,
  getActionCategory,
  getComedyCategory,
  getTerrorCategory,
  getRomanceCategory,
  getDocumentaryCategory,
} from '../helpers/api';

export const App = () => {
  const [movie, setMovie] = useState({});
  console.log('[Movies]: ', movie);

  const [show, setShow] = useState({});
  console.log('[Netflix]: ', show);

  const [trending, setTrending] = useState({});
  console.log('[Trending]: ', trending);

  const [topRated, setTopRated] = useState({});
  console.log('[TopRated]: ', topRated);

  const [actionCategory, setActionCategory] = useState({});
  console.log('[Action Category]: ', actionCategory);

  const [comedyCategory, setComedyCategory] = useState({});
  console.log('[Comedy Category]: ', comedyCategory);

  const [terrorCategory, setTerrorCategory] = useState({});
  console.log('[Terror Category]: ', terrorCategory);

  const [romanceCategory, setRomanceCategory] = useState({});
  console.log('[Romance Category]: ', romanceCategory);

  const [documentaryCategory, setDocumentaryCategory] = useState({});
  console.log('[Documentary Category]: ', documentaryCategory);

  useEffect(() => {
    getHomeList().then((result) => setMovie(result));
    getNetflixShows().then((result) => setShow(result));
    getTrendingAllWeek().then((result) => setTrending(result));
    getTopRated().then((result) => setTopRated(result));
    getActionCategory().then((result) => setActionCategory(result));
    getComedyCategory().then((result) => setComedyCategory(result));
    getTerrorCategory().then((result) => setTerrorCategory(result));
    getRomanceCategory().then((result) => setRomanceCategory(result));
    getDocumentaryCategory().then((result) => setDocumentaryCategory(result));
  }, []);

  return (
    <div>
      <h1>Hello World</h1>
    </div>
  );
};
