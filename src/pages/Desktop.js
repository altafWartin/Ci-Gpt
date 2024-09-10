const Desktop = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden hidden flex-col items-start justify-start pt-[1.937rem] px-[5.687rem] pb-[33.937rem] box-border gap-[17.937rem] leading-[normal] tracking-[normal] text-center text-[1.875rem] text-white font-archivo-semiexpanded mq450:gap-[4.5rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:gap-[8.938rem] mq750:pl-[2.813rem] mq750:pr-[2.813rem] mq750:box-border">
      <img
        className="w-full h-[47.813rem] absolute !m-[0] top-[5.375rem] right-[0rem] left-[0rem] max-w-full overflow-hidden shrink-0 object-cover"
        alt=""
        src="/rectangle-1@2x.png"
      />
      <a className="[text-decoration:none] w-[7.188rem] h-[2.063rem] relative uppercase font-bold inline-block text-[inherit] mq450:text-[1.125rem] mq750:text-[1.5rem]">
        <span>{`CI `}</span>
        <span className="text-yellow">GPT</span>
      </a>
      <section className="self-stretch flex flex-row items-start justify-center py-[0rem] pl-[0.062rem] pr-[0rem] box-border max-w-full text-center text-[3.75rem] text-white font-archivo-semiexpanded">
        <div className="w-[59.313rem] flex flex-col items-start justify-start gap-[1.062rem] max-w-full">
          <h1 className="m-0 self-stretch h-[4.063rem] relative text-inherit uppercase font-bold font-[inherit] text-transparent !bg-clip-text [background:linear-gradient(90deg,_#f57eff,_#deff16)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block z-[1] mq450:text-[2.25rem] mq750:text-[3rem]">
            Canada Immigration GPT
          </h1>
          <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pl-[0.437rem] pr-[0.562rem] box-border max-w-full text-[1.375rem]">
            <div className="h-[3rem] flex-1 relative capitalize inline-block max-w-full z-[1] mq450:text-[1.125rem]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desktop;
