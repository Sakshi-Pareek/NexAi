import React from "react";
import UtilityLayer from "../assets/images/webp/UtilityLayer.webp";
import UtilityBlueCircle from "../assets/images/webp/UtilityBlueCircle.webp";

const Utility = () => {
  return (
    <>
      <div className="desktop:py-[90px] pb-[70px] pt-[60px] bg-utility bg-full bg-no-repeat bg-center relative z-[1]" id="Tokens">
      <div className="absolute w-[274px] h-[274px] opacity-[60%] z-[1] rounded-[100px] bg-[#0066FF] blur-[150px] left-[-8%] animate-pulse top-[4%]"></div>
        <img
          src={UtilityLayer}
          alt="UtilityLayer"
          className="absolute top-0 left-0 h-full w-full z-[-1] mix-blend-overlay"
        />
        <div className="container lg:max-w-[1164px] lg:px-3 px-5 mx-auto">
          <h3 className="ff_play font-normal xl:text-[48px] md:text-[42px] text-[38px] sm:leading-[125.5%] leading-[100%] text-[#FCFCFC] text-center desktop:mb-[70px] xl:mb-10 mb-7" data-aos="zoom-in">
            NexAI Token & utility
          </h3>
          <div className="border border-[#0066FF] backdrop-blur-md bg-[#ffffff00] rounded-[32px] xl:px-[60px] sm:px-7 px-3 sm:py-0 py-5 xl:h-[740px] lg:h-[680px] sm:h-[500px] items-center relative overflow-hidden">
            <img src={UtilityBlueCircle} alt="UtilityBlueCircle" className="absolute right-0 bottom-0 lg:max-w-[595px] sm;max-w-[450px] max-w-[270px] w-full z-0" />
            <div className="flex flex-row flex-wrap h-full items-center">
              <div className="xl:w-[39%] lg:w-[45%] w-full relative z-[1]">
                <h3 className="sm:w-[58px] sm:h-[58px] w-[45px] h-[45px] sm:text-[32px] text-[26px] rounded-[50%] bg-white shadow-[inset_2px_3px_12px_rgba(0,102,255,0.61)] flex justify-center items-center text-[#0066FF] font-semibold" data-aos="zoom-in">
                  1
                </h3>
                <h4 className="ff_play font-normal md:text-[32px] sm:text-[28px] text-[24px] text-white md:leading-[129%] lg:mt-[30px] sm:mt-4 my-1" data-aos="zoom-in">
                  Purchasing Nexai Products
                </h4>
                <div data-aos="zoom-in">
                <p className="font-normal text-[16px] leading-[163%] text-white sm:mt-4 opacity-70">
                  Nex AI tokens will be the primary currency for acquiring
                  Nexai's extensive range of software solutions, hardware
                  devices, including drones and sensors, and other smart home
                  products available on the Nexai marketplace. Users can
                  confidently make purchases using Nex tokens, enjoying the
                  convenience and flexibility of a token-based payment system.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Utility;
