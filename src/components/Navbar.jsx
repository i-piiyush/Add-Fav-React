import React from "react";

function Navbar({data}) {
    const favoriteCount = data.filter(item => item.favorite).length;
    console.log(favoriteCount);

    return (
      <div className=" w-full flex justify-between items-center">
       <h1 className="font-semibold text-xl">Spotify</h1>
       <h1 className="bg-green-600 text-white font-semibold p-3 px-4 rounded-md">{`Favourites ${favoriteCount}`}</h1>
      </div>
    )
  }
  
  export default Navbar;
  