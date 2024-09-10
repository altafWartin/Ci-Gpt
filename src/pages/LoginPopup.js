import IconCloseCircle from "../assets/images/closeIcon";
import macbookpng from "../assets/images/Group 1000002349.svg";

const LoginPopup = ({onClose}) => {
  return (
    <div className="w-full  h-[50rem] relative bg-gray-600 overflow-y-scroll flex flex-col items-start justify-start pt-[1.687rem] px-[0rem] pb-[0rem] box-border gap-[4.625rem] leading-[normal] tracking-[normal] text-center text-[1.25rem] text-white font-archivo-semiexpanded mq450:gap-[1.125rem] mq1125:h-auto mq800:gap-[2.313rem]">
      <div className="w-[90rem] !m-[0] absolute top-[5.375rem] left-[0rem] flex flex-row items-start justify-start max-w-full">
        <img
          className="h-[30.813rem] flex-1 absolute relative max-w-full overflow-hidden object-cover"
          alt=""
          src="/background-rect@2x.png"
        />
        <button onClick={onClose} className=" z-[99] cursor-pointer bg-transparent  absolute right-28">
          <IconCloseCircle style={{ color: "white", fontSize: "24px" }} />
        </button>

        <div className="h-[33.188rem] w-[41.819rem] !m-[0] absolute right-[1.369rem] bottom-[2.5rem] flex flex-row items-start justify-start pt-[0.112rem] px-[0.375rem] pb-[0.593rem] box-border max-w-full z-[7]">
          <div className="self-stretch w-[34.069rem] pl-24  flex flex-row items-start justify-end pt-[1.031rem] px-[1rem] pb-[1rem] box-border bg-cover bg-no-repeat bg-[top] max-w-full z-[1]">
            <img
              className="h-[26.481rem] w-[25.069rem] top-[135px] right-[30px]  relative max-w-full"
              alt=""
              src={macbookpng}
            />
          </div>
        </div>
      </div>

      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] px-[2.625rem]  box-border max-w-full shrink-0 text-[1.875rem] mq1350:pb-[16.875rem] mq1350:box-border mq800:pl-[1.313rem] mq800:pr-[1.313rem] mq800:pb-[10.938rem] mq800:box-border">
        <div className="flex-1 flex flex-col items-end justify-start gap-[2.187rem] shrink-0 max-w-full mq450:gap-[1.063rem] mq800:gap-[2.063rem]">
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[3.25rem] pr-[3.187rem] box-border max-w-full mq1350:pl-[1.625rem] mq1350:pr-[1.563rem] mq1350:box-border">
            <div className="flex-1 flex flex-col items-start justify-start gap-[0.187rem] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start relative max-w-full">
                <div className="flex-1 rounded-lg bg-gray-100 flex flex-row flex-wrap items-start justify-start pt-[0rem] px-[0rem]  box-border max-w-full [row-gap:20px] z-[3]">
                  <div className="flex-1 flex flex-col items-start justify-start pt-[2.25rem] px-[0rem] pb-[0rem] box-border min-w-[25.625rem] max-w-full mq800:min-w-full">
                    <div className="self-stretch flex flex-col items-start justify-start gap-[1.312rem] max-w-full mq800:gap-[1.625rem]">
                      <div className="flex flex-row items-start justify-start py-[0rem] px-[2.687rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                        <h2 className="m-0 w-[11.188rem] relative text-inherit uppercase font-bold font-[inherit] inline-block min-w-[7.188rem] z-[4] mq450:text-[1.125rem] mq800:text-[1.5rem]">
                          <span>{`CI `}</span>
                          <span className="text-yellow">GPT</span>
                        </h2>
                      </div>
                      <div className="self-stretch flex flex-row items-start justify-start pt-[0rem] pb-[1.187rem] pl-[3rem] pr-[2.937rem] box-border max-w-full mq800:pl-[1.5rem] mq800:pr-[1.438rem] mq800:box-border">
                        <form className="m-0 flex-1 flex flex-col items-start justify-start gap-[2.812rem] max-w-full mq800:gap-[1.375rem]">
                          <div className="w-[24.625rem] flex flex-row items-start justify-start py-[0rem] px-[1.687rem] box-border max-w-full">
                            <div className="flex-1 flex flex-col items-start justify-start gap-[0.375rem] max-w-full">
                              <h1 className="m-0 w-[6.625rem] relative text-[1.5rem] leading-[2.813rem] capitalize font-medium font-archivo-semiexpanded text-white text-left inline-block z-[4] mq450:text-[1.188rem] mq450:leading-[1.688rem] mq800:text-[1.625rem] mq800:leading-[2.25rem]">
                                Login{" "}
                              </h1>
                              <div className="self-stretch relative text-[0.9rem] leading-[140%] capitalize font-poppins text-white text-left z-[4]">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-col items-start justify-start pt-[0rem] px-[0rem] pb-[0.312rem] box-border gap-[1.25rem] max-w-full">
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] max-w-full text-left text-[1.125rem] text-white font-poppins ">
                              <div className="w-[25.188rem] flex flex-row items-start justify-start py-[0rem] px-[1.687rem] box-border max-w-full">
                                <div className="flex-1 relative leading-[100%] capitalize inline-block max-w-full z-[4]">
                                  Email Address
                                </div>
                              </div>
                              <div className="self-stretch rounded-34xl bg-white flex flex-row items-center justify-start py-3 px-[3.125rem]  box-border max-w-full z-[4] text-[1.25rem] text-dimgray mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                                <input
                                  type="text"
                                  placeholder="Enter Email Address"
                                  className="w-full h-[1.0rem] rounded-34xl bg-white text-dimgray leading-[30px] capitalize outline-none placeholder:text-dimgray placeholder:capitalize mq450:text-[1rem] mq450:leading-[1.375rem] p-[0.5rem]"
                                />
                              </div>
                            </div>
                            <div className="self-stretch flex flex-col items-start justify-start gap-[0.75rem] max-w-full text-left text-[1.125rem] text-white font-poppins ">
                              <div className="w-[20.188rem] flex flex-row items-start justify-start py-[0rem] px-[1.687rem] box-border max-w-full">
                                <div className="flex-1 relative leading-[140%] capitalize inline-block max-w-full z-[4]">
                                  Password
                                </div>
                              </div>
                              <div className="self-stretch rounded-34xl bg-white flex flex-row items-center justify-start py-3 px-[3.125rem] box-border max-w-full z-[4] text-[1.25rem] text-dimgray mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
                                <input
                                  type="text"
                                  placeholder="Enter Password"
                                  className="w-full h-[1rem] rounded-34xl bg-white text-dimgray leading-[30px] capitalize outline-none placeholder:text-dimgray placeholder:capitalize mq450:text-[1rem] mq450:leading-[1.375rem] p-[0.5rem]"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="self-stretch flex flex-row items-start justify-start gap-[2.75rem] mq800:flex-wrap mq800:gap-[1.375rem]">
                            <div className="flex-1 rounded-34xl bg-yellow  border-[1px] border-solid box-border flex flex-row items-start justify-start py-[1.062rem]  min-w-[10rem] whitespace-nowrap z-[4]">
                              <div className="flex-1 relative text-[1.1rem] leading-[1rem]  capitalize font-semibold font-archivo-semiexpanded text-black text-center z-[5]">
                                Login Now
                              </div>
                            </div>
                            <div className="flex-1 rounded-34xl bg-darkslateblue border-midnightblue-100 border-[1px] border-solid box-border flex flex-row items-start justify-start py-[1.062rem]  min-w-[10rem] whitespace-nowrap z-[4]">
                              <div className="flex-1 relative text-[1.1rem] leading-[1rem]  capitalize font-semibold font-archivo-semiexpanded text-white text-center z-[5]">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
