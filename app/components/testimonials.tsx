"use client";

import { useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "bootstrap-icons/font/bootstrap-icons.css";

import "swiper/css";
import "swiper/css/pagination";
import AOS from "aos";
import "aos/dist/aos.css";

// Testimonials Data
const testimonials = [
  {
    name: "Saul Goodman",
    text: "Love my new sofa! Super comfy, stylish, and great quality. Fast delivery too!",
    image: "/images/testimonials/1.jpg",
  },
  {
    name: "Sara Wilsson",
    text: "Their free measurement service, pick-up, and delivery make everything so convenient. The team really pays attention to detail—I’ll definitely be a repeat customer!",
    image: "/images/testimonials/2.jpg",
  },
  {
    name: "Jena Karlis",
    text: "Best office chair! Great lumbar support and perfect for long hours. Highly recommend!",
    image: "/images/testimonials/3.jpg",
  },
  {
    name: "John Larson",
    text:  "Coziest recliner ever! Perfect for relaxing. Worth every penny!",
    image: "/images/testimonials/4.jpg",
  },
];

export default function Testimonials() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center section-title" data-aos="fade-up">
          <h2 className="text-3xl font-bold">FeedBacks</h2>
        </div>

        <div className="mt-8" data-aos="fade-up" data-aos-delay="100">
          <Swiper
            modules={[Pagination, Autoplay]}
            loop={true}
            speed={600}
            autoplay={{ delay: 5000 }}
            slidesPerView="auto"
            pagination={{ clickable: true }}
            className="init-swiper"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <div className="p-6 bg-white shadow-md rounded-lg">
                  <div className="flex flex-col items-center text-center">
                    <p className="text-gray-700">
                      <i className="bi bi-quote quote-icon-left text-lg"></i>
                      <span className="italic">{testimonial.text.replace(/"/g, '&quot;')}</span>

                      <i className="bi bi-quote quote-icon-right text-lg"></i>
                    </p>
                    <h3 className="mt-4 font-semibold">{testimonial.name}</h3>
                    <div className="mt-2 flex space-x-1 text-yellow-500">
                      {[...Array(5)].map((_, i) => (
                        <i key={i} className="bi bi-star-fill"></i>
                      ))}
                    </div>
                    <div className="mt-4 w-24 h-24 relative">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={70} // 24 * 4 = 96px
                        height={50}
                        objectFit="cover"
                        className="rounded-3xl"
                      />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
