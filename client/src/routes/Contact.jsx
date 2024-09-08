import React, { useState } from "react";
import emailjs from "emailjs-com";
import HeroSection from "../components/HeroSection";
import BridgeImage from "/public/assets/footer.jpeg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    from_name: "", // Business Name
    email: "",
    phone: "",
    address: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(
        "service_8hbfx68", // Replace with your EmailJS service ID
        "template_tjcitb5", // Replace with your EmailJS template ID
        {
          ...formData,
          subject: formData.from_name, // Set subject as from_name (Business Name)
        },
        "PCMX-qv3kJEl1UlT5" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setResponseMessage("Message sent successfully!");
          setFormData({
            name: "",
            from_name: "",
            email: "",
            phone: "",
            address: "",
            message: "",
          });
        },
        (error) => {
          setResponseMessage("Failed to send message. Please try again.");
        }
      )
      .finally(() => setIsSubmitting(false));
  };

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
          <form
            className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="from_name"
              value={formData.from_name}
              onChange={handleChange}
              placeholder="Your Business Name"
              className="p-3 border border-gray-300 rounded-lg w-full"
              required
            />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Full Name"
              className="p-3 border border-gray-300 rounded-lg w-full"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email Address"
              className="p-3 border border-gray-300 rounded-lg w-full"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your Phone Number"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Your Address"
              className="p-3 border border-gray-300 rounded-lg w-full"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter Your Message Here..."
              className="col-span-1 sm:col-span-2 p-3 h-40 border border-gray-300 rounded-lg w-full"
              required
            />
            <button
              type="submit"
              className="col-span-1 sm:col-span-2 self-center justify-self-center w-[50%] bg-blue-600 text-white py-3 rounded-lg text-center font-bold"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Message Us"}
            </button>
          </form>
          {responseMessage && (
            <div className="mt-4 text-center text-green-600">
              {responseMessage}
            </div>
          )}
          <div className="mt-8">
            <div className="relative h-64 w-full">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.2977121554745!2d6.984364620971568!3d4.889734474665184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d18e08aebf45%3A0xa272e5c2ac7173f9!2sHaleTech%20Services!5e0!3m2!1sen!2sng!4v1725809854825!5m2!1sen!2sng"
                width="100%"
                height="250"
                style={{border: 0}}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
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
          <div className="absolute top-0 left-0 h-full w-full flex flex-col items-center justify-center text-white">
            <span className="block mt-5">Get a quote</span>
            <h2 className="text-2xl font-bold">Build Your Future Today</h2>
            <h3>LET DARTCOM BRING THAT FUTURE OUT TODAY</h3>
            <button className="bg-white p-3 rounded-md text-darkBlue mt-3 mb-auto">
              Contact Us Now
            </button>

            <section className="flex gap-3 text-black flex-col md:flex-row mb-3">
              <div className="flex flex-row gap-2 bg-white items-center justify-start md:justify-center p-3">
                <span className="bg-red-400 text-white font-bold text-2xl p-3">
                  01
                </span>
                <div className="flex flex-col">
                  <span>Best Consultation</span>
                  <span>We got the best on Consultation</span>
                </div>
              </div>
              <div className="flex gap-2 bg-white items-center justify-center p-3">
                <span className="bg-red-400 text-white font-bold text-2xl p-3">
                  02
                </span>
                <div className="flex flex-col">
                  <span>Best Customer Review</span>
                  <span>We got reviews Everyday</span>
                </div>
              </div>
              <div className="flex gap-2 bg-white items-center justify-center p-3">
                <span className="bg-red-400 text-white font-bold text-2xl p-3">
                  03
                </span>
                <div className="flex flex-col">
                  <span>Best Maintenance Service</span>
                  <span>Our Maintenance is Top #1</span>
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
