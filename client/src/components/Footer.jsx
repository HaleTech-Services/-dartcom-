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
          <div className="flex justify-between flex-col md:flex-row gap-16">
            <div>
              <h4 className="font-bold text-orange-600">logo</h4>
              <p>
                Dartcom Project Nigeria LTD
                <br />
                No. 6, Nnabros Street,
                <br />
                Trans Amadi, Port Harcourt,
                <br />
                Rivers State, Nigeria
              </p>
              <div className="flex space-x-4 mt-4">
                <FaFacebookF />
                <FaLinkedinIn />
                <FaInstagram />
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-2">Quick Links</h4>
              <ul>
                <li onClick={() => handleNavigation("/services")}>
                  Our Services
                </li>
                <li onClick={() => handleNavigation("/about")}>About Us</li>
                <li onClick={() => handleNavigation("/")}>Our Projects</li>
                <li onClick={() => handleNavigation("/")}>Features</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Support</h4>
              <ul>
                <li>Who We Are</li>
                <li>Shop</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-2">Contact Us</h4>
              <ul>
                <li>Address</li>
                <li>Phone</li>
                <li>Email</li>
              </ul>
            </div>


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
      </footer>
      <div className="text-center md:text-right mt-2 mb-2 bg-white">
        <p className="text-gray-600">© HALETECH</p>
      </div>
    </>
  );
}
