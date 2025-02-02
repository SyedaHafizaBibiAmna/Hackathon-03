import React from "react";
import { FaClock, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FcCustomerSupport } from "react-icons/fc";

const Contact = () => {
  return (
    <div className="flex justify-center items-center">
      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <div className="text-center">
            {/* <p className="font-medium text-blue-500 dark:text-blue-400">Contact us</p> */}
            <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">
              Get In Touch With Us
            </h1>
            <span className="mt-3 text-gray-500 dark:text-gray-400">
              For More Information About Our Product & Services. Please Feel
              Free To Drop Us
              <br /> An Email. Our Staff Always Be There To Help You Out. Do Not
              Hesitate!
            </span>
          </div>

          {/* Grid Section */}
          <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-2">
            {/* Left Section */}
            <div>
              <div className="mb-8">
                <h2 className="text-lg flex items-center font-medium text-gray-800 dark:text-white">
                  <FaLocationDot className="text-black-500 w-6 h-6 mr-2" />
                  Address
                </h2>
                <div className="mt-1 w-fit px-4 py-2 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <span className="text-gray-600 dark:text-gray-300">
                    236 5th SE Avenue, New York NY10000, United States
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg flex items-center font-medium text-gray-800 dark:text-white">
                  <FaPhoneAlt className="text-black-500 w-5 h-5 mr-2" />
                  Phone
                </h2>
                <div className="mt-1 w-fit px-4 py-2 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <span className="text-gray-600 dark:text-gray-300 block">
                    Mobile: +(84) 546-6789
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 block">
                    Hotline: +(84) 456-6789
                  </span>
                </div>
              </div>

              <div className="mb-8">
                <h2 className="text-lg flex items-center font-medium text-gray-800 dark:text-white">
                  <FaClock className="text-black-500 w-5 h-5 mr-2" />
                  Working Time
                </h2>
                <div className="mt-1 w-fit px-4 py-2 bg-gray-100 rounded-lg dark:bg-gray-800">
                  <span className="text-gray-600 dark:text-gray-300 block">
                    Monday-Friday: 9:00 - 22:00
                  </span>
                  <span className="text-gray-600 dark:text-gray-300 block">
                    Saturday-Sunday: 9:00 - 21:00
                  </span>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div>
              <form>
                <div className="mb-4">
                  <label
                    className="block text-gray-600 dark:text-gray-400"
                    htmlFor="name"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-gray-300"
                    placeholder="Abc"
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-600 dark:text-gray-400"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-gray-300"
                    placeholder="Abc@def.com"
                  />
                  <div className="mb-4">
                    <label
                      className="block text-gray-600 dark:text-gray-400"
                      htmlFor="name"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-gray-300"
                      placeholder="This is an optional"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    className="block text-gray-600 dark:text-gray-400"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 mt-2 text-gray-700 bg-gray-100 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400 dark:bg-gray-800 dark:text-gray-300"
                    placeholder="Write your message"
                  ></textarea>
                </div>
                <button className="w-[200px] px-4 py-2 text-white bg-purple-500 rounded-md hover:bg-purple-600">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* last */}

        <section className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div>
                <svg
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  strokeWidth="1.5"
  stroke="currentColor"
  className="w-8 h-8"
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M16 2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h.5A1.5 1.5 0 0 1 22 9.5v3a1.5 1.5 0 0 1-1.5 1.5H18a6 6 0 0 1-12 0H3.5A1.5 1.5 0 0 1 2 12.5v-3A1.5 1.5 0 0 1 3.5 8H4a2 2 0 0 0 2-2V4a2 2 0 0 1 2-2h8zM9 21a3 3 0 1 0 6 0"
  />
</svg>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  High Quality
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  crafted from top materials
                </p>
              </div>
              <div>
              <svg
  className="w-8 h-8"
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
>
  <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 12l2 2 4-4"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  />
</svg>

                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  Warranty Protection
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Over 2 years
                </p>
              </div>
              <div>
              <FcCustomerSupport className="size-8" />
                <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">
                  24 / 7 Support
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Dedicated support
                </p>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Contact;
