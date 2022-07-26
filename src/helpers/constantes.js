import axios from "axios";

export const env = process.env;

export const API_KEY = env.REACT_APP_API_KEY;

export const API = "https://api.themoviedb.org/3";

export const get = axios.get;
export const post = axios.post;
export const update = axios.put;
export const remove = axios.delete;

