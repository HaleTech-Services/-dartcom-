import mission from "../assets/mission.png";
import vision from "../assets/vision.png";
import belief from "../assets/belief.png";

export default function VisionMission() {
  return (
    <div className="w-full px-6">
      <div className=" flex flex-col justify-center items-center my-4 gap-3 ">
        <div className="bg-blue-200 text-[#4D69FF] py-1 px-3 rounded-2xl">
          Dartcom Company
        </div>
        <span className="text-center">
          Dartcom Engineering is a leading provider of comprehensive engineering
          solutions, committed to delivering exceptional results for our
          clients. With a team of highly skilled engineers and a proven track
          record of success, we have established ourselves as a trusted partner
          for businesses across various industries.
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-center gap-5 my-[5rem] md:gap-8">
        <div className="flex flex-col justify-center items-center gap-5">
          <img src="/assets/missionIcon.svg" alt="Mission Icon" className="max-w-[90px]"/>
          <span className="text-center">
            We Pledge to deliver Without breach of terms. We pledge to develop
            Nigerians local content. We pledge to uphold National pride and
            nations Building.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src="/assets/rockIcon.svg" alt="Mission Icon"  className="max-w-[90px]"/>
          <span className="text-center">
            We Pledge to deliver Without breach of terms. We pledge to develop
            Nigerians local content. We pledge to uphold National pride and
            nations Building.
          </span>
        </div>
        <div className="flex flex-col justify-center items-center gap-4">
          <img src="/assets/lockIcon.svg" alt="Mission Icon"  className="max-w-[90px]"/>
          <span className="text-center">
            We Pledge to deliver Without breach of terms. We pledge to develop
            Nigerians local content. We pledge to uphold National pride and
            nations Building.
          </span>
        </div>
      </div>
    </div>
  );
}
