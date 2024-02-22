import React from "react";
import HomeAssitanthead from "../assets/images/png/HomeAssitantHead.png";
import HomeAssitanAi from "../assets/images/gif/HomeAssitantGif.gif";

const HomeAssitant = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute w-[224px] h-[168px] opacity-[50%] z-[1] rounded-[50%] bg-[#0066FF] blur-[90px] left-[-9%] animate-pulse bottom-[38%] "></div>
        <div
          className="container lg:max-w-[1124px] lg:px-3 px-5 mx-auto sm:pt-[75px] desktop:pb-[130px] sm:pb-[100px] py-[70px] bg-[#08090E]"
          id="about"
        >
          <div className="flex flex-row flex-wrap-reverse items-center lg:justify-between justify-center lg:gap-0 md:gap-12 gap-10">
            <div className="lg:w-[55%] w-full max:lg-flex justify-center items-center max-lg:flex-col max-lg:text-center">
              <h2 className="ff_play font-normal xl:text-[48px] md:text-[42px] text-[38px] sm:leading-[125.5%] leading-[100%] text-[#FCFCFC] xl:mb-4 mb-3" data-aos="zoom-in-right">
                Ai-Powered Home Assistant
              </h2>
              <p className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal mb-1.5" data-aos="zoom-in-right">
                Nexai is an advanced AI-powered home assistant that brings the
                future to your fingertips. With its ability to engage in
                natural, fluent conversations in over 15 languages,
              </p>
              <p className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal mb-1.5" data-aos="zoom-in-right">
                Nexai offers an incredibly futuristic experience. It can take
                the initiative to ask about your day, schedule meetings, provide
                timely reminders
              </p>
              <p className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal xl:mb-10 mb-5" data-aos="zoom-in-right">
                assist with cooking by suggesting ingredients, track your
                fitness and nutrition goals, and even handle bill payments.,
              </p>
              <div data-aos="zoom-in-right">
              <a
                href="#"
                className="text-[#FCFCFC] rounded-[12px] px-[30.6px] sm:py-[16px] py-3 border-transparent bg-[#0066FF] font-medium text-[18px] leading-[150%] hover:shadow-[0_3px_20px_rgba(255,_255,_255,_1)] transition-all duration-500 ease-linear hover:text-[#0066FF] hover:bg-white border-2 hover:border-[#0066FF] inline-block "
              >
                Learn more
              </a>
              </div>
            </div>
            <div className="xl:w-[45%] lg:w-[40%] w-full relative flex xl:justify-end sm:justify-center justify-start" data-aos="zoom-in">
              <img
                src={HomeAssitanthead}
                alt="HomeAssitanthead"
                className="max-w-[443px] w-full relative z-[1]"
              />
              <img
                src={HomeAssitanAi}
                alt="HomeAssitanAi"
                className="xl:max-w-[288px] lg:max-w-[265px] md:max-w-[275px] sm:max-w-[300px] max-w-[217px] w-full mix-blend-color-dodge absolute xl:right-[-12%] lg:right-[-4%] md:right-[13%] sm:right-[5%] right-[-4%] z-0 top-1/2 sm:translate-y-[-48%] translate-y-[-44%] "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeAssitant;
