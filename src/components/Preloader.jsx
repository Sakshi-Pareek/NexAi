import React from "react";

const Preloader = () => {
  return (
    <>
      <div className="flex space-x-2 justify-center items-center bg-black h-full w-full fixed top-0 left-0">
        <div className="flex flex-col gap-1">
        <h1 className="ff_neuro font-bold text-[32px] sm:text-[40px] text-center text-[#0066FF]">
          Nex<span className="text-white">AI</span>
        </h1>
        <div className="cs-loader-inner">
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
          <label>●</label>
        </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;
