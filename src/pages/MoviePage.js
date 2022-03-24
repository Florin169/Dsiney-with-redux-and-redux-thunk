import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchsingleMovie,
  toggleTrue,
  addToWatchList,
} from "../redux/actions/fetchAction";
import { BsPlusCircle, BsPeople, BsCheck2Circle } from "react-icons/bs";

import ModalVideo from "../components/ModalVideo";

const MoviePage = () => {
  const imageUrl = "https://image.tmdb.org/t/p/original";

  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.singleMovie);
  const toggleT = useSelector((state) => state.movies.toggleVideo);
  const watchList = useSelector((state) => state.movies.watchList);

  const existingItem = watchList.find((item) => item.id === movie.id);
  console.log(existingItem);

  useEffect(() => {
    dispatch(fetchsingleMovie(id));
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundImage: `url(${imageUrl}${movie.backdrop_path})`,
      }}
      className="bg-cover bg-center h-screen px-10 py-32 text-white md:pt-[450px] relative"
    >
      <h1 className="font-bold text-xl md:text-5xl">{movie.title}</h1>
      <div className="py-10 flex items-center space-x-5">
        <button className="w-24 h-12 md:w-40 md:h-14 bg-white rounded-lg text-black font-bold hover:bg-slate-200 transition duration-300">
          Play
        </button>
        <button
          className="w-24 h-12 md:w-40 md:h-14 border-[2px] border-white rounded-lg font-bold text-white bg-black/40 hover:bg-slate-700/60 transition duration-300"
          onClick={() => dispatch(toggleTrue())}
        >
          Trailer
        </button>
        {existingItem ? (
          <BsCheck2Circle className="w-6 h-6 md:w-8 md:h-8 text-green-400" />
        ) : (
          <BsPlusCircle
            className="w-6 h-6 md:w-8 md:h-8 cursor-pointer"
            onClick={() => dispatch(addToWatchList(movie))}
          />
        )}
        <BsPeople className="w-6 h-6 md:w-8 md:h-8" />
      </div>
      <p className="md:w-1/2 md:text-lg">{movie.overview}</p>
      {toggleT && <ModalVideo movie={movie} />}
    </div>
  );
};

export default MoviePage;
