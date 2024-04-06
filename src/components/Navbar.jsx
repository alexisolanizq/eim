import { useEffect, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  return (
    <nav
      className={`sticky z-50 top-0 flex justify-between items-center py-6 py-md-14 px-10 px-md-28 ${
        scrolling && "shadow backdrop-blur-md bg-white/50"
      }`}
    >
      <div className="flex items-center gap-5 ">
        <Link to={"/"} className="text-2xl font-semibold">
          EIM
        </Link>
        <div className="flex gap-2 items-center">
          <FaTiktok />
          <FaXTwitter />
          <FaInstagram />
          <FaFacebookSquare />
        </div>
      </div>
      <ul className="hidden md:flex gap-8 text-lg font-semibold">
        <li>Home</li>
        <li>Brands</li>
        <li>Contact us</li>
        <li>Comments</li>
        <li>Articles</li>
      </ul>
      <button className="block md:hidden">
        <IoMdMenu fontSize={30} />
      </button>
    </nav>
  );
};

export default Navbar;
