import React from "react";
import whenGif from "./pictures/when.gif";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import axios from "axios";

function When() {
  const handleClick = async (buttonName) => {
    try {
      await axios.post("http://localhost:5000/save-click", { buttonName });
      alert(`${buttonName} clicked and saved!`);
    } catch (error) {
      console.error("Error saving button click", error);
    }
  }; 

  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb] gap-6">
      <p className="text-3xl font-semibold text-[#bb7475] font-cour h-auto w-1/2 text-wrap text-center">
        Are you free on ...
      </p>
      <p className="text-xl font-semibold text-[#bb7475] font-cour h-auto w-1/2 text-wrap text-center">
        (select a date)
      </p>
      <div className="flex flex-row gap-10">
        <Button
          onClick={() => handleClick("Feb14")}
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
          <Link to="/Food">February 14</Link>
        </Button>
        <Button
          onClick={() => handleClick("Feb15")}
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
          <Link to="/Food">February 15</Link>
        </Button>
        <Button
          onClick={() => handleClick("Feb16")}
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
          <Link to="/Food">February 16</Link>
        </Button>
      </div>

      <img src={whenGif} alt="Loading GIF" className="w-96" />
      <Outlet />
    </div>
  );
}

export default When;
