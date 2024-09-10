import FrameComponent1 from "../components/FrameComponent1";
import HowToUseComponentVideo from "../components/HowToUseComponentVideo";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent3 from "../components/FrameComponent3";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";
import LoginPopup from "./LoginPopup/LoginPopup";
const HomePage1 = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  const openLoginPopup = () => setLoginPopupOpen(true);
  const closeLoginPopup = () => setLoginPopupOpen(false);

  return (
    <div className="w-full relative bg-gray-600 overflow-hidden flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[1.25rem] leading-[normal] tracking-[normal] text-center text-[2.188rem] text-white font-archivo-semiexpanded">
      <section className="w-[90rem] !m-[0] absolute top-[53.188rem] left-[0rem] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[40.25rem] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-luminosity"
          alt=""
          src="/rectangle-44@2x.png"
        />
        <div className="h-[5.563rem] w-[14.4rem] absolute !m-[0] top-[8.028rem] left-[2.363rem] [filter:blur(124.7px)] rounded-[50%] bg-darkorchid [transform:_rotate(-17.3deg)] [transform-origin:0_0] z-[1]" />
        <div className="h-[9.619rem] w-[16.625rem] absolute !m-[0] top-[0.561rem] right-[-1.592rem] [filter:blur(124.7px)] rounded-[50%] bg-blueviolet-300 [transform:_rotate(32.4deg)] [transform-origin:0_0] z-[1]" />
      </section>
      <section className="w-[90rem] !m-[0] absolute top-[78rem] left-[0rem] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[55.188rem] flex-1 relative max-w-full overflow-hidden object-cover mix-blend-luminosity"
          alt=""
          src="/rectangle-45@2x.png"
        />
        <div className="h-[19.056rem] w-[18.725rem] absolute !m-[0]  right-[-3.414rem] [filter:blur(124.7px)] rounded-[50%] bg-blueviolet-300 [transform:_rotate(32.4deg)] [transform-origin:0_0] z-[1]" />
      </section>
  
      <FrameComponent1 />
      <HowToUseComponentVideo />
   
      <FrameComponent3 />

      <Footer />
    </div>
  );
};

export default HomePage1;
