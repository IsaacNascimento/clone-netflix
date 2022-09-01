import React, { useEffect, useState } from 'react';
import { getAll } from '../../helpers/api';
import { getMovieInfo } from '../../helpers/api';
import { MovieRow, Header, PosterMovie } from '../components';
import './assets/App.css';

export const App = () => {
  const [state, setState] = useState([]);
  const [posterMovie, setPosterMovie] = useState(null);
  const [blackHeader, setBlackHeader] = useState(false);
  console.log(blackHeader);

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

  useEffect(() => {
    const scrollListener = () => {
      if (window.scrollY > 10) {
        setBlackHeader(true);
      } else {
        setBlackHeader(false);
      }
    };
    window.addEventListener('scroll', scrollListener);
    return () => {
      window.removeEventListener('scroll', scrollListener);
    };
  }, []);

  return (
    <div className="page">
      <Header blackGroundHeader={blackHeader} />
      {posterMovie && <PosterMovie content={posterMovie} />}
      <section className="lists">
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
      <footer>
        Feito com <span role='img' aria-label='coracao'>❤️</span> por Isaac <br/>
        All rights to <a href='https://www.netflix.com/browse'>Netflix</a><br/>
        All data get from <a href='https://www.themoviedb.org'>Themoviedb.org</a> API
      </footer>
    </div>
  );
};
