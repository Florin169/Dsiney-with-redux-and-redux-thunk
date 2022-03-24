import React from "react";
import BrandCard from "./BrandCard";
import disneyVideo from "../assets/disney.mp4";
import disneyImage from "../assets/disnep.png";
import marvelVideo from "../assets/marvel.mp4";
import marvelImage from "../assets/marvel.png";
import nationalVideo from "../assets/national-geographic.mp4";
import nationalImage from "../assets/national-geographic.png";
import pixarVideo from "../assets/pixar.mp4";
import pixarImage from "../assets/pixar.png";
import starWarsVideo from "../assets/star-wars.mp4";
import startWarsImage from "../assets/starwars.png";

const Brands = () => {
  return (
    <div className="md:flex md:space-x-10 justify-center">
      <BrandCard video={disneyVideo} image={disneyImage} />
      <BrandCard video={marvelVideo} image={marvelImage} />
      <BrandCard video={nationalVideo} image={nationalImage} />
      <BrandCard video={pixarVideo} image={pixarImage} />
      <BrandCard video={starWarsVideo} image={startWarsImage} />
    </div>
  );
};

export default Brands;
