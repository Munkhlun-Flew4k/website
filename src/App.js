import { Routes, Route } from "react-router-dom";
import Ask from "./Ask";
import Ty from "./Ty";
import Sad from "./sad";
import Start from "./Start";
import Food from "./Food";
import Desert from "./Desert";
import End from "./End";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/Ask" element={<Ask />} />
      <Route path="/Ty" element={<Ty />} />
      <Route path="/Sad" element={<Sad />} />
      <Route path="/Food" element={<Food />} />
      <Route path="/Desert" element={<Desert />} />
      <Route path="/End" element={<End />} />
    </Routes>
  );
}

export default App;
