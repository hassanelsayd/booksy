import React from "react";
// Project components
import Navbar from "./components/Navbar";
import AllBooks from "./pages/AllBooks";

// Pages
import Home from "./pages/Home";

// external Components
import { Routes, Route } from "react-router-dom";

// Glopal style
import "./global/Main.css";
const App = () => {
  return (
    <div className="App container mx-auto px-5">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all-books" element={<AllBooks />} />
        {/* <AllBooks /> */}
      </Routes>
    </div>
  );
};

export default App;
