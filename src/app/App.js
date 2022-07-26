import React, { useEffect, useState } from 'react';
import {getHomeList} from '../helpers/api/MoviesApi';

export const App = () => {
  const [movie, setMovie] = useState({});
  console.log(movie);

  useEffect(() => {
    getHomeList().then(result => setMovie(result));
  }, [])

  return (
    <div >
      <h1>Hello World</h1>
    </div>
  );
}


