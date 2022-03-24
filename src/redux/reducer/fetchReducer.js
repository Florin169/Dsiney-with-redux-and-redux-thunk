import { addMovie } from "./utils";

const IMITIAL_STATE = {
  popularMovies: [],
  ratedMovies: [],
  popularSeries: [],
  ratedSeries: [],
  singleMovie: [],
  singleTv: [],
  toggleVideo: false,
  watchList: [],
};

export const fetchMovies = (state = IMITIAL_STATE, action) => {
  switch (action.type) {
    case "FETCH_POPULAR_MOVIES":
      return {
        ...state,
        popularMovies: action.payload,
      };

    case "FETCH_RATED_MOVIES":
      return { ...state, ratedMovies: action.payload };

    case "FETCH_POPULAR_SERIES":
      return { ...state, popularSeries: action.payload };

    case "FETCH_RATED_SERIES":
      return { ...state, ratedSeries: action.payload };

    case "FETCH_MOVIE":
      return { ...state, singleMovie: action.payload };

    case "FETCH_TV":
      return { ...state, singleTv: action.payload };

    case "TOGGLE_TRUE":
      return { ...state, toggleVideo: true };

    case "TOGGLE_FALSE":
      return { ...state, toggleVideo: false };

    case "ADD_TO_WATCHLIST":
      return { ...state, watchList: addMovie(state.watchList, action.payload) };

    case "REMOVE_FROM_WATCHLIST":
      return {
        ...state,
        watchList: state.watchList.filter(
          (item) => item.id !== action.payload.id
        ),
      };

    default:
      return state;
  }
};
