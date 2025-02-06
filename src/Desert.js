import React from "react";
import Button from "@mui/material/Button";
import { Outlet, Link } from "react-router-dom";
import cake from "./pictures/cake.webp";
import cookie from "./pictures/cookie.avif";
import cupcake from "./pictures/cupcake.jpg";
import donut from "./pictures/donut.jpeg";
import icecream from "./pictures/icecream.webp";
import smoothie from "./pictures/smoothie.avif";
import axios from "axios";

function Desert() {
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
        What dessert would you like to eat?
      </p>
      <div className="w-5/6 h-auto flex flex-row gap-20 flex-wrap justify-center">
        <div className="flex flex-col gap-5 items-center">
          <img src={cake} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/End" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Cake")}
            >
              <p>Cake</p>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={cookie} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/End" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Cookies")}
            >
              <p>Cookies</p>
            </Button>
          </Link>
        </div>{" "}
        <div className="flex flex-col gap-5 items-center">
          <img src={cupcake} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/End" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Cupcake")}
            >
              <p>Cupcake</p>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={donut} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/End" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("Donut")}
            >
              <p>Donut</p>
            </Button>
          </Link>
        </div>
        <div className="flex flex-col gap-5 items-center">
          <img src={icecream} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/End" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("icecream")}
            >
              <p>Ice cream</p>
            </Button>
          </Link>
        </div>{" "}
        <div className="flex flex-col gap-5 items-center">
          <img src={smoothie} alt="Loading GIF" className="w-96 rounded-lg" />
          <Link to="/End" className="w-[100%] flex flex-col items-center">
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
              onClick={() => handleClick("smoothie")}
            >
              <p>Smoothie</p>
            </Button>
          </Link>
        </div>
      </div>

      <Outlet />
    </div>
  );
}

export default Desert;
