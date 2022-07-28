import { get } from './base';

export const getRomanceCategory = async () => {
  const res = await get(`/discover/movie?with_genres=10749`);
  return res.data;
};
