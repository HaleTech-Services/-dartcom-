import send from "../assets/send.png";
import { useNavigate } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

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
      </div>
        <div className="text-center md:text-right mt-8">
          <p className="text-gray-600">© HALETECH</p>
        </div>
    </footer>
  );
}
