import React, { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Navbar from "./components/Navbar";


function App() {
  const data = [
    { image: "https://i.pinimg.com/564x/69/17/1e/69171e5e83983fea46a99195ffd3b597.jpg", artist: "King", Song: "Tu aake dekhle", favorite: false },
    { image: "https://i.pinimg.com/564x/87/ce/59/87ce595ed656b9f5f0d0ee96f0332802.jpg", artist: "Arijit Singh", Song: "Tum Hi Ho", favorite: false },
    { image: "https://i.pinimg.com/564x/62/f2/02/62f20265d8302afb62d40a4d6a40c23c.jpg", artist: "Neha Kakkar", Song: "Dilbar", favorite: false },
    { image: "https://i.pinimg.com/564x/57/1e/74/571e74405a8450c259e12b865844a46d.jpg", artist: "Badshah", Song: "DJ Waley Babu", favorite: false },
    { image: "https://i.pinimg.com/736x/15/12/d7/1512d756bcc5ced2ccef55f4b3d0b759.jpg", artist: "Shreya Ghoshal", Song: "Teri Meri", favorite: false },
  ];

  const [songData, setSongData] = useState(data);

  const handleClick = (index) => {
    setSongData((prev) =>
      prev.map((item, btnindex) => {
        if (btnindex === index) {
          return { ...item, favorite: !item.favorite };
        }
        return item; // Return the unchanged item if the index doesn't match
      })
    );
  };

  return (
    <div className="w-full h-screen bg-green-100 py-4 px-6">
      <Navbar data={songData}/>
      <div className="flex gap-10 flex-wrap">
        {songData.map((value, index) => (
          <Cards key={index} value={value} handleClick={handleClick} index={index} />
        ))}
      </div>
      
    </div>
  );
}

export default App;
