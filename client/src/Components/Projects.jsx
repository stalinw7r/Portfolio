import React from "react";

const Projects = () => {
  return (
    <div>
      <div className="  text-white mt-10 flex-col pb-2">
        <div id="Projects" className="text-center mb-4">
          <h1>
            <p className={`font-light my-1 text-md  `}>EXPLORE</p>
            <span className="font-medium  bg-gradient-to-r from-violet-400  to-red-800 text-transparent bg-clip-text text-5xl">
              Projects
            </span>
          </h1>
        </div>
        <div className=" p-3  mx-auto lg:container md:px-1 lg:w-[90%] xl:w-[80%] 2xl:w-[60%] ">
          <div
            id="card"
            className=" md:w-[90%] border border-zinc-500 mx-auto h-full pb-3 rounded-2xl flex-col"
          >
            <div id="cardHeading" className="px-5 pt-3 pb-2">
              <h3 className="text-3xl font-semibold p-2">QwikNotes</h3>
              <hr className="text-zinc-500 mx-2" />
            </div>
            <div
              id="details"
              className="flex-col-reverse md:flex-row flex  justify-center px-5"
            >
              <div id="testingresponsive" className="flex-1/2">
                <div
                  id="indetail"
                  className="px-2 font-medium  text-md text-zinc-200"
                >
                  <p className="py-1">
                    Designed and implemented a fully functional web app for
                    users to manage notes, leveraging React.js for the frontend
                    and Node.js with Express for the backend
                  </p>
                  <p className="py-1 pl-2 font-light">
                    User registration, JWT-based authentication to ensure secure
                    user login and session management.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Utilized MongoDB as the database to store and handle CRUD
                    operations
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Axios for seamless API communication.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Complete CRUD Functionality, Responsive Design.{" "}
                  </p>
                </div>
                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                      width={"15px"}
                    />
                    MongoDB
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      className="invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                      width={"15px"}
                    />
                    ExpressJS
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      width={"15px"}
                    />
                    ReactJS
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                      width={"15px"}
                    />
                    NodeJS
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                      width={"15px"}
                    />
                    Tailwind CSS
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      className="invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
                      width={"15px"}
                    />
                    Axios
                  </div>
                </div>
                <div className="flex my-5 gap-3">
                  <div className="border font-medium transition-transform hover:translate-0.5 duration-200 ease-in-out border-zinc-500 px-4 p-2 flex justify-center items-center rounded-2xl hover:bg-zinc-800 gap-1">
                    <a
                      href="https://github.com/stalinw7r/NotesApp"
                      target="_blank"
                    >
                      GitHub
                    </a>

                    <img
                      className="invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      width={"20px"}
                    />
                  </div>
                  <div className="border font-medium transition-transform hover:translate-0.5  hover:bg-green-700 duration-200 ease-in-out group border-zinc-500 px-4 p-2 flex justify-center items-center rounded-2xl  gap-1">
                    <a href="#" target="_blank">
                      Live Site
                    </a>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-5 "
                      >
                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="projectImage" className="p-2 md:flex-1/2 ">
                <img
                  src="./src/assets/Notesapp.png"
                  alt=""
                  className="w-[100%] md:w-[100%] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" p-3  mx-auto lg:container md:px-1 lg:w-[90%] xl:w-[80%] 2xl:w-[60%]">
          <div
            id="card"
            className=" md:w-[90%] border border-zinc-500 mx-auto h-full pb-3 rounded-2xl flex-col"
          >
            <div id="cardHeading" className="px-5 pt-3 pb-2">
              <h3 className="text-3xl font-semibold p-2">WeatherAlerts</h3>
              <hr className="text-zinc-500 mx-2" />
            </div>
            <div
              id="details"
              className="flex-col-reverse md:flex-row flex  justify-center px-5"
            >
              <div id="testingresponsive" className="flex-1/2">
                <div
                  id="indetail"
                  className="px-2 font-medium  text-md text-zinc-200"
                >
                  <p className="py-1 ">
                    Real-time weather app to fetch current weather conditions,
                    temperature, humidity, and wind speed for 300,000+ cities.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Intuitive UI, Mobile-first, fully responsive layout
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Dynamic Weather Icons based on current conditions.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    4-Day Forecast with Interactive Animations like load spinner
                    with smooth transitions and hover effects.
                  </p>
                </div>
                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      width={"15px"}
                    />
                    ReactJS
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                      width={"15px"}
                    />
                    JavaScript
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                      width={"15px"}
                    />
                    Tailwind CSS
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg"
                      width={"15px"}
                    />
                    Axios
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-plain.svg"
                      width={"15px"}
                    />
                    Weather API
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg"
                      width={"15px"}
                    />
                    Vite
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                      width={"15px"}
                    />
                    NodeJS
                  </div>
                </div>
                <div className="flex my-5 gap-3">
                  <div className="border font-medium transition-transform hover:translate-0.5 duration-200 ease-in-out border-zinc-500 px-4 p-2 flex justify-center items-center rounded-2xl hover:bg-zinc-800 gap-1">
                    <a
                      href="https://github.com/stalinw7r/WeatherApp"
                      target="_blank"
                    >
                      GitHub
                    </a>

                    <img
                      className="invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      width={"20px"}
                    />
                  </div>
                  <div className="border font-medium transition-transform hover:translate-0.5  hover:bg-green-700 duration-200 ease-in-out group border-zinc-500 px-4 p-2 flex justify-center items-center rounded-2xl  gap-1">
                    <a href="#" target="_blank">
                      Live Site
                    </a>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-5 "
                      >
                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="projectImage" className="p-2 md:flex-1/2 ">
                <img
                  src="./src/assets/weatherapp.png"
                  alt=""
                  className="w-[100%] md:w-[100%] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" p-3  mx-auto lg:container md:px-1 lg:w-[90%] xl:w-[80%] 2xl:w-[60%]">
          <div
            id="card"
            className=" md:w-[90%] border border-zinc-500 mx-auto h-full pb-3 rounded-2xl flex-col"
          >
            <div id="cardHeading" className="px-5 pt-3 pb-2">
              <h3 className="text-3xl font-semibold p-2">DashDeal</h3>
              <hr className="text-zinc-500 mx-2" />
            </div>
            <div
              id="details"
              className="flex-col-reverse md:flex-row flex  justify-center px-5"
            >
              <div id="testingresponsive" className="flex-1/2">
                <div
                  id="indetail"
                  className="px-2 font-medium  text-md text-zinc-200"
                >
                  <p className="py-1 ">
                    Comprehensive Plan Comparison website. Users can review and
                    compare mobile network plans allat one place to make
                    informed decisions.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Search Functionality enables users to quickly find plans
                    based on their preferences or keywords.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    LAMP Stack Implementation. Utilized Linux, Apache, MySQL,
                    and PHP for a reliable and scalable backend infrastructure.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    PHP and MySQL power the dynamic generation of plan details
                    and user interactions. Responsive UI.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Social Media Integration, Allows users to share specific
                    plan pages directly on social media platforms, enhancing
                    engagement and reach.
                  </p>
                </div>
                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                      width={"15px"}
                    />
                    Bootstrap
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                      width={"15px"}
                    />
                    php
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                      width={"15px"}
                    />
                    MySQL
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                      width={"15px"}
                    />
                    JavaScript
                  </div>
                </div>
                <div className="flex my-5 gap-3">
                  <div className="border font-medium transition-transform hover:translate-0.5 duration-200 ease-in-out border-zinc-500 px-4 p-2 flex justify-center items-center rounded-2xl hover:bg-zinc-800 gap-1">
                    GitHub
                    <img
                      className="invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      width={"20px"}
                    />
                  </div>
                  <div className="border font-medium transition-transform hover:translate-0.5  hover:bg-green-700 duration-200 ease-in-out group border-zinc-500 px-4 p-2 flex justify-center items-center rounded-2xl  gap-1">
                    <a href="https://dashdeal.ca/" target="_blank">
                      Live Site
                    </a>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-5 "
                      >
                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="projectImage" className="p-2 md:flex-1/2 ">
                <img
                  src="./src/assets/dashdeal.png"
                  alt=""
                  className="w-[100%] md:w-[100%] rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className=" p-3  mx-auto lg:container md:px-1 lg:w-[90%] xl:w-[80%] 2xl:w-[60%]">
          <div
            id="card"
            className=" md:w-[90%] border border-zinc-500 mx-auto h-full pb-3 rounded-2xl flex-col"
          >
            <div id="cardHeading" className="px-5 pt-3 pb-2">
              <h3 className="text-3xl font-semibold p-2">Portfolio</h3>
              <hr className="text-zinc-500 mx-2" />
            </div>
            <div
              id="details"
              className="flex-col-reverse md:flex-row flex  justify-center px-5"
            >
              <div id="testingresponsive" className="flex-1/2">
                <div
                  id="indetail"
                  className="px-2 font-medium  text-md text-zinc-200"
                >
                  <p className="py-1">
                    Personal Portfolio project to showcase skills and projects
                    with a clean, organized layout.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Built using React and Vite for a fast, efficient, and modern
                    development experience.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Leveraged Vite's blazing-fast build tool for optimized
                    performance and quick load times.
                  </p>
                  <p className="py-1 pl-2 font-light">
                    Express.js powers the backend, enabling seamless
                    communication between the frontend and MongoDB database.
                  </p>
                </div>
                <div className="flex flex-wrap mt-2 gap-2">
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      width={"15px"}
                    />
                    ReactJS
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                      width={"15px"}
                    />
                    Tailwind CSS
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                      width={"15px"}
                    />
                    MongoDB
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      className="invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                      width={"15px"}
                    />
                    ExpressJS
                  </div>
                  <div className="border font-light text-xs py-1 border-zinc-500 px-2 flex justify-center items-center rounded-2xl  gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                      width={"15px"}
                    />
                    NodeJS
                  </div>
                </div>
                <div className="flex my-5 gap-3">
                  <div className="border font-medium transition-transform hover:translate-0.5 duration-200 ease-in-out border-zinc-500 px-4 p-2 flex justify-center items-center rounded-2xl hover:bg-zinc-800 gap-1">
                    <a
                      href="https://github.com/stalinw7r/Portfolio"
                      target="_blank"
                    >
                      GitHub
                    </a>

                    <img
                      className="invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      width={"20px"}
                    />
                  </div>
                  <div className="border font-medium transition-transform hover:translate-0.5  hover:bg-green-700 duration-200 ease-in-out group border-zinc-500 px-4 p-2 flex justify-center items-center rounded-2xl  gap-1">
                    <a href="#Mainsection">Live Site</a>

                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="size-5 "
                      >
                        <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                        <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div id="projectImage" className="p-2 md:flex-1/2 ">
                <img
                  src="./src/assets/myPortfolio.png"
                  alt=""
                  className="w-[100%] md:w-[100%] rounded-2xl "
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
