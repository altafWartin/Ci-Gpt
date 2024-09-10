import { useMemo } from "react";
import PropTypes from "prop-types";

const SecondTestimonialDetails = ({
  className = "",
  propAlignSelf,
  propFlex,
  propMinWidth,
  propWidth,
}) => {
  const secondTestimonialDetailsStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propAlignSelf, propFlex, propMinWidth]);

  const march12023Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div
      className={`self-stretch flex flex-row items-end justify-start py-[0rem] pl-[0rem] pr-[0.875rem] box-border max-w-full text-left text-[1.063rem] text-white font-poppins ${className}`}
      style={secondTestimonialDetailsStyle}
    >
      <div className="h-[16.875rem] flex-1 flex flex-col items-start justify-start max-w-[104%] shrink-0">
        <div className="self-stretch h-[13.75rem] rounded-t-11xl rounded-b-3xs bg-gray-300 flex flex-row items-start justify-start py-[2.187rem] px-[2.562rem] box-border whitespace-nowrap max-w-full z-[1]">
          <div className="h-[13.75rem] w-[25.438rem] relative rounded-t-11xl rounded-b-3xs bg-gray-300 hidden max-w-full" />
          <div className="w-[19.625rem] relative tracking-[0.3px] leading-[1.375rem] capitalize font-light inline-block shrink-0 z-[2]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer.
          </div>
        </div>
      </div>
      <div className="w-[23.563rem] shadow-[-8px_12px_36px_rgba(22,_63,_77,_0.06)] rounded-49xl bg-white flex flex-row items-end justify-start py-[0.937rem] px-[1.562rem] box-border gap-[0.875rem] max-w-full z-[2] ml-[-24.438rem] text-[1.125rem] text-black mq450:flex-wrap">
        <div className="h-[4.938rem] w-[23.563rem] relative shadow-[-8px_12px_36px_rgba(22,_63,_77,_0.06)] rounded-49xl bg-white hidden max-w-full" />
        <img
          className="h-[3.063rem] w-[3.063rem] relative rounded-[50%] object-cover z-[3]"
          alt=""
          src="/profile-picture@2x.png"
        />
        <div className="w-[9.688rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[0.125rem] box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[0.125rem]">
            <div className="self-stretch relative tracking-[0.3px] leading-[1.25rem] capitalize font-medium z-[3]">
              Yash Malhotra
            </div>
            <div
              className="w-[7.188rem] relative text-[0.813rem] tracking-[0.3px] leading-[1.25rem] capitalize text-darkslategray inline-block z-[3]"
              style={march12023Style}
            >
              March 1, 2023
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SecondTestimonialDetails.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propAlignSelf: PropTypes.any,
  propFlex: PropTypes.any,
  propMinWidth: PropTypes.any,
  propWidth: PropTypes.any,
};

export default SecondTestimonialDetails;
