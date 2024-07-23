import React from "react";

const PromiseAndValues = () => {
  const values = [
    { imgSrc: "/assets/strategy-image.jpeg", title: "Excellent Work Strategy" },
    { imgSrc: "/assets/budget-image.jpeg", title: "Budget Adherence" },
    { imgSrc: "/assets/safety-image.jpeg", title: "High Safety Measures" },
    {
      imgSrc: "/assets/why-construction-image.jpeg",
      title: "High Quality Construction",
    },
    { imgSrc: "/assets/timeliness-image.jpeg", title: "Timeliness" },
    {
      imgSrc: "/assets/customer-image.jpeg",
      title: "Customer Satisfaction Survey",
    },
  ];

  return (
    <div className="bg-white py-16">
      <div className="text-center">
        <h2 className="text-sm font-semibold text-orange-600">WHY CHOOSE US</h2>
        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          OUR PROMISE AND VALUES
        </h1>
      </div>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-5">
        {values.map((value, index) => (
          <div
            key={index}
            className="relative overflow-hidden bg-white shadow p-5 flex flex-col items-start"
          >
            <div className="relative w-full max-w-xs h-48 overflow-hidden p-3">
              <img
                src={value.imgSrc}
                alt={value.title}
                className="w-full h-full object-cover"
              />
              <div className=" absolute bottom-0 left-0 h-1/2 min-h-5 w-1/2 border-b-4 border-b-[#76B5EA] border-l-4 border-l-[#76B5EA]"></div>
              <div className=" absolute top-0 right-0 h-1/2 min-h-5 w-1/2 border-t-4 border-t-[#76B5EA] border-r-4 border-r-[#76B5EA]"></div>
            </div>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-gray-900">
                {value.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PromiseAndValues;
