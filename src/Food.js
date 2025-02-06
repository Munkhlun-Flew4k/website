import React from "react";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import koreanfood from "./pictures/koreanfood.jpg";
import burger from "./pictures/burger.avif";
import chicken from "./pictures/chicken.jpg";
import japan from "./pictures/japan.webp";
import pasta from "./pictures/pasta.webp";
import pizza from "./pictures/pizza.webp";
import axios from "axios";

function Food() {
  const handleClick = async (buttonName) => {
    try {
      await axios.post("https://backend-efik.onrender.com/save-click", {
        buttonName,
      });
    } catch (error) {
      console.error("Error saving button click", error);
    }
  };

  return (
    <div className="flex items-center w-screen h-screen flex-col bg-[#f5c4fb] gap-10 justify-start">
      <p className="text-5xl font-semibold text-[#bb7475] font-cour mt-10">
        What food would you like to eat?
      </p>
      <div className="w-5/6 h-auto flex flex-row gap-20 flex-wrap justify-center">
        <div className="flex flex-col gap-5 items-center">
          <img src={koreanfood} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/Desert" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Korean food")}
            >
              <p>Korean food</p>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={burger} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/Desert" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Burger")}
            >
              <p>Burger</p>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={japan} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/Desert" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Japanese food")}
            >
              <p>Japanese food</p>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={pasta} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/Desert" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Pasta")}
            >
              <p>Pasta</p>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={pizza} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/Desert" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Pizza")}
            >
              <p>Pizza</p>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={chicken} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/Desert" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Chicken")}
            >
              <p>Chicken</p>
            </Button>
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Food;
