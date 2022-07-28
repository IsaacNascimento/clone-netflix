import { get } from './base';

export const getNetflixShows = async () => {
  const res = await get(`/discover/tv?with_network=213`);
  // console.log(res);
  return res.data;
};
