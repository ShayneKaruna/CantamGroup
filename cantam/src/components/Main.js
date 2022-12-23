import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg from "./HeroImg";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

import { Route, Routes } from "react-router-dom";

export default function Main() {

  return (
    <div>
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<HeroImg />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<NotFound />} />
        </Routes>
      </>
      <Footer />
    </div>
  );
}
