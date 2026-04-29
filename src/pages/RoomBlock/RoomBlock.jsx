import React, { useEffect, useState } from "react";

const guestRoomImages = [
  "images/lounge2.png",
  "images/lounge1.png",
  "images/lounge2.png",
];

const cottageImages = [
  "images/cottage1.jpg",
  "images/cottage3.jpg",
  "images/cottage2.jpg",
  

];

const houseImages = [
  "images/kitchen4.JPG",
  "images/lux dinning1.jpg",
  "images/penthouse4.JPG",
  "images/bed6.JPG",
];

const restfulEssentials = [
  [
    "Heating & Air-Conditioning",
    "Satellite TV",
  ],
  [
    "In-Room Coffee Service",
    "Iron & Ironing Board",
  ],
  [
    "Free Wi-Fi Access",
    "Hair Dryer",
  ],
];

function CircleArrow({ direction = "left", onClick, className = "" }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Previous image" : "Next image"}
      className={`flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#a88f53] text-white transition duration-300 hover:scale-105 hover:bg-[#947b43] md:h-[44px] md:w-[44px] ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="h-4 w-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        {direction === "left" ? (
          <path
            d="M15 18l-6-6 6-6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M9 6l6 6-6 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        )}
      </svg>
    </button>
  );
}

function RoomCarouselSection({
  title,
  subtitle,
  description,
  images,
  reverse = false,
}) {
  const [current, setCurrent] = useState(0);

  const goNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="bg-[#f1f0eb] py-10 sm:py-14 md:py-16 lg:py-18">
      <div
        className={`mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-5 sm:px-6 md:px-8 lg:gap-16 lg:px-10 ${
          reverse ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
        }`}
      >
        {/* Text */}
        <div className={`${reverse ? "order-2 lg:order-1" : "order-2"} max-w-[560px]`}>
          <h2
            className="tmt-3 text-[17px] font-normal leading-[0.98] text-[#23354a] sm:text-[25px] md:text-[30px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {title}
          </h2>

          <p className="mt-6 text-[12px] font-semibold leading-[1.5] text-[#113a54] sm:text-[13px] md:text-[14px]">
            {subtitle}
          </p>

          <p className="mt-6 text-[11px] leading-[1.8] text-[#171717] sm:text-[12px] md:text-[13px]">
            {description}
          </p>

          <a
            href="https://direct-book.com/properties/luxurygardenpalace?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-29&checkOutDate=2026-04-30&trackPage=yes"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-md bg-[#a88f53] px-6 py-2 text-[11px] font-semibold text-white transition duration-300 hover:scale-105 hover:bg-[#947b43] sm:px-8 sm:py-3 sm:text-[12px] md:text-[13px]"
          >
            Book Now
          </a>
        </div>

        {/* Image */}
        <div className={`${reverse ? "order-1 lg:order-2" : "order-1"} relative`}>
          <div className="relative overflow-hidden rounded-md bg-white">
            <img
              src={images[current]}
              alt={title}
              className="h-[260px] w-full rounded-md object-cover transition-all duration-700 sm:h-[340px] md:h-[420px] lg:h-[500px]"
            />
          </div>

          <CircleArrow
            direction="left"
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 md:left-6"
          />

          <CircleArrow
            direction="right"
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 md:right-6"
          />
        </div>
      </div>
    </section>
  );
}

export default function RoomBlock() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div
      className="w-full overflow-hidden bg-[#f1f0eb] text-[#171717]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <img
          src="images/bed9.JPG"
          alt="Room blocks hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(30,24,18,0.30)]" />

        <div className="absolute left-0 right-0 top-[118px] z-10 hidden border-t border-white/45 lg:block" />

        <div className="relative z-20 mx-auto flex min-h-[72vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
          <div className="pt-28 pb-16 md:pt-32 md:pb-20">
            <h1
              className="text-[15px] font-normal leading-[0.95] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:text-[20px] md:text-[43px] lg:text-[40px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Room Blocks
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f1f0eb] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[12px] font-normal text-[#a37f58] sm:text-[14px]">
            Meeting Rooms in Luxury
          </p>

          <h2
            className="mt-3 text-[17px] font-normal leading-[0.98] text-[#23354a] sm:text-[25px] md:text-[30px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Room for Everyone
          </h2>

          <p className="mx-auto mt-6 max-w-[860px] text-[12px] leading-[1.8] text-[#181818] sm:text-[13px] md:text-[14px]">
            When planning a group or corporate retreat, comfort is key.
             Choose from 68 luxury apartment-style rooms and suites spread
              across our property, designed for premium comfort and modern 
              living in the heart of Rwanda. Guests enjoy full access to curated 
              on-site experiences and amenities, with options ranging from elegant 
              private suites to spacious resort-style apartments overlooking serene Rwandan landscapes
              . For larger groups, 52 of the units can be flexibly configured into family-style or
             shared dormitory-style spaces, making it ideal for both privacy and group stays.
          </p>
        </div>
      </section>

      {/* GUEST ROOMS */}
      <RoomCarouselSection
        title="Guest Rooms"
        subtitle="1 or 2 King | Sleeps 2-6"
        description="Our guest rooms are equipped with king-size beds and offer classic comfort. Most are located poolside or with expansive views of the surrounding natural scenery, and larger guest rooms with two king-sized beds come furnished with added amenities like dual sinks, microwaves, mini-fridges, and walk-in closets to ensure a pleasant stay."
        images={guestRoomImages}
      />

      {/* COTTAGES */}
      <RoomCarouselSection
        title="Cottages"
        subtitle="1 King | Sleeps 2"
        description="Ideal for attendees seeking peace and quiet, our cottages provide a more private setting. Each cottage features a mini-fridge and porch, with tranquil views of the surrounding scenery."
        images={cottageImages}
        reverse
      />

      {/* HOUSES */}
      <RoomCarouselSection
        title="Penthouses"
        subtitle="Sleeps 6-20"
        description="For larger delegations or close-knit groups, these accommodations offer added space to stretch out and call home. Options include the three-bedroom Chairman's Suite which features a wraparound porch, kitchenette, and dining room or the larger Mill Creek Suite, with five bedrooms, a full kitchen, and a laundry room."
        images={houseImages}
      />

      {/* RESTFUL ESSENTIALS */}
      <section className="bg-[#f3f2ee] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <span className="h-px flex-1 bg-[#b59a74]" />
            <h2
              className="shrink-0 text-center text-[20px] font-normal leading-none text-[#23354a] sm:text-[26px] md:text-[32px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Restful Essentials
            </h2>
            <span className="h-px flex-1 bg-[#b59a74]" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-3 sm:mt-12 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-16">
            {restfulEssentials.map((column, index) => (
              <ul key={index} className="space-y-4 px-2 md:px-4">
                {column.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[10px] leading-[1.7] text-[#161616] sm:text-[11px] md:text-[12px]"
                  >
                    <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#9b7a58]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-12">
            <span className="block h-px w-full bg-[#b59a74]" />
          </div>
        </div>
      </section>
    </div>
  );
}