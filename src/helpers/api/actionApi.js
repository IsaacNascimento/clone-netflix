import { API } from '../constantes';
import { get } from './base';

export const getActionCategory = async () => {
  const res = await get(`${API}/discover/movie?with_genres=28`);
  return res.data;
};
