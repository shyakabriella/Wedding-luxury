import React, { useEffect } from "react";

const venues = [
  {
    title: "Garden Ceremony Venue",
    size: "OUTDOOR VENUE | UP TO 500 GUESTS",
    image: "/images/weddgarden2.jpg",
    description:
      "Set against a verdant backdrop with stunning views of lush gardens, our outdoor ceremony venue exudes elegance and romance. The natural beauty creates a serene and picturesque setting, perfect for exchanging vows under the open sky in the heart of Kigali.",
  },
  {
    title: "Wedding Reception Hall",
    size: "INDOOR VENUE | UP TO 400 GUESTS",
    image: "/images/weddinghall1.png",
    description:
      "After your beautiful ceremony, guests are invited to celebrate in our sophisticated reception hall. An ideal setting for dining, dancing, and celebration, every detail is designed with luxury and elegance in mind, creating unforgettable memories for you and your guests.",
  },
  {
    title: "Bar & Lounge",
    size: "PREMIUM LOUNGE | UP TO 150 GUESTS",
    image: "/images/lounge1.png",
    description:
      "Our exclusive bar and lounge area offers the perfect space for cocktail hours and intimate gatherings. Enjoy premium beverages, expert mixology, and a relaxed atmosphere that complements your special celebration with style and sophistication.",
  },
];

export default function Venues() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#efeee8] text-[#1f1f1f]">
      
      {/* HERO */}
      <section className="relative h-[65vh] overflow-hidden">
        <img
          src="/images/venues.png"
          alt="venues hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1
            className="text-white text-[28px] md:text-[44px]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            Venues
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="text-center py-16 px-6">
        <p className="text-[#a88f53] uppercase tracking-[0.2em] text-[11px]">
          Luxury Wedding Venues in Kigali, Rwanda
        </p>

        <h2
          className="mt-3 text-[26px] md:text-[36px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          Elegant Celebration Spaces
        </h2>

        <p className="mt-6 max-w-[700px] mx-auto text-[14px] leading-[1.9] text-[#444]">
          Discover the enchanting beauty of Luxury Garden Palace, Kigali's premier wedding destination. 
          Our exclusive venues offer a unique blend of natural splendor, modern elegance, and world-class 
          amenities including ceremony gardens, reception halls, bar & lounge, sauna, and luxury 
          accommodations—perfect for creating timeless memories.
        </p>

        {/* <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-[#a88f53] text-white px-8 py-3 uppercase text-xs tracking-wider">
            Take a Tour
          </button>
          <button className="bg-[#a88f53] text-white px-8 py-3 uppercase text-xs tracking-wider">
            See Capacity Chart
          </button>
        </div> */}
      </section>

      {/* VENUES LIST */}
      <section className="max-w-[1300px] mx-auto px-6 pb-20 space-y-24">
        {venues.map((venue, index) => (
          <div
            key={venue.title}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className={`${index % 2 === 1 ? "order-2 md:order-1" : ""}`}>
              <img
                src={venue.image}
                alt={venue.title}
                className="w-full h-[420px] rounded-md object-cover"
              />
            </div>

            {/* TEXT */}
            <div className={`${index % 2 === 1 ? "order-1 md:order-2" : ""}`}>
              <h3
                className="text-[22px] md:text-[28px] text-[#203549]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {venue.title}
              </h3>

              <p className="mt-2 text-[#6a6a6a] uppercase text-[11px] tracking-wider">
                {venue.size}
              </p>

              <p className="mt-6 text-[14px] leading-[1.9] text-[#333]">
                {venue.description}
              </p>
            </div>
          </div>
        ))}
      </section>
      
    </div>
  );
}