import './App.css';
import { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HeaderSec from './components/HeaderSec';
import HomeAssitant from './components/HomeAssitant';
import ThingsEasier from './components/ThingsEasier';
import Unique from './components/Unique';
import BlockChain from './components/BlockChain';
import Utility from './components/Utility';
import WhiteList from './components/WhiteList';
import GetInTouch from './components/GetInTouch';
import Footer from './components/Footer';
import { BackToTop } from './components/Icon'
import Aos from 'aos';
import "aos/dist/aos.css";
import Preloader from './components/Preloader';

function App() {
  // ========================back-to-top=======================
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  // =======================aos============================
  useEffect(() => {
    Aos.init(
      {
        once: true,
        duration: 1000,
        easing: 'ease-in-out',
      }
    );
    Aos.refresh()
  }, []);
  // =======================preloader======================
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 4000);
  }, []);
  return (
    <>
      {screenLoading ? (
        <Preloader/>
      ) : (
        <>
          <div className='overflow-hidden'>
            <HeaderSec />
            <HomeAssitant />
            <Unique />
            <ThingsEasier />
            <BlockChain />
            <Utility />
            <WhiteList />
            <GetInTouch />
            <Footer />
            <div>
              <button className={`${backToTop ? "fixed sm:right-[1%] right-2 bottom-[2%] z-30 !cursor-pointer updown_animation shadow-[0px_5px_10px_0px_#ffffff] w-[40px] h-[40px] border-[#ffffff] border-2 flex justify-center items-center bg-[#0066FF] rounded-[50%]" : "d-none"}`} onClick={() => top()}><BackToTop /></button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
