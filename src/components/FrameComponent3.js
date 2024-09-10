import AnotherTestimonialParagraph from "./AnotherTestimonialParagraph";
import PropTypes from "prop-types";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-[0rem] pb-[3.375rem] pl-[5rem] pr-[4.937rem] box-border max-w-full text-center text-[2.188rem] text-white font-archivo-semiexpanded mq800:pl-[2.5rem] mq800:pr-[2.438rem] mq800:pb-[2.188rem] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[2.375rem] max-w-full mq800:gap-[1.188rem]">
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] px-[1.25rem]">
          <div className="w-[19.188rem] flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.875rem] pr-[0.937rem]">
              <h1 className="m-0 flex-1 relative text-inherit uppercase font-bold font-[inherit] z-[1] mq450:text-[1.313rem] mq800:text-[1.75rem]">
                Testimonial
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
        <div className="self-stretch flex flex-row flex-wrap items-start justify-center pt-[0rem] px-[0rem] pb-[0.562rem] box-border gap-[1.875rem] max-w-full text-left text-[1.063rem] font-poppins">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border min-w-[19.063rem] max-w-full">
            <AnotherTestimonialParagraph />
          </div>
          <AnotherTestimonialParagraph
            propAlignSelf="unset"
            propFlex="1"
            propMinWidth="19.063rem"
            propWidth="6.5rem"
          />
          <AnotherTestimonialParagraph
            propAlignSelf="unset"
            propFlex="1"
            propMinWidth="19.063rem"
            propWidth="6.563rem"
          />
        </div>
        <div className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.375rem]">
          <img
            className="h-[1.625rem] w-[8.044rem] relative z-[1]"
            loading="lazy"
            alt=""
            src="/group-8.svg"
          />
        </div>
      </div>
    </section>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
