import React from "react";
import { BsXCircle } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFromWatchlist } from "../redux/actions/fetchAction";

const WatchListCard = ({ item }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  const dispatch = useDispatch();

  return (
    <div className="w-32 h-52 md:w-52 md:h-72 bg-black border-[2px] border-white/60 hover:border-white transition hover:scale-105 duration-300 rounded-lg mr-5 bg-cover relative">
      <img
        src={`${imageUrl}${item.backdrop_path || item.poster_path}`}
        alt=""
        className="w-full h-full object-cover bg-center"
      />
      <BsXCircle
        className="absolute bottom-5 left-12 md:left-20 text-3xl cursor-pointer hover:text-red-700"
        onClick={() => dispatch(removeFromWatchlist(item))}
      />
    </div>
  );
};

export default WatchListCard;
