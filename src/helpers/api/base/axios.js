import axios from 'axios';
import { API } from '../../constantes';
import { API_KEY } from '../../constantes';

export const defaultParams = () => {
  const key = API_KEY;
  return {
    baseURL: API,
    headers: {
      'content-type': 'aplication/json;charset=utf-8',
    },
    params: {
      api_key: key,
      language: 'pt-BR',
    },
  };
};

export default axios;
