import { API_KEY } from "../helpers/constantes";
import { API } from "../helpers/constantes";
import {get} from '../helpers/constantes';

export default {
  getHomeList: get(`${API}/movie/550?api_key=${API_KEY}`).then(result => result.data.genres)
}