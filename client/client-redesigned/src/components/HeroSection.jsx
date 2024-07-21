import HeroImage from "../assets/Rectangle 2.png";

export default function HeroSection ({p}) {
  return (
    <div
      className="bg-cover h-[250px]"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="pt-36">
        <h2 className="text-white font-medium text-center text-2xl">
            {p}
        </h2>
      </div>
    </div>
  );
}