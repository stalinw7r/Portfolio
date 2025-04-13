import React from "react";
import "../App.css";

const Hero = () => {
  const sendEmail = () => {
    window.location.href = "mailto:stalinwesley1193@gmail.com";
  };
  return (
    <section id="Mainsection">
      <div className="px-4 mx-auto max-w-screen-xl text-center py-8  lg:py-24 border ">
        <h1 className="mb-4 text-center font-extrabold text-4xl tracking- leading-none text-white md:text-6xl lg:text-6xl outfit-font">
          Crafting Beautiful & Functional Web Experiences
        </h1>
        <p className="mb-8 text-lg font-normal text-white md:text-xl lg:text-xl sm:px-16 lg:px-48 ">
          Hi, I'm{" "}
          <span className="font-bold bg-gradient-to-r from-purple-400 via-pink-500 to-amber-500 text-transparent bg-clip-text md:lg:text-2xl">
            Stalin Wesley
          </span>
          , a Full Stack Developer passionate about building performant,
          user-friendly, and scalable applications.
        </p>
        <div className="flex group flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
          <a
            onClick={sendEmail}
            href="#"
            className="inline-flex gap-2 justify-center items-center py-3 px-5  text-base font-medium text-center text-white rounded-4xl border border-gray-500 hover:border-zinc-300 duration-100"
          >
            <div className="text-lg">Let's Connect</div>
            <lord-icon
              src="https://cdn.lordicon.com/fdxqrdfe.json"
              trigger="hover"
              colors="primary:#ffffff"
            ></lord-icon>
          </a>

          <a
            href="./public/Stalin Wesley web dedfs.docx"
            className="inline-flex gap-2 justify-center  items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-4xl border border-gray-500  hover:border-zinc-300 duration-100"
          >
            <div className="text-lg">My resume</div>
            <lord-icon
              src="https://cdn.lordicon.com/rmkahxvq.json"
              trigger="hover"
              colors="primary:#ffffff"
            ></lord-icon>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
