import React, { useState, useEffect } from "react";
import sadGif from "./pictures/uwu.gif";

function Sad() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const gif = new Image();
    gif.src = sadGif;
    console.log("GIF path:", gif.src);
    gif.onload = () => {
      setIsLoaded(true);
    };
    gif.onerror = () => {
      console.error("Failed to load GIF");
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb] gap-6">
      <p className="text-3xl font-semibold text-[#bb7475] font-cour h-auto w-1/2 text-wrap text-center">
        Ohhh I really wanted you to be my valentine
      </p>
      {isLoaded ? (
        <img src={sadGif} alt="Loading GIF" className="w-96 rounded-lg" />
      ) : (
        <p>Loading...</p>
      )}
      <p className="text-4xl font-semibold text-[#bb7475] font-cour h-auto w-1/2 text-wrap text-center">
        Well bye then :(
      </p>
    </div>
  );
}

export default Sad;
