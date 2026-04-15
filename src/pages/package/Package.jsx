import React, { useEffect } from "react";

const classicPackage = [
  "3 Buffet-Style Hors D’Oeuvres",
  "1 Classic Salad",
  "2 Entrées",
  "1 Veggie",
  "1 Starch",
  "Fresh-Baked Bread",
];

const premiumPackage = [
  "4 Buffet-Style Hors D’Oeuvres",
  "1 Premium Salad",
  "3 Entrées",
  "2 Veggies",
  "2 Starches",
  "Fresh-Baked Bread",
  "Enhanced Dessert Display",
];

const includedInEveryPackage = [
  "Exclusive Venue Access",
  "Reception Space",
  "Two Wedding Party Rooms",
  "Tables, Chairs, & Linens",
  "Complimentary Food Tasting",
  "Ceremony Garden",
  "Day-Of Coordinator",
  "Complimentary Guest Parking",
  "On-Site Catering",
  "Complimentary Cake Cutting",
  "Hors D’oeuvres Patio",
  "Dedicated Event Team",
  "Discounted Guest Room Blocks",
  "Customizable Menus",
  "Hand-Poured Sparkling Cider Toast",
];

const drinkPackageInfo = [
  "ABC License",
  "Glassware",
  "Unlimited Open Bar for Guests 21 and Over. Guests must drink responsibly.",
  "1 Bartender per 125 Guests (Additional Bartenders $250)",
  "1 Bar Setup ($400 for an additional bar setup and 1 bartender)",
  "*Consumption or Cash Bars Available Upon Request",
];

const drinkCards = [
  {
    title: "SIMPLE",
    image: "/images/bar2.jpg",
    items: ["Beer", "Wine", "Mocktails", "Sodas, Juice"],
  },
  {
    title: "TOP SHELF",
    image: "/images/bar2.png",
    items: [
      "Beer",
      "Wine",
      "Premium Bar Selections",
      "Mocktails",
      "Sodas, Juice, Mixers, Garnishes",
    ],
  },
  {
    title: "HOUSE",
    image: "images/luxdinning1.jpg",
    items: [
      "Beer",
      "Wine",
      "House Liquor Selections",
      "Mocktails",
      "Sodas, Juice, Mixers, Garnishes",
    ],
  },
  {
    title: "CALL",
    image: "images/luxuryfooddecoration6.JPG",
    items: [
      "Beer",
      "Wine",
      "Classic Liquor Selections",
      "Mocktails",
      "Sodas, Juice, Mixers, Garnishes",
    ],
  },
];

function BulletList({ items, textClass = "" }) {
  return (
    <ul className="space-y-5">
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-4 text-[16px] leading-[1.8] text-[#202020] sm:text-[17px] md:text-[18px] ${textClass}`}
        >
          <span className="mt-[12px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#8e7355]" />
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
        topBorder ? "border-t-[10px] border-[#14363a]" : ""
      }`}
    >
      <div
        className={`mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 sm:px-6 md:px-8 lg:gap-16 lg:px-10 ${
          reverse ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
        }`}
      >
        <div className={`${reverse ? "order-2 lg:order-2" : "order-1"}`}>
          <img
            src={image}
            alt={title}
            className="h-[340px] w-full object-cover sm:h-[440px] md:h-[560px] lg:h-[620px]"
          />
        </div>

        <div
          className={`max-w-[560px] ${
            reverse ? "order-1 lg:order-1" : "order-2"
          }`}
        >
          <h2
            className="text-[42px] font-normal leading-[0.95] text-[#173247] sm:text-[56px] md:text-[68px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {title}
          </h2>

          <div className="mt-8">
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
      <div className="overflow-hidden bg-white">
        <img
          src={card.image}
          alt={card.title}
          className="h-[240px] w-full object-cover sm:h-[280px] md:h-[300px] lg:h-[320px]"
        />
      </div>

      <div className="pt-6">
        <h3 className="text-[24px] uppercase leading-[1.2] text-[#153347] md:text-[26px]">
          {card.title}
        </h3>

        <div className="mt-6">
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
    <div
      className="w-full overflow-hidden bg-[#f3f2ed] text-[#1d1d1d]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative min-h-[68vh] overflow-hidden">
        <img
          src="/images/weddgarden2.jpg"
          alt="Wedding packages hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(18,16,14,0.35)]" />
        <div className="absolute left-0 right-0 top-[118px] z-10 hidden border-t border-white/40 lg:block" />

        <div className="relative z-20 mx-auto flex min-h-[68vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
          <div className="pt-28 pb-16 md:pt-32 md:pb-20">
            <h1
              className="text-[56px] font-normal leading-[0.95] text-white sm:text-[72px] md:text-[92px] lg:text-[108px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Packages
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f3f2ed] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[17px] tracking-[0.04em] text-[#a37f58] sm:text-[19px]">
            Wedding Packages in Luxury Garden Palace
          </p>

          <h2
            className="mt-3 text-[46px] font-normal leading-[0.95] text-[#173247] sm:text-[58px] md:text-[72px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Bringing It All Together
          </h2>

          <p className="mx-auto mt-6 max-w-[840px] text-[17px] leading-[1.9] text-[#222] sm:text-[18px] md:text-[19px]">
            Once you book your date with Luxury Garden Palace, pop the bubbly
            and let's celebrate! Whether you're dreaming of an intimate wedding
            ceremony or a grand celebration, you can trust us to turn your
            vision into the special day you've always imagined with some of the
            best—and most inclusive—wedding packages in Kigali, Rwanda.
          </p>
        </div>
      </section>

      {/* CLASSIC PACKAGE */}
      <PackageSplitSection
        title="The Classic Package"
        items={classicPackage}
        image="/images/desert2.jpg"
        topBorder
      />

      {/* PREMIUM PACKAGE */}
      <PackageSplitSection
        title="The Premium Package"
        items={premiumPackage}
        image="images/exterior12.jpg"
        reverse
      />

      {/* INCLUDED IN EVERY PACKAGE */}
      <section className="bg-[#fbfbfb] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-center gap-6">
            <span className="hidden h-px w-[170px] bg-[#b89a6b] md:block" />
            <h2
              className="text-center text-[42px] font-normal leading-[1] text-[#173247] sm:text-[56px] md:text-[68px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Included In Every Package
            </h2>
            <span className="hidden h-px w-[170px] bg-[#b89a6b] md:block" />
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {[0, 1, 2].map((col) => (
              <ul key={col} className="space-y-5">
                {includedInEveryPackage
                  .slice(col * 5, col * 5 + 5)
                  .map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-4 text-[16px] leading-[1.8] text-[#222] sm:text-[17px] md:text-[18px]"
                    >
                      <span className="mt-[12px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#8d6f53]" />
                      <span>{item}</span>
                    </li>
                  ))}
              </ul>
            ))}
          </div>

          <div className="mt-16 border-b border-[#b9a27e]" />
        </div>
      </section>

      {/* DRINK PACKAGES HERO SECTION */}
      <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 lg:py-28">
        <img
          src="/images/drink.png"
          alt="Drink packages"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-white/25" />

        <div className="relative z-10 mx-auto max-w-[1600px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="max-w-[760px] bg-[#f6f5f2] p-8 sm:p-10 md:p-12 lg:ml-[6%] lg:p-14">
            <h2
              className="text-[44px] font-normal leading-[0.96] text-[#173247] sm:text-[56px] md:text-[68px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Drink Packages
            </h2>

            <p className="mt-6 text-[16px] leading-[1.9] text-[#222] sm:text-[17px] md:text-[18px]">
              We offer a fully licensed bar service package with friendly and
              professional bartenders ready to serve delicious cocktails, beer,
              and wine throughout your event! Included:
            </p>

            <div className="mt-8">
              <BulletList items={drinkPackageInfo} />
            </div>
          </div>
        </div>
      </section>

      {/* DRINK CARDS */}
      <section className="bg-[#f3f2ed] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12 xl:gap-16">
            {drinkCards.map((card) => (
              <DrinkCard key={card.title} card={card} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}