import bigImg from "../assets/bigImg.png";
import smallImg from "../assets/smallImg.png";

export default function HomeBanner() {
  return (
    <div className="relative w-full mb-[5rem]">
      <div className="w-full h-[100vh] flex justify-between my-[3rem] md:h-[80vh]">
        <div className="heroImage w-full overflow-hidden h-full">
          <img src="/assets/construction.jpg" alt="Hero Image" className="w-full h-full object-cover" />
          <div className="hero-text flex flex-col items-center justify-center gap-3">
            <p className="capitalize text-lg md:text-xl">Welcome to dartcom company</p>
            <h2 className="capitalize text-2xl md:text-4xl font-extrabold max-w-[30ch] text-center">
              The Best engineering Construction company
            </h2>
            <span className="cursor-pointer bg-white p-3 rounded-sm text-[#4D69FF]">
              Read More
            </span>
          </div>
        </div>
      </div>
      <div className="info-container w-[90%] md:w-[60%] bg-white absolute -bottom-[20%] md:-bottom-[10%] left-1/2 -translate-x-1/2 bottom-shadow flex items-center justify-between p-4 md:p-8 mb-3 translate-y-4 md:translate-y-0 gap-3">
        <div className="info-item flex flex-col md:flex-row items-center justify-center">
          <span className="info-number text-[#FF7B00] text-xl md:text-2xl font-bold">
            25+
          </span>
          <span className="info-text text-xs md:text-base">
            Years of experience
          </span>
        </div>
        <div className="info-item flex flex-col md:flex-row items-center justify-center">
          <span className="info-number text-[#FF7B00] text-xl md:text-2xl font-bold">
            160+
          </span>
          <span className="info-text text-xs md:text-base">
            Completed Projects
          </span>
        </div>
        <div className="info-item flex flex-col md:flex-row items-center justify-center">
          <span className="info-number text-[#FF7B00] text-xl md:text-2xl font-bold">
            900+
          </span>
          <span className="info-text text-xs md:text-base">
            Customer reviews
          </span>
        </div>
      </div>
    </div>
  );
}
