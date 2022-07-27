import { API } from '../constantes';
import { get } from './base';

export const getNetflixShows = async () => {
  const res = await get(`${API}/discover/tv?with_network=213`);
  return res.data;
};
