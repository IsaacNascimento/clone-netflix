import { get } from './base';

export const getMovieInfo = async (movieId, type) => {
  let res = {};
  if (movieId) {
    switch (type) {
      case 'movie':
        res = await get(`/movie/${movieId}`);
        break;
      case 'tv':
        res = await get(`/tv/${movieId}`);
        break;
      default:
        res = null;
        break;
    }
  }
  return res.data;
};
