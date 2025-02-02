
import React from "react";

import { MdCheck } from "react-icons/md";
import SignInButtonWrapper from "./SignInButtonWrapper";

const Topbar = () => {
  return (
    <div className="flex items-center justify-between h-12 w-full bg-[#272343] px-4 md:px-12 lg:px-24">
      {/* Left Section */}
      <span className="text-[#a399d4] flex items-center gap-2 text-sm">
        <MdCheck className="text-[#a399d4]" />
        Free shipping on all orders over $50
      </span>

      {/* Right Section */}
      <div className="text-[#a399d4] flex items-center gap-6 text-sm">
        <select className="bg-[#272343] text-[#a399d4]   px-2 py-1 rounded">
          <option value="english">Eng</option>
        </select>
        <a href="/faqs" className="hover:underline">
          Faqs
        </a>
        <span className="flex items-center gap-1">
         
          <SignInButtonWrapper/>
         
        </span>
      </div>
    </div>
  );
};

export default Topbar;