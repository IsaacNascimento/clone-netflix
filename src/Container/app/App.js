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
} from '../../helpers/api';

import { getAll } from '../../helpers/api';

export const App = () => {
  const [state, setState] = useState([]);
  console.log('[State]: ', state);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getAll();
      const res = list.map((item) => item.item.results);
      console.log('[RES]: ', res);
      setState(list);
    };
    loadAll();
  }, [setState]);

  return (
    <div className="page">
      <section className="lists">
        {state.map((item, index) => (
          <div key={index}>{item.title}</div>
        ))}
      </section>
    </div>
  );
};
