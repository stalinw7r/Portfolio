import React from "react";
import { useInView } from "react-intersection-observer";

const ContactMe = () => {
  const sendEmail = () => {
    window.location.href = "mailto:stalinwesley1193@gmail.com";
  };
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  return (
    <>
      <div ref={ref} className="  text-white mt-10 flex-col pb-2 p-3">
        <div id="AboutMe" className="text-center mb-4">
          <h1>
            <p className={`font-light my-1 text-md  `}>GET IN TOUCH</p>
            <span className="font-medium  bg-gradient-to-r from-yellow-400 via-pink-500 to-orange-300 text-transparent bg-clip-text text-5xl">
              Contact Me
            </span>
          </h1>
          <div className="container border md:w-2xl border-zinc-500 rounded-2xl mx-auto  mt-3  font-medium ">
            <form class="max-w-3xl mx-auto  px-2  md:px-8 pt-8 rounded-2xl">
              <div class="mb-5">
                <input
                  type="email"
                  id="email"
                  class=" border border-zinc-500 text-gray-300 bg-zinc-950 text-sm rounded-lg  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
                  placeholder="Your email"
                  required
                />
              </div>
              <div class="mb-5">
                <textarea
                  id="message"
                  rows="4"
                  class="block p-2.5 w-full text-sm text-gray-300 bg-zinc-950 border-zinc-500 rounded-lg border  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Your message"
                ></textarea>
              </div>

              <button
                type="submit"
                class="text-gray-300 md:w-full border border-zinc-500  hover:border-zinc-300 hover:text-white font-light rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
              >
                Submit
              </button>
            </form>
            <div className="px-2 md:px-8 pb-6 w-full ">
              <div className="my-3 font-light">or </div>

              <button
                onClick={sendEmail}
                ref={ref}
                type="submit"
                className="text-gray-300 md:w-full border group border-zinc-500  hover:border-zinc-300 hover:text-white font-light rounded-lg text-sm w-full sm:w-auto  px-5 py-2.5 text-center "
              >
                "Send me an email {inView}"
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
