import React from "react";
import SecurityBlockChain from "../assets/images/png/SecurityBlockchain.png";
import DataManagment from "../assets/images/png/DataManagment.png";
import Personalization from "../assets/images/png/Personalization.png";
import Transactions from "../assets/images/png/Transactions.png";
import BorderLine from "../assets/images/png/BorderLine.png";

const BlockChain = () => {
  return (
    <>
      <div className="pt-[23px] relative bg-[#08090E]" id="Privacy">
      <div className="absolute w-[274px] h-[274px] opacity-[60%] z-[1] rounded-[100px] bg-[#0066FF] blur-[150px] left-[-10%] animate-pulse top-[20%]"></div>
      <div className="absolute w-[274px] h-[182px] opacity-[60%] z-[1] rounded-[100px] bg-[#0066FF] blur-[150px] right-[-10%] animate-pulse bottom-[20%]"></div>
        <div className="container lg:max-w-[1168px] lg:px-3 px-5 mx-auto ">
          <h3 className="ff_play font-normal xl:text-[48px] md:text-[42px] text-[38px] sm:leading-[125.5%] leading-[120%] text-[#FCFCFC] mb-4" data-aos="zoom-in-right">
            Blockchain & AI technology
          </h3>
          <p className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal max-w-[997px] desktop:mb-10 mb-5" data-aos="zoom-in-right">
            Nexai is an advanced home assistant that will revolutionize the way
            we interact with our smart devices at home. Powered by sophisticated
            artificial intelligence, it leverages blockchain technology to offer
            a secure and efficient user experience.
          </p>
          <p className="ff_play font-normal text-[20px] leading-[160%] text-white max-w-[684px]" data-aos="zoom-in-right">
            By building the software on blockchain, Nexai provides the following
            advantages
          </p>
          <div className="sm:h-[646px] h-[620px] lg:my-10 mt-10 md:mb-[100px] mb-[80px] overflow-y-scroll scroll_none">
            <div className="flex flex-row md:gap-0 gap-5 flex-wrap lg:h-[646px] py-10 items-center justify-between lg:px-7 px-3 relative mb-8" data-aos="zoom-in">
              <img
                src={BorderLine}
                alt="BorderLine"
                className="absolute left-0 top-0 h-full w-[2px]"
              />
              <div className="lg:w-[44%] md:w-[60%] w-full">
                <h3 className="sm:w-[58px] sm:h-[58px] w-[45px] h-[45px] sm:text-[32px] text-[26px] rounded-[50%] bg-[#040404] shadow-[inset_2px_3px_12px_rgba(0,102,255,0.61)] flex justify-center items-center text-[#FFFFFF] font-semibold">
                  1
                </h3>
                <h4 className="lg:mt-5 ff_play font-bold lg:text-[40px] md:text-[34px] sm:text-[30px] text-[24px] lg:leading-[160%] leading-[120%] text-white lg:mb-4 my-2">
                  Security and Privacy
                </h4>
                <p className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal">
                  Nexai is an advanced home assistant that will revolutionize
                  the way we interact with our smart devices at home. Powered by
                  sophisticated artificial intelligence, it leverages blockchain
                  technology to offer a secure and efficient user experience.
                </p>
              </div>
              <div className="md:w-[37%] w-full max-md:flex justify-center">
                <img
                  src={SecurityBlockChain}
                  alt="SecurityBlockChain"
                  className="max-w-[414px] w-full"
                />
              </div>
            </div>
            <div className="flex flex-row md:gap-0 gap-5 flex-wrap lg:h-[646px] py-10 items-center justify-between lg:px-7 px-3 relative bg-[#0066FF] mb-8">
              <img
                src={BorderLine}
                alt="BorderLine"
                className="absolute left-0 top-0 h-full w-[2px]"
              />
              <div className="lg:w-[44%] md:w-[60%] w-full">
                <h3 className="sm:w-[58px] sm:h-[58px] w-[45px] h-[45px] sm:text-[32px] text-[26px] rounded-[50%] bg-white shadow-[inset_2px_3px_12px_rgba(0,102,255,0.61)] flex justify-center items-center text-[#0b0a0a] font-semibold">
                  2
                </h3>
                <h4 className="lg:mt-5 ff_play font-bold lg:text-[40px] md:text-[34px] sm:text-[30px] text-[24px] lg:leading-[160%] leading-[120%] text-white lg:mb-4 my-2">
                  Transparent and Reliable Data Management
                </h4>
                <p className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal">
                  Nexai enables transparent and reliable data management through
                  blockchain. Users can trust that their data is securely stored
                  and that they have full control over their digital identities
                  and personal information.
                </p>
              </div>
              <div className="md:w-[37%] w-full max-md:flex justify-center">
                <img
                  src={DataManagment}
                  alt="DataManagment"
                  className="max-w-[414px] w-full"
                />
              </div>
            </div>
            <div className="flex flex-row md:gap-0 gap-5 flex-wrap lg:h-[646px] py-10 items-center justify-between lg:px-7 px-3 relative mb-8">
              <img
                src={BorderLine}
                alt="BorderLine"
                className="absolute left-0 top-0 h-full w-[2px]"
              />
              <div className="lg:w-[44%] md:w-[60%] w-full">
                <h3 className="sm:w-[58px] sm:h-[58px] w-[45px] h-[45px] sm:text-[32px] text-[26px] rounded-[50%] bg-[#040404] shadow-[inset_2px_3px_12px_rgba(0,102,255,0.61)] flex justify-center items-center text-[#FFFFFF] font-semibold">
                  3
                </h3>
                <h4 className="lg:mt-5 ff_play font-bold lg:text-[40px] md:text-[34px] sm:text-[30px] text-[24px] lg:leading-[160%] leading-[120%] text-white lg:mb-4 my-2">
                  Self-learning and Personalization
                </h4>
                <p className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal">
                  Nexai uses blockchain technology to create a self-learning
                  platform. By analyzing user data, Nexai learns users'
                  preferences and habits over time, resulting in a more
                  personalized and tailored experience for each user.
                </p>
              </div>
              <div className="md:w-[37%] w-full max-md:flex justify-center">
                <img
                  src={Personalization}
                  alt="Personalization"
                  className="max-w-[414px] w-full"
                />
              </div>
            </div>
            <div className="flex flex-row md:gap-0 gap-5 flex-wrap lg:h-[646px] py-10 items-center justify-between lg:px-7 px-3 relative bg-[#0066FF]">
              <img
                src={BorderLine}
                alt="BorderLine"
                className="absolute left-0 top-0 h-full w-[2px]"
              />
              <div className="lg:w-[50%] md:w-[60%] w-full">
                <h3 className="sm:w-[58px] sm:h-[58px] w-[45px] h-[45px] sm:text-[32px] text-[26px] rounded-[50%] bg-white shadow-[inset_2px_3px_12px_rgba(0,102,255,0.61)] flex justify-center items-center text-[#0b0a0a] font-semibold">
                  4
                </h3>
                <h4 className="lg:mt-5 ff_play font-bold lg:text-[40px] md:text-[34px] sm:text-[30px] text-[24px] lg:leading-[160%] leading-[120%] text-white lg:mb-4 my-2">
                  Automated and Transparent Transactions
                </h4>
                <p className="text-[#B5B5B7] text-[16px] leading-[162.9%] font-normal">
                  With the help of smart contracts on the blockchain, Nexai can
                  automate and ensure the execution of agreements and
                  transactions between users and devices. This reduces the need
                  for third-party involvement and provides increased
                  transparency and efficiency in interactions.
                </p>
              </div>
              <div className="md:w-[37%] w-full max-md:flex justify-center">
                <img
                  src={Transactions}
                  alt="Transactions"
                  className="max-w-[414px] w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlockChain;
