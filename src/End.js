import React from "react";
import end from "./pictures/end.gif";

function End() {
  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb] gap-6">
      <p className="text-5xl font-semibold text-[#bb7475] font-cour">
        See you soon then
      </p>
      <img src={end} alt="Loading GIF" className="w-96 rounded-lg" />
      <p className="text-md font-semibold text-[#bb7475] font-cour">
        Please be ready on February 14. I have everything prepared for us.
      </p>
      <p className="text-md font-semibold text-[#bb7475] font-cour">
        Bye Love you
      </p>
    </div>
  );
}

export default End;
