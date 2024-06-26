import React, { useState } from "react";
import about_us from "../assets/icons8-team-24.png";
import gallery from "../assets/icons8-gallery-30.png";
import contact_us from "../assets/icons8-address-book-48.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import pinterest from "../assets/pinterest.png";
import mail_icon from "../assets/mail_icon.svg";
import call_icon from "../assets/call_icon.svg";
import location_icon from "../assets/location_icon.svg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";



const Contact = () => {
    const [showDetails, setShowDetails] = useState(false);
  
    // const handleShowDetailsClick = () => {
    //   setShowDetails(!showDetails);
    // };
  return (
    <>
        <header>
            <Navbar />
        </header>
        <div className="bg-[#0029FF] mt-[100px] w-auto h-auto text-white pt-8 pb-8 flex rounded-lg ml-2 bg-center">
            <div className="flex items-center px-[80px] pb-6">
                <div className="pt-3 flex flex-col space-x-4">
                    <div className=" flex items-center gap-6 ">
                        <img src={location_icon} alt="location icon" className="cursor-pointer"/>
                        <p className="mb-6">
                            Dartcom Projects Nigeria Limited. No. 6 <br /> Ndahbros Street Trans
                            Amadi, Portharcourt. <br /> Rivers State, Nigeria.
                        </p>
                    </div>
                    <div className="flex items-center gap-6"> 
                        <p> <img src={call_icon} alt="call icon" className="cursor-pointer"/> +234 8030836623</p>
                        <p> <img src={call_icon} alt="call icon" className="cursor-pointer"/> +234 8182746559</p>
                    </div>
                    
                    <div className="flex items-center gap-6">
                        <img src={mail_icon} alt="mail icon" className="cursor-pointer"/>
                        <p>oge.akomah@dartcomprojects.com</p>
                    </div>
                    
                </div>
                <div className="flex flex-col gap-9">
                    <Link className="flex gap-3" to={"/about"}>
                        <img src={about_us} alt="send" />
                        <p>About us</p>
                    </Link>
                    <Link className="flex gap-3" to={"/gallery"}>
                        <img src={gallery} alt="send" />
                        <p>Gallery</p>
                    </Link>

                    <Link className="flex gap-3" to={"/contact"}>
                        <img src={contact_us} alt="send" />
                        <p> Contact Us </p>
                    </Link>
                </div>
                <div className="pt-6">
                    <p className="mb-5">Social Media</p>
                    <img className="my-5 cursor-pointer" src={facebook} alt="facebook" />
                    <img className="my-5 cursor-pointer" src={linkedin} alt="linkedin" />
                    <img className="my-5 cursor-pointer" src={pinterest} alt="pinterest" />
                </div>
            </div>

        {showDetails && (
          <div className="flex items-center">
            <p>Website: https://www.dartcom.com.ng </p>
          </div>
        )}
      </div>

      <footer>
        <Footer />
      </footer> 
    </>   
    );
};
export default Contact;