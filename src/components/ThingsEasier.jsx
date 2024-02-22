import React from "react";
import Slider from "react-slick";

const ThingsEasier = () => {
  const settings1 = {
    dots: false,
    infinite: true,
    slidesToShow: 2.99,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    cssEase: "linear",
    pauseOnHover: false,
    autoplaySpeed: 1,
    speed: 6000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3.01,
        },
      },
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1.67,
        },
      },
    ],
  };
  const settings2 = {
    dots: false,
    infinite: true,
    slidesToShow: 3.01,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 1,
    speed: 6000,
    rtl: true,
    cssEase: "linear",
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 641,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1.67,
        },
      },
    ],
  };

  return (
    <>
      <div
        className="relative bg-[url('assets/images/webp/ThingsEasierBg.webp')] lg:bg-full bg-cover bg-center bg-no-repeat xl:h-[955px] lg:h-[710px] h-[655px]"
        id="NexChat"
      >
        <div className="absolute w-[274px] h-[182px] opacity-[60%] z-[1] rounded-[100px] bg-[#0066FF] blur-[150px] left-[-10%] animate-pulse top-[-40%]"></div>
        <div className="absolute left-0 -bottom-1 right-0 w-full h-[102px] bg-gradient-to-b from-[#08090e00] to-[#08090E]"></div>
        <div className="container max-w-[1164px] mx-auto lg:px-3 px-5 desktop:pt-[60px]">
          <h4
            className="ff_play font-normal xl:text-[48px] md:text-[42px] text-[38px] sm:leading-[125.5%] leading-[120%] text-[#FCFCFC] mb-4 text-center"
            data-aos="zoom-in"
          >
            Things going easier with NexAi
          </h4>
          <p
            className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal max-w-[823px] text-center mx-auto"
            data-aos="zoom-in"
          >
            Sed sit sit sit at laoreet tortor dis euismod in. Viverra arcu
            semper mauris lorem dignissim vulputate orci. Habitant imperdiet at
            molestie ipsumpretium in pharetra tincidunt.
          </p>
        </div>
        <div
          className="xl:mt-[298px] sm:mt-[150px] mt-28 max-w-[1440px] mx-auto"
          data-aos="zoom-in"
        >
          <Slider {...settings1} className="max-w-[1168px] mr-auto">
            <div className="xl:pe-28 xl:ps-0 lg:px-10 sm:px-5 px-2">
              <div className="cursor-pointer border rounded-[16px] border-[#FCFCFC] drop-shadow-[#02cdcf29] lg:h-[180px] md:h-[150px] sm:h-[135px] h-[110px] flex flex-col items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29] backdrop-blur-[85px] bg-gradient-to-b from-[#ffffff00] to-[#ffffff17]">
                <p className="text-white lg:text-[28px] md:text-[24px] text-[20px] text-center font-bold leading-[162%] max-w-[254px] mx-auto px-2">
                  NexAi, Turn on light
                </p>
              </div>
            </div>
            <div className="xl:pe-28 xl:ps-0 lg:px-10 sm:px-5 px-2">
              <div className="cursor-pointer border rounded-[16px] border-[#FCFCFC] drop-shadow-[#02cdcf29] lg:h-[180px] md:h-[150px] sm:h-[135px] h-[110px] flex flex-col items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29] backdrop-blur-[85px] bg-gradient-to-b from-[#ffffff00] to-[#ffffff17]">
                <p className="text-white lg:text-[28px] md:text-[24px] text-[20px] text-center font-bold leading-[162%] max-w-[254px] mx-auto px-2">
                  NexAi, Turn on light
                </p>
              </div>
            </div>
            <div className="xl:pe-28 xl:ps-0 lg:px-10 sm:px-5 px-2">
              {" "}
              <div className="cursor-pointer border rounded-[16px] border-[#FCFCFC] drop-shadow-[#02cdcf29] lg:h-[180px] md:h-[150px] sm:h-[135px] h-[110px] flex flex-col items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29] backdrop-blur-[85px] bg-gradient-to-b from-[#ffffff00] to-[#ffffff17]">
                <p className="text-white lg:text-[28px] md:text-[24px] text-[20px] text-center font-bold leading-[162%] max-w-[254px] mx-auto px-2">
                  NexAi, set alarm of 5:00 am
                </p>
              </div>
            </div>
            <div className="xl:pe-28 xl:ps-0 lg:px-10 sm:px-5 px-2">
              <div className="cursor-pointer border rounded-[16px] border-[#FCFCFC] drop-shadow-[#02cdcf29] lg:h-[180px] md:h-[150px] sm:h-[135px] h-[110px] flex flex-col items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29] backdrop-blur-[85px] bg-gradient-to-b from-[#ffffff00] to-[#ffffff17]">
                <p className="text-white lg:text-[28px] md:text-[24px] text-[20px] text-center font-bold leading-[162%] max-w-[254px] mx-auto px-2">
                  NexAi, Turn on light
                </p>
              </div>
            </div>
          </Slider>
          <Slider
            {...settings2}
            className="max-w-[1168px] ml-auto md:mt-10 mt-5"
          >
            <div className="xl:ps-28 xl:pe-0 lg:px-10 sm:px-5 px-2">
              <div className="cursor-pointer border rounded-[16px] border-[#FCFCFC] drop-shadow-[#02cdcf29] lg:h-[180px] md:h-[150px] sm:h-[135px] h-[110px] flex flex-col items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29] backdrop-blur-[85px] bg-gradient-to-b from-[#ffffff00] to-[#ffffff17]">
                <p className="text-white lg:text-[28px] md:text-[24px] text-[20px] text-center font-bold leading-[162%] max-w-[254px] mx-auto px-2">
                  NexAi, measure this table
                </p>
              </div>
            </div>
            <div className="xl:ps-28 xl:pe-0 lg:px-10 sm:px-5 px-2">
              <div className="cursor-pointer border rounded-[16px] border-[#FCFCFC] drop-shadow-[#02cdcf29] lg:h-[180px] md:h-[150px] sm:h-[135px] h-[110px] flex flex-col items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29] backdrop-blur-[85px] bg-gradient-to-b from-[#ffffff00] to-[#ffffff17]">
                <p className="text-white lg:text-[28px] md:text-[24px] text-[20px] text-center font-bold leading-[162%] max-w-[254px] mx-auto px-2">
                  NexAi, Turn on light
                </p>
              </div>
            </div>
            <div className="xl:ps-28 xl:pe-0 lg:px-10 sm:px-5 px-2">
              {" "}
              <div className="cursor-pointer border rounded-[16px] border-[#FCFCFC] drop-shadow-[#02cdcf29] lg:h-[180px] md:h-[150px] sm:h-[135px] h-[110px] flex flex-col items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29] backdrop-blur-[85px] bg-gradient-to-b from-[#ffffff00] to-[#ffffff17]">
                <p className="text-white lg:text-[28px] md:text-[24px] text-[20px] text-center font-bold leading-[162%] max-w-[254px] mx-auto px-2">
                  NexAi, Turn on music
                </p>
              </div>
            </div>
            <div className="xl:ps-28 xl:pe-0 lg:px-10 sm:px-5 px-2">
              <div className=" cursor-pointer border rounded-[16px] border-[#FCFCFC] drop-shadow-[#02cdcf29] lg:h-[180px] md:h-[150px] sm:h-[135px] h-[110px] flex flex-col items-center justify-center shadow-[0px_4px_20px_0px_#02CDCF29] backdrop-blur-[85px] bg-gradient-to-b from-[#ffffff00] to-[#ffffff17]">
                <p className="text-white lg:text-[28px] md:text-[24px] text-[20px] text-center font-bold leading-[162%] max-w-[254px] mx-auto px-2">
                  NexAi, Turn on light
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default ThingsEasier;
