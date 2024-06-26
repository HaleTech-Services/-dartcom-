import React from "react";
import mission from "../../../assets/mission.png";
import vision from "../../../assets/vision.png";
import belief from "../../../assets/belief.png";

const VisionMission = () => {
  return (
    <div className="w-full h-auto pb-8 pt-[160px] px-[5rem]">
      {/* OUR VISION SECTION */}
      <div className="flex items-center gap-[3rem]">
        <img className="w-[500px]" src={vision} alt="vision" />
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-4">OUR VISION</h2>
          <p className="w-[520px] text-[18px]">
            To be Nigeria's foremost company in our discipline to contribute to
            a meaningful quota in achieving vision 2020. To drastically reduce
            unemployment by investing in human capital development.
          </p>
        </div>
      </div>

      {/* OUR MISSION SECTION */}
      <div className="flex items-center pt-[50px] gap-[3rem]">
        <div className="text-center">
          <h2 className="font-bold text-3xl mb-4">OUR MISSION</h2>
          <p className="w-[520px] text-[18px]">
            We pledge to deliver without breach of terms. We pledge to develop
            Nigerian's local content. We pledge to uphold national pride and
            nations building
          </p>
        </div>
        <img className="w-[500px]" src={mission} alt="" />
      </div>

      {/* OUR BELIEF SECTION */}
      <div className="flex pt-[50px] gap-8">
        <img className="pt-3 w-[500px] h-[425px]" src={belief} alt="vision" />
        <div className="pt-2 w-[550px]">
          <h2 className="font-bold text-3xl mb-4 text-center">OUR BELIEF</h2>
          <div className="flex flex-col gap-[50px]">
            <p className="text-[#0D1821] ">
              <span className="font-semibold">PEOPLE</span>: To be the company
              that the people want to join and stay with.
            </p>
            <p className="text-[#0D1821]">
              <span className="font-semibold">QUALITY OF SERVICE</span>: To be a
              quality company, highly valued by our customers.
            </p>
            <p className="text-[#0D1821]">
              <span className="font-semibold">PROFILE</span>: To be recognized
              as the leading construction, engineering, inpection & testing,
              procurement and supply servicing company in Nigeria
            </p>
            <p className="text-[#0D1821]">
              <span className="font-semibold">INNOVATION</span>: To be a company
              that actively fosters innovation
            </p>
            <p className="text-[#0D1821]">
              <span className="font-semibold">GROWTH</span>: To maintain
              profitable growth in Nigeria and Africa.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisionMission;
