import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import contact_icon from "../assets/undraw_contact_us_re_4qqt.svg";
import facebook from "../assets/facebook.png";
import pinterest from "../assets/pinterest.png";
import linkedin from "../assets/linkedin.png";
import mail_icon from "../assets/mail_icon.svg";
import HeroSection from "../components/HeroSection";


const Contact = () => {

    const p= 'Contact' 

    return (
    <>
        <main className='w-full'>   
            <header>
                <Navbar />
            </header>

            <HeroSection p={p} />

            <div className="flex items-center justify-center gap-10 bg-gray-200 p-7 pb-10 rounded-lg shadow-lg my-14 mx-auto sm:w-full md:w-3/4 lg:w-1/2">
                <div className="grid bg-white p-3 rounded-lg shadow-lg gap-4 sm:w-full md:w-full lg:w-full">
                    <div className="flex items-center justify-between">

                        <div className="rounded-full">
                            <img className="" src={contact_icon} alt="contact" />
                        </div>

                            <form className="grid grid-rows-4 gap-3 h-auto bg-gray-200 p-3 rounded-lg shadow-lg sm:max-w-[768px] md:w-3/4 lg:w-4/5">  
                                <label htmlFor="" className="col-span-full text-lg text-black select-none">Your Name</label>
                                <input type="text" className="col-span-full border rounded-md p-2" placeholder="Enter your name" name="name" />
                                <label htmlFor="" className="col-span-full text-lg text-black select-none">Your Email</label>
                                <input type="text" className="col-span-full border rounded-md p-2" placeholder="Enter your email" name="email" />
                                <label htmlFor="" className="col-span-full text-lg text-black select-none">Enter your message</label>
                                <textarea className="col-span-full border rounded-md p-3" name="message" rows='3' placeholder='Enter your message...'></textarea>
                                <button type='submit' className="col-span-full bg-[#0029FF] hover:bg-white shadow-lg font-poppins text-white hover:text-[#0029FF] py-2 rounded-md text-center select-none">Submit Now</button>
                            </form>           
                    </div>
                            <div className="flex items-center justify-evenly gap-4 bg-[#0029FF] rounded-md sm:gap-6 md:gap-8 lg:gap-10">
                                <div className="flex items-center gap-3">
                                    <img className="my-5 w-7 h-7 cursor-pointer" src={mail_icon} />
                                    <p className="font-poppins text-white text-lg">oge.akomah@dartcomprojects.com</p>
                                </div>
                                <img className="my-5 cursor-pointer" src={facebook} alt="facebook" />
                                <img className="my-5 cursor-pointer" src={linkedin} alt="linkedin" />
                                <img className="my-5 cursor-pointer" src={pinterest} alt="pinterest" />
                            </div> 
                </div>
            </div>

            <footer>
                <Footer />
            </footer> 
        </main>
    </>   
    );
};

export default Contact;
