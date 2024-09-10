import PropTypes from "prop-types";

const Footer = () => {
  return (
    <>
  
      <footer className="self-stretch flex flex-row items-start justify-between pt-[5.187rem] pb-[1.687rem]  box-border relative max-w-full gap-[1.25rem] text-left text-[2.188rem] text-white font-archivo-semiexpanded mq800:pl-[1.563rem] mq800:pr-[2.438rem] mq800:box-border mq1325:flex-wrap ">
        <div className="w-full flex flex-col items-start justify-start max-w-full text-[1.563rem] font-poppins">
          <div className="self-stretch flex flex-row items-start justify-center   max-w-full  text-[1rem]">
            <div className=" w-56  self-stretch flex flex-row   max-w-[200px]  text-[2rem]">
              <h1 className="m-0 text-[2.188rem] text-inherit uppercase font-bold mq450:text-[1.313rem] mq800:text-[1.75rem]">
                <span>{`CI `}</span>
                <span className="text-yellow">GPT</span>
              </h1>
            </div>{" "}
            <div className="flex flex-row items-start justify-start gap-[2.062rem] max-w-full mq450:gap-[1rem] mq800:flex-wrap">
              <div className="flex flex flex-col  items-start justify-start gap-[4.375rem] min-w-[17.938rem] max-w-full mq450:gap-[2.188rem]">
                <div className=" flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq450:flex-wrap">
                  <div className="flex flex-col items-start justify-start gap-[0.562rem] min-w-[6.938rem] mq450:flex-1">
                    <h3 className="m-0 relative text-[1.563rem] leading-[2.625rem] capitalize font-medium font-[inherit] inline-block min-w-[4.25rem] z-[2] mq450:text-[1.25rem] mq450:leading-[2.125rem]">
                      Links
                    </h3>
                    <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem]">
                      <div className="relative leading-[1.625rem] capitalize font-medium inline-block min-w-[6.625rem] z-[2]">
                        Home{" "}
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                      <div className="relative leading-[1.625rem] capitalize font-medium inline-block min-w-[6.938rem] z-[2]">
                        About us{" "}
                      </div>
                      <div className="relative leading-[1.625rem] capitalize font-medium inline-block min-w-[6.688rem] z-[2]">
                        Blog
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start gap-[0.562rem] min-w-[6.938rem] mq450:flex-1">
                    <h3 className="m-0 relative text-[1.563rem] leading-[2.625rem] capitalize font-medium font-[inherit] inline-block min-w-[4.25rem] z-[2] mq450:text-[1.25rem] mq450:leading-[2.125rem]">
                      legal
                    </h3>
                    <div className="flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[0.375rem]">
                      <div className="relative leading-[1.625rem] capitalize font-medium inline-block min-w-[6.625rem] z-[2]">
                        terms of use
                      </div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-[0.937rem]">
                      <div className="relative leading-[1.625rem] capitalize font-medium inline-block min-w-[6.938rem] z-[2]">
                        privacy policy
                      </div>
                      <div className="relative leading-[1.625rem] capitalize font-medium inline-block min-w-[6.688rem] z-[2]">
                        cookie policy
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[0.562rem] min-w-[11rem] text-[1.563rem] mq450:flex-1">
                    <h3 className="m-0 text-inherit leading-[2.625rem] capitalize font-medium mq450:text-[1.25rem] mq450:leading-[2.125rem]">
                      Contact Info
                    </h3>
                    <div className="relative  w-full mt-0 flex flex-col justify-start gap-[2rem]  border-t-[1px] border-midnightblue-200">
                      <div className="flex items-center justify-start pr-[1rem] gap-[0.5rem]">
                        <img
                          className="w-[1.5rem] h-[1.5rem]"
                          loading="lazy"
                          alt="Email Icon"
                          src="/email-icon.svg"
                        />{" "}
                        <div className="leading-[1.625rem] capitalize font-medium whitespace-nowrap text-[1rem]">
                          help@CIGPT.com
                        </div>
                      </div>
                      <div className="flex items-center justify-start pr-[1rem] gap-[0.5rem]">
                        <img
                          className="w-[1.5rem] h-[1.5rem]"
                          alt="Phone Icon"
                          src="/frame-13.svg"
                        />{" "}
                        <div className="leading-[1.625rem] capitalize font-medium whitespace-nowrap text-[1rem]">
                          +1 234 456 678 89
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-[1rem]">
                        <img
                          className="w-[1.563rem] h-[1.563rem]"
                          loading="lazy"
                          alt="Group Icon"
                          src="/group.svg"
                        />
                        <img
                          className="w-[1.563rem] h-[1.563rem]"
                          alt="Group Icon 2"
                          src="/group-1.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>{" "}
              </div>
              <div className=" flex flex-col items-start justify-start gap-[0.812rem] min-w-[26.25rem] max-w-full text-[1.563rem] mq800:flex-1 mq800:min-w-full">
                <h3 className="m-0 relative text-inherit leading-[2.625rem] capitalize font-medium font-[inherit] z-[2] mq450:text-[1.25rem] mq450:leading-[2.125rem]">
                  need Help ?
                </h3>
                <div className="self-stretch rounded-39xl bg-gray-200 border-midnightblue-200 border-[1px] border-solid box-border flex flex-row items-start justify-between py-[0.5rem] pl-[2rem] pr-[0.812rem] max-w-full gap-[1.25rem] z-[2] text-[1rem] ">
                  <div className="h-[3.875rem] w-[20.25rem] relative rounded-39xl bg-gray-200 border-midnightblue-200 border-[1px] border-solid box-border hidden max-w-full" />
                  <div className="flex flex-col items-start justify-start pt-[0.5rem] px-[0rem] pb-[0rem]">
                    <div className="relative leading-[1.625rem] capitalize font-medium inline-block min-w-[7.188rem] z-[3]">
                      Email Address
                    </div>
                  </div>
                  <div className="rounded-39xl bg-blueviolet-100 flex flex-row items-start justify-start py-[0.5rem] pl-[2.187rem] pr-[2.125rem] z-[3]">
                    <div className="h-[2.625rem] w-[7.938rem] relative rounded-39xl bg-blueviolet-100 hidden" />
                    <div className="relative leading-[1.625rem] capitalize font-medium inline-block min-w-[3.625rem] z-[4]">
                      Submit
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex items-center justify-center w-full mt-5">
            <div className="rounded-full bg-midnightblue-200 w-full h-[0.125rem]" />
          </div>
          <div className="self-stretch flex flex-row items-center py-7 justify-center ">
            <div className="relative leading-[1.625rem] capitalize font-medium z-[2] mq450:text-[0.813rem]  ">
              Copyright 2024 CIGPT.com all rights reserved
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
