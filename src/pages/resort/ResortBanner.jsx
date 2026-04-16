import React from "react";

const services = [
  [
    "Exclusive Venue Access",
    "Dedicated Event Team",
    "Discounted Guest Room Blocks",
    "Complimentary Food Tasting",
  ],
  [
    "Ceremony Garden",
    "Two Wedding Party Day Use Rooms",
    "Tables, Chairs, Linens & Place Settings",
    "Complimentary Cake Planning",
  ],
  [
    "Hors D’oeuvres Patio",
    "Complimentary On-Site Parking",
    "On-Site Gourmet Catering",
    "Hand-Poured Sparkling Cider Toast",
  ],
];

export default function ResortBanner() {
  return (
    <section className="w-full bg-[#f4f3ef] py-8 sm:py-10 md:py-12 lg:py-14">
      <div className="mx-auto max-w-[1240px] px-5 sm:px-6 md:px-8 lg:px-10">
        {/* Heading */}
        <div className="flex items-center justify-center gap-4 sm:gap-5 md:gap-6">
          <span className="hidden h-px flex-1 bg-[#b39263] sm:block" />

          <div className="shrink-0 text-center">
            <p
              className="mb-1 text-[11px] font-normal tracking-[0.06em] text-[#a37d4f] sm:text-[12px] md:text-[13px]"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Our Wedding
            </p>

            <h2
              className="text-[24px] font-normal leading-[0.9] text-[#143554] sm:text-[30px] md:text-[36px] lg:text-[40px]"
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
              }}
            >
              Services
            </h2>
          </div>

          <span className="hidden h-px flex-1 bg-[#b39263] sm:block" />
        </div>

        {/* Services */}
        <div className="mt-8 grid grid-cols-1 gap-y-4 sm:mt-10 md:mt-12 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-14">
          {services.map((column, columnIndex) => (
            <ul
              key={columnIndex}
              className="space-y-3 px-2 sm:px-4 md:px-5 lg:px-2"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              {column.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[12px] font-normal leading-[1.55] text-[#1f2f3a] sm:text-[13px] md:text-[14px]"
                >
                  <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#8e6f54]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ))}
        </div>

        {/* Bottom line */}
        <div className="mt-8 sm:mt-10 md:mt-12">
          <span className="block h-px w-full bg-[#b39263]" />
        </div>
      </div>
    </section>
  );
}