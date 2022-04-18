import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import DetailsPage from "./Components/DetailsPage";

const App = () => (
  <div className="nav">
    <Navbar />
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/detailspage" element={<DetailsPage />} />
    </Routes>
  </div>
);

export default App;
