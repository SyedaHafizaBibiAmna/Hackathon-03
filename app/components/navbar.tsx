"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";
import { GiSofa } from "react-icons/gi";
import { useShoppingCart } from "use-shopping-cart";
import { usePathname } from "next/navigation";
import NavbarSearch from "./navbarSearch";

const links = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Product", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { handleCartClick } = useShoppingCart();

  // Toggle menu function
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="mb-8 border-b relative">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={"/"}>
          <h1 className="text-2xl md:text-4xl font-bold flex items-center">
            <GiSofa className="text-purple-600 mr-2" />
            Sit <span className="text-primary">& Style Studio</span>
          </h1>
        </Link>

        {/* Responsive Menu Button */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden rounded-md bg-gray-100 p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
        >
          {isMenuOpen ? "✖" : "☰"}
        </button>

        {/* Navigation Links (Mobile & Desktop) */}
        <nav
          className={`absolute left-0 top-[4.5rem] z-50 w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
            isMenuOpen ? "block" : "hidden"
          } lg:static lg:flex lg:w-auto lg:shadow-none`}
          style={{ top: "5rem" }} // Moves the menu slightly below the navbar
        >
          <div className="flex flex-col items-start space-y-4 px-6 py-4 lg:flex-row lg:items-center lg:space-y-0 lg:space-x-8 lg:p-0">
            {links.map((link, idx) => (
              <div key={idx}>
                <Link
                  href={link.href}
                  className={`text-lg font-semibold ${
                    pathname === link.href
                      ? "text-primary"
                      : "text-gray-600 hover:text-primary"
                  }`}
                  onClick={closeMenu} // Closes menu on click
                >
                  {link.name}
                </Link>
              </div>
            ))}
            <NavbarSearch/>
          </div>
          
        </nav>

        {/* Cart Button */}
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
