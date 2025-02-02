import React from "react";
import Image from "next/image";

const logos = [
  { src: "/images/L3.png", alt: "Zaphier Logo" },
  { src: "/images/L4.png", alt: "Pipe Drive Logo" },
  { src: "/images/L5.png", alt: "Cib Bank Logo" },
  { src: "/images/L6.png", alt: "Company 4 Logo" },
  { src: "/images/L7.png", alt: "Burnt Toast Logo" },
  { src: "/images/L8.png", alt: "Panda Doc Logo" },
  { src: "/images/L9.png", alt: "Moz Logo" },
];

const CompanyLogo = () => {
  return (
    <div className="w-full bg-[#1C1B1F] py-6 overflow-hidden">
      <div className="flex space-x-10 animate-marquee">
        {logos.map((logo, index) => (
          <div key={index} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120} // Adjust for mobile
              height={80}
              className="object-contain sm:w-32 sm:h-24 md:w-40 md:h-28 lg:w-48 lg:h-32"
            />
          </div>
        ))}

        {/* Duplicate logos for smooth infinite scroll */}
        {logos.map((logo, index) => (
          <div key={`duplicate-${index}`} className="flex-shrink-0">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={120} // Adjust for mobile
              height={80}
              className="object-contain sm:w-32 sm:h-24 md:w-40 md:h-28 lg:w-48 lg:h-32"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyLogo;
