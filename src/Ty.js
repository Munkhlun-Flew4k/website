import React, { useState, useEffect } from "react";
import tyGif from "./pictures/ty.gif";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";

function Ty() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const gif = new Image();
    gif.src = tyGif;
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
      <p className="text-5xl font-semibold text-[#bb7475] font-cour">
        Thank you
      </p>
      {isLoaded ? (
        <img src={tyGif} alt="Loading GIF" className="w-96" />
      ) : (
        <p>Loading...</p>
      )}
      <p className="text-md font-semibold text-[#bb7475] font-cour">
        Don't go yet!!!
      </p>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className="font-cour"
        sx={{ fontFamily: "Courier Prime , sans-serif", textTransform: "none" }}
      >
        <Link to="/When">Click me UwU</Link>
      </Button>
      <Outlet />
    </div>
  );
}

export default Ty;
