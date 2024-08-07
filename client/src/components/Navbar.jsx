import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import Contact from "../routes/Contact";
import { FaBars } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const navLinks = [
    {
      name: "Home",
      path: "/",
    },

    {
      name: "About Us",
      path: "/about",
    },

    {
      name: "Services",
      path: "/services",
    },

    {
      name: "Contact",
      path: "/contact",
    },

    {
      name: "Gallery",
      path: "/gallery",
    },
  ];

  const [navOpen, setNavOpen] = useState(false)
  const handleToggleNavOpen=()=>setNavOpen(!navOpen)
  const handleNavTouched = (e)=>{
    console.log(e.target.classList, typeof e.target)
    if(e.target.classList.contains("navHolder")){
      console.log("Is target")
      handleToggleNavOpen()
    }
  }
  return (
    <>
      <nav className="w-full h-[80px] bg-white flex items-center justify-around px-[2rem] fixed top-0 right-0 left-0 z-10">
        <h4 className="text-xl font-bold">Logo</h4>
        <FaBars className="md:hidden" size={30} onClick={handleToggleNavOpen} />
        <ul className="md:flex items-center gap-12 hidden ">
          {navLinks.map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`${
                location.pathname === path
                  ? "text-white bg-[#2D3E4E] p-3 rounded-md font-semibold relative"
                  : "text-[#333333]"
              }`}
            >
              {name}
            </Link>
          ))}
          <button className="text-white bg-[#2D3E4E] px-8 py-2 rounded-sm font-medium md:ml-auto">
            <Link className="flex gap-3" to={"/contact"}>
              <p>Contact Us</p>
            </Link>
          </button>
        </ul>
      </nav>
      <nav className={`fixed top-0 right-0 h-screen w-screen bg-[rgba(0,0,0,0.5)] z-50 ${navOpen?"flex":"hidden"} flex-col items-end navHolder`} onClick={(e)=>handleNavTouched(e)}>
        <section className="w-1/2 h-full bg-white ">
          <ul className="flex flex-col items-end w-full p-5 gap-12 ">
            <FaX size={40} onClick={handleToggleNavOpen} />
            {navLinks.map(({ name, path }) => (
              <Link
                key={name}
                to={path}
                className={`w-[80%] text-right px-5 ${
                  location.pathname === path
                    ? "text-white bg-[#2D3E4E] p-3 rounded-md font-semibold relative"
                    : "text-[#333333]"
                }`}
                onClick={handleToggleNavOpen}
              >
                {name}
              </Link>
            ))}
            <button className="text-white bg-[#2D3E4E] px-8 py-2 rounded-sm font-medium md:ml-auto">
              <Link className="flex gap-3" to={"/contact"}>
                <p>Contact Us</p>
              </Link>
            </button>
          </ul>
        </section>
      </nav>
    </>
  );
}
