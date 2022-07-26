import React from 'react';
import getHomeList from '../api/MoviesApi';

export const App = () => {

  const getMovie = async () => {
    const res = await getHomeList;
    console.log(res);
    return res;
  }

  getMovie();

  return (
    <div >
      <h1>Hello World</h1>
    </div>
  );
}


