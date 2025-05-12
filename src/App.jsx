import React, { Component , useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

import Navbar from "./Component/Navbar/Navbar";
import Home from "./Component/Home/Home";
import Footer from "./Component/Footer/Footer";
import Evenings from "./Component/Evenings/Evenings";
import AiChat from "./Component/AiChat/AiChat";

function App() {
    useEffect(() => {
       AOS.init({
        //  duration: 1000, // Animation duration
        //  once: true, // Whether animation should happen only once
       });
     }, []);
  return (
    <>
      <div className="relative">
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path="" element={<Home />}></Route>
            <Route path="/evenings" element={<Evenings />}></Route>
          </Routes>
        {/* ai chat */}
        <AiChat />
        <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
