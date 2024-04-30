import { IoMdMenu } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaTiktok, FaInstagram, FaFacebookSquare } from "react-icons/fa";
import { Link } from "react-router-dom";
import NavbarMobile from "./NavbarMobile";
import useNavbar from "@/hooks/useNavbar";
import { menu } from "@/constatnts/examples";
const Navbar = () => {
  const { changeVisibility, scrolling, visibleMenu } = useNavbar();

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
        {menu.length > 0
          ? menu.map(({ id, name, to }) => (
              <li key={id}>
                <Link to={to}>{name}</Link>
              </li>
            ))
          : null}
      </ul>
      <button className="block md:hidden" onClick={() => changeVisibility()}>
        <IoMdMenu fontSize={30} />
      </button>
      <NavbarMobile visible={visibleMenu} onClick={changeVisibility} />
    </nav>
  );
};

export default Navbar;
