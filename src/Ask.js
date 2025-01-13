import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import askGif from "./pictures/ask.gif";

function Ask() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const gif = new Image();
    gif.src = askGif;
    console.log("GIF path:", gif.src);
    gif.onload = () => {
      setIsLoaded(true);
    };
    gif.onerror = () => {
      console.error("Failed to load GIF");
    };
  }, []);

  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb] gap-5">
      <p className="text-4xl font-semibold text-[#bb7475] font-cour">
        Will you be my valentine?
      </p>
      <div className="flex gap-10">
        <Button
          variant="outlined"
          size="medium"
          sx={{
            textTransform: "none",
            fontFamily: "Courier Prime , sans-serif",
            bgcolor: "#bb7475",
            border: 0,
            color: "white",
            "&:hover": {
              backgroundColor: "#f44336",
            },
          }}
        >
          <Link to="/Ty">Yes</Link>
        </Button>
        <Button
          variant="outlined"
          size="medium"
          sx={{
            textTransform: "none",
            fontFamily: "Courier Prime , sans-serif",
            bgcolor: "#bb7475",
            border: 0,
            color: "white",
            "&:hover": {
              backgroundColor: "#f44336",
            },
          }}
        >
          <Link to="/Sad">I'm not looking to date right now</Link>
        </Button>
      </div>
      {isLoaded ? (
        <img src={askGif} alt="Loading GIF" className="w-96" />
      ) : (
        <p>Loading...</p>
      )}
      <Outlet />
    </div>
  );
}

export default Ask;
