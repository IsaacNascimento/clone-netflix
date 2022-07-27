import { API } from '../constantes';
import { get } from './base';

export const getComedyCategory = async () => {
  const res = await get(`${API}/discover/movie?with_genres=35`);
  return res.data;
};
