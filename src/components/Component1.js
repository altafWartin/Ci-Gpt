import PropTypes from "prop-types";

const Component1 = ({ className = "", howToUse, vector1 }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.562rem] z-[1] text-center text-[1.25rem] text-white font-archivo-semiexpanded ${className}`}
    >
      <div className="self-stretch relative capitalize font-medium mq450:text-[1rem]">
        {howToUse}
      </div>
      <img
        className="self-stretch h-[0.25rem] relative max-w-full overflow-hidden shrink-0"
        alt=""
        src={vector1}
      />
    </div>
  );
};

Component1.propTypes = {
  className: PropTypes.string,
  howToUse: PropTypes.string,
  vector1: PropTypes.string,
};

export default Component1;
