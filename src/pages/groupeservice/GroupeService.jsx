import React, { useEffect, useState } from "react";

const cateringCards = [
  {
    title: "MADE-TO-ORDER MENUS",
    image: "./images/desert6.png",
    description:
      "From delicious appetizers and garden-fresh salads to gourmet entrées your guests will adore, our culinary team offers full buffets and plated dinner service. Craft a personalized wedding menu tailored to your tastes by selecting from our diverse array of culinary options.",
  },
  {
    title: "BUFFET AND PLATED DINNER TASTINGS",
    image: "./images/desert2.jpg",
    description:
      "Complimentary food tastings of dinner selections are available exclusively for couples who have booked their wedding at Luxury Garden Palace  Resort. After booking, you'll be invited to the tasting closest to your event date so you can discover your favorite tastes from our wedding catering menus.",
  },
];

const culinaryEnhancements = [
  {
    title: "REHEARSAL DINNERS",
    image: "/images/cuisine.png",
    description:
      "Elevate your wedding experience with an unforgettable pre-celebration, offering delectable cuisine just steps away from your ceremony site. We invite you to complete your wedding weekend with friends and family when you reserve your rehearsal dinner with us.",
  },
  {
    title: "SWEET TREATS",
    image: "/images/cookies.JPG",
    description:
      "Indulge in a delectable array of confections from our Sweet Treats Menu. Make your wedding day undeniably sweet by adding an assortment of freshly baked cookies, delicate parfaits, gourmet cupcakes, and other delicious desserts.",
  },
  {
    title: "LATE-NIGHT BITES",
    image: "./images/luxuryfooddecoration7.JPG",
    description:
      "Treat your guests to some extra flavor and complete the wedding night with a satisfying snack. Extend the joy of your celebration with our Late-Night Bites menu, featuring a savory array of food options that can be added after your main course.",
  },
];

const menuData = {
  "Hors D’Oeuvres": [
    {
      name: "PASTRY WRAPPED ASPARAGUS",
      description:
        "Asparagus wrapped in puff pastry topped with shredded parmesan cheese and dipped in a garlic butter sauce.",
    },
    {
      name: "ANTIPASTO SKEWERS",
      description:
        "Savory prosciutto wraps around luscious mozzarella cheese balls, accompanied by the freshness of basil leaves, juicy cherry tomatoes, and the subtle tang of queen olives, finished with a drizzle of balsamic glaze.",
    },
    {
      name: "SPANAKOPITA",
      description:
        "A savory Greek pastry filled with tender spinach, feta cheese, and aromatic herbs, all encased in crisp, golden layers of phyllo dough.",
    },
    {
      name: "CHEESE TARTS",
      description:
        "A harmonious blend of cream cheese and spreadable brie, nestled within a delicate mini tart shell, topped with a tantalizing swirl of blackberry bacon jam.",
    },
    {
      name: "SANTA FE ROLLS",
      description:
        "A delightful fusion of tender chicken, spicy peppers, creamy avocado, and tangy salsa, all wrapped in a crisp, golden shell.",
    },
    {
      name: "SHORT RIB CROSTINI",
      description:
        "Tender beef short rib nestled on toasted sourdough baguette, enhanced with a medley of flavors and topped with a dollop of cherry preserves and blue cheese crumbles.",
    },
    {
      name: "CRAB POPPERS",
      description:
        "Succulent crab meat blended with a medley of spices, encased in a crispy golden shell.",
    },
    {
      name: "ARTISAN CHEESE DISPLAY",
      description:
        "A delightful assortment featuring sourdough baguette slices and table water crackers paired with crisp red and green grapes, cheddar, Monterey Jack, and pepper jack cheese cubes.",
    },
    {
      name: "SHRIMP & CUCUMBER",
      description:
        "Blackened shrimp on a marinated cucumber covered in a garlic aioli and sriracha drizzle.",
    },
  ],
  Salads: [
    {
      name: "CLASSIC CAESAR",
      description:
        "Crisp romaine lettuce tossed with parmesan cheese, garlic croutons, and creamy Caesar dressing.",
    },
    {
      name: "GARDEN SALAD",
      description:
        "Fresh mixed greens with seasonal vegetables and your choice of house-made dressing.",
    },
    {
      name: "STRAWBERRY SPINACH",
      description:
        "Baby spinach, strawberries, candied pecans, feta cheese, and balsamic vinaigrette.",
    },
  ],
  Entrees: [
    {
      name: "GRILLED CHICKEN",
      description:
        "Tender grilled chicken breast served with chef-selected sauces and seasonal accompaniments.",
    },
    {
      name: "BRAISED BEEF",
      description:
        "Slow-braised beef prepared for rich flavor and elegant plated presentation.",
    },
    {
      name: "VEGETARIAN PASTA",
      description:
        "Fresh pasta tossed with seasonal vegetables and a savory herb cream sauce.",
    },
  ],
  Starches: [
    {
      name: "GARLIC MASHED POTATOES",
      description:
        "Creamy mashed potatoes blended with roasted garlic and butter.",
    },
    {
      name: "WILD RICE PILAF",
      description:
        "Aromatic wild rice pilaf with herbs and seasonal vegetables.",
    },
    {
      name: "ROASTED BABY POTATOES",
      description:
        "Golden roasted baby potatoes finished with herbs and sea salt.",
    },
  ],
  Veggies: [
    {
      name: "SEASONAL VEGETABLE MEDLEY",
      description:
        "A colorful blend of chef-selected seasonal vegetables, lightly seasoned and roasted.",
    },
    {
      name: "GREEN BEANS ALMONDINE",
      description:
        "Fresh green beans sautéed and finished with toasted almonds.",
    },
    {
      name: "HONEY GLAZED CARROTS",
      description:
        "Tender carrots lightly glazed for a sweet and elegant finish.",
    },
  ],
};

const benefits = [
  "Exclusive Venue Access",
  "Dedicated Event Team",
  "Discounted Guest Room Blocks",
  "Complimentary Food Tasting",
  "Ceremony Garden",
  "Two Wedding Party Day Use Rooms",
  "Tables, Chairs, Linens & Place Settings",
  "Complimentary Cake Cutting",
  "Hors D’oeuvres Patio",
  "Complimentary On-Site Parking",
  "On-Site Gourmet Catering",
  "Hand-Poured Sparkling Cider Toast",
];

function MenuItem({ item }) {
  return (
    <div className="border-b border-[#3a3a3a] pb-8">
      <h4 className="text-[18px] uppercase tracking-[0.02em] text-[#163247] md:text-[20px]">
        {item.name}
      </h4>
      <p className="mt-4 text-[16px] leading-[1.8] text-[#1e1e1e] md:text-[17px]">
        {item.description}
      </p>
    </div>
  );
}

export default function GroupeService() {
  const [activeTab, setActiveTab] = useState("Hors D’Oeuvres");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const activeItems = menuData[activeTab] || [];
  const leftColumn = activeItems.filter((_, index) => index % 2 === 0);
  const rightColumn = activeItems.filter((_, index) => index % 2 !== 0);

  return (
    <div
      className="w-full overflow-hidden bg-[#f3f2ed] text-[#1c1c1c]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative min-h-[68vh] overflow-hidden">
        <img
          src="images/breathtaking.png"
          alt="Wedding Services"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(20,18,16,0.34)]" />
        <div className="absolute left-0 right-0 top-[118px] z-10 hidden border-t border-white/45 lg:block" />

        <div className="relative z-20 mx-auto flex min-h-[68vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
          <div className="pt-28 pb-16 md:pt-32 md:pb-20">
            <h1
              className="text-[54px] font-normal leading-[0.95] text-white sm:text-[70px] md:text-[88px] lg:text-[102px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Wedding Services
            </h1>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f3f2ed] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[17px] tracking-[0.04em] text-[#a37f58] sm:text-[19px]">
            Luxury Wedding Venues in Kigali, Rwanda
          </p>

          <h2
            className="mt-3 text-[46px] font-normal leading-[0.95] text-[#183247] sm:text-[58px] md:text-[72px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Full-Service
            <br />
            Wedding Planning
          </h2>

          <p className="mx-auto mt-6 max-w-[840px] text-[17px] leading-[1.9] text-[#222] sm:text-[18px] md:text-[19px]">
            Weddings at Luxury Garden Palace are fully immersive. Our venue is
            designed to provide you, your wedding party, and your guests with
            an exceptional experience that reflects your unique love story.
            From our beautiful ceremony gardens to our elegant reception halls,
            luxury accommodations, bar & lounge, and spa facilities—customize
            and personalize every detail to create the celebration of your dreams.
          </p>
        </div>
      </section>

      {/* WEEKEND OUT OF IT */}
      <section className="bg-[#f3f2ed] py-6 sm:py-10 md:py-14 lg:py-16">
        <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-center gap-10 px-5 sm:px-6 md:px-8 lg:grid-cols-[0.95fr_1fr] lg:gap-16 lg:px-10">
          <div className="overflow-hidden">
            <img
              src="images/weddgarden1.jpg"
              alt="Weekend activities"
              className="h-[360px] w-full object-cover sm:h-[460px] md:h-[560px] lg:h-[640px]"
            />
          </div>

          <div className="max-w-[540px]">
            <h2
              className="text-[44px] font-normal leading-[0.98] text-[#183247] sm:text-[56px] md:text-[68px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Make a Weekend out
              <br />
              of It
            </h2>
            
            <p className="mt-6 text-[17px] leading-[1.9] text-[#202020] sm:text-[18px] md:text-[19px]">
              With a range of luxury amenities available at Luxury Garden Palace
              —including our exclusive bar & lounge, sauna and spa facilities, 
              beautifully appointed rooms and apartments—your guests can enjoy 
              an unforgettable celebration experience. Create lasting memories 
              with premium accommodations and world-class services right at your 
              wedding venue in the heart of Kigali.
            </p>
          </div>
        </div>
      </section>

      {/* CATERING */}
      <section className="bg-[#f3f2ed] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center">
            <h2
              className="text-[48px] font-normal leading-[1] text-[#183247] sm:text-[60px] md:text-[72px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Catering
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {cateringCards.map((item) => (
              <div key={item.title}>
                <div className="overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[280px] w-full object-cover sm:h-[340px] md:h-[360px] lg:h-[380px]"
                  />
                </div>

                <div className="pt-6">
                  <h3 className="text-[22px] uppercase leading-[1.35] text-[#163247] md:text-[24px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[1.9] text-[#222] md:text-[17px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CULINARY ENHANCEMENTS */}
      <section className="bg-[#f3f2ed] py-10 sm:py-14 md:py-18 lg:py-20">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center">
            <h2
              className="text-[48px] font-normal leading-[1] text-[#183247] sm:text-[60px] md:text-[72px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Culinary Enhancements
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            {culinaryEnhancements.map((item) => (
              <div key={item.title}>
                <div className="overflow-hidden bg-white">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-[250px] w-full object-cover sm:h-[280px] md:h-[260px] lg:h-[280px]"
                  />
                </div>

                <div className="pt-6">
                  <h3 className="text-[22px] uppercase leading-[1.35] text-[#163247] md:text-[24px]">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-[16px] leading-[1.9] text-[#222] md:text-[17px]">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DINNER MENU */}
      <section className="bg-[#f3f2ed] py-16 sm:py-20 md:py-24">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center">
            <h2
              className="text-[48px] font-normal leading-[1] text-[#183247] sm:text-[60px] md:text-[72px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Dinner Menu
            </h2>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {Object.keys(menuData).map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`text-[18px] transition md:text-[20px] ${
                  activeTab === tab
                    ? "text-[#111111]"
                    : "text-[#8a8a8a] hover:text-[#183247]"
                }`}
                style={{ fontFamily: '"Montserrat", sans-serif' }}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mt-14">
            <h3
              className="text-[42px] font-normal leading-[1] text-[#183247] sm:text-[54px] md:text-[64px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              {activeTab}
            </h3>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
              <div className="space-y-8">
                {leftColumn.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>

              <div className="space-y-8">
                {rightColumn.map((item) => (
                  <MenuItem key={item.name} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[#fbfbfb] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[1380px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="text-center">
            <p className="text-[17px] tracking-[0.04em] text-[#a37f58] sm:text-[19px]">
              What You Get at
            </p>

            <div className="mt-4 flex items-center justify-center gap-6">
              <span className="hidden h-px w-[180px] bg-[#b89a6b] md:block" />
              <h2
                className="text-[48px] font-normal leading-[1] text-[#183247] sm:text-[62px] md:text-[76px]"
                style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
              >
                Luxury Garden Palace
              </h2>
              <span className="hidden h-px w-[180px] bg-[#b89a6b] md:block" />
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12">
            {[0, 1, 2].map((col) => (
              <ul key={col} className="space-y-5">
                {benefits.slice(col * 4, col * 4 + 4).map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-4 text-[17px] leading-[1.7] text-[#222] md:text-[18px]"
                  >
                    <span className="mt-[11px] h-[6px] w-[6px] shrink-0 rounded-full bg-[#8d6f53]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-16 border-b border-[#b9a27e]" />
        </div>
      </section>
    </div>
  );
}