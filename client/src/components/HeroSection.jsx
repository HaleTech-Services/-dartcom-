import HeroImage from "../assets/bg.png";

export default function HeroSection({ p, paragraph, header, param }) {
  return (
    <div
      className="bg-cover h-auto sm:h-[400px]"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="pt-36">
        <h2 className="text-white font-semibold text-2xl sm:text-5xl ml-[80px] mt-[60px]">
          {p}
        </h2>
        <p className="text-white text-xs ml-[120px] sm:ml-[285px]">
          {paragraph}
        </p>

        <h2 className="text-white text-center text-2xl sm:text-4xl font-bold mb-3">
          {header}
        </h2>
        <p className="text-white text-center w-[350px] pb-[30px] sm:w-[650px] lg:w-[800px] mx-auto text-sm">
          {param}
        </p>
      </div>
    </div>
  );
}
