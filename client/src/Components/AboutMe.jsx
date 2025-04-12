import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="  text-white flex-col pb-2">
        <div id="AboutMe" className="text-center mb-4">
          <h1>
            <p className="font-light my-1 text-xl">KNOW MORE</p>
            <span className="font-medium  bg-gradient-to-r from-purple-400 via-pink-500 to-teal-300 text-transparent bg-clip-text text-5xl">
              About Me
            </span>
          </h1>
        </div>
        <div className=" mx-auto  md:container lg:container lg:w-[50%]  lg:flex">
          <div className=" flex-1/4  border-r-1 border-zinc-700  px-2 ">
            <div className="p-3 m-3 drop-shadow-md drop-shadow-gray-500 inset-shadow-lg inset-shadow-black ">
              <img
                className="rounded-full  grayscale-40 brightness-110 contrast-120 w-[200px]  mx-auto  "
                src="https://github.com/stalinw7r.png"
                alt="profileImage"
              />
            </div>
            <div className="font-light text-center flex flex-col-reverse xl:flex-col lg:flex-col p-1">
              <div>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Porro sunt voluptatibus, aliquid quo nostrum reprehenderit.
                  Cupiditate nostrum incidunt amet explicabo asperiores autem
                  rem consequatur eius, voluptatibus fugiat, ipsa eum minus?
                </p>
              </div>
              <div className="flex flex-col-reverse xl:flex-col lg:flex-col">
                <hr className="my-2 mx-6 border-zinc-700" />
                <div className="flex gap-2 items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="size-4"
                  >
                    <path
                      fillRule="evenodd"
                      d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <p>Canada</p>
                </div>
              </div>
            </div>
          </div>

          <div className=" flex-3/4 px-5 my-4 font-light">
            <div className="flex-col">
              <div>
                <h2 className="text-xl font-bold">Tech Stack</h2>
                <div className="flex flex-wrap p-2 mt-2 mb-3 gap-2">
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-plain.svg"
                      width={"15px"}
                    />
                    HTML
                  </div>
                  <div className="border border-zinc-500  px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                      width={"15px"}
                    />
                    CSS
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                      width={"15px"}
                    />
                    JavaScript
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                      width={"15px"}
                    />
                    ReactJS
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg"
                      width={"15px"}
                    />
                    NextJS
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg"
                      width={"15px"}
                    />
                    Tailwind CSS
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                      width={"15px"}
                    />
                    Bootstrap
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                      width={"15px"}
                    />
                    NodeJS
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      className="invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg"
                      width={"15px"}
                    />
                    ExpressJS
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
                      width={"15px"}
                    />
                    MongoDB
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg"
                      width={"15px"}
                    />
                    MySQL
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
                      width={"15px"}
                    />
                    php
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg"
                      width={"15px"}
                    />
                    Redux Toolkit
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
                      width={"15px"}
                    />
                    Git
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      className="invert"
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg"
                      width={"15px"}
                    />
                    GitHub
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg"
                      width={"15px"}
                    />
                    Postman
                  </div>
                  <div className="border border-zinc-500 px-2 flex justify-center items-center rounded-2xl hover:-rotate-7 duration-200 gap-1">
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg"
                      width={"15px"}
                    />
                    Figma
                  </div>
                </div>
                <hr className="border-zinc-700" />
              </div>
              <div className="my-3">
                <h2 className="text-xl font-semibold">Education</h2>
                <div className="flex-col mb-3 p-2">
                  <h3>Bachelors Degree (SK University)</h3>
                  <p>World Education Services</p>
                  <div className=" group mt-1 border hover:border-white border-zinc-500 px-2 w-fit  rounded-2xl">
                    <a
                      className="flex justify-center items-center gap-1"
                      href="https://www.credly.com/badges/1e285534-7a3b-48ce-94e8-c74580eaae51/linked_in_profile"
                      target="_blank"
                    >
                      <div>Show Credential</div>
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                          className="size-4 group-hover:size-5"
                        >
                          <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                          <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
                <hr className="border-zinc-700" />
              </div>
              <div className="my-3">
                <h2 className="text-xl font-semibold ">Other Certifications</h2>
                <div className=" flex flex-col md:flex-row xl:flex-row">
                  <div className="flex-col mb-1 p-2">
                    <h3>Business Analyst Certification</h3>
                    <div className=" group mt-1 border hover:border-white border-zinc-500 px-2 w-fit  rounded-2xl">
                      <a
                        className="flex justify-center items-center gap-1"
                        href="https://success.simplilearn.com/8ecf77bd-d06f-4e30-acf2-830eb9fcb57e#acc.aJCsbWxS"
                        target="_blank"
                      >
                        <div>Show Credential</div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="size-4 group-hover:size-5"
                          >
                            <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                            <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                  <div className="flex-col mb-1 p-2">
                    <h3>
                      IIBA<sup>&#174;</sup> Member
                    </h3>
                    <div className=" group mt-1 border hover:border-white border-zinc-500 px-2 w-fit  rounded-2xl">
                      <a
                        className="flex justify-center items-center gap-1"
                        href="https://badges.iiba.org/ae16db8b-a8f2-4e5f-aa26-bee779451797#acc.RgEa2Vvr"
                        target="_blank"
                      >
                        <div>Show Credential</div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                            className="size-4 group-hover:size-5"
                          >
                            <path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72Z" />
                            <path d="M3.5 6.75c0-.69.56-1.25 1.25-1.25H7A.75.75 0 0 0 7 4H4.75A2.75 2.75 0 0 0 2 6.75v4.5A2.75 2.75 0 0 0 4.75 14h4.5A2.75 2.75 0 0 0 12 11.25V9a.75.75 0 0 0-1.5 0v2.25c0 .69-.56 1.25-1.25 1.25h-4.5c-.69 0-1.25-.56-1.25-1.25v-4.5Z" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <hr className="border-zinc-700" />
                <div>
                  <a
                    href="./public/Stalin Wesley web dedfs.docx"
                    className="inline-flex gap-2 justify-center bg-yellow-400 group w-full md:w-fit  px-5  items-center py-1 mt-3   text-base font-medium text-center text-white rounded-4xl border border-gray-500  hover:border-zinc-300 duration-100"
                  >
                    <div className="text-md text-black ">My resume</div>
                    <lord-icon
                      src="https://cdn.lordicon.com/rmkahxvq.json"
                      trigger="hover"
                      colors="primary:#00000"
                    ></lord-icon>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
