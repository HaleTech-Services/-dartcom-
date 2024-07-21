import bigImg from "../assets/bigImg.png";
import smallImg from "../assets/smallImg.png";

export default function HomeBanner() {
  return (
    <div className="w-full h-fit my-[3rem] md:h-[80vh] flex justify-between">
      <div className="heroImage w-full overflow-hidden">
        <img src="/assets/heroimg.jpeg" alt="Hero Image" />
        <div class="hero-text flex flex-col items-center justify-center gap-3">
          <p className="capitalize">Welcome to dartcom company</p>
          <h2 className="capitalize text-4xl font-extrabold max-w-[30ch] text-center">
            The Best engineering Construction company
          </h2>
          <span className="cursor-pointer bg-white p-3 rounded-sm text-[#4D69FF]">
            Read More
          </span>
        </div>
      </div>
    </div>
  );
}
