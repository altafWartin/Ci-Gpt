import { Link } from "react-router-dom";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div className="w-full relative bg-gray-500 overflow-hidden  flex-row items-start justify-start pt-[1.937rem] px-[5.687rem] pb-[3.5rem] box-border gap-[2.5rem] leading-[normal] tracking-[normal] text-center text-[1.875rem] text-white font-archivo-semiexpanded mq750:gap-[1.25rem] mq750:pl-[1.375rem] mq750:pr-[1.375rem] mq750:box-border mq1225:flex-wrap mq1225:pl-[2.813rem] mq1225:pr-[2.813rem] mq1225:box-border">
      <a className="[text-decoration:none] w-[7.188rem] relative uppercase font-bold inline-block text-[inherit] mq450:text-[1.125rem] mq750:text-[1.5rem]">
        <span>{`CI `}</span>
        <span className="text-yellow">GPT</span>
      </a>
      <div className="w-[59.313rem] flex flex-col items-start justify-start gap-[18.25rem] max-w-full text-[3.75rem] mq750:gap-[4.563rem] mq1050:gap-[9.125rem]">
        <div className="self-stretch h-[1.75rem] flex flex-row items-start justify-center py-[0rem] pl-[1.25rem] pr-[1.312rem] box-border">
          <nav className="m-0 self-stretch w-[19.25rem] flex flex-row items-start justify-between gap-[1.25rem] text-center text-[1.25rem] text-white font-poppins">
            <div className="self-stretch w-[4.313rem] relative leading-[140%] capitalize inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
              Home
            </div>
            <div className="self-stretch w-[5.875rem] relative leading-[140%] capitalize inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
              About Us
            </div>
            <div className="self-stretch w-[2.813rem] relative leading-[140%] capitalize inline-block shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
              Blog
            </div>
          </nav>
        </div>
        <div className="w-full flex flex-col items-start justify-start pt-0 px-0 pb-8 gap-7.5 box-border">
          {/* <!-- Heading and Description Section --> */}
          <div className="w-full flex flex-col items-start justify-start gap-3.75">
            <div className="w-full overflow-x-auto">
              <h1 className="m-0 w-max text-inherit uppercase font-bold font-[inherit] whitespace-nowrap text-3xl md:text-4xl lg:text-5xl">
                Canada Immigration GPT
              </h1>
            
            </div>

            <div className="w-full flex flex-row items-start justify-start py-0 px-7 box-border text-lg font-poppins">
              <div className="h-15 flex-1 leading-[140%] capitalize overflow-hidden text-ellipsis">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,
              </div>
            </div>
          </div>

          {/* <!-- Buttons Section --> */}
          <div className="w-full flex flex-row items-start justify-center py-0 px-5 box-border text-base">
            <div className="flex flex-row items-start justify-start gap-12 max-w-full flex-wrap">
              {/* <!-- Button 1 --> */}
              <Link to="/Cigpt" className="h-15 w-60 flex flex-row cursor-pointer items-center justify-start p-5 box-border relative text-left text-gray-500">
                <b className="w-32 capitalize shrink-0 z-[2] text-base">
                  TRY CI GPTttt
                </b>
                <div className="h-full w-full absolute inset-0 m-0">
                  <img
                    className="absolute h-full w-full inset-0 max-w-full max-h-full z-[1]"
                    alt=""
                    src="/subtract1.svg"
                  />
                  <img
                    className="absolute top-[1.125rem] left-[12.25rem] w-[1.619rem] h-[1.619rem] object-contain z-[2]"
                    loading="lazy"
                    alt=""
                    src="/vector.svg"
                  />
                </div>
              </Link>

              {/* <!-- Button 2 --> */}
              <div className="w-[9.25rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch relative capitalize font-medium z-[1] text-base">
                  How to Use?
                </div>
              </div>

              {/* <!-- Button 3 --> */}
              <div className="w-[9.25rem] flex flex-col items-start justify-start pt-[1.25rem] px-[0rem] pb-[0rem] box-border">
                <div className="self-stretch relative capitalize font-medium z-[1] text-base">
                  Testimonial
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="self-stretch h-[3.688rem] flex flex-row items-start justify-center py-[0rem] px-[1.25rem] box-border text-[2.188rem]">
          <div className="self-stretch w-[19.188rem] flex flex-col items-start justify-start gap-[1.062rem]">
            <div className="self-stretch flex-1 flex flex-row items-start justify-start py-[0rem] pl-[0.812rem] pr-[0.875rem]">
              <h2 className="m-0 self-stretch flex-1 relative text-inherit uppercase font-bold font-[inherit] mq450:text-[1.313rem] mq750:text-[1.75rem]">
                How to Use?
              </h2>
            </div>
            <img
              className="self-stretch h-[0.25rem] relative max-w-full overflow-hidden shrink-0"
              loading="lazy"
              alt=""
              src="/vector-3.svg"
            />
          </div>
        </div>
      </div>
      <main className="h-[47.813rem] w-full absolute !m-[0] top-[5.375rem] right-[0rem] left-[0rem]">
        <img
          className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
          alt=""
          src="/rectangle-1@2x.png"
        />
        <img
          className="absolute top-[30.5rem] left-[43.438rem] w-[9.188rem] h-[0.25rem] z-[1]"
          loading="lazy"
          alt=""
          src="/vector-11.svg"
        />
        <img
          className="absolute top-[30.5rem] left-[55.625rem] w-[9.188rem] h-[0.25rem] z-[1]"
          loading="lazy"
          alt=""
          src="/vector-11.svg"
        />
      </main>
      <Footer/>
    </div>
  );
};

export default HomePage;
