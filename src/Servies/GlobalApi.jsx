import axios from "axios";
const key = import.meta.env.VITE_RAWG_API;

const axioCreate = axios.create({
  baseURL: "https://api.rawg.io/api",
});

const getGenreList = axioCreate.get("/genres?key=" + key);
const getAllGames = axioCreate.get("/games?key=" + key);
const getGameListByGenreId = (id) =>
  axioCreate.get("/games?key=" + key + "&genres=" + id);

export default {
  getGenreList,
  getAllGames,
  getGameListByGenreId,
};
