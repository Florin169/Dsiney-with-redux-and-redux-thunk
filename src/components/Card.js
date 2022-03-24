import React from "react";
import { Link } from "react-router-dom";

const Card = ({ movie }) => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <div className="w-[250px] h-[170px] border-[2px] border-white border-opacity-30 hover:border-opacity-90 rounded-lg transition hover:scale-105 duration-300 cursor-pointer overscroll-x-auto bg-contain bg-center p-[1px]">
        <img
          src={
            `${imageUrl}${movie.backdrop_path || movie.poster_path} ` ||
            `${imageUrl}${movie.poster_path}`
          }
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Card;
