import { get } from './base';

export const getTerrorCategory = async () => {
  const res = await get(`/discover/movie?with_genres=27`);
  return res.data;
};
