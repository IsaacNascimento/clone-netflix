import React from 'react';
import { posterImgApi } from '../../helpers/constantes';
import '../app/assets/moviePoster.css';

export const PosterMovie = ({ content }) => {
  const genres = content.genres.map((item) => item.name);
  console.log(genres);
  console.log('aqui: ', content);

  const firstDate = new Date(content.first_air_date);

  return (
    <section
      className="featured"
      style={{
        backgroundSize: 'cover',
        backgroundPostion: 'center',
        backgroundImage: `url(${posterImgApi}${content.backdrop_path})`,
      }}
    >
      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{content.original_name}</div>
          <div className="featured--info">
            <div className="featured--points">
              {content.vote_average} pontos
            </div>
            <div className="featured--year">{firstDate.getFullYear()}</div>
            <div className="featured-seasons">
              {content.number_of_seasons} temporada
              {content.number_of_seasons !== 1 ? 's' : ''}
            </div>
            <div className="featured--description">{content.overview}</div>
            <div className="featured--buttons">
              <a
                href={`/watch/${content.id}`}
                className="featured--watchButton"
              >
                Assistir
              </a>
              <a href={`/list/add/${content.id}`} className="featured--myList">
                + Minha Lista
              </a>
            </div>
            <div className="featured--genres">
              <strong>Gêneros: </strong> {genres.join(', ')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
