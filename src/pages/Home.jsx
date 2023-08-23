/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { GenreList } from "../components/GenreList";
import GlobalApi from "../Servies/GlobalApi";
import { Banner } from "../components/Banner";
import { TrendingGame } from "../components/TrendingGame";
import { GamesByGenreId } from "../components/GamesByGenreId";

export const Home = () => {
  const [gameList, setGameList] = useState([]);
  const [gameBannerIndex, setGameBannerIndex] = useState(0);
  const [gameListByGenre, setGameListByGenre] = useState([]);
  const [genreName, setGenreName] = useState("Action");

  const getAllGameList = () => {
    GlobalApi.getAllGames.then((resp) => {
      setGameList(resp.data.results);
    });
  };

  const gameListByGenreId = (id) => {
    GlobalApi.getGameListByGenreId(id).then((resp) => {
      setGameListByGenre(resp.data.results);
    });
  };

  useEffect(() => {
    getAllGameList();
    gameListByGenreId(4);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setGameBannerIndex((prevIndex) => (prevIndex + 1) % gameList.length);
    }, 30000);

    return () => {
      clearInterval(interval);
    };
  }, [gameList]);

  return (
    <div className="grid grid-cols-4 p-8">
      <div className="hidden md:flex">
        <GenreList
          genreId={(setGenresId) => gameListByGenreId(setGenresId)}
          selectedGenreName={(name) => setGenreName(name)}
        />
      </div>
      <div className="md:col-span-3 col-span-4 px-3">
        {gameList?.length > 0 && gameListByGenre.length > 0 ? (
          <div>
            <Banner gameBanner={gameList[gameBannerIndex]} />
            <TrendingGame gameList={gameList} />
            <GamesByGenreId gameList={gameListByGenre} selectedGenreName={genreName} />
          </div>
        ) : null}
      </div>
    </div>
  );
};
