import React from "react";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import askGif from "./pictures/ask.gif";
import axios from "axios";
import { useState } from "react";

function Ask() {
  const handleClick = async (buttonName) => {
    try {
      await axios.post("https://backend-efik.onrender.com/save-click", {
        buttonName,
      });
    } catch (error) {
      console.error("Error saving button click", error);
    }
  };

  const [pos, setPos] = useState({ top: null, left: null });
  const [active, setActive] = useState(false);

  const moveButton = () => {
    const top = Math.random() * 80 + 10; // 10% → 90%
    const left = Math.random() * 80 + 10;
    setPos({ top: `${top}%`, left: `${left}%` });
    setActive(true);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb] gap-5">
      <p className="text-4xl font-semibold text-[#bb7475] font-cour">
        Hey there,
      </p>
      <p className="text-4xl font-semibold text-[#bb7475] font-cour">
        Will you be my Valentine?
      </p>
      <div className="flex gap-10">
        <Link to="/Ty">
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
            <p>Yes</p>
          </Button>
        </Link>
        <Link to="/Sad">
          <Button
            variant="outlined"
            size="medium"
            onMouseEnter={moveButton}
            style={
              active
                ? {
                    position: "absolute",
                    top: pos.top,
                    left: pos.left,
                    transform: "translate(-50%, -50%)",
                  }
                : {}
            }
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
            onClick={() => handleClick("No")}
          >
            <p>No</p>
          </Button>
        </Link>
      </div>
      <img src={askGif} alt="Loading GIF" className="w-96 rounded-lg" />
      <Outlet />
    </div>
  );
}

export default Ask;
