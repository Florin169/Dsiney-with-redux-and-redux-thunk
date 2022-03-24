import React, { useEffect } from "react";
import Brands from "../components/Brands";
import Slider from "../components/Carousel";
import background from "../assets/background.png";
import PopularMovies from "../components/PopularMovies";
import PopularSeries from "../components/PopularSeries";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchPopularMovies,
  fetchTopMovies,
  fetchPopularSeries,
  fetchRatedSeries,
} from "../redux/actions/fetchAction";

const Home = () => {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies.popularMovies);
  const ratedMovies = useSelector((state) => state.movies.ratedMovies);
  const popularSeries = useSelector((state) => state.movies.popularSeries);
  const ratedSeries = useSelector((state) => state.movies.ratedSeries);

  useEffect(() => {
    dispatch(fetchPopularMovies());
    dispatch(fetchTopMovies());
    dispatch(fetchPopularSeries());
    dispatch(fetchRatedSeries());
  }, [dispatch]);
  return (
    <div className="relative">
      <Slider />
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="bg-cover py-10"
      >
        <Brands />
        <PopularMovies movies={movies} title="Popular Movies" />
        <PopularMovies movies={ratedMovies} title="Top Rated Movies" />
        <PopularSeries movies={popularSeries} title="Popular TV Series" />
        <PopularSeries movies={ratedSeries} title="Top Rated TV Series" />
      </div>
    </div>
  );
};

export default Home;
