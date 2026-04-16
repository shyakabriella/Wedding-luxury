import React, { useEffect, useRef, useState } from "react";

export default function ResortSectionTwo() {
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
      className="w-full overflow-hidden bg-[#f3f2ec] py-12 sm:py-14 md:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1fr] lg:gap-10 xl:gap-12">
          {/* Left Tall Image */}
          <div
            className={`transition-all duration-1000 ease-out ${
              show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
            }`}
          >
            <div className="w-full">
              <img
                src="/images/tent4.png"
                alt="Bride holding bouquet"
                className="h-[420px] rounded-md w-full object-cover sm:h-[520px] md:h-[620px] lg:h-[710px] xl:h-[720px]"
              />
            </div>
          </div>

          {/* Right Side */}
          <div className="flex flex-col">
            {/* Text Content */}
            <div
              className={`transition-all duration-1000 ease-out delay-150 ${
                show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
              }`}
            >
              <p
                className="text-[11px] uppercase tracking-[0.08em] text-[#a77c55] sm:text-[12px] md:text-[13px]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Wedding Venues Luxury
              </p>

              <h2
                className="mt-3 max-w-[520px] text-[15px] font-normal leading-[0.95] text-[#18334a] sm:text-[20px] md:text-[30px] lg:text-[35px]"
                style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                }}
              >
                Envision Your
                Special Day
              </h2>

              <p
                className="mt-6 max-w-[560px] text-[13px] leading-[1.85] text-[#24343a] sm:text-[14px] md:text-[15px]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Luxury Garden Palace is a frontrunner in wedding venues
                providing a scenic destination that you and
                your guests will never forget. With gorgeous 360-degree views
                from our beautiful venue paired with our elevated standard of
                service, every detail will be just as you&apos;ve always
                imagined.
              </p>

              <a
                href="/wedding-gallery"
                target="_blank"
                className="mt-8 rounded-md inline-flex h-[48px] min-w-[215px] items-center justify-center bg-[#a38b4c] px-8 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#8f7941] sm:h-[50px] sm:min-w-[230px]"
                style={{ fontFamily: "Montserrat, sans-serif" }}
              >
                Take A Tour
              </a>
            </div>

            {/* Bottom Right Image */}
            <div
              className={`mt-10 transition-all duration-1000 ease-out delay-300 sm:mt-12 md:mt-14 lg:mt-16 ${
                show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
              }`}
            >
              <div className="w-full lg:max-w-[620px]">
                <img
                  src="images/weddinghall1.png"
                  alt="Couple enjoying wedding moment"
                  className="h-[260px] rounded-md w-full object-cover sm:h-[320px] md:h-[360px] lg:h-[335px] xl:h-[350px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}