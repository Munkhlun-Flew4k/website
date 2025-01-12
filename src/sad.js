import uwu from "./pictures/uwu.gif";

function Sad() {
  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb] gap-6">
      <p className="text-3xl font-semibold text-[#bb7475] font-cour h-auto w-1/2 text-wrap text-center">
        Ohhh I really wanted you to be my valentine
      </p>
      <img src={uwu} alt="uwu" className="w-80" />
      <p className="text-4xl font-semibold text-[#bb7475] font-cour h-auto w-1/2 text-wrap text-center">
        Well bye then :(
      </p>
    </div>
  );
}

export default Sad;
