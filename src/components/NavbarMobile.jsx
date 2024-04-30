/* eslint-disable react/prop-types */
import { menu } from "@/constatnts/examples";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useNavigate } from "react-router-dom";

const NavbarMobile = ({ visible, onClick }) => {
  const navigate = useNavigate();

  const onItemClick = (link) => {
    onClick();
    console.log(link);
    navigate(link);
  };

  return (
    <>
      {visible ? (
        <div
          className={`block absolute top-0 left-0 w-full h-screen bg-white z-50 p-10`}
        >
          <button className="absolute right-6 top-6" onClick={() => onClick()}>
            <IoIosCloseCircleOutline size={29} />
          </button>
          <div>
            <ul className="flex flex-col gap-10">
              {menu.length > 0
                ? menu.map(({ id, name, to }) => (
                    <li key={id} className="font-medium text-2xl">
                      <button onClick={() => onItemClick(to)}>{name}</button>
                    </li>
                  ))
                : null}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default NavbarMobile;
