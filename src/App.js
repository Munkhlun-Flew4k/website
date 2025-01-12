import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Ask from "./Ask";
import Ty from "./Ty";
import Sad from "./sad";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ask />} />
        <Route path="/Ty" element={<Ty />} />
        <Route path="/Sad" element={<Sad />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
