import { get } from './base';

export const getHomeList = async () => {
  const res = await get(`/movie/now_playing`);
  return res.data;
};

// export default {
//   getHomeList: () => get(`${API}/movie/now_playing`),
// };
