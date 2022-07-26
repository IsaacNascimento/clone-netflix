import { API_KEY } from "../constantes";
import { API } from "../constantes";
import {get} from '../constantes';

export const getHomeList = async () => {
 const res = await get(`${API}/movie/now_playing?api_key=${API_KEY}`);

 return res.data;
}