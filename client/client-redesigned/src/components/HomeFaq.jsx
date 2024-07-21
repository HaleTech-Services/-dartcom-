import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
import { useState } from "react";

export default function HomeFaq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  const faqData = [
    {
      question: "Who we are?",
      answer:
        "Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor.",
    },
    {
      question: "How we get started with your project?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "Who founded BRIX Templates?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.",
    },
    {
      question: "When was Dartcom founded?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam quis risus eget urna mollis ornare vel eu leo.",
    },
    {
      question: "How to Reach Us",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.",
    },
    {
      question: "Is it a Private or Public Sector",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    },
  ];

  return (
    <div className="mt-[80px] w-full mx-auto pb-5 px-6 h-auto">
      <h3 className="w-full bg-[#F3F1FF] p-4 text-center md:text-3xl font-bold">
        Frequently asked Questions
      </h3>

      <div className="grid gap-4 md:grid-cols-3 p-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg mb-4 shadow-md min-h-[120px]"
          >
            <div
              className="flex justify-between items-center p-4 cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg font-semibold">{item.question}</h3>
              <span
                className={`flex items-center justify-center w-8 h-8 rounded ${
                  openIndex === index
                    ? "bg-blue-500 text-white"
                    : "bg-blue-100 text-blue-500"
                }`}
              >
                {openIndex === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </span>
            </div>
            {openIndex === index && (
              <div className="p-4 bg-gray-50">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
