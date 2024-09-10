import SecondTestimonialDetails from "./SecondTestimonialDetails";
import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-[0rem] pl-[5rem] pr-[4.937rem] box-border max-w-full text-center text-[2.188rem] text-white font-archivo-semiexpanded mq800:pl-[2.5rem] mq800:pr-[2.438rem] mq800:box-border ${className}`}
    >
      <div className="flex-1 flex flex-col items-start justify-start gap-[2.375rem] max-w-full mq800:gap-[1.188rem]">
        <div className="self-stretch h-[3.375rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border">
          <div className="self-stretch w-[19.188rem] flex flex-col items-start justify-start gap-[0.75rem]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[0rem] pl-[0.875rem] pr-[0.937rem]">
              <h1 className="m-0 self-stretch flex-1 relative text-inherit uppercase font-bold font-[inherit] mq450:text-[1.313rem] mq800:text-[1.75rem]">
                Testimonial
              </h1>
            </div>
            <img
              className="self-stretch h-[0.25rem] relative max-w-full overflow-hidden shrink-0"
              alt=""
              src="/vector-3.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-center gap-[1.875rem] max-w-full text-left text-[1.063rem] font-poppins mq1350:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem] box-border min-w-[19.063rem] max-w-full">
            <SecondTestimonialDetails />
          </div>
          <SecondTestimonialDetails
            propAlignSelf="unset"
            propFlex="0.9656"
            propMinWidth="19.063rem"
            propWidth="6.5rem"
          />
          <SecondTestimonialDetails
            propAlignSelf="unset"
            propFlex="0.9656"
            propMinWidth="19.063rem"
            propWidth="6.563rem"
          />
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
