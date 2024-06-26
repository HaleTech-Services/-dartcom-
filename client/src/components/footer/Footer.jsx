import React from "react";
import send from "../../assets/send.png";
import facebook from "../../assets/facebook.png";
import linkedin from "../../assets/linkedin.png";
import pinterest from "../../assets/pinterest.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#0029FF] mt-[180px] w-full h-auto text-white pt-8 pb-8">
      <div className="flex items-center justify-between px-[80px] pb-6">
        <div className="pt-3">
          <p className="mb-6">
            Dartcom Projects Nigeria Limited. No. 6 <br /> Ndahbros Street Trans
            Amadi, Portharcourt. <br /> Rivers State, Nigeria.
          </p>
          <p>+234 8030836623</p>
          <p>+234 8182746559</p>
          <p>oge.akomah@dartcomprojects.com</p>
        </div>
        <div className="flex flex-col gap-9">
          <Link className="flex gap-3" to={"/about"}>
            <img src={send} alt="send" />
            <p>About us</p>
          </Link>
          <Link className="flex gap-3" to={"/gallery"}>
            <img src={send} alt="send" />
            <p>Gallery</p>
          </Link>

          <Link className="flex gap-3" to={"/contact"}>
            <img src={send} alt="send" />
            <p>Contact Us</p>
          </Link>
        </div>
        <div className="pt-6">
          <p className="mb-5">Social Media</p>
          <img className="my-5" src={facebook} alt="facebook" />
          <img className="my-5" src={linkedin} alt="linkedin" />
          <img className="my-5" src={pinterest} alt="pinterest" />
        </div>
      </div>
      <p className="border-t-2 text-end pr-[82px] pt-4">Copyright: 2024 Dartcom Publishers</p>
    </div>
  );
};

export default Footer;
