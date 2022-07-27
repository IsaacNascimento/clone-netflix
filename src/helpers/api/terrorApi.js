import { API } from '../constantes';
import { get } from './base';

export const getTerrorCategory = async () => {
  const res = await get(`${API}/discover/movie?with_genres=27`);
  return res.data;
};
