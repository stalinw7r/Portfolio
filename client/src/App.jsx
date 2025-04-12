import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero.Jsx";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <>
      <div className="bg-black h-fit outfit-font">
        <Navbar />

        <Hero />
        <AboutMe />
        <ContactMe />
      </div>
    </>
  );
}

export default App;
