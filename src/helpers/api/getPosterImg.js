import { posterImgApi } from "../constantes";
import { get } from "./base";

export const getPostImg = async (poster) => {
  const res = await get(`${posterImgApi}${poster}`);
//   console.log(res.config.url);
  return res.config.url;
}
