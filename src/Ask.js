import React from "react";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import askGif from "./pictures/ask.gif";
import axios from "axios";

function Ask() {
  const handleClick = async (buttonName) => {
    try {
      await axios.post("http://localhost:5000/save-click", { buttonName });
      alert(`${buttonName} clicked and saved!`);
    } catch (error) {
      console.error("Error saving button click", error);
    }
  };

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
          onClick={() => handleClick("Yes")}
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
      <img src={askGif} alt="Loading GIF" className="w-96 rounded-lg" />
      <Outlet />
    </div>
  );
}

export default Ask;
