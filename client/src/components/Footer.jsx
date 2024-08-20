import send from "../assets/send.png";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <footer className=" text-white py-12 bg-[#2D3E4E]">
        <div className="container mx-auto px-4 py-4">
          <div className="grid justify-around grid-cols-2 md:flex md:flex-row gap-16">
            <div className="w-full md:w-2/12">
              <img
                src="/assets/Logo.jpeg"
                alt="Dartcom"
                style={{ width: "9rem", height: "3.5rem" }}
              />
            </div>
            <div>
              <small>
                Dartcom Project Nigeria LTD
                <br />
                No. 19B, Eliwelibo Main Road, Mandela Estate, 
                <br />
                Off Sars Road, Rukpokwu, Port Harcourt,
                <br />
                Rivers State, Nigeria
              </small>
              <div className="flex space-x-4 mt-4">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul>
                <li onClick={() => handleNavigation("/services")} className="cursor-pointer mb-5">
                  Our Services
                </li>
                <li onClick={() => handleNavigation("/about")} className="cursor-pointer mb-5">About Us</li>
                <li onClick={() => handleNavigation("/")} className="cursor-pointer mb-5">Our Projects</li>
                <li onClick={() => handleNavigation("/")} className="cursor-pointer mb-5">Features</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Support</h4>
              <ul>
                <li className="cursor-pointer mb-5">Who We Are</li>
                <li className="cursor-pointer mb-5"></li>
                <li className="cursor-pointer">FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Contact Us</h4>
              <ul>
                <li><small>Address</small></li>
                <li><small>+234 803 083 6623</small></li>
                <li className="cursor-pointer mb-5"><small>info@dartcomprojects.com</small></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center md:text-right mt-0.5 bg-[#2D3E4E]">
        <small className="text-white mr-9 ">
          Developed by HALETECH Services
        </small>
      </div>
    </>
  );
}
