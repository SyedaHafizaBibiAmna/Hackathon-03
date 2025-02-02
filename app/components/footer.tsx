
import React from "react";
import { GiSofa } from "react-icons/gi";



const Footer = () => {
  return (
    <div className="flex justify-evenly items-center px-5 mx-10">
      <footer className="text-gray-600 body-font justify-between items-center ml-10 gap-7 ">
        <div className="container px-4 py-24 ">
          <div className="flex flex-wrap md:text-left text-center order-first">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              {/* <GiSofa className="text-blue-600 text-3xl mr-2" /> */}
              <span className="flex title-font font-bold text-primary tracking-widest text-xl mb-3">
                <GiSofa className="text-purple-600 mr-2" />
                Sit & Style
              </span>
              <p>
                Vivamus tristique odio sit amet velit semper, eu posuere turpis
                interdum. Cras egestas purus
              </p>
              <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a className="text-blue-600">
                <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  strokeLinecap="round"
  strokeLinejoin="round"
  strokeWidth={2}
  className="w-6 h-6"
  viewBox="0 0 24 24"
>
  {/* Outer Circle with outline */}
  <circle cx="12" cy="12" r="12" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-300" />
  {/* Inner Circle */}
  <circle cx="12" cy="12" r="9" fill="currentColor" className="text-purple-700" />
  {/* "F" Shape Path */}
  <path
    d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
    fill="#fff"
  />
</svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 4.993 3.045 9.26 7.406 11.043-.103-.94-.196-2.384.04-3.412.213-.938 1.368-5.98 1.368-5.98s-.348-.695-.348-1.719c0-1.609.933-2.813 2.092-2.813 1.02 0 1.514.767 1.514 1.685 0 1.027-.652 2.563-.987 3.99-.282 1.195.594 2.168 1.762 2.168 2.115 0 3.742-2.229 3.742-5.437 0-2.837-2.037-4.819-4.941-4.819-3.368 0-5.343 2.528-5.343 5.14 0 1.027.396 2.132.892 2.733a.359.359 0 0 1 .082.345c-.09.378-.29 1.19-.33 1.357-.051.214-.168.26-.39.157-1.46-.678-2.37-2.796-2.37-4.503 0-3.663 2.662-7.023 7.678-7.023 4.031 0 7.162 2.872 7.162 6.705 0 4.001-2.525 7.223-6.037 7.223-1.178 0-2.285-.61-2.662-1.33 0 0-.633 2.515-.785 3.095-.238.912-.876 2.048-1.306 2.739A11.996 11.996 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                  </svg>
                </a>
                <a className="ml-3 text-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                  >
                    <path d="M21.8 8.001a2.75 2.75 0 0 0-1.935-1.949C18.46 5.5 12 5.5 12 5.5s-6.46 0-7.865.552A2.75 2.75 0 0 0 2.2 8.001C1.653 9.418 1.653 12 1.653 12s0 2.582.548 3.999a2.75 2.75 0 0 0 1.935 1.95C5.54 18.5 12 18.5 12 18.5s6.46 0 7.865-.552a2.75 2.75 0 0 0 1.935-1.95c.548-1.417.548-3.999.548-3.999s0-2.582-.548-3.999zM10 15V9l5.5 3L10 15z" />
                  </svg>
                 
                </a>
              </span>
             
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
                CATEGORIES
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#272343] hover:text-purple-600">
                    Desk Chair
                  </a>
                </li>
                <li>
                  <a className="text-[#272343] hover:text-purple-600">
                    Wooden Chair
                  </a>
                </li>
                <li>
                  <a className="text-[#272343] hover:text-purple-600">
                    Wing Chair
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
                SUPPORT
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <a className="text-[#272343]">
                  Help & Support
                  </a>
                </li>
                <li>
                  <a className="text-[#272343]">
                  Tearms & Conditions
                  </a>
                </li>
                <li>
                  <a className="text-[#272343] ">
                  Privacy Policy
                  </a>
                </li>
                <li>
                  <a className="text-[#272343 ">
                  Help
                  </a>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-gray-400 tracking-widest text-sm mb-3">
              Newsletter
              </h2>
              <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
                <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                  {/* <label
                    htmlFor="footer-field"
                    className="leading-7 text-sm text-gray-600"
                  >
                    Placeholder
                  </label> */}
                  <input
                    type="text"
                   placeholder="Your email"
                    name="footer-field"
                    className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-purple-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Subscribe
                </button>
              </div>
              <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.
               
              </p>
            </div>
          </div>
        </div>
        

        <div className="flex items-center justify-between h-12 w-full   md:px-12 ">
      {/* Left Section */}
      <span className="text-[#a399d4] flex items-center gap-2 text-sm">
        
      © @ 2021 - Blogy - Designed & Develop by
      <a
                href="https://twitter.com"
                rel="noopener noreferrer"
                className="text-gray-600 ml-1"
                target="_blank"
              >
                Zakirsoft
              </a>
      </span>

      {/* Right Section */}
      <div className="text-[#a399d4] flex items-center gap-6 text-sm">
      <GiSofa className="text-purple-600 text-3xl mr-2" />
      </div>
    </div>
      </footer>
    </div>
  );
};

export default Footer;
