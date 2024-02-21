import React from "react";
import { Facebook, Telegram, Twitter } from "./Icon";

const Footer = () => {
  return (
    <>
      <div className="bg-footerbg bg-no-repeat lg:bg-full bg-cover bg-center xl:pt-[325px] md:pt-[270px] pt-[250px]">
        <div className="container lg:max-w-[1164px] lg:px-3 px-5 mx-auto">
          <div className="flex flex-wrap flex-row justify-between lg:gap-0 gap-10 md:mb-[60px] mb-10">
          <div className="xl:w-[35%] lg:w-[40%] w-full md:hidden block">
              <h4 className="ff_play font-normal text-[24px] leading-[130%] text-[#FCFCFC] mb-5 lg:max-w-[284px]">
                Ready to get started Talk to us Today{" "}
              </h4>
              <div className="border border-[#ffffff33] rounded-[12px] flex justify-between">
                <input
                  type="text"
                  placeholder="E-mail"
                  className="font-normal w-full text-[16px] text-white opacity-60 leading-[150%] outline-none bg-transparent ps-[18px]"
                />
                <button className="text-[#FCFCFC] rounded-[12px] px-[30.6px] sm:py-[16px] py-3 border-transparent bg-[#0066FF] font-medium text-[18px] leading-[150%] transition-all duration-500 ease-linear border-2 hover:border-[#0066FF] hover:scale-[0.95] text-nowrap">
                Get Started
                </button>
              </div>
            </div>
            <div className="lg:w-[21%] md:w-[50%] w-full flex flex-col justify-center">
              <p className="text-[16px] text-white opacity-70 leading-[162%] mb-5">
                Nullam viverra natoque amet et sed scelerisque viverra fringilla
                platea. Ullamcorper.
              </p>
              <div className="flex gap-3 items-center">
                <a href="https://www.facebook.com/" target="_blank" className="group">
                  <Facebook />
                </a>
                <a href="https://www.twitter.com/" target="_blank" className="group">
                  <Twitter />
                </a>
                <a href="https://www.telegram.com/" target="_blank" className="group">
                  <Telegram />
                </a>
              </div>
            </div>
            <div className="lg:w-[25%] md:w-[40%] w-full flex justify-between items-start xl:ms-24">
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href=""
                    className="ff_play font-normal text-[18px] text-white leading-[117%]"
                  >
                    Quick links
                  </a>
                </li>
                <li>
                  <a
                    href="#home"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#Features"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#Privacy"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Marketplace
                  </a>
                </li>
                <li>
                  <a
                    href="#Tokens"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Tokens
                  </a>
                </li>
                <li>
                  <a
                    href="#NexChat"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    NexChat
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    About
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col gap-2.5">
                <li>
                  <a
                    href="#"
                    className="ff_play font-normal text-[18px] text-white leading-[117%]"
                  >
                    Information's
                  </a>
                </li>
                <li>
                  <a
                    href="#Contact"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Phone
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    terms
                  </a>
                </li>
                <li>
                  <a
                    href="#Privacy"
                    className="ff_play font-normal text-[18px] text-white leading-[117%] opacity-70 hover:after:w-[95%] after:mx-auto after:right-0 after:items-center after:w-0 after:absolute after:bg-white after:h-[2px] relative after:left-[0] after:bottom-[-2px] after:rounded-[10px] after:transition-all after:duration-300 after:ease-linear"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="xl:w-[31.4%] lg:w-[40%] w-full md:block hidden">
              <h4 className="ff_play font-normal text-[24px] leading-[130%] text-[#FCFCFC] mb-5 lg:max-w-[284px]">
                Ready to get started Talk to us Today{" "}
              </h4>
              <div className="border border-[#ffffff33] rounded-[12px] flex justify-between">
                <input
                  type="text"
                  placeholder="E-mail"
                  className="font-normal w-full text-[16px] text-white opacity-60 leading-[150%] bg-transparent sm:ps-[18px] ps-1 outline-none"
                />
                <button className="text-[#FCFCFC] rounded-[12px] px-[32.5px] sm:py-[15.5px] py-3 border-transparent bg-[#0066FF] font-medium text-[18px] leading-[150%] transition-all duration-500 ease-linear hover:border-[#0066FF] hover:scale-[0.95] text-nowrap">
                Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="w-full h-1 bg-gradient-to-b from-[#0066FF] to-[#02CDCF] opacity-40"></div>
          <p className="text-center text-[16px] text-white opacity-70 leading-[130%] py-5">@Copyright.nexai</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
