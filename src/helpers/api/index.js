import { getHomeList } from './moviesApi';
import { getNetflixShows } from './netflixShowApi';
import { getTrendingAllWeek } from './trendingWeekApi';
import { getTopRated } from './topRatedApi';
import { getActionCategory } from './actionApi';
import { getComedyCategory } from './comedyApi';
import { getTerrorCategory } from './terrorApi';
import { getRomanceCategory } from './romanceApi';
import { getDocumentaryCategory } from './documentaryApi';
import { getPostImg } from './getPosterImg';

export {
  getHomeList,
  getNetflixShows,
  getTrendingAllWeek,
  getTopRated,
  getActionCategory,
  getComedyCategory,
  getTerrorCategory,
  getRomanceCategory,
  getDocumentaryCategory,
  getPostImg,
};

export const getAll = async () => {
  return [
    {
      title: 'Originais da Netflix',
      item: await getNetflixShows(),
    },
    {
      title: 'Recomendados',
      item: await getTrendingAllWeek(),
    },
    {
      title: 'Em Alta',
      item: await getTopRated(),
    },
    {
      title: 'Ação',
      item: await getActionCategory(),
    },
    {
      title: 'Comédia',
      item: await getComedyCategory(),
    },
    {
      title: 'Terror',
      item: await getTerrorCategory(),
    },
    {
      title: 'Romance',
      item: await getRomanceCategory(),
    },
    {
      title: 'Documentários',
      item: await getDocumentaryCategory(),
    },
  ];
};
