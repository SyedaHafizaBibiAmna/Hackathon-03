"use client";


import Link from "next/link";
// import React from "react";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";

const links=[
    {name:'Home',href:'/'},
    {name:'Chairs',href:'/chairs'},
    // {name:'Dining Chair',href:'/dining-chair'}, 
    {name:'Sofas',href:'/sofas'},
    {name:'Office Chair',href:'/office-chair'},
];



export default function Navbar() {
    const pathname = usePathname()
    const { handleCartClick } = useShoppingCart();
    console.log(pathname)
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href={"/"}>
        <h1 className="text-2xlmd:text-4xl font-bold">
            Sit <span className="text-primary">& Style Studio</span></h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
            {links.map((link, idx)=>(
                <div key={idx}>
                    {pathname === link.href ? (
                        <Link 
                        className="text-lg font-semibold text-primary" href={link.href}>
                          {link.name}
                            </Link>
                    ):(
                        <Link href={link.href} className="text-lg font-semibold text-gray-600 hover:text-primary">
                            {link.name} 

                        </Link>
                    )}
                    
                </div>
            ))}
            </nav>
            <div className="flex divide-x border-r sm:border-l">
            <Button
            variant={"outline"}
            onClick={() => handleCartClick()}
            className="flex flex-col gap-y-1.5 h-12 w-12 sm:h-20 sm:w-20 md:h-24 md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-500 sm:block">
              Cart
            </span>
          </Button>
            </div>

      </div>
    </header>
  );
}


// "use client";

// import Link from "next/link";
// import React, { useState } from "react";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="hidden gap-12 lg:flex 2xl:ml-16">
//   <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4">
//     {/* Left-aligned Desktop Menu */}
//     <div className="flex items-center gap-8">
//       <Link
//         href="/"
//         className="text-[#007580] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
//       >
//         Home
//       </Link>
//       <Link
//         href="/cart"
//         className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
//       >
//         Shop
//       </Link>
//       <Link
//         href="/product"
//         className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
//       >
//         Product
//       </Link>
//       <Link
//         href="/faq"
//         className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
//       >
//         Pages
//       </Link>
//       <Link
//         href="/about"
//         className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
//       >
//         About
//       </Link>
//       <Link
//         href="/contact"
//         className="text-[#736c90] hover:text-blue-600 transition-colors duration-300 text-[14px] font-medium"
//       >
//         Contact Us
//       </Link>
//     </div>

//     {/* Right-aligned Contact Information */}
//     <div className="flex items-center gap-2">
//       <span className="font-normal text-[#636270] text-[14px]">Contact:</span>
//       <span className="font-medium text-[#272343] text-[14px]">
//         (808) 555-0111
//       </span>
//     </div>
//   </div>
// </nav>

//   );
// };

// export default Navbar;

