import React from "react";

function Cards({ value, handleClick, index }) {
  const { image, artist, Song, favorite } = value;

  return (
    <div className="w-64 p-3 bg-black rounded-md flex gap-5 relative mt-20">
      <div className="h-20 w-20 bg-zinc-300 rounded-md overflow-hidden">
        <img src={image} alt="" className="h-full w-full object-cover" />
      </div>
      <div>
        <h1 className="text-white text-xl font-bold">{Song}</h1>
        <p className="text-white text-sm">{artist}</p>
        <button
          onClick={() => handleClick(index)}
          className={`bg-green-600 text-white text-sm py-3 px-3 rounded-full mt-5 absolute top-[60%] left-[60%] whitespace-nowrap`}
        >
          {favorite ? "Added" : "Add to favourites"}
        </button>
      </div>
    </div>
  );
}

export default Cards;
