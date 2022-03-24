import React from "react";
import background from "../assets/background.png";
import { useSelector } from "react-redux";
import WatchListCard from "../components/WatchListCard";

const WatchList = () => {
  const movie = useSelector((state) => state.movies.watchList);
  console.log(movie);

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="w-full h-screen bg-cover text-white px-10 py-10 flex flex-wrap"
    >
      {movie.map((item) => (
        <WatchListCard key={item.id} item={item} />
      ))}
    </div>
  );
};

export default WatchList;
