import Ask from "./Ask";
import "./start.css";
import { Outlet, Link } from "react-router-dom";

function Start() {
  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb]">
      <div className="relative">
        <div className="valentines">
          <div className="envelope"></div>
          <div className="front"></div>
          <div className="card flex justify-center">
            <div className="text">Happy Valentine's Day!</div>
            <Link className="heart" to="/Ask" />
          </div>
        </div>
        <div className="absolute left-[90px] top-[250px]">
          Click on the heart
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Start;
