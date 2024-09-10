import React, { useState } from "react";
import {
    TbLayoutSidebarLeftCollapseFilled,
    TbLayoutSidebarLeftExpandFilled,
} from "react-icons/tb";

const gpt = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };
    return (
        <section className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem]  box-border max-w-full text-left text-[1.125rem] text-mediumpurple font-poppins mq450:pb-[1.313rem] mq450:box-border mq1125:pb-[2rem] mq1125:box-border ">
            <div className="flex-1 flex flex-row items-start justify-start relative gap-[12.687rem] max-w-full z-[1] text-left text-[1.125rem] text-mediumpurple font-poppins mq450:gap-[1.563rem] mq800:gap-[3.188rem] mq1325:flex-wrap mq1325:gap-[6.313rem] mq1325:justify-center">
                <div className=" ">
                    {/* Toggle Button */}
                    {/* Toggle Button */}
                    <button
                        className=" top-4 bg-transparent left-4 z-[100] bg-gray-800 text-white p-2 rounded"
                        onClick={toggleSidebar}
                    >
                        {/* Change icon based on sidebar visibility */}
                        {isSidebarVisible ? (
                            <div></div>
                        ) : (
                            <TbLayoutSidebarLeftExpandFilled className="h-8 w-8" />

                        )}

                    </button>

                    {/* Sidebar */}
                    {isSidebarVisible && (
                        <div className="w-[18rem] items-start justify-start pt-[5.25rem] pb-[11.187rem] pl-[2.625rem] pr-[0.812rem] box-border relative gap-[0.75rem] min-w-[18.063rem] max-w-full z-[1] bg-gray-200 border-r-[1.5px] border-solid border-midnightblue-300 mq450:pl-[1.25rem] mq450:pt-[2.25rem] mq450:pb-[4.688rem] mq1125:pt-[3.438rem] mq1125:pb-[7.25rem]">
                            <button
                                className=" top-4 bg-transparent left-4 z-[100] bg-gray-800 text-white p-2 rounded"
                                onClick={toggleSidebar}
                            >

                                <TbLayoutSidebarLeftCollapseFilled className="h-8 w-8" />



                            </button>
                            <div className="w-[4.25rem] relative capitalize inline-block z-[1]">
                                Todayyy
                            </div>
                            <div className="self-stretch h-[31.625rem] relative text-[1rem]">
                                <div className="absolute top-[0rem] left-[0rem] w-full flex flex-col items-start justify-start gap-[1.562rem] h-full">
                                    <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem]">
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
                                    {/* Add more sidebar content as needed */}
                                </div>
                            </div>
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

export default gpt;

