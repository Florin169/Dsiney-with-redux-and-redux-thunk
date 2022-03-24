import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";

const PopularMovies = ({ movies, title }) => {
  return (
    <div className="text-white px-10  ">
      <h1 className="py-7 p-2 font-bold md:text-2xl">{title}</h1>
      <div className="flex  space-x-5 p-2 overflow-auto overscroll-x-contain scroll-smooth scrollbar-hide">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <Card key={movie.id} movie={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularMovies;
