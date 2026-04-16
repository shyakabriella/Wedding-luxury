import React, { useEffect } from "react";

const classicPackage = [
  "3 Hors D’Oeuvres",
  "1 Salad",
  "2 Entrées",
  "1 Veggie",
  "1 Starch",
  "Fresh Bread",
];

const premiumPackage = [
  "4 Hors D’Oeuvres",
  "1 Premium Salad",
  "3 Entrées",
  "2 Veggies",
  "2 Starches",
  "Fresh Bread",
  "Dessert Display",
];

const includedInEveryPackage = [
  "Venue Access",
  "Reception Space",
  "2 Bridal Rooms",
  "Tables & Chairs",
  "Food Tasting",
  "Ceremony Garden",
  "Event Coordinator",
  "Guest Parking",
  "On-Site Catering",
  "Cake Planning",
  "Hors D’oeuvres Patio",
  "Event Team",
  "Room Discounts",
  "Custom Menus",
  "Cider Toast",
];

const drinkPackageInfo = [
  "Bar License",
  "Glassware Included",
  "Open Bar (21+)",
  "1 Bartender / 125 Guests",
  "Extra Bar Setup Available",
  "Cash & Consumption Bars",
];

const drinkCards = [
  {
    title: "SIMPLE",
    image: "/images/bar2.jpg",
    items: ["Beer", "Wine", "Mocktails", "Juices"],
  },
  {
    title: "TOP SHELF",
    image: "/images/bar2.png",
    items: ["Beer", "Wine", "Premium Spirits", "Mixers"],
  },
  {
    title: "HOUSE",
    image: "images/luxdinning1.jpg",
    items: ["Beer", "Wine", "House Liquor", "Mixers"],
  },
  {
    title: "CALL",
    image: "images/luxuryfooddecoration6.JPG",
    items: ["Beer", "Wine", "Classic Spirits", "Mixers"],
  },
];

function BulletList({ items }) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 text-[11px] leading-[1.7] text-[#202020] sm:text-[12px] md:text-[13px]"
        >
          <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#8e7355]" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function PackageSplitSection({
  title,
  items,
  image,
  reverse = false,
  topBorder = false,
}) {
  return (
    <section
      className={`bg-[#f3f2ed] py-10 sm:py-14 md:py-16 lg:py-20 ${
        topBorder ? "border-t-[8px] border-[#14363a]" : ""
      }`}
    >
      <div
        className={`mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 lg:gap-16 ${
          reverse ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
        }`}
      >
        <img
          src={image}
          alt={title}
          className="h-[340px] w-full rounded-md object-cover sm:h-[420px] md:h-[520px]"
        />

        <div className="max-w-[560px]">
          <h2
            className="text-[16px] font-normal text-[#173247] sm:text-[18px] md:text-[24px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {title}
          </h2>

          <div className="mt-6">
            <BulletList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DrinkCard({ card }) {
  return (
    <div>
      <img
        src={card.image}
        alt={card.title}
        className="h-[220px] w-full rounded-md object-cover sm:h-[260px]"
      />

      <div className="pt-5">
        <h3 className="text-[12px] uppercase text-[#153347] md:text-[14px]">
          {card.title}
        </h3>

        <div className="mt-4">
          <BulletList items={card.items} />
        </div>
      </div>
    </div>
  );
}

export default function Package() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full overflow-hidden bg-[#f3f2ed]" style={{ fontFamily: "Montserrat" }}>
      
      {/* HERO */}
      <section className="relative min-h-[68vh]">
        <img src="/images/weddgarden2.jpg" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-[68vh] items-center justify-center text-center text-white">
          <h1 className="text-[26px] sm:text-[34px] md:text-[44px] font-light">
            Packages
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 text-center">
        <p className="text-[12px] text-[#a37f58]">Wedding Packages</p>

        <h2 className="mt-2 text-[20px] sm:text-[28px] md:text-[34px] text-[#173247]">
          Simple Luxury Options
        </h2>

        <p className="mx-auto mt-4 max-w-[750px] text-[12px] sm:text-[13px] text-[#222]">
          Flexible wedding packages designed for luxury apartments and elegant celebrations in Kigali.
        </p>
      </section>

      {/* PACKAGES */}
      <PackageSplitSection
        title="Classic Package"
        items={classicPackage}
        image="/images/desert2.jpg"
        topBorder
      />

      <PackageSplitSection
        title="Premium Package"
        items={premiumPackage}
        image="images/exterior12.jpg"
        reverse
      />

      {/* INCLUDED */}
<section className="bg-white py-14">
  
  {/* Title */}
  <div className="text-center">
    <h2 className="text-[18px] sm:text-[24px] md:text-[30px] text-[#173247]">
      Included Benefits
    </h2>
  </div>

  {/* Grid Wrapper */}
  <div className="mt-12 flex justify-center">
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10 text-center">

      {[0, 1, 2].map((col) => (
        <ul
          key={col}
          className="space-y-4 flex flex-col items-center"
        >
          {includedInEveryPackage
            .slice(col * 5, col * 5 + 5)
            .map((item) => (
              <li
                key={item}
                className="text-[11px] sm:text-[12px] text-[#222] flex items-center justify-center gap-3"
              >
                <span className="h-[5px] w-[5px] rounded-full bg-[#8d6f53]" />
                <span className="max-w-[220px] leading-[1.6]">
                  {item}
                </span>
              </li>
            ))}
        </ul>
      ))}

    </div>
  </div>

</section>

      {/* DRINK */}
      <section className="py-14 text-center bg-[#f3f2ed]">
        <h2 className="text-[20px] sm:text-[26px] text-[#173247]">
          Bar Packages
        </h2>

        <p className="mt-3 text-[12px] max-w-[700px] mx-auto">
          Premium bar service for luxury weddings and apartment events.
        </p>
      </section>

      {/* DRINK CARDS */}
      <section className="pb-20">
        <div className="grid md:grid-cols-2 gap-10 px-6">
          {drinkCards.map((card) => (
            <DrinkCard key={card.title} card={card} />
          ))}
        </div>
      </section>
    </div>
  );
}