import React from "react";

const BrandCard = ({ video, image }) => {
  return (
    <div className="w-[250px] h-[170px]  m-auto md:m-0  rounded-lg border-[3px] border-white/40 hover:border-white relative mb-5 cursor-pointer transition hover:scale-105 duration-300">
      <video
        autoPlay
        muted
        loop
        width={250}
        height={170}
        className="w-full h-full object-cover hover:hidden"
      >
        <source src={video} type="video/mp4" />
      </video>
      <img src={image} alt="disney brand" className="absolute inset-0 z-50" />
    </div>
  );
};

export default BrandCard;
