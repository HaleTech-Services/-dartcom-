import React from "react";
import HeroSection from "../components/HeroSection";
import BridgeImage from "/public/assets/footer.jpeg";

const Contact = () => {
  return (
    <>
      <div className="mt-8"></div>
      <HeroSection text={"Contact us"} />
      <div className="flex flex-col items-center justify-center min-h-screen bg-white">
        <div className="mt-8"></div>
        <h2 className="text-orange-500 text-center text-sm uppercase mb-2">
          Who Dartcom Customer Service Are
        </h2>
        <h1 className="text-black text-center text-2xl font-bold mb-6">
          We Got 24/7 Customer Feedback
        </h1>
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-[80%]">
          <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <input
              type="text"
              placeholder="Your Full Name"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="text"
              placeholder="Your Address"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <textarea
              placeholder="Enter Your Message Here..."
              className="col-span-1 sm:col-span-2 p-3 border border-gray-300 rounded-lg w-full"
            />
            <button
              type="submit"
              className="col-span-1 sm:col-span-2 self-center justify-self-center w-[50%] bg-blue-600 text-white py-3 rounded-lg text-center font-bold"
            >
              Message Us
            </button>
          </form>
          <div className="mt-8">
            <div className="relative h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.678031899069!2d-0.1399628237809214!3d51.53230101386771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b1c1a0eeca1%3A0x9c9de78e076869f8!2sZSL%20London%20Zoo!5e0!3m2!1sen!2suk!4v1620280218248!5m2!1sen!2suk"
                title="Map"
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
        <button className="mt-4 bg-white text-black py-2 px-4 rounded-none border border-gray-600 mb-6">
          Back Home
        </button>

        <div
          className={`bg-cover w-full relative h-[500px] min-h-fit md:min-h-[70vh] flex items-center justify-center md:justify-start gap-3`}
          style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,.5), rgba(0,0,0,.5)), url(${BridgeImage})`,
          }}
        >
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center text-white  ">
            <span className="block mt-5">Get a quote</span>
            <h2 className="text-2xl font-bold">Build Your Future Today</h2>
            <h3>LET DARTCOM BRING THAT FUTURE OUT TODAY</h3>
            <button className="bg-white p-3 rounded-md text-darkBlue mt-3 mb-auto">Contact Us Now</button>

            <section className="flex gap-3 text-black flex-col md:flex-row mb-3">
              <div className="flex flex-row gap-2 bg-white items-center justify-start md:justify-center p-3">
                <span className="bg-red-400 text-white font-bold text-2xl p-3">01</span>
                <div className="flex flex-col">
                  <span>Best Consultation</span>
                  <span>We got the best on Consultation</span>
                </div>
              </div>
              <div className="flex gap-2 bg-white items-center justify-center p-3">
                <span className="bg-red-400 text-white font-bold text-2xl p-3">02</span>
                <div className="flex flex-col">
                  <span>Best Custormer Review</span>
                  <span>We got reviews Everyday</span>
                </div>
              </div>
              <div className="flex gap-2 bg-white items-center justify-center p-3">
                <span className="bg-red-400 text-white font-bold text-2xl p-3">03</span>
                <div className="flex flex-col">
                  <span>Best Maintenance Service</span>
                  <span>Our Maintenance is Top 1</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
