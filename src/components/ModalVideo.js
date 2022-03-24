import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactPlayer from "react-player";
import { toggleFalse } from "../redux/actions/fetchAction";
import { useDispatch } from "react-redux";

const ModalVideo = ({ movie }) => {
  const index = movie.videos?.results.findIndex(
    (video) => video.type === "Trailer"
  );

  console.log(movie);

  const dispatch = useDispatch();

  return (
    <div
      className=" absolute inset-0 w-full h-full bg-black/70"
      onClick={() => dispatch(toggleFalse())}
    >
      <div className="flex flex-col justify-center items-center pt-20 w-10/12 md:w-2/3 h-[60%] md:h-[85%] m-auto">
        <div className="w-full flex justify-between bg-black py-5 px-5">
          <h1 className="font-bold">TRAILER</h1>
          <AiOutlineClose
            className="w-6 h-6"
            onClick={() => dispatch(toggleFalse())}
          />
        </div>
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${movie.videos?.results[index]?.key}`}
          width={"100%"}
          height={"100%"}
        />
      </div>
    </div>
  );
};

export default ModalVideo;
