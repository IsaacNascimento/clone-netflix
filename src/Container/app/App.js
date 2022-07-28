import React, { useEffect, useState } from 'react';
import { getAll } from '../../helpers/api';
import { getMovieInfo } from '../../helpers/api';
import { MovieRow } from '../components/MovieRow';
import { PosterMovie } from '../components/PosterMovie';
import './assets/App.css';

export const App = () => {
  const [state, setState] = useState([]);
  // console.log('[State]: ', state);
  const [posterMovie, setPosterMovie] = useState(null);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getAll();
      setState(list);

      const netflix = list.filter(
        (item) => item.title === 'Originais da Netflix'
      );

      let chooseRandom = Math.floor(
        Math.random() * netflix[0].item.results.length - 1
      );
      if (chooseRandom > 19 || chooseRandom < 0) {
        chooseRandom = Math.floor(
          Math.random() * netflix[0].item.results.length - 1
        );
      }
      const choose = netflix[0].item.results[chooseRandom];
      const chooseInfo = await getMovieInfo(choose.id, 'tv');
      setPosterMovie(chooseInfo);
    };
    loadAll();
  }, [setState]);

  return (
    <div className="page">
      <section className="lists">
        {posterMovie && <PosterMovie content={posterMovie} />}
        {state.map((result, index) => (
          <div key={index}>
            <MovieRow
              key={index}
              title={result.title}
              id={index}
              items={result.item}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
