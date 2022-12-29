import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import HeroImg from "./HeroImg";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Projects from "./pages/Projects";



import { Route, Routes } from "react-router-dom";

export default function Main() {

  const style = {
    paddingTop : "7rem"
  }
  return (
    <div>
      <Navbar />
      <div style={style}>
        <Routes>
          <Route path="/" element={<HeroImg />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element = {<Careers />} />
          <Route path="/contact" element = {<Contact />} />
          <Route path="/project" element = {<Projects />} />
          <Route path="/*" element = {<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}
