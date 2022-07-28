import React, { Fragment } from "react";
import "../app/assets/movieRow.css";
import { posterImgApi } from "../../helpers/constantes";

export const MovieRow = ({ title, id, items }) => {
  //   console.log(items);
  return (
    <div className="movieRow">
      <h2 key={id}>{title}</h2>
      <div className="movieRow--listArea">
        <div className="movieRow--list">
          {items.results.length > 0 &&
            items.results.map((content, index) => (
              <div key={index} className="movieRow--item">
                <img
                  alt={content.original_title}
                  src={`${posterImgApi}${content.poster_path}`}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
