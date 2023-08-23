/* eslint-disable react/prop-types */
import { useEffect } from "react";

export const GamesByGenreId = ({ gameList, selectedGenreName }) => {
  useEffect(() => console.log("gameList", gameList));

  return (
    <div className="mt-5">
      <h2 className="mb-4 font-bold text-[30px] dark:text-white">
        {selectedGenreName} Games
      </h2>
      <div className="dark:text-white grid md:grid-cols-2 gap-6 lg:grid-cols-3">
        {gameList.map((item, index) => (
          <div
            key={index}
            className="bg-gray-400 p-3 rounded-xl dark:bg-gray-600 h-full pb-12 hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={item.background_image}
              className="w-full h-[80%] object-cover rounded-xl"
            />
            <h2 className="text-[20px] font-bold">
              {item.name}
              <span className="p-1 rounded-lg ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-500 dark:text-gray-400">
              ⭐{item.rating} ☁️{item.ratings_count} 🔥{item.suggestions_count}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};
