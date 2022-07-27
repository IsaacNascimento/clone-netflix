import { API } from '../constantes';
import { get } from './base';

export const getRomanceCategory = async () => {
  const res = await get(`${API}/discover/movie?with_genres=10749`);
  return res.data;
};
