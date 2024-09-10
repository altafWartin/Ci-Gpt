import Component from "./Component";
import PropTypes from "prop-types";

const HowToUseComponentVideo = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-[0rem] px-[1.25rem] pb-[3.187rem] box-border max-w-full text-center text-[2.188rem] text-white font-archivo-semiexpanded mq800:pb-[2.063rem] mq800:box-border ${className}`}
    >
      <div className="w-[75.375rem] flex flex-col items-end justify-start gap-[2.812rem] max-w-full mq800:gap-[1.375rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.312rem] pr-[1.25rem]">
          <div className="w-[19.188rem] flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.812rem] pr-[0.875rem]">
              <h1 className="m-0 flex-1 relative text-inherit uppercase font-bold font-[inherit] z-[1] mq450:text-[1.313rem] mq800:text-[1.75rem]">
                How to Use?
              </h1>
            </div>
            <img
              className="self-stretch h-[0.25rem] relative max-w-full overflow-hidden shrink-0 z-[1]"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
        </div>
        <div className="self-stretch grid flex-row items-start justify-start gap-[1.875rem] grid-cols-[repeat(4,_minmax(209px,_1fr))] text-[0.938rem] font-poppins mq450:grid-cols-[minmax(209px,_1fr)] mq1125:justify-center mq1125:grid-cols-[repeat(2,_minmax(209px,_363px))]">
          <Component
            propWidth="unset"
            propBackgroundImage="url('/testimonial-headings@3x.png')"
            propHeight="unset"
          />
          <Component
            propWidth="unset"
            propBackgroundImage="url('/frame-1@3x.png')"
            propHeight="unset"
          />
          <Component
            propWidth="unset"
            propBackgroundImage="url('/frame-11@3x.png')"
            propHeight="unset"
          />
          <Component />
        </div>
      </div>
    </section>
  );
};

HowToUseComponentVideo.propTypes = {
  className: PropTypes.string,
};

export default HowToUseComponentVideo;
