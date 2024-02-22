import React, { useState } from "react";
import heropattern from "../assets/images/gif/HeroGif.gif";
import HomeRobot from "../assets/images/webp/HomeRobot.webp";

const HeaderSec = () => {
  const [show, setShow] = useState(true);
  if (show === false) {
    document.body.classList.add("max-lg:overflow-hidden");
  } else {
    document.body.classList.remove("max-lg:overflow-hidden");
  }
  return (
    <>
      <div className="2xl:min-h-screen sm:h-[810px] h-[600px] relative bg-[#08090E] ">
        <div className="bg-[#08090E] absolute w-full h-full top-0 left-0">
          <img
            src={heropattern}
            alt="heropattern"
            className="w-full h-full opacity-20 object-cover object-center"
          />
        </div>
        <div className="absolute top-0 left-0 w-full z-0 2xl:min-h-screen sm:h-[810px] h-[600px] mix-blend-overlay bg-[#0066ff]"></div>
        <img
          src={HomeRobot}
          alt="HomeRobot"
          className="absolute md:top-1/2 sm:top-[4%] left-1/2 md:translate-y-[-70%] -translate-x-1/2 sm:max-w-[450px] max-w-[400px]"
        />
        <div className="absolute left-0 -bottom-1 right-0 w-full h-[121px] bg-gradient-to-b from-[#08090e00] to-[#08090E]"></div>
        <div className="container lg:max-w-[1124px] lg:px-3 px-5 mx-auto">
          <nav className="flex items-center md:justify-end justify-between lg:gap-[254px] gap-[100px] h-[100px] relative z-[1]">
            <ul
              className={`${
                show ? "left-[-100%]" : "left-0"
              } flex max-md:fixed max-md:top-0 max-md:bg-black max-md:h-full max-md:w-full max-md:z-[7] max-md:transition-all max-md:duration-300 max-md:ease-linear max-md:min-h-screen max-md:flex-col gap-5 items-center justify-center`}
            >
              <li onClick={() => setShow(!show)}>
                <a
                  href="#home"
                  className="font-normal text-[16px] leading-[150%] text-[#ffffff] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  Home
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#Privacy"
                  className="font-normal text-[16px] leading-[150%] text-[#ffffff] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  Marketplace
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#about"
                  className="font-normal text-[16px] leading-[150%] text-[#ffffff] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  About
                </a>
              </li>
              <li onClick={() => setShow(!show)}>
                <a
                  href="#NexChat"
                  className="font-normal text-[16px] leading-[150%] text-[#ffffff] hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                >
                  NexChat
                </a>
              </li>
            </ul>
            <button className="text-[#FCFCFC] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all duration-500 ease-linear hover:text-[#0066FF] hover:bg-white border-2 hover:border-[#0066FF] rounded-[12px] px-[30.6px] py-[16px] border-transparent bg-[#0066FF] font-medium text-[18px] leading-[150%] md:block hidden">
              Sign Up
            </button>
            <div
              onClick={() => setShow(!show)}
              className="md:hidden w-[35px] h-[27px] relative z-[10] flex justify-between flex-col cursor-pointer"
            >
              <span
                className={`${
                  show
                    ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[50deg] translate-y-[14px]"
                }`}
              ></span>
              <span
                className={`${
                  show
                    ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "duration-300 rounded-[3px] ease-linear transition-all hidden"
                }`}
              ></span>
              <span
                className={`${
                  show
                    ? "bg-white h-[3px] w-full duration-300 rounded-[3px] ease-linear transition-all"
                    : "bg-white transition-all duration-300 rounded-[3px] ease-linear h-[4px] w-full rotate-[-50deg] translate-y-[-180%]"
                }`}
              ></span>
            </div>
            <button className="text-[#FCFCFC] rounded-[12px] px-[30.6px] sm:py-[16px] py-3 border-transparent bg-[#0066FF] font-medium text-[18px] leading-[150%] md:hidden block hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all duration-500 ease-linear hover:text-[#0066FF] hover:bg-white border-2 hover:border-[#0066FF]">
              Sign Up
            </button>
          </nav>
        </div>
        <div
          className="container lg:max-w-[1124px] lg:px-3 px-5 mx-auto relative 2xl:pt-[280px] xl:pt-[145px] sm:pt-[170px] pt-[130px] flex flex-col justify-center items-center"
          id="home"
        >
          <h1
            className="text-white lg:text-[60px] md:text-[55px] sm:text-[51px] text-[31px] leading-[127%] ff_play font-bold max-w-[1020px] text-center sm:mb-10 mb-6"
            data-aos="zoom-in"
          >
            <span className="text-[#FCFCFC]">NexAi</span> Is An Advanced
            AI-Powered Home Assistant
          </h1>
          <div data-aos="zoom-in">
            <button className="text-[#FCFCFC] rounded-[12px] px-[30.6px] sm:py-[16px] py-3 border-transparent bg-[#0066FF] font-medium text-[18px] leading-[150%] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all duration-500 ease-linear hover:text-[#0066FF] hover:bg-white border-2 hover:border-[#0066FF]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderSec;
