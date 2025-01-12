import ask from "./pictures/ask.gif";
import Button from "@mui/material/Button";

function Ask() {
  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb] gap-5">
      <p className="text-4xl font-semibold text-[#bb7475] font-cour">
        Will you be my valentine?
      </p>
      <div className="flex gap-10">
        <Button
          color="secondary"
          size="large"
          sx={{
            textTransform: "none",
            fontFamily: "Courier Prime , sans-serif",
          }}
        >
          Yes
        </Button>
        <Button
          color="secondary"
          size="large"
          sx={{
            textTransform: "none",
            fontFamily: "Courier Prime , sans-serif",
          }}
        >
          I'm not looking to date right now
        </Button>
      </div>
      <img src={ask} alt="ask" className="w-96" />
    </div>
  );
}

export default Ask;
