import React, { useState } from "react";
import Navbar from "./Navbar";
import HeroImg from "./HeroImg";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

export default function Main() {
  const [currentPage, setCurrentPage] = useState('Landing');
  const RenderPage = () => {
    switch (currentPage) {
      case "Landing":
        return <HeroImg />
      case "Homepage":
        return <Homepage />;
      default: 
        return <NotFound />;
    }
  }
  return (
    <div >
      <Navbar />
      <RenderPage />
    </div>
  );
}
