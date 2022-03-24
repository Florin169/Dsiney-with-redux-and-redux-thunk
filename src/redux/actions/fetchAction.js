import axios from "axios";

export const fetchPopularMovies = () => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1`
    );

    dispatch({ type: "FETCH_POPULAR_MOVIES", payload: response.data.results });
  };
};

export const fetchTopMovies = () => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1`
    );

    dispatch({ type: "FETCH_RATED_MOVIES", payload: response.data.results });
  };
};

export const fetchPopularSeries = () => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/popular?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1`
    );

    dispatch({ type: "FETCH_POPULAR_SERIES", payload: response.data.results });
  };
};

export const fetchRatedSeries = () => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/top_rated?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&page=1`
    );

    dispatch({ type: "FETCH_RATED_SERIES", payload: response.data.results });
  };
};

export const fetchsingleMovie = (id) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&append_to_response=videos`
    );

    dispatch({ type: "FETCH_MOVIE", payload: response.data });
  };
};

export const fetchSingleTv = (id) => {
  return async function (dispatch, getState) {
    const response = await axios.get(
      `https://api.themoviedb.org/3/tv/${id}?api_key=8a36975b4bc70fda85b6386d1ad3d4ed&language=en-US&append_to_response=videos`
    );

    dispatch({ type: "FETCH_TV", payload: response.data });
  };
};

export const toggleTrue = () => ({
  type: "TOGGLE_TRUE",
});

export const toggleFalse = () => ({
  type: "TOGGLE_FALSE",
});

export const addToWatchList = (movie) => ({
  type: "ADD_TO_WATCHLIST",
  payload: movie,
});

export const removeFromWatchlist = (item) => ({
  type: "REMOVE_FROM_WATCHLIST",
  payload: item,
});
