import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,
    cssEase: "ease-in-out",
  };

  const slides = [
    "/images/hero1.jpg",
    "/images/hero2.jpg",
    "/images/hero3.jpg",
  ];

  return (
    <div className="relative mt-0 w-full">
      <Slider {...settings}>
        {slides.map((s, i) => (
          <div
            key={i}
            className="relative w-full h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[85vh] overflow-hidden"
          >
            {/* ✅ Responsive image scaling */}
            <img
              src={s}
              alt={`Slide ${i + 1}`}
className="w-full h-full object-contain sm:object-cover object-center md:object-[50%_30%] transition-all duration-700"
            />

            {/* ✅ Overlay gradient for better text visibility */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

            {/* ✅ Optional caption (fade animation ready) */}
            {/* <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
              <div className="animate-fade-in-up">
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
                  Coming Soon
                </h2>
                <p className="mt-2 text-base sm:text-lg md:text-xl">
                  Stay tuned for January 2026
                </p>
              </div>
            </div> */}
          </div>
        ))}
      </Slider>
    </div>
  );
}
