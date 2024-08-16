import bigImg from "../assets/bigImg.png";
import smallImg from "../assets/smallImg.png";
import construction from '../../public/assets/construction.jpg'
import { useEffect, useState } from "react";

export default function HomeBanner() {

  const [completedProjects, setCompletedProjects] = useState(1);
  const [customerSatisfaction, setCustomerSatisfaction] = useState(1);
  const [yearsInBusiness, setYearsInBusiness] = useState(1);


  useEffect(() => {
    // Set the actual values here
    setCompletedProjects(30);
    setCustomerSatisfaction(100);
    setYearsInBusiness(2);

    // Optionally, you can have a small delay for the counting effect
    const countToValue = (setValue, targetValue, delay = 30) => {
      let currentValue = 1;
      const interval = setInterval(() => {
        if (currentValue >= targetValue) {
          clearInterval(interval);
          setValue(targetValue);
        } else {
          setValue(++currentValue);
        }
      }, delay);
    };

    countToValue(setCompletedProjects, 160);
    countToValue(setCustomerSatisfaction, 100);
    countToValue(setYearsInBusiness, 25);
  }, []);

  return (
    <div className="relative w-full mb-[5rem]">
      <div className="w-full h-[100vh] flex justify-between my-[3rem] md:h-[80vh]"
      style={{
        height: '100vh',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0,0,0,.3)), url(${construction})`,
      }}
      >
        <div className="heroImage w-full overflow-hidden h-full">
          {/* <img src="/assets/construction.jpg" alt="Hero Image" className="w-full h-full object-cover" /> */}
          <div className="hero-text flex flex-col items-center justify-center gap-3">
            <p className="capitalize text-lg md:text-2xl">Welcome to dartcom Projects</p>
            <small className="capitalize ">Built on Solid Ground</small>
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
          {yearsInBusiness}+
          </span>
          <span className="info-text text-xs md:text-base">
            Years of experience
          </span>
        </div>
        <div className="info-item flex flex-col md:flex-row items-center justify-center">
          <span className="info-number text-[#FF7B00] text-xl md:text-2xl font-bold">
          {completedProjects}+
          </span>
          <span className="info-text text-xs md:text-base">
            Completed Projects
          </span>
        </div>
        <div className="info-item flex flex-col md:flex-row items-center justify-center">
          <span className="info-number text-[#FF7B00] text-xl md:text-2xl font-bold">
          {customerSatisfaction}%
          </span>
          <span className="info-text text-xs md:text-base">
            Customer Satisfaction
          </span>
        </div>
      </div>
    </div>
  );
}
