/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */

export const TrendingGame = ({ gameList }) => {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="mb-4 font-bold text-[30px] dark:text-white">
        Trending Games
      </h2>
      <div className="md:grid grid-cols-3 gap-4 lg:grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                key={index}
                className="bg-[#76a8f75e] rounded-lg hover:scale-110 transition-all ease-in-out duration-300"
              >
                <img
                  src={item.background_image}
                  className="h-[270px] rounded-t object-cover"
                />
                <h2 className="dark:text-white text-[20px] font-bold px-2">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
};
