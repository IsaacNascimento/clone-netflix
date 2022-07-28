import { get } from './base';

export const getTrendingAllWeek = async () => {
  const res = await get(`/trending/all/week`);
  return res.data;
};
