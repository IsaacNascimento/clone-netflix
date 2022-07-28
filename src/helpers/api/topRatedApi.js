import { get } from './base';

export const getTopRated = async () => {
  const res = await get(`/movie/top_rated`);
  return res.data;
};
