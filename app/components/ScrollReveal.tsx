"use client";  // This ensures this component runs only on the client side

import { useEffect } from "react";

export default function ScrollReveal({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal-on-scroll');
    
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // TypeScript will now treat entry.target as an HTMLElement
          const element = entry.target as HTMLElement;
          const delay = `${index * 0.3}s`; // Sequential delay (increase delay time for each element)
          element.style.setProperty('--delay', delay); // Set custom delay as a CSS variable
          
          // Trigger the reveal
          element.classList.add('opacity-100', 'translate-y-0', 'reveal-on-scroll-delay');
          observer.unobserve(entry.target); // Stop observing once the element is revealed
        }
      });
    }, {
      threshold: 0.2, // Trigger when 20% of the element is in view
    });

    revealElements.forEach(element => {
      observer.observe(element); // Start observing each element
    });
    
    return () => observer.disconnect(); // Clean up observer on component unmount
  }, []);

  return <>{children}</>;
}
