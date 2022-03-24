import React from "react";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import MoviePage from "./pages/MoviePage";
import WatchList from "./pages/WatchList";
import SeriesPage from "./pages/SeriesPage";

const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="/watchlist" element={<WatchList />} />
        <Route path="/tv/:id" element={<SeriesPage />} />
      </Routes>
    </div>
  );
};

export default App;
