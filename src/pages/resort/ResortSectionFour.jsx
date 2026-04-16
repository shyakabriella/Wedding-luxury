import React, { useEffect, useRef, useState } from "react";

export default function ResortSectionFour() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.15 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-t-[3px] border-[#1d4448] py-8 sm:py-10 md:py-12 lg:py-14"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="images/breathtaking.png"
          alt="luxury background"
          className="h-full w-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-[rgba(18,22,24,0.75)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-[1700px] px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-8 xl:grid-cols-2 xl:gap-8">

          {/* Left visual block */}
          <div className="relative overflow-visible">

            {/* Main image */}
            <div
              className={`relative overflow-hidden rounded-md shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all duration-1000 ${
                show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
              }`}
            >
              <img
                src="/images/exterior1.JPG"
                alt=""
                className="h-[240px] w-full object-cover sm:h-[300px] md:h-[360px] lg:h-[420px]"
              />
            </div>

            {/* Small image mobile */}
            <div
              className={`relative z-20 mx-auto -mt-12 w-[72%] max-w-[280px] overflow-hidden rounded-md shadow-[0_16px_40px_rgba(0,0,0,0.35)] transition-all duration-1000 delay-200 md:hidden ${
                show ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
            >
              <img
                src="images/exterior2.JPG"
                alt=""
                className="h-[170px] w-full object-cover"
              />
            </div>

            {/* Small image desktop */}
            <div
              className={`absolute right-[-2%] top-[52%] z-20 hidden w-[200px] -translate-y-1/2 overflow-hidden rounded-md shadow-[0_18px_45px_rgba(0,0,0,0.38)] transition-all duration-1000 delay-200 md:block ${
                show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
            >
              <img
                src="images/5K8A0644.jpg"
                alt=""
                className="h-[200px] w-full object-cover"
              />
            </div>
          </div>

          {/* Right text block */}
          <div
            className={`relative z-30 transition-all duration-1000 delay-300 ${
              show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            <div className="max-w-[520px] xl:ml-auto">

              {/* Eyebrow (ONE LINE) */}
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/85 whitespace-nowrap">
                Prime Luxury Apartment Living
              </p>

              {/* Title (ONE LINE) */}
              <h2
                className="mt-2 text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-medium text-white whitespace-nowrap overflow-hidden text-ellipsis"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                }}
              >
                Discover Modern Apartments Designed For Comfort, Elegance And Everyday Living
              </h2>

              {/* Description (ONE LINE) */}
              <p className="mt-4 text-[12px] sm:text-[13px] md:text-[14px] text-white/80 whitespace-nowrap overflow-hidden text-ellipsis">
                Experience refined apartment living with premium finishes, serene surroundings, and thoughtfully designed spaces tailored for your lifestyle.
              </p>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}