import ty from "./pictures/ty.gif";
import Button from "@mui/material/Button";

function Ty() {
  return (
    <div className="flex items-center justify-center w-screen h-screen flex-col bg-[#f5c4fb] gap-6">
      <p className="text-5xl font-semibold text-[#bb7475] font-cour">
        Thank you
      </p>
      <img src={ty} alt="ty" className="w-96" />
      <p className="text-md font-semibold text-[#bb7475] font-cour">
        Don't go yet!!!
      </p>
      <Button
        variant="contained"
        color="secondary"
        size="large"
        className="font-cour"
        sx={{ fontFamily: "Courier Prime , sans-serif", textTransform: "none" }}
      >
        Click me UwU
      </Button>
    </div>
  );
}

export default Ty;
