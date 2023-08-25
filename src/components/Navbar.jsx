import { useState } from "react";
import logo from "../assets/logo2.jpg";
import { HiDotsHorizontal } from "react-icons/hi";
import Dropdown from "./Dropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const menu = (
    <>
      <li className="hover:border-b-2 border-b-orange-400 duration-100 font-Poppins">
        <a href="#">Explore</a>
      </li>
      <li className="hover:border-b-2 border-b-orange-400 duration-100 font-Poppins">
        <a href="#">Discover</a>
      </li>
      <li className="hover:border-b-2 border-b-orange-400 duration-100 font-Poppins">
        <a href="#">For Professionals</a>
      </li>
      <li className="relative cursor-pointer">
        <a onClick={() => setIsSubMenuOpen((prev) => !prev)}>
          <HiDotsHorizontal />
        </a>
        {isSubMenuOpen && <Dropdown />}
      </li>
      <li className=" font-Hind font-medium">
        <button
          className="btn border shadow-md border-gray-300  p-2 rounded-md text-gray-700 "
          href="#"
        >
          Submit Photos
        </button>
      </li>
      <li className="text-5xl text-gray-300 hidden lg:block">
        <a href="#">|</a>
      </li>
      <li className="hover:border-b-2 border-b-orange-400 duration-100 font-Poppins">
        <a href="#">Login</a>
      </li>
      <li className=" font-Hind font-medium">
        <button
          className="btn border shadow-md bg-orange-400  p-2 rounded-md text-gray-700 font-Poppins "
          href="#"
        >
          Join Free
        </button>
      </li>
    </>
  );

  return (
    <>
      <div className="py-5 px-10 lg:px-5 font-jost sticky top-0 bg-white z-50 shadow-sm">
        <div className="relative flex items-center justify-between z-30">
          <a to="/" className="inline-flex items-center">
            <img src={logo} alt="" className="w-8/12" />
          </a>
          <ul className=" items-center hidden space-x-6 lg:flex text-[16px] uppercase">
            {menu}
          </ul>
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-500 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm z-30">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a to="/" className="inline-flex items-center">
                        <img src={logo} alt="" className="w-8/12" />
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">{menu}</ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
