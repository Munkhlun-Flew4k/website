import React from "react";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import koreanfood from "./pictures/koreanfood.jpg";

function Food() {
  return (
    <div className="flex items-center w-screen h-screen flex-col bg-[#f5c4fb] gap-10 justify-start">
      <p className="text-5xl font-semibold text-[#bb7475] font-cour mt-10">
        What food would you like to eat
      </p>
      <div className="w-5/6 h-auto flex flex-row gap-20 flex-wrap justify-center">
        <div className="flex flex-col gap-5 items-center">
          <img src={koreanfood} alt="Loading GIF" className="w-96 rounded-lg" />
          <Button
            variant="outlined"
            size="medium"
            sx={{
              textTransform: "none",
              fontFamily: "Courier Prime , sans-serif",
              bgcolor: "#bb7475",
              border: 0,
              width: "50%",
              color: "white",
              "&:hover": {
                backgroundColor: "#f44336",
              },
            }}
          >
            <Link to="/Desert">Korean food</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={koreanfood} alt="Loading GIF" className="w-96 rounded-lg" />
          <Button
            variant="outlined"
            size="medium"
            sx={{
              textTransform: "none",
              fontFamily: "Courier Prime , sans-serif",
              bgcolor: "#bb7475",
              border: 0,
              width: "50%",
              color: "white",
              "&:hover": {
                backgroundColor: "#f44336",
              },
            }}
          >
            <Link to="/Desert">Korean food</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={koreanfood} alt="Loading GIF" className="w-96 rounded-lg" />
          <Button
            variant="outlined"
            size="medium"
            sx={{
              textTransform: "none",
              fontFamily: "Courier Prime , sans-serif",
              bgcolor: "#bb7475",
              border: 0,
              width: "50%",
              color: "white",
              "&:hover": {
                backgroundColor: "#f44336",
              },
            }}
          >
            <Link to="/Desert">Korean food</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={koreanfood} alt="Loading GIF" className="w-96 rounded-lg" />
          <Button
            variant="outlined"
            size="medium"
            sx={{
              textTransform: "none",
              fontFamily: "Courier Prime , sans-serif",
              bgcolor: "#bb7475",
              border: 0,
              width: "50%",
              color: "white",
              "&:hover": {
                backgroundColor: "#f44336",
              },
            }}
          >
            <Link to="/Desert">Korean food</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={koreanfood} alt="Loading GIF" className="w-96 rounded-lg" />
          <Button
            variant="outlined"
            size="medium"
            sx={{
              textTransform: "none",
              fontFamily: "Courier Prime , sans-serif",
              bgcolor: "#bb7475",
              border: 0,
              width: "50%",
              color: "white",
              "&:hover": {
                backgroundColor: "#f44336",
              },
            }}
          >
            <Link to="/Desert">Korean food</Link>
          </Button>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={koreanfood} alt="Loading GIF" className="w-96 rounded-lg" />
          <Button
            variant="outlined"
            size="medium"
            sx={{
              textTransform: "none",
              fontFamily: "Courier Prime , sans-serif",
              bgcolor: "#bb7475",
              border: 0,
              width: "50%",
              color: "white",
              "&:hover": {
                backgroundColor: "#f44336",
              },
            }}
          >
            <Link to="/Desert">Korean food</Link>
          </Button>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Food;
