import React, { useState } from "react";
import {
  TbLayoutSidebarLeftCollapseFilled,
  TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";

const FrameComponent2 = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem]  box-border max-w-full text-left text-[1.125rem] text-mediumpurple font-poppins mq450:pb-[1.313rem] mq450:box-border mq1125:pb-[2rem] mq1125:box-border ">
      <div className="flex-1 flex flex-row items-start justify-start relative gap-[12.687rem] max-w-full z-[1] text-left text-[1.125rem] text-mediumpurple font-poppins mq450:gap-[1.563rem] mq800:gap-[3.188rem] mq1325:flex-wrap mq1325:gap-[6.313rem] mq1325:justify-center">
        <div className="h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(54.23deg,_#110c24,_#1e104f)]" />
        <div className="relative">
          {/* Sidebar */}
          {isSidebarVisible ? (
            <div className="bg-gray-200 border-r-[1.5px] border-solid border-midnightblue-300 ">
              {" "}
              <div className="flex justify-between px-5 pt-4">
                {" "}
                <button
                  className=" bg-transparent left-6 top-6 z-[100] bg-gray-800 text-white p-2 rounded"
                  onClick={toggleSidebar}
                >
                  <TbLayoutSidebarLeftCollapseFilled className="h-8 w-8 text-blueviolet-100" />
                </button>
                <button
                  className=" bg-transparent left-6 top-6 z-[100] bg-gray-800 text-blueviolet-100 p-2 rounded"
                  // onClick={toggleSidebar}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    stroke-width="0"
                    viewBox="0 0 24 24"
                    height="2.5em"
                    width="2.5em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586	c-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"></path>
                    <path d="M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5	h6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"></path>
                  </svg>
                </button>{" "}
              </div>
              <div className="w-[18rem] items-start justify-start pt-[1.25rem] pb-[11.187rem] pl-[2.625rem] pr-[0.812rem] box-border relative gap-[2.75rem] min-w-[18.063rem] max-w-full z-[1]  mq450:pl-[1.25rem] mq450:pt-[2.25rem] mq450:pb-[4.688rem] mq1125:pt-[3.438rem] mq1125:pb-[7.25rem]">
                <div className="self-stretch mb-5 flex flex-col items-start justify-start gap-[0.668rem]">
                  <div className="relative text-[1.125rem] capitalize inline-block min-w-[5.75rem] z-[1]">
                    Today
                  </div>
                  <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                    Canada Immigration Process
                  </div>
                  <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                    Lorem Ipsum Dummy Text
                  </div>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.668rem]">
                  <div className="relative text-[1.125rem] capitalize inline-block min-w-[5.75rem] z-[1]">
                    Yesterday
                  </div>
                  <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                    Canada Immigration Process
                  </div>
                  <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                    Lorem Ipsum Dummy Text
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between px-5 pt-4">
              {" "}
              <button
                className=" bg-transparent left-6 top-6 z-[100] bg-gray-800 text-blueviolet-100  p-2 rounded"
                onClick={toggleSidebar}
              >
                <TbLayoutSidebarLeftExpandFilled className="h-8 w-8" />
              </button>
              <button
                className=" bg-transparent left-6 top-6 z-[100] bg-gray-800 text-blueviolet-100 p-2 rounded"
                // onClick={toggleSidebar}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="2.5em"
                  width="2.5em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7,17.013l4.413-0.015l9.632-9.54c0.378-0.378,0.586-0.88,0.586-1.414s-0.208-1.036-0.586-1.414l-1.586-1.586	c-0.756-0.756-2.075-0.752-2.825-0.003L7,12.583V17.013z M18.045,4.458l1.589,1.583l-1.597,1.582l-1.586-1.585L18.045,4.458z M9,13.417l6.03-5.973l1.586,1.586l-6.029,5.971L9,15.006V13.417z"></path>
                  <path d="M5,21h14c1.103,0,2-0.897,2-2v-8.668l-2,2V19H8.158c-0.026,0-0.053,0.01-0.079,0.01c-0.033,0-0.066-0.009-0.1-0.01H5V5	h6.847l2-2H5C3.897,3,3,3.897,3,5v14C3,20.103,3.897,21,5,21z"></path>
                </svg>
              </button>{" "}
            </div>
          )}
        </div>

        <div className="w-full h-[600px] flex flex-col items-start justify-start pt-[1.812rem] px-[0rem] pb-[0rem] box-border min-w-[52.813rem] max-w-full text-center text-[1rem] text-white font-archivo-semiexpanded mq1125:min-w-full mq1325:flex-1">
          <div className="self-stretch flex flex-col items-end justify-start gap-[12rem] max-w-full mq450:gap-[3.438rem] mq1125:gap-[6.813rem]">
            <div className="w-[8.625rem] right-12 flex flex-row items-start justify-start py-[0rem]  pr-[0rem] box-border relative">
              <div className="h-[2.813rem] w-[11rem] absolute !m-[0] top-[calc(50%_-_22.5px)] left-[calc(50%_-_88px)] rounded-9xl bg-blueviolet-100 z-[1]" />
              <div className="flex-1 relative capitalize font-semibold z-[2]">
                upgrade Plan
              </div>
            </div>
            <div className="w-full flex flex-col  justify-center">
              <div className="self-stretch flex flex-col items-center justify-center py-[0rem] px-[3.875rem] pb-[3.937rem] box-border max-w-full text-[1.875rem] text-yellow mq800:pl-[1.938rem] mq800:pr-[1.938rem] mq800:box-border">
                <div className="w-full flex flex-col items-center justify-center gap-[0.5rem] max-w-full">
                  <div className="self-stretch flex flex-row items-center justify-center py-[0rem] pl-[1.25rem] pr-[1.375rem]">
                    <h2 className="m-0 w-[22rem] text-inherit leading-[130%] uppercase font-[inherit] text-center z-[1] mq450:text-[1.125rem] mq450:leading-[1.438rem] mq800:text-[1.5rem] mq800:leading-[1.938rem]">
                      <p className="m-0 font-semibold">User name,</p>
                      <p className="m-0 text-white">Welcome To CI GPT</p>
                    </h2>
                  </div>
                  <div className="w-full text-[1.125rem] capitalize font-light font-poppins text-white text-center z-[1] max-w-[32rem]">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s.
                  </div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-center max-w-full text-left text-[1.25rem] font-poppins">
                <div className="w-full flex flex-row items-center justify-between py-[0rem] px-[1.25rem] box-border gap-[1.25rem] max-w-[48.875rem] mq450:flex-wrap">
                  <div className="w-[13.5rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
                    <div className="self-stretch flex flex-row items-start justify-start relative">
                      <div className="h-[4.375rem] w-[52.938rem] absolute top-[calc(50%_-_35px)] right-[-35.25rem] rounded-25xl bg-gray-200 border-midnightblue-200 border-[1.5px] z-[1]" />
                      <div className="flex-1 relative leading-[140%] capitalize z-[2] mq450:text-[1rem] mq450:leading-[1.375rem]">
                        Write prompt here.
                      </div>
                    </div>
                  </div>
                  <div className="h-[2.75rem] w-[2.75rem] rounded-[50%] bg-yellow z-[2]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
