import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Navbar () {
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

  return (
    <nav className="w-full h-[80px] bg-white flex items-center justify-between px-[5rem] py-3 fixed top-0 right-0 left-0 z-10">
      <h4 className="text-xl font-bold">dart</h4>
      <ul className="md:flex items-center gap-12 hidden ">
        {navLinks.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            className={`${
              location.pathname === path
                ? "text-[#4D69FF] font-semibold relative after:content after:block after:w-full after:h-[2px] after:bg-[#4D69FF]"
                : "text-[#333333]"
            }`}
          >
            {name}
          </Link>
        ))}
      </ul>
      <button className="text-white bg-[#4D68FF] px-8 py-2 rounded-md font-medium">
        Contact Us
      </button>
    </nav>
  );
}