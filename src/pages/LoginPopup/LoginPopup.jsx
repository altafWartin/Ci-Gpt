import React from 'react'
import PasswordInput from "../../components/PasswordInput";
import Component from "../../components/Component";
import Testimonials from "../../components/Testimonials";
import Footer1 from "../../components/Footer1";
const LoginPopup = ({ onClose }) => {
    return (
        <div className="w-full h-[70rem] relative bg-gray-600 overflow-hidden flex flex-col items-start justify-start pt-[1.687rem] px-[0rem] pb-[0rem] box-border gap-[4.625rem] leading-[normal] tracking-[normal] text-center text-[1.25rem] text-white font-archivo-semiexpanded mq450:gap-[1.125rem] mq1125:h-auto mq800:gap-[2.313rem]">
            <div className="w-[18.725rem] h-[17.056rem] absolute !m-[0] right-[-3.414rem] bottom-[-114.118rem] [filter:blur(124.7px)] rounded-[50%] bg-blueviolet-300 [transform:_rotate(32.4deg)] [transform-origin:0_0]" />
            <div className="w-[15.456rem] h-[18.319rem] absolute !m-[0] bottom-[-104.942rem] left-[5.879rem] [filter:blur(124.7px)] rounded-[50%] bg-blueviolet-300 [transform:_rotate(32.4deg)] [transform-origin:0_0]" />
            <div className="w-[90rem] !m-[0] absolute top-[5.375rem] left-[0rem] flex flex-row items-start justify-start max-w-full">
                <img
                    className="h-[47.813rem] flex-1 relative max-w-full overflow-hidden object-cover"
                    alt=""
                    src="/background-rect@2x.png"
                />
                <img
                    className="h-[1.619rem] w-[1.619rem] absolute !m-[0] bottom-[17.756rem] left-[36.625rem] object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                />
                <div className="h-[33.188rem] w-[41.819rem] !m-[0] absolute right-[1.369rem] bottom-[2.5rem] flex flex-row items-start justify-start pt-[0.112rem] px-[0.375rem] pb-[0.593rem] box-border max-w-full z-[7]">
                    <img
                        className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] max-w-full overflow-hidden max-h-full object-cover"
                        alt=""
                        src="/shadow@2x.png"
                    />
                    <div className="self-stretch w-[34.069rem] flex flex-row items-start justify-end pt-[1.031rem] px-[1rem] pb-[1rem] box-border bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
                        <img
                            className="h-[32.481rem] w-[34.069rem] relative object-cover hidden max-w-full"
                            alt=""
                            src="/main@2x.png"
                        />
                        <img
                            className="w-[20.413rem] relative max-h-full object-cover mix-blend-normal max-w-full z-[2]"
                            loading="lazy"
                            alt=""
                            src="/flying-mackbook-pro-mockup-label@2x.png"
                        />
                    </div>
                </div>
            </div>
            <b className="w-[59.313rem] h-[4.063rem] relative text-[3.75rem] uppercase hidden [text-shadow:0px_9px_46.1px_#130d29] max-w-full z-[3] mq450:text-[2.25rem] mq800:text-[3rem]">
                Canada Immigration GPT
            </b>
            <b className="w-[17.5rem] relative text-[2.188rem] uppercase hidden z-[4] mq450:text-[1.313rem] mq800:text-[1.75rem]">
                How to Use?
            </b>
            <div className="w-[55.75rem] relative text-[1.375rem] leading-[140%] capitalize font-poppins hidden max-w-full z-[5] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
            </div>
            <img
                className="w-[19.188rem] h-[0.25rem] relative hidden z-[6]"
                alt=""
                src="/vector-3.svg"
            />
            <img
                className="w-[13.688rem] h-[3.563rem] relative hidden z-[7]"
                alt=""
                src="/subtract.svg"
            />
            <div className="w-[7.188rem] relative capitalize font-medium text-gray-500 text-left hidden z-[8] mq450:text-[1rem]">
                Try CI GPT
            </div>
            <div className="w-[9.25rem] hidden flex-col items-center justify-center gap-[0.562rem] z-[9]">
                <div className="self-stretch relative capitalize font-medium mq450:text-[1rem]">
                    How to Use ?
                </div>
                <img
                    className="self-stretch h-[0.25rem] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-1.svg"
                />
            </div>
            <div className="w-[9.25rem] hidden flex-col items-center justify-center gap-[0.562rem] z-[10]">
                <div className="self-stretch relative capitalize font-medium mq450:text-[1rem]">
                    Testimonial
                </div>
                <img
                    className="self-stretch h-[0.25rem] relative max-w-full overflow-hidden shrink-0"
                    alt=""
                    src="/vector-1.svg"
                />
            </div>
            <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[2.625rem] pb-[25.937rem] box-border max-w-full shrink-0 text-[1.875rem] mq1350:pb-[16.875rem] mq1350:box-border mq800:pl-[1.313rem] mq800:pr-[1.313rem] mq800:pb-[10.938rem] mq800:box-border">
                <div className="flex-1 flex flex-col items-end justify-start gap-[4.187rem] shrink-0 max-w-full mq450:gap-[1.063rem] mq800:gap-[2.063rem]">
                
                    <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[3.25rem] pr-[3.187rem] box-border max-w-full mq1350:pl-[1.625rem] mq1350:pr-[1.563rem] mq1350:box-border">
                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.187rem] max-w-full">
                            <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                                <div className="h-[5.563rem] w-[14.4rem] absolute !m-[0] bottom-[-5.09rem] left-[-3.512rem] [filter:blur(124.7px)] rounded-[50%] bg-darkorchid [transform:_rotate(-17.3deg)] [transform-origin:0_0]" />
                                <div className="h-[9.619rem] w-[16.625rem] absolute !m-[0] right-[-7.405rem] bottom-[-1.68rem] [filter:blur(124.7px)] rounded-[50%] bg-blueviolet-300 [transform:_rotate(32.4deg)] [transform-origin:0_0]" />
                                <div className="flex-1 rounded-lg bg-gray-100 flex flex-row flex-wrap items-start justify-start pt-[0rem] px-[0rem] pb-[0.062rem] box-border max-w-full [row-gap:20px] z-[3]">
                                    <div className="self-stretch w-[78.313rem] relative rounded-lg bg-gray-100 hidden max-w-full" />
                                    <div className="flex-1 flex flex-col items-start justify-start pt-[2.25rem] px-[0rem] pb-[0rem] box-border min-w-[25.625rem] max-w-full mq800:min-w-full">
                                        <div className="self-stretch flex flex-col items-start justify-start gap-[3.312rem] max-w-full mq800:gap-[1.625rem]">
                                            <div className="flex flex-row items-start justify-start py-[0rem] px-[4.687rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                                                <h2 className="m-0 w-[7.188rem] relative text-inherit uppercase font-bold font-[inherit] inline-block min-w-[7.188rem] z-[4] mq450:text-[1.125rem] mq800:text-[1.5rem]">
                                                    <span>{`CI `}</span>
                                                    <span className="text-yellow">GPT</span>
                                                </h2>
                                            </div>
                                            <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.187rem] pl-[3rem] pr-[2.937rem] box-border max-w-full mq800:pl-[1.5rem] mq800:pr-[1.438rem] mq800:box-border">
                                                <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[2.812rem] max-w-full mq800:gap-[1.375rem]">
                                                    <div className="w-[24.625rem] flex flex-row items-start justify-start py-[0rem] px-[1.687rem] box-border max-w-full">
                                                        <div className="flex-1 flex flex-col items-start justify-start gap-[0.375rem] max-w-full">
                                                            <h1 className="m-0 w-[6.625rem] relative text-[2rem] leading-[2.813rem] capitalize font-medium font-archivo-semiexpanded text-white text-left inline-block z-[4] mq450:text-[1.188rem] mq450:leading-[1.688rem] mq800:text-[1.625rem] mq800:leading-[2.25rem]">{`Login `}</h1>
                                                            <div className="self-stretch relative text-[1rem] leading-[140%] capitalize font-poppins text-white text-left z-[4]">
                                                                Lorem Ipsum is simply dummy text of the printing
                                                                and typesetting industry.
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] box-border gap-[1.25rem] max-w-full">
                                                        <PasswordInput
                                                            emailAddress="Email Address"
                                                            enterEmailAddress="Enter Email Address"
                                                        />
                                                        <PasswordInput
                                                            propWidth="18.438rem"
                                                            emailAddress="Password"
                                                            propDisplay="unset"
                                                            enterEmailAddress="Enter password"
                                                            propWidth1="13.625rem"
                                                            propDisplay1="inline-block"
                                                        />
                                                    </div>
                                                    <div className="self-stretch flex flex-row items-start justify-start gap-[2.75rem] mq800:flex-wrap mq800:gap-[1.375rem]">
                                                        <div className="flex-[0.8936] rounded-34xl bg-yellow flex flex-row items-start justify-start py-[1.187rem] px-[3.75rem] box-border min-w-[10rem] whitespace-nowrap z-[4] mq450:flex-1">
                                                            <div className="h-[4.313rem] w-[15.375rem] relative rounded-34xl bg-yellow hidden" />
                                                            <div className="flex-1 relative text-[1.375rem] leading-[1.938rem] capitalize font-semibold font-archivo-semiexpanded text-gray-200 text-center z-[5]">
                                                                Login Now
                                                            </div>
                                                        </div>
                                                        <div className="flex-1 rounded-34xl bg-darkslateblue border-midnightblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[1.062rem] pl-[3.25rem] pr-[3.187rem] min-w-[10rem] whitespace-nowrap z-[4]">
                                                            <div className="h-[4.313rem] w-[15.375rem] relative rounded-34xl bg-darkslateblue border-midnightblue-100 border-[1px] border-solid box-border hidden" />
                                                            <div className="flex-1 relative text-[1.375rem] leading-[1.938rem] capitalize font-semibold font-archivo-semiexpanded text-white text-center z-[5]">
                                                                Signup Now
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="self-stretch flex flex-col items-end justify-start gap-[3.125rem] text-[1.25rem] mq800:gap-[1.563rem]">
                                                <div className="self-stretch flex flex-row items-start justify-start gap-[0.562rem] mq800:flex-wrap">
                                                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem] box-border min-w-[10.188rem]">
                                                        <div className="self-stretch h-[0.063rem] relative bg-blueviolet-100 z-[4]" />
                                                    </div>
                                                    <div className="w-[6.938rem] relative leading-[140%] capitalize font-medium inline-block shrink-0 z-[4] mq450:text-[1rem] mq450:leading-[1.375rem]">
                                                        Login With
                                                    </div>
                                                    <div className="flex-1 flex flex-col items-start justify-start pt-[0.937rem] px-[0rem] pb-[0rem] box-border min-w-[10.188rem]">
                                                        <div className="self-stretch h-[0.063rem] relative bg-blueviolet-100 z-[7]" />
                                                    </div>
                                                </div>
                                                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem]">
                                                    <div className="w-[17.625rem] flex flex-row items-start justify-between gap-[1.25rem]">
                                                        <img
                                                            className="h-[2.563rem] w-[2.5rem] relative object-cover min-h-[2.563rem] z-[4]"
                                                            loading="lazy"
                                                            alt=""
                                                            src="/google-1@2x.png"
                                                        />
                                                        <img
                                                            className="h-[2.563rem] w-[2.563rem] relative object-cover min-h-[2.563rem] z-[4]"
                                                            loading="lazy"
                                                            alt=""
                                                            src="/microsoft-1@2x.png"
                                                        />
                                                        <img
                                                            className="h-[2.563rem] w-[2.563rem] relative object-cover min-h-[2.563rem] z-[4]"
                                                            loading="lazy"
                                                            alt=""
                                                            src="/mask-group@2x.png"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex-1 rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none [background:linear-gradient(180deg,_#681dc9,_#38116a)] flex flex-row items-start justify-start relative min-w-[25.25rem] max-w-full z-[4] mq800:min-w-full">
                                        <div className="self-stretch w-[38.875rem] relative rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none [background:linear-gradient(180deg,_#681dc9,_#38116a)] hidden max-w-full z-[0]" />
                                        <img
                                            className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] rounded-tl-none rounded-tr-lg rounded-br-lg rounded-bl-none max-w-full overflow-hidden max-h-full object-cover mix-blend-multiply z-[5]"
                                            alt=""
                                            src="/rectangle-53@2x.png"
                                        />
                                        <div className="h-[53.313rem] flex-1 relative max-w-full">
                                            <img
                                                className="absolute top-[0rem] left-[0rem] rounded-tl-lg rounded-tr-none rounded-br-none rounded-bl-lg w-full h-full object-contain mix-blend-multiply z-[6]"
                                                alt=""
                                                src="/footer-background@2x.png"
                                            />
                                            <img
                                                className="absolute top-[2rem] left-[33.938rem] w-[2.625rem] h-[2.625rem] z-[7]"
                                                loading="lazy"
                                                alt=""
                                                src="/vector-1.svg"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[1.437rem] pr-[1.5rem] box-border max-w-full">
                                <div className="h-[8.125rem] flex-1 overflow-x-auto flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0rem] box-border gap-[1.875rem] max-w-full">
                                    <Component
                                        propWidth="17.438rem"
                                        propBackgroundImage="url('/testimonial-headings@3x.png')"
                                        propHeight="1.313rem"
                                    />
                                    <Component
                                        propWidth="17.438rem"
                                        propBackgroundImage="url('/frame-1@3x.png')"
                                        propHeight="1.313rem"
                                    />
                                    <Component
                                        propWidth="17.438rem"
                                        propBackgroundImage="url('/frame-11@3x.png')"
                                        propHeight="1.313rem"
                                    />
                                    <Component
                                        propWidth="17.438rem"
                                        propBackgroundImage="url('/frame-12@3x.png')"
                                        propHeight="1.313rem"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <main className="self-stretch flex flex-col items-end justify-start gap-[2.937rem] shrink-0 max-w-full mq800:gap-[1.438rem]">
                <section className="self-stretch flex flex-col items-end justify-start pt-[0rem] px-[0rem] pb-[1.437rem] box-border gap-[2.5rem] max-w-full text-center text-[2.188rem] text-white font-archivo-semiexpanded mq800:gap-[1.25rem]">
                    <div className="self-stretch h-[3.375rem] flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem] box-border">
                        <div className="self-stretch w-[19.188rem] flex flex-col items-start justify-start gap-[0.75rem]">
                            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[0rem] pl-[1.625rem] pr-[1.687rem]">
                                <h1 className="m-0 self-stretch flex-1 relative text-inherit uppercase font-bold font-[inherit] mq450:text-[1.313rem] mq800:text-[1.75rem]">
                                    CI GPT Tool
                                </h1>
                            </div>
                            <img
                                className="self-stretch h-[0.25rem] relative max-w-full overflow-hidden shrink-0"
                                alt=""
                                src="/vector-3.svg"
                            />
                        </div>
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-start relative gap-[12.687rem] max-w-full z-[1] text-left text-[1rem] text-mediumpurple font-poppins mq450:gap-[1.563rem] mq1350:flex-wrap mq1350:gap-[6.313rem] mq1350:justify-center mq800:gap-[3.188rem]">
                        <div className="h-full w-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] [background:linear-gradient(54.23deg,_#110c24,_#1e104f)]" />
                        <img
                            className="h-[1.813rem] w-[1rem] absolute !m-[0] bottom-[3.625rem] left-[30.188rem] z-[2]"
                            alt=""
                            src="/vector-2.svg"
                        />
                        <img
                            className="h-[1.25rem] w-[1rem] absolute !m-[0] right-[10.5rem] bottom-[3.875rem] z-[3]"
                            alt=""
                            src="/vector-3.svg"
                        />
                        <div className="w-[20.063rem] flex flex-col items-start justify-start pt-[5.25rem] pb-[11.187rem] pl-[2.625rem] pr-[0.812rem] box-border relative gap-[0.75rem] min-w-[20.063rem] max-w-full z-[1] mq450:pl-[1.25rem] mq450:pt-[2.25rem] mq450:pb-[4.688rem] mq450:box-border mq1350:flex-1 mq800:pt-[3.438rem] mq800:pb-[7.25rem] mq800:box-border">
                            <div className="w-full h-full absolute !m-[0] top-[0rem] right-[0rem] bottom-[0rem] left-[0rem] bg-gray-200 border-midnightblue-300 border-r-[1.5px] border-solid box-border" />
                            <div className="w-[4.25rem] h-[1.688rem] relative text-[1.125rem] capitalize inline-block z-[1]">
                                Today
                            </div>
                            <div className="self-stretch h-[4.438rem] flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.812rem] box-border gap-[0.625rem]">
                                <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[0rem] pl-[0rem] pr-[0.937rem]">
                                    <div className="self-stretch flex-1 relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                        Canada Immigration Process
                                    </div>
                                    <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem] ml-[-1.188rem]">
                                        <img
                                            className="w-[0.25rem] h-[1.125rem] relative object-contain z-[2]"
                                            alt=""
                                            src="/vector-4.svg"
                                        />
                                    </div>
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Lorem Ipsum Dummy Text
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.812rem] gap-[0.668rem]">
                                <div className="w-[5.75rem] relative text-[1.125rem] capitalize inline-block z-[1]">
                                    Yesterday
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Canada Immigration Process
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Lorem Ipsum Dummy Text
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Canada Immigration Process
                                </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.643rem]">
                                <div className="w-[8.75rem] relative text-[1.125rem] capitalize inline-block z-[1]">
                                    Previous 7 days
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Canada Immigration Process
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Lorem Ipsum Dummy Text
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Canada Immigration Process
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Lorem Ipsum Dummy Text
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Canada Immigration Process
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Lorem Ipsum Dummy Text
                                </div>
                                <div className="self-stretch relative capitalize font-light text-transparent !bg-clip-text [background:linear-gradient(90deg,_rgba(255,_255,_255,_0.94),_rgba(23,_16,_48,_0.94)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] z-[1]">
                                    Canada Immigration Process
                                </div>
                            </div>
                            <img
                                className="w-[1.75rem] h-[1.563rem] absolute !m-[0] top-[1.563rem] left-[2.625rem] z-[3]"
                                alt=""
                                src="/previous-container.svg"
                            />
                            <img
                                className="w-[1.563rem] h-[1.563rem] absolute !m-[0] top-[1.563rem] right-[1.625rem] z-[3]"
                                alt=""
                                src="/vector-5.svg"
                            />
                        </div>
                        <div className="w-[52.813rem] flex flex-col items-start justify-start pt-[1.812rem] px-[0rem] pb-[0rem] box-border min-w-[52.813rem] max-w-full text-center text-white font-archivo-semiexpanded mq1125:min-w-full mq1350:flex-1">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[17.625rem] max-w-full mq450:gap-[4.375rem] mq1125:gap-[8.813rem]">
                                <div className="self-stretch flex flex-row items-start justify-end max-w-full">
                                    <div className="w-[50.188rem] flex flex-col items-end justify-start py-[0rem] pl-[1.25rem] pr-[0rem] box-border gap-[13.687rem] max-w-full mq450:gap-[3.438rem] mq800:gap-[6.813rem]">
                                        <div className="w-[7.375rem] h-[1.063rem] flex flex-row items-start justify-start relative">
                                            <div className="h-[2.813rem] w-[11rem] absolute !m-[0] top-[calc(50%_-_22.5px)] left-[calc(50%_-_88px)] rounded-9xl bg-blueviolet-100 z-[1]" />
                                            <div className="self-stretch flex-1 relative capitalize font-semibold z-[2]">
                                                upgrade Plan
                                            </div>
                                        </div>
                                        <div className="self-stretch flex flex-row items-start justify-start max-w-full text-[1.875rem] text-yellow">
                                            <div className="w-[38.125rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] box-border gap-[0.5rem] max-w-full">
                                                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.375rem] box-border max-w-full">
                                                    <h2 className="m-0 h-[4.875rem] w-[22rem] relative text-inherit leading-[130%] uppercase inline-block max-w-full z-[1] font-[inherit] mq450:text-[1.125rem] mq450:leading-[1.438rem] mq800:text-[1.5rem] mq800:leading-[1.938rem]">
                                                        <p className="m-0 font-semibold">User name,</p>
                                                        <p className="m-0 text-white">Welcome To CI GPT</p>
                                                    </h2>
                                                </div>
                                                <div className="self-stretch h-[5.063rem] relative text-[1.125rem] capitalize font-light font-poppins text-white inline-block z-[1]">
                                                    Lorem Ipsum is simply dummy text of the printing and
                                                    typesetting industry. Lorem Ipsum has been the
                                                    industry's standard dummy text ever since the 1500s,
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-[48.875rem] flex flex-row items-start justify-between py-[0rem] pl-[0rem] pr-[1.25rem] box-border gap-[1.25rem] max-w-full text-left text-[1.25rem] font-poppins mq450:flex-wrap">
                                    <div className="h-[2.25rem] w-[13.5rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
                                        <div className="self-stretch flex-1 flex flex-row items-start justify-start relative">
                                            <div className="h-[4.375rem] w-[52.938rem] absolute !m-[0] top-[calc(50%_-_35px)] right-[-35.25rem] rounded-25xl bg-gray-200 border-midnightblue-200 border-[1.5px] border-solid box-border z-[1]" />
                                            <div className="self-stretch flex-1 relative leading-[140%] capitalize z-[2] mq450:text-[1rem] mq450:leading-[1.375rem]">
                                                Write prompt here.
                                            </div>
                                        </div>
                                    </div>
                                    <div className="h-[2.75rem] w-[2.75rem] relative rounded-[50%] bg-yellow z-[2]" />
                                </div>
                            </div>
                        </div>
                        <img
                            className="h-[1.563rem] w-[1.75rem] relative hidden z-[5]"
                            alt=""
                            src="/vector1.svg"
                        />
                    </div>
                </section>
                <Testimonials />
                <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
                    <img
                        className="h-[1.625rem] w-[9.969rem] relative"
                        alt=""
                        src="/group-8.svg"
                    />
                </div>
            </main>
    
        </div>
    )
}

export default LoginPopup
