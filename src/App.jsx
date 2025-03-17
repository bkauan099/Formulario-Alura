import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Final from "./pages/Final";
import Inicial from "./pages/Inicial";
function App() {
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicial />} />
          <Route path="/final" element={<Final />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>

        </BrowserRouter>
    );
}

export default App;