import { useState } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';


export const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative border-b bg-[#FFF] flex flex-wrap items-center justify-between px-2 py-1  mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <img src="./assets/icons/logo.svg" alt="logo" />
            <button
              className=" cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              {navbarOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 6L6 18"
                    stroke="#1A75FF"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6 6L18 18"
                    stroke="#1A75FF"
                    strokeWidth="2"
                    strokeLinecap="square"
                    strokeLinejoin="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 7H19"
                    stroke="#1A75FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 12H19"
                    stroke="#1A75FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M5 17H19"
                    stroke="#1A75FF"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`lg:flex flex-grow items-center duration-300
              ${navbarOpen ? " flex" : " hidden"}`}
            id="example-navbar-danger"
          >
            <ul className="flex flex-cols justify-center lg:justify-end flex-row flex-1 items-center space-x-2 lg:space-x-4 list-none lg:ml-auto">
              <li className="nav-item">
              <div className='flex items-center md:space-x-4'>
                <ConnectButton />
              </div>
              </li>
              <li className="nav-item cursor-pointer hover:bg-[#F6F8FB] p-2 sm:p-3 rounded-md duration-300">
                <img src="./assets/icons/search.svg" alt="search" />
              </li>
              <li className="nav-item cursor-pointer hover:bg-[#F6F8FB] p-2 sm:p-3 rounded-md duration-300">
                <img src="./assets/icons/bell.svg" alt="bell" />
              </li>
              <li className="nav-item cursor-pointer hover:bg-[#F6F8FB] p-2 sm:p-3 rounded-md duration-300">
                <img src="./assets/icons/setting.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
