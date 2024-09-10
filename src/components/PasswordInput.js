import { useMemo } from "react";
import PropTypes from "prop-types";

const PasswordInput = ({
  className = "",
  propWidth,
  emailAddress,
  propDisplay,
  enterEmailAddress,
  propWidth1,
  propDisplay1,
}) => {
  const passwordLabelStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const emailAddressStyle = useMemo(() => {
    return {
      display: propDisplay,
    };
  }, [propDisplay]);

  const enterEmailAddressStyle = useMemo(() => {
    return {
      width: propWidth1,
      display: propDisplay1,
    };
  }, [propWidth1, propDisplay1]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.75rem] max-w-full text-left text-[1.125rem] text-white font-poppins ${className}`}
    >
      <div
        className="w-[27.188rem] flex flex-row items-start justify-start py-[0rem] px-[1.687rem] box-border max-w-full"
        style={passwordLabelStyle}
      >
        <div
          className="flex-1 relative leading-[140%] capitalize inline-block max-w-full z-[4]"
          style={emailAddressStyle}
        >
          {emailAddress}
        </div>
      </div>
      <div className="self-stretch rounded-34xl bg-white flex flex-row items-start justify-start pt-[1.312rem] px-[3.125rem] pb-[1.25rem] box-border max-w-full z-[4] text-[1.25rem] text-dimgray mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="h-[4.313rem] w-[33.5rem] relative rounded-34xl bg-white hidden max-w-full" />
        <div
          className="relative leading-[140%] capitalize z-[5] mq450:text-[1rem] mq450:leading-[1.375rem]"
          style={enterEmailAddressStyle}
        >
          {enterEmailAddress}
        </div>
      </div>
    </div>
  );
};

PasswordInput.propTypes = {
  className: PropTypes.string,
  emailAddress: PropTypes.string,
  enterEmailAddress: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propDisplay: PropTypes.any,
  propWidth1: PropTypes.any,
  propDisplay1: PropTypes.any,
};

export default PasswordInput;
