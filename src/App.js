import { BrowserRouter, Route, Routes } from "react-router-dom";
import Ask from "./Ask";
import Ty from "./Ty";
import Sad from "./sad";
import When from "./When"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ask />} />
        <Route path="/Ty" element={<Ty />} />
        <Route path="/Sad" element={<Sad />} />
        <Route path="/When" element={<When />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
