import React, { useState, useEffect } from "react";
import whenGif from "./pictures/when.gif";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

function When() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const gif = new Image();
    gif.src = whenGif;
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
        Are you free on ...
      </p>
      <p className="text-xl font-semibold text-[#bb7475] font-cour h-auto w-1/2 text-wrap text-center">
        (select a date)
      </p>
      <DatePicker label="Basic date picker" />
      {isLoaded ? (
        <img src={whenGif} alt="Loading GIF" className="w-96" />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default When;
