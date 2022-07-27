import { API } from '../constantes';
import { get } from './base';

export const getDocumentaryCategory = async () => {
  const res = await get(`${API}/discover/movie?with_genres=99`);
  return res.data;
};
