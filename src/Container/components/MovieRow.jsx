import React from "react";
import "../app/assets/movieRow.css";
import { ImgApi } from "../../helpers/constantes";
import { MdNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
import { useState } from "react";

export const MovieRow = ({ title, id, items }) => {
  // console.log(items);

  const [scrolX, setScrolX] = useState(-400);

  const handleLeftArrow = () => {
    let x = scrolX + Math.round(window.innerWidth / 2);
    console.log(x);
    if (x > 0) {x = 0};
    setScrolX(x);
  };

  const handleRightArrow = () => {
    let x = scrolX - Math.round(window.innerWidth / 2);
    const listWidth = items.results.length * 150;
    console.log(x);
    console.log(listWidth);
    console.log(window.innerWidth);
    if((window.innerWidth - listWidth) > x) x = (window.innerWidth - listWidth) - 60;
    setScrolX(x);
  };

  return (
    <div className="movieRow">
      <h2 key={id}>{title}</h2>
      <div className="movieRow--left" onClick={handleLeftArrow}>
        <span>
          <MdNavigateBefore />
        </span>
      </div>
      <div className="movieRow--right" onClick={handleRightArrow}>
        <span>
          <MdOutlineNavigateNext />
        </span>
      </div>
      <div className="movieRow--listArea">
        <div
          className="movieRow--list"
          style={{ marginLeft: scrolX, width: items.results.length * 150 }}
        >
          {items.results.length <= 0 && <h1>Carregando...</h1>}
          {items.results.length > 0 &&
            items.results.map((content, index) => (
              <div key={index} className="movieRow--item">
                <img
                  alt={content.original_title}
                  src={`${ImgApi}${content.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
