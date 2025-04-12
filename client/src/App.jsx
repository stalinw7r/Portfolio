import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero.Jsx";
import AboutMe from "./Components/AboutMe";

function App() {
  return (
    <>
      <div className="bg-black h-fit outfit-font">
        <Navbar />

        <Hero />
        <AboutMe />
      </div>
    </>
  );
}

export default App;
