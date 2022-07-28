import React, { useEffect, useState } from "react";
import { getAll } from "../../helpers/api";
import { MovieRow } from "../components/MovieRow";
import "./assets/App.css";

export const App = () => {
  const [state, setState] = useState([]);
  // console.log("[State]: ", state);

  useEffect(() => {
    const loadAll = async () => {
      const list = await getAll();
      const res = list.map((item) => item.item.results);
      // console.log("[RES]: ", res);
      setState(list);
    };
    loadAll();
  }, [setState]);

  return (
    <div className="page">
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
    </div>
  );
};
