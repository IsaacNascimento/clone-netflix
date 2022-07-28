import { get } from './base';

export const getComedyCategory = async () => {
  const res = await get(`/discover/movie?with_genres=35`);
  return res.data;
};
