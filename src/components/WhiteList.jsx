import React from "react";
import WhiteListAi from "../assets/images/webp/WhiteListAi.webp";

const WhiteList = () => {
  return (
    <>
      <div className="desktop:pt-[80px] pt-[70px] relative">
      <div className="absolute w-[274px] h-[274px] opacity-[60%] z-[1] rounded-[100px] bg-[#0066FF] blur-[150px] left-[-8%] animate-pulse top-[10%]"></div>
      <div className="absolute w-[274px] h-[274px] opacity-[60%] z-[1] rounded-[100px] bg-[#0066FF] blur-[150px] right-[-8%] animate-pulse top-[-20%]"></div>
        <div className="container lg:max-w-[1164px] mx-auto lg:px-3 px-5">
          <div className="flex flex-wrap-reverse flex-row items-center lg:justify-between justify-center lg:gap-0 md:gap-12 sm:gap-10 gap-7">
            <div className="xl:w-[48%] lg:w-[45%] w-full" data-aos="zoom-in">
              <img src={WhiteListAi} alt="WhiteListAi" className="max-w-[570px] w-full mx-auto" />
            </div>
            <div className="xl:w-[42%] lg:w-[47%] w-full">
              <h3 className="ff_play font-normal xl:text-[48px] md:text-[42px] text-[38px] sm:leading-[125.5%] leading-[100%] text-[#FCFCFC] xl:mb-4 mb-3 max-lg:text-center" data-aos="zoom-in-left">Whitelist & Presale</h3>
              <p className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal max-lg:text-center max-lg:auto" data-aos="zoom-in-left">
                For our early supporters, we have curated an exclusive presale
                opportunity. To ensure your participation, we will be
                implementing a whitelist registration process. By signing up on
                the whitelist and following the provided instructions, you will
                secure your spot in this exciting event. To stay informed about
                the whitelist opening and receive timely updates, kindly provide
                us with your email address, and we will notify you accordingly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WhiteList;
