import { API } from '../constantes';
import { get } from './base';

export const getTrendingAllWeek = async () => {
  const res = await get(`${API}/trending/all/week`);
  return res.data;
};
