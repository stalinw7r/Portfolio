import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero.Jsx";
import AboutMe from "./Components/AboutMe";
import ContactMe from "./Components/ContactMe";
import Projects from "./Components/Projects";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div className="bg-black h-fit outfit-font">
        <Navbar />
        <Hero />
        <AboutMe />
        <Projects />
        <ContactMe />
        <Footer />
      </div>
    </>
  );
}

export default App;
