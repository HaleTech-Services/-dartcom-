import HeroImage from "../assets/Rectangle 2.png";

export default function HeroSection () {
  return (
    <div
      className="bg-cover h-[250px]"
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className="pt-32 pl-[500px]">
        <h2 className="text-white font-medium">
          About Dartcom Projects Nigeria Limited
        </h2>
      </div>
    </div>
  );
}