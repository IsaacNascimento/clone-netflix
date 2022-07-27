import { API } from '../constantes';
import { get } from './base';

export const getTopRated = async () => {
  const res = await get(`${API}/movie/top_rated`);
  return res.data;
};
