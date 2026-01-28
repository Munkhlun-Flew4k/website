import React from "react";
import tyGif from "./pictures/ty.gif";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";

function Ty() {
  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb] gap-6">
      <p className="text-5xl font-semibold text-[#bb7475] font-cour">
        Yay, you said yes!
      </p>
      <img src={tyGif} alt="Loading GIF" className="w-96 rounded-lg" />
      <p className="text-md font-semibold text-[#bb7475] font-cour">
        Don't go yet!!!
      </p>
      <Link to="/Food">
        <Button
          variant="contained"
          color="secondary"
          size="large"
          className="font-cour"
          sx={{
            fontFamily: "Courier Prime , sans-serif",
            textTransform: "none",
          }}
        >
          <p>Click me UwU</p>
        </Button>
      </Link>

      <Outlet />
    </div>
  );
}

export default Ty;
