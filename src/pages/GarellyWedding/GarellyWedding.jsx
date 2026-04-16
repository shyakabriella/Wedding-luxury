import React, { useEffect, useState } from "react";

const galleryWeddingImages = [
  { src: "/images/weddinghall1.png", alt: "Elegant wedding hall setup" },
  { src: "/images/weddinghall3.jpg", alt: "Luxurious wedding reception area" },
  { src: "/images/weddinghall4.jpg", alt: "Grand wedding ceremony space" },

  { src: "/images/weddinghall1.png", alt: "Elegant wedding hall setup" },
  { src: "/images/weddinghall3.jpg", alt: "Luxurious wedding reception area" },
  { src: "/images/weddinghall4.jpg", alt: "Grand wedding ceremony space" },

  {
    src: "/images/luxuryfooddecoration1.JPG",
    alt: "Luxury food and beverages",
  },
    { src: "/images/weddinghall10.jpg", alt: "Wedding reception dining area" },
  {
    src: "/images/luxuryfooddecoration3.JPG",
    alt: "Luxury food and beverages",
  },
  { src: "/images/tent2.JPG", alt: "Elegant wedding tent" },

  {
    src: "/images/luxuryfooddecoration7.JPG",
    alt: "Luxury food and beverages",
  },
  {
    src: "/images/luxuryfooddecoration5.JPG",
    alt: "Luxury food and beverages",
  },
    { src: "/images/tent1.JPG", alt: "Elegant wedding tent" },
  {
    src: "/images/luxuryfooddecoration2.JPG",
    alt: "Luxury food and beverages",
  },
  { src: "/images/food.png", alt: "Elegant bridal suite" },
  { src: "/images/drink.png", alt: "Elegant bridal suite" },

  { src: "/images/weddinghall9.jpg", alt: "Outdoor wedding garden" },
  { src: "/images/weddinghall11.jpg", alt: "Wedding venue entrance" },

  { src: "/images/parking2.JPG", alt: "Premium parking facility" },
    { src: "/images/bed2.JPG", alt: "Premium accommodation suite" },
  { src: "/images/bed3.JPG", alt: "Elegant bedroom interior" },
  { src: "/images/penthouse1.JPG", alt: "Penthouse suite overview" },
  { src: "/images/penthouse2.JPG", alt: "Penthouse living area" },

  { src: "/images/penthouse3.JPG", alt: "Penthouse bedroom view" },
  { src: "/images/penthouse4.JPG", alt: "Luxury penthouse amenities" },
  { src: "/images/penthouse5.JPG", alt: "Penthouse terrace access" },

  { src: "/images/kitchen1.JPG", alt: "Elegant kitchen interior" },
  { src: "/images/parking1.JPG", alt: "Elegant parking facility" },
];

export default function GarellyWedding() {
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedIndex === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedIndex(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selectedIndex]);

  const goNext = () => {
    setSelectedIndex((prev) =>
      prev === null ? 0 : (prev + 1) % galleryWeddingImages.length,
    );
  };

  const goPrev = () => {
    setSelectedIndex((prev) =>
      prev === null
        ? galleryWeddingImages.length - 1
        : (prev - 1 + galleryWeddingImages.length) %
          galleryWeddingImages.length,
    );
  };

  return (
    <div
      className="w-full -mt-4 overflow-hidden bg-[#f1f0eb]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative min-h-[62vh] overflow-hidden">
        <img
          src="/images/weddinghall1.png"
          alt="Gallery hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(22,18,15,0.38)]" />

        <div className="absolute left-0 right-0 top-[118px] z-10 hidden border-t border-white/45 lg:block" />

        <div className="relative z-20 mx-auto flex min-h-[62vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-4 md:px-6 lg:px-8">
          <div className="pt-28 mt-10 pb-14 md:pt-32 md:pb-20">
            <p className="text-[14px] font-medium uppercase tracking-[0.22em] text-white/85 sm:text-[15px]">
              Luxury Garden Palace
            </p>

            <h1
              className="mt-4 text-[24px] font-normal leading-[0.95] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:text-[40px] md:text-[48px] lg:text-[56px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              <span>Wedding</span> Gallery
            </h1>

            <p className="mx-auto mt-5 max-w-[860px] text-[15px] leading-[1.85] text-white/88 sm:text-[16px] md:text-[18px]">
              Discover breathtaking wedding moments—from elegant ceremonies and
              refined décor to luxurious receptions—each crafted to celebrate
              love and create unforgettable memories.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f1f0eb] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[16px] font-normal text-[#a37f58] sm:text-[18px]">
            A Closer Look
          </p>

          <h2
            className="mt-3 text-[36px] font-normal leading-[0.98] text-[#23354a] sm:text-[48px] md:text-[58px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Moments That Tell The Story
          </h2>

          <p className="mx-auto mt-6 max-w-[860px] text-[16px] leading-[1.8] text-[#181818] sm:text-[17px] md:text-[18px]">
            From enchanting ceremonies and exquisite décor to luxurious
            receptions and heartfelt celebrations, every image reflects the
            elegance and romance of weddings at our venue.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-[#f1f0eb] pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1920px] px-3 sm:px-4 md:px-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryWeddingImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group overflow-hidden rounded-md bg-white text-left"
                aria-label={`Open image ${index + 1}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[260px] w-full rounded-md object-cover transition duration-700 group-hover:scale-[1.04] sm:h-[290px] md:h-[320px] xl:h-[340px]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[120] bg-black/85 px-4 py-6 sm:px-6 md:px-10">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-[130] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path
                d="M6 6l12 12M18 6L6 18"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex h-full items-center justify-center">
            <div className="relative w-full max-w-[1400px]">
              <img
                src={galleryWeddingImages[selectedIndex].src}
                alt={galleryWeddingImages[selectedIndex].alt}
                className="max-h-[82vh] w-full object-contain"
              />

              <button
                type="button"
                onClick={goPrev}
                className="absolute left-2 top-1/2 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43] md:left-4 md:h-[56px] md:w-[56px]"
                aria-label="Previous image"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="M15 18l-6-6 6-6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                type="button"
                onClick={goNext}
                className="absolute right-2 top-1/2 flex h-[48px] w-[48px] -translate-y-1/2 items-center justify-center rounded-full bg-[#a88f53] text-white transition hover:scale-105 hover:bg-[#947b43] md:right-4 md:h-[56px] md:w-[56px]"
                aria-label="Next image"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
