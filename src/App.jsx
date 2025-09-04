import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Landing from "./components/LandingPage/Landing.jsx";
import Home from "./components/HomePage/Home.jsx";
import MovieDetails from "./components/MovieDetails/MovieDetails.jsx";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/movie/:id/details" element={<MovieDetails />} />
          <Route path="*" element={<>meow</>} />
        </Routes>
      </Router>
    </>
  );
}
