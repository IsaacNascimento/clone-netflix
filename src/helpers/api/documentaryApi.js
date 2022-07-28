import { get } from './base';

export const getDocumentaryCategory = async () => {
  const res = await get(`/discover/movie?with_genres=99`);
  return res.data;
};
