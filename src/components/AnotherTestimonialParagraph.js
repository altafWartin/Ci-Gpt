import { useMemo } from "react";
import PropTypes from "prop-types";

const AnotherTestimonialParagraph = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const anotherTestimonialParagraphStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const march120231Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch flex flex-col items-end justify-start max-w-full text-left text-[1.063rem] text-white font-poppins ${className}`}
      style={anotherTestimonialParagraphStyle}
    >
      <div className="self-stretch h-[13.75rem] rounded-t-11xl rounded-b-3xs bg-gray-300 flex flex-row items-start justify-start py-[2.187rem] px-[2.562rem] box-border max-w-full z-[2]">
        <div className="h-[13.75rem] w-[25.438rem] relative rounded-t-11xl rounded-b-3xs bg-gray-300 hidden max-w-full" />
        <div className="w-[19.625rem] relative tracking-[0.3px] leading-[1.375rem] capitalize font-light inline-block shrink-0 z-[3]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer.
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pl-[1rem] pr-[0.875rem] box-border max-w-full mt-[-1.813rem] text-[1.125rem] text-black">
        <div className="flex-1 shadow-[-8px_12px_36px_rgba(22,_63,_77,_0.06)] rounded-49xl bg-white flex flex-row items-end justify-start py-[0.937rem] px-[1.562rem] box-border gap-[0.875rem] max-w-full z-[3] mq450:flex-wrap">
          <div className="h-[4.938rem] w-[23.563rem] relative shadow-[-8px_12px_36px_rgba(22,_63,_77,_0.06)] rounded-49xl bg-white hidden max-w-full" />
          <img
            className="h-[3.063rem] w-[3.063rem] relative rounded-[50%] object-cover z-[4]"
            loading="lazy"
            alt=""
            src="/profile-picture@2x.png"
          />
          <div className="w-[9.688rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem] box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem]">
              <div className="self-stretch relative tracking-[0.3px] leading-[1.25rem] capitalize font-medium z-[4]">
                Yash Malhotra
              </div>
              <div
                className="w-[7.188rem] relative text-[0.813rem] tracking-[0.3px] leading-[1.25rem] capitalize text-darkslategray inline-block z-[4]"
                style={march120231Style}
              >
                March 1, 2023
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

AnotherTestimonialParagraph.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default AnotherTestimonialParagraph;
