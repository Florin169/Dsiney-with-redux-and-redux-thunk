import { combineReducers } from "redux";
import { fetchMovies } from "./fetchReducer";

const allReducers = combineReducers({
  movies: fetchMovies,
});

export default allReducers;
