import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <div
      className={`bg-gray-400 border-midnightblue-200 border-t-[1px] border-solid box-border flex flex-col items-end justify-start pt-[3.062rem] pb-[3.25rem] pl-[3.125rem] pr-[4.937rem] gap-[2.312rem] shrink-0 max-w-full text-left text-[1rem] text-white font-poppins mq450:pt-[2rem] mq450:pb-[2.125rem] mq450:box-border mq800:gap-[1.125rem] mq800:pl-[1.563rem] mq800:pr-[2.438rem] mq800:box-border ${className}`}
    >
      <div className="w-[90rem] h-[22.375rem] relative bg-gray-400 border-midnightblue-200 border-t-[1px] border-solid box-border hidden max-w-full" />
      <footer className="flex flex-row items-start justify-start gap-[4.062rem] max-w-full text-left text-[1.563rem] text-white font-poppins mq450:gap-[1rem] mq1350:flex-wrap mq800:gap-[2rem]">
        <div className="w-[12.813rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[1.25rem] box-border text-[2.188rem] font-archivo-semiexpanded">
          <h1 className="m-0 w-[8.375rem] relative text-inherit uppercase font-bold font-[inherit] inline-block z-[1] mq450:text-[1.313rem] mq800:text-[1.75rem]">
            <span>{`CI `}</span>
            <span className="text-yellow">GPT</span>
          </h1>
        </div>
        <div className="h-[9.938rem] w-[16.125rem] flex flex-row items-start justify-between gap-[1.25rem] text-[1.125rem]">
          <div className="self-stretch w-[5.125rem] flex flex-col items-start justify-start gap-[0.937rem]">
            <div className="w-[3.875rem] flex-1 flex flex-col items-start justify-start gap-[0.562rem] text-[1.563rem]">
              <h3 className="m-0 self-stretch flex-1 relative text-inherit leading-[2.625rem] capitalize font-medium font-[inherit] z-[1] mq450:text-[1.25rem] mq450:leading-[2.125rem]">
                links
              </h3>
              <div className="w-[3.375rem] h-[1.625rem] relative text-[1.125rem] leading-[1.625rem] capitalize font-medium inline-block z-[1]">
                home
              </div>
            </div>
            <div className="self-stretch h-[1.625rem] relative leading-[1.625rem] capitalize font-medium inline-block z-[1]">
              about us
            </div>
            <div className="w-[2.5rem] h-[1.625rem] relative leading-[1.625rem] capitalize font-medium inline-block z-[1]">
              Blog
            </div>
          </div>
          <div className="self-stretch w-[6.938rem] flex flex-col items-start justify-start gap-[0.937rem] text-[1rem]">
            <div className="w-[6.625rem] flex-1 flex flex-col items-start justify-start gap-[0.562rem] text-[1.563rem]">
              <h3 className="m-0 w-[4.25rem] flex-1 relative text-inherit leading-[2.625rem] capitalize font-medium font-[inherit] inline-block z-[1] mq450:text-[1.25rem] mq450:leading-[2.125rem]">
                legal
              </h3>
              <div className="self-stretch h-[1.625rem] relative text-[1rem] leading-[1.625rem] capitalize font-medium inline-block z-[1]">
                terms of use
              </div>
            </div>
            <div className="self-stretch h-[1.625rem] relative leading-[1.625rem] capitalize font-medium inline-block z-[1]">
              privacy policy
            </div>
            <div className="w-[6.688rem] h-[1.625rem] relative leading-[1.625rem] capitalize font-medium inline-block z-[1]">
              cookie policy
            </div>
          </div>
        </div>
        <div className="w-[14.563rem] flex flex-col items-start justify-start py-[0rem] pl-[0rem] pr-[3.562rem] box-border gap-[0.562rem]">
          <h3 className="m-0 w-[9.75rem] h-[2.625rem] relative text-inherit leading-[2.625rem] capitalize font-medium font-[inherit] inline-block z-[1] mq450:text-[1.25rem] mq450:leading-[2.125rem]">
            Contact Info
          </h3>
          <div className="self-stretch flex flex-row items-end justify-start gap-[0.312rem] text-[1rem]">
            <div className="flex flex-col items-start justify-start gap-[1.562rem]">
              <div className="flex flex-col items-start justify-start gap-[1.062rem]">
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/email-icon.svg"
                />
                <img
                  className="w-[1.5rem] h-[1.5rem] relative overflow-hidden shrink-0 z-[1]"
                  alt=""
                  src="/frame-13.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] pl-[0.125rem] pr-[0rem]">
                <img
                  className="h-[1.563rem] w-[1.563rem] relative z-[1]"
                  alt=""
                  src="/group.svg"
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[1.5rem]">
              <div className="self-stretch flex flex-col items-start justify-start gap-[0.937rem]">
                <div className="self-stretch relative leading-[1.625rem] capitalize font-medium whitespace-nowrap z-[1]">
                  help@CIGPT.com
                </div>
                <div className="self-stretch relative leading-[1.625rem] capitalize font-medium whitespace-nowrap z-[1]">
                  +1 234 456 678 89
                </div>
              </div>
              <div className="flex flex-row items-start justify-start py-[0rem] px-[0.562rem]">
                <img
                  className="h-[1.563rem] w-[1.563rem] relative z-[1]"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[26.25rem] flex flex-col items-start justify-start gap-[0.812rem] max-w-full">
          <h3 className="m-0 w-[9.313rem] h-[2.625rem] relative text-inherit leading-[2.625rem] capitalize font-medium font-[inherit] inline-block z-[1] mq450:text-[1.25rem] mq450:leading-[2.125rem]">
            need Help ?
          </h3>
          <div className="self-stretch rounded-39xl bg-gray-200 border-midnightblue-200 border-[1px] border-solid box-border flex flex-row items-start justify-between py-[0.5rem] pl-[2rem] pr-[0.812rem] max-w-full gap-[1.25rem] z-[1] text-[1rem] mq450:flex-wrap">
            <div className="h-[3.875rem] w-[26.25rem] relative rounded-39xl bg-gray-200 border-midnightblue-200 border-[1px] border-solid box-border hidden max-w-full" />
            <div className="w-[7.188rem] flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem] box-border">
              <div className="self-stretch relative leading-[1.625rem] capitalize font-medium z-[2]">
                Email Address
              </div>
            </div>
            <div className="h-[2.625rem] w-[7.938rem] rounded-39xl bg-blueviolet-100 flex flex-row items-start justify-start py-[0.5rem] pl-[2.187rem] pr-[2.125rem] box-border z-[2]">
              <div className="h-[2.625rem] w-[7.938rem] relative rounded-39xl bg-blueviolet-100 hidden" />
              <div className="self-stretch flex-1 relative leading-[1.625rem] capitalize font-medium z-[3]">
                Submit
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="w-[80.125rem] flex flex-row items-start justify-end py-[0rem] px-[1.812rem] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[1.437rem] max-w-full">
          <div className="self-stretch h-[0.125rem] relative rounded-[50%] bg-midnightblue-200 z-[1]" />
          <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem] box-border max-w-full">
            <div className="h-[1.625rem] w-[23.438rem] relative leading-[1.625rem] capitalize font-medium inline-block max-w-full z-[1]">
              Copyright 2024 CIGPT.com all rights reserved
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
