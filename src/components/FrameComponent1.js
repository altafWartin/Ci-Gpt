import { Link } from "react-router-dom";
import Component1 from "./Component1";
import PropTypes from "prop-types";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[1.25rem] box-border max-w-full text-center text-[3.75rem] text-white font-archivo-semiexpanded ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[30.813rem] flex-1 relative max-w-full overflow-hidden object-cover"
          alt=""
          src="/background-rect@2x.png"
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[68.313rem] flex flex-col items-center justify-center gap-[0.937rem] max-w-full">
          <h1 className="m-0 h-[4.063rem] text-inherit uppercase font-bold inline-block [text-shadow:0px_9px_46.1px_#130d29] z-[1] mq450:text-[1.35rem] mq800:text-[3rem]">
            Canada Immigration GPT
          </h1>
          <div className="flex flex-row items-center justify-center py-[1.062rem] px-[1.812rem] box-border max-w-full text-[1.375rem] font-poppins">
            <h3 className="m-0 text-inherit leading-[140%] capitalize font-normal inline-block z-[1] mq450:text-[1.125rem] mq450:leading-[1.563rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </h3>
          </div>
          <div className="flex flex-row items-center justify-center py-0 px-[1.25rem] box-border max-w-full text-left text-[1.25rem] text-gray-500">
            <div className="flex flex-row items-end justify-center gap-[3.312rem] max-w-full mq800:flex-wrap">
              <Link to='/Cigpt' className="w-[13.688rem] no-underline text-black flex flex-row items-center justify-center pt-[1.125rem] px-[1.75rem] pb-[1.062rem] box-border relative mx-auto">
                <div className="w-[12.188rem] capitalize font-medium inline-block z-[2] mq450:text-[1rem]">
                  Try CI GPT
                </div>
                <div className="h-full w-full absolute top-0 right-0 bottom-0 left-0">
                  <img
                    className="absolute h-full w-full top-0 right-0 bottom-0 left-0 max-w-full overflow-hidden max-h-full z-[1]"
                    alt=""
                    src="/subtract.svg"
                  />
                  <img
                    className="absolute top-[1rem] left-[11rem] w-[1.619rem] h-[1.619rem] object-contain z-[2] mq450:left-[170px]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </Link>

              <div className="w-[9.25rem] flex flex-col items-center justify-end pb-[0.25rem]">
                <Component1 howToUse="How to Use ?" vector1="/vector-1.svg" />
              </div>
              <div className="w-[9.25rem] flex flex-col items-center justify-end pb-[0.25rem] text-center text-white">
                <Component1 howToUse="Testimonial" vector1="/vector-1.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
