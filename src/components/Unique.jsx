import React from "react";
import RemoteAccess from "../assets/images/png/RemoteAccess.png";
import RealTime from "../assets/images/png/RealTime.png";
import Awareness from "../assets/images/png/Awareness.png";
import Autonomous from "../assets/images/png/Autonomous.png";
import UniqueEarth from "../assets/images/gif/GloblyEarthGif.gif";
import GradientLayer from "../assets/images/png/UniqueEartLayerGradient.png";

const Unique = () => {
  return (
    <>
      <div
        className="relative z-[0] desktop:pb-[140px] xl:pb-[80px] sm:pb-[50px] pb-[60px] desktop:pt-[80px] bg-[#08090E]"
        id="Features"
      >
        <div className="absolute w-[224px] h-[168px] opacity-[60%] z-[1] rounded-[50%] bg-[#0066FF] blur-[90px] right-[-7%] animate-pulse top-0"></div>
        <img
          src={GradientLayer}
          alt="GradientLayer"
          className="absolute bottom-0 left-0 w-full z-0"
        />
        <img
          src={UniqueEarth}
          alt="UniqueEarth"
          className="max-w-[1140px] w-full absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 mix-blend-lighten z-[2]"
        />
        <div className="container lg:max-w-[1140px] lg:px-3 px-5 mx-auto relative z-[2] sm:mb-10">
          <h3
            className="ff_play font-normal xl:text-[48px] md:text-[42px] text-[38px] sm:leading-[125.5%] leading-[100%] text-[#FCFCFC] mb-4 text-center"
            data-aos="zoom-in"
          >
            Unique features
          </h3>
          <p
            className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal max-w-[517px] text-center mx-auto"
            data-aos="zoom-in"
          >
            ability to engage in natural, fluent conversations in over 15
            languages,
          </p>
          <div className="flex flex-wrap flex-row desktop:mt-[100px] lg:mt-[70px] md:mt-[40px] mt-5 lg:gap-0 sm:gap-10 gap-4 h-[680px] overflow-y-scroll scroll_none">
            <div
              className="w-full flex flex-col items-start"
              data-aos="zoom-in-right"
            >
              <div className="rounded-[16px] sm:max-w-[364px] w-full border border-[#fcfcfc66] overflow-hidden hover:scale-[0.95] transition-all duration-500 ease-linear cursor-pointer">
                <img
                  src={RemoteAccess}
                  alt="RemoteAccess"
                  className="rounded-tr-[16px] rounded-tl-[16px]"
                />
                <div className="pt-5 ps-[26px] bg-[#fcfcfc1a]">
                  <h4 className="font-semibold text-[20px] leading-[150%] text-white pb-[30px]">
                    Remote Access and File Management
                  </h4>
                </div>
              </div>
            </div>
            <div
              className="w-full flex flex-col items-end"
              data-aos="zoom-in-left"
            >
              <div className="rounded-[16px] sm:max-w-[364px] w-full border border-[#fcfcfc66] overflow-hidden hover:scale-[0.95] transition-all duration-500 ease-linear cursor-pointer">
                <img
                  src={RealTime}
                  alt="RealTime"
                  className="rounded-tr-[16px] rounded-tl-[16px]"
                />
                <div className="pt-5 ps-[26px] bg-[#fcfcfc1a] ">
                  <h4 className="font-semibold text-[20px] leading-[150%] text-white pb-[30px] lg:max-w-[203px]">
                    Real-time Home Monitoring
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-start">
              <div className="rounded-[16px] sm:max-w-[364px] w-full border border-[#fcfcfc66] overflow-hidden hover:scale-[0.95] transition-all duration-500 ease-linear cursor-pointer">
                <img
                  src={Awareness}
                  alt="Awareness"
                  className="rounded-tr-[16px] rounded-tl-[16px]"
                />
                <div className="pt-5 ps-[26px] bg-[#fcfcfc1a] ">
                  <h4 className="font-semibold text-[20px] leading-[150%] text-white pb-[30px] lg:max-w-[271px]">
                    Intelligent Contextual Awareness
                  </h4>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col items-end">
              <div className="rounded-[16px] sm:max-w-[364px] w-full border border-[#fcfcfc66] overflow-hidden hover:scale-[0.95] transition-all duration-500 ease-linear cursor-pointer">
                <img
                  src={Autonomous}
                  alt="Autonomous"
                  className="rounded-tr-[16px] rounded-tl-[16px]"
                />
                <div className="pt-5 ps-[26px] bg-[#fcfcfc1a]">
                  <h4 className="font-semibold text-[20px] leading-[150%] text-white pb-[30px]">
                    Autonomous and Natural Language Communication
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Unique;
