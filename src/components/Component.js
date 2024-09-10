import { useMemo } from "react";
import PropTypes from "prop-types";

const Component = ({
  className = "",
  propWidth,
  propBackgroundImage,
  propHeight,
}) => {
  const component4Style = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const videoTitleStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div
      className={`h-[34.25rem] flex flex-col items-end justify-start gap-[0.687rem] z-[2] text-center text-[0.938rem] text-white font-poppins ${className}`}
      style={component4Style}
    >
      <div
        className="self-stretch flex-1 rounded-lg flex flex-row items-end justify-center py-[1rem] px-[1.25rem] bg-[url('/public/frame-12@3x.png')] bg-cover bg-no-repeat bg-[top]"
        style={frameDivStyle}
      >
        <div
          className="w-[4.938rem] relative leading-[140%] capitalize font-medium inline-block [text-shadow:0px_10px_16.4px_rgba(0,_0,_0,_0.54)]"
          style={videoTitleStyle}
        >
          Video Title
        </div>
      </div>
      <div className="self-stretch h-[2.625rem] flex flex-row items-start justify-end py-[0rem] pl-[2.312rem] pr-[2.25rem] box-border">
        <div className="self-stretch flex-1 flex flex-row items-start justify-start">
          <div className="self-stretch flex-1 relative leading-[140%] capitalize opacity-[0]">
            <p className="m-0">Lorem Ipsum is simply</p>
            <p className="m-0">dummy text of the printing</p>
          </div>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propBackgroundImage: PropTypes.any,
  propHeight: PropTypes.any,
};

export default Component;
