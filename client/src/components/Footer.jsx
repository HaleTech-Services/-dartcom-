import send from "../assets/send.png";
import { useNavigate } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0); // Scroll to top
  };

  return (
    <div className="bg-[#0029FF] mt-[18px] w-full h-auto text-white pt-8 pb-8">
      <div className="flex flex-col md:flex-row gap-3 p-5">
        <div className="flex flex-col gap-5">
          <span className="w-[40ch]">
            Dartcom Projects Nigeria Ltd. No. 6 Ndahbros Street Trans Amadi,
            Port Harcourt. Rivers State, Nigeria.
          </span>
          <div className="flex flex-col">
            <span>+234 8030836623</span>
            <span>+234 8182746559 </span>
            <span>oge.akomah@dartcomprojects.com</span>
          </div>
        </div>
        <div className="md:ml-auto md:mr-[8rem]">
          <h2 className="mb-3 text-xl font-bold">Useful Links</h2>
          <ul>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/")}
                className="flex items-center"
              >
                <img src={send} alt="Send Icon" className="mr-3" />
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/about")}
                className="flex items-center"
              >
                <img src={send} alt="Send Icon" className="mr-3" />
                About Us
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/gallery")}
                className="flex items-center"
              >
                <img src={send} alt="Send Icon" className="mr-3" />
                Gallery
              </a>
            </li>
            <li>
              <a
                href="#"
                onClick={() => handleNavigation("/contact")}
                className="flex items-center"
              >
                <img src={send} alt="Send Icon" className="mr-3" />
                Contact us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2">
          <h2 className="mb-3 text-xl font-bold">Social media</h2>
          <FaFacebook size={30} />
          <FaLinkedin size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
      <p className="border-t-2 text-center md:text-end md:pr-10 pt-4 w-full block ">
        Copyright: 2024 Dartcom Publishers
      </p>
    </div>
  );
}
