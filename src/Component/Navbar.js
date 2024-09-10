import React, { useState } from "react";
import LoginPopup from "../pages/LoginPopup"; // Ensure the correct path to LoginPopup component
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);

  const openLoginPopup = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>
      <header className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[2.625rem] box-border max-w-full text-center text-[1.875rem] text-white font-archivo-semiexpanded mq800:pl-[1.313rem] mq800:pr-[1.313rem] mq800:box-border">
        <div className="flex-1 flex flex-row items-start justify-between gap-[1.25rem] max-w-full">
          <Link
            to="/"
            className="w-[9.313rem] no-underline flex flex-col items-start justify-start pt-[0.187rem] pb-[0rem] pl-[0rem] pr-[2.125rem] box-border"
          >
            <a className="[text-decoration:none] self-stretch relative uppercase font-bold inline-block min-w-[7.188rem] whitespace-nowrap text-[inherit]">
              <span>{`CI `}</span>
              <span className="text-yellow">GPT</span>
            </a>
          </Link>
          <nav className="m-0 w-[27.375rem] flex text-white flex-col items-start justify-start pt-[0.437rem] px-[0rem] pb-[0rem] box-border max-w-full mq800:hidden">
            <nav className="m-0 self-stretch flex flex-row items-start justify-between gap-[1.25rem] text-center text-[1.125rem] text-white font-poppins">
              <Link
                to="/"
                className="w-[4.313rem] no-underline relative leading-[100%] capitalize font-medium text-yellow inline-block shrink-0"
              >
                Home
              </Link>
              <Link
                to="/aboutus"
                className="w-[5.875rem] text-white  no-underline   relative leading-[100%] capitalize inline-block shrink-0 whitespace-nowrap"
              >
                About Us
              </Link>
              <Link
                to="/blog"
                className="w-[2.813rem] text-white  no-underline  relative leading-[100%] capitalize inline-block shrink-0"
              >
                Blog
              </Link>
            </nav>
          </nav>
          <button
            onClick={openLoginPopup}
            className="w-[9.313rem] bg-transparent no-underline text-white cursor-pointer rounded-13xl border-yellow border-[1px] border-solid box-border flex flex-row items-start justify-start py-[0.437rem] px-[1.625rem] whitespace-nowrap text-[0.938rem] font-poppins"
          >
            <div className="flex-1 relative leading-[140%] capitalize z-[1]">
              Login Now
            </div>
          </button>
          {showPopup && (
            <div className="fixed inset-0 mt-72 flex items-center justify-center z-[9999] bg-black bg-opacity-50">
              <LoginPopup onClose={handleClose} />
            </div>
          )}{" "}
        </div>
      </header>
    </>
  );
};

export default Navbar;
