import React, { useEffect, useState } from "react";

const galleryImages = [
  { src: "/images/weddinghall1.png", alt: "Luxury wedding hall" },
  { src: "/images/weddinghall2.jpg", alt: "Elegant venue interior" },
  { src: "/images/weddinghall3.jpg", alt: "Reception space" },
  { src: "/images/weddinghall4.jpg", alt: "Grand ceremony hall" },

  { src: "/images/luxuryfooddecoration1.JPG", alt: "Luxury dining setup" },
  { src: "/images/luxuryfooddecoration2.JPG", alt: "Catering display" },
  { src: "/images/luxuryfooddecoration3.JPG", alt: "Fine dining service" },
  { src: "/images/luxuryfooddecoration7.JPG", alt: "Event catering" },
  { src: "/images/luxuryfooddecoration5.JPG", alt: "Gourmet setup" },
  { src: "/images/food.png", alt: "Elegant dining" },
  { src: "/images/drink.png", alt: "Luxury drinks service" },

  { src: "/images/weddinghall9.jpg", alt: "Garden wedding space" },
  { src: "/images/weddinghall10.jpg", alt: "Dining hall setup" },
  { src: "/images/weddinghall11.jpg", alt: "Venue entrance" },
  { src: "/images/bed1.JPG", alt: "Luxury apartment room" },

  { src: "/images/bed2.JPG", alt: "Modern suite" },
  { src: "/images/bed3.JPG", alt: "Elegant bedroom" },
  { src: "/images/penthouse1.JPG", alt: "Penthouse suite" },
  { src: "/images/penthouse2.JPG", alt: "Penthouse living room" },

  { src: "/images/penthouse3.JPG", alt: "Suite bedroom" },
  { src: "/images/penthouse4.JPG", alt: "Luxury amenities" },
  { src: "/images/penthouse5.JPG", alt: "Private terrace" },
  { src: "/images/penthouse6.JPG", alt: "Bathroom suite" },

  { src: "/images/kitchen1.JPG", alt: "Modern kitchen" },
  { src: "/images/parking1.JPG", alt: "Parking area" },
  { src: "/images/parking2.JPG", alt: "Secure parking" },

  { src: "/images/tent1.JPG", alt: "Wedding tent" },
  { src: "/images/tent2.JPG", alt: "Outdoor setup" },
];

export default function Garelly() {
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
      prev === null ? 0 : (prev + 1) % galleryImages.length
    );
  };

  const goPrev = () => {
    setSelectedIndex((prev) =>
      prev === null
        ? galleryImages.length - 1
        : (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <div
      className="w-full overflow-hidden bg-[#f1f0eb]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative min-h-[62vh] overflow-hidden">
        <img
          src="/images/weddinghall1.png"
          alt="Luxury apartments gallery"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(22,18,15,0.40)]" />

        <div className="relative z-20 mx-auto flex min-h-[62vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
          <div className="pt-28 pb-14 md:pt-32 md:pb-20">
            <p className="text-[12px] uppercase tracking-[0.2em] text-white/85">
              Luxury Apartments
            </p>

            <h1
              className="mt-4 text-[25px] font-normal leading-[0.95] text-white sm:text-[35px] md:text-[39px] lg:text-[40px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Gallery
            </h1>

            <p className="mx-auto mt-5 max-w-[760px] text-[13px] leading-[1.7] text-white/85 sm:text-[14px]">
              Luxury apartments, wedding spaces, dining & premium living.
            </p>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="bg-[#f1f0eb] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[19x] text-[#a37f58]">Overview</p>

          <h2
            className="mt-3 text-[16px] font-normal leading-[0.98] text-[#23354a] sm:text-[20px] md:text-[30px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            Luxury Living Moments
          </h2>

          <p className="mx-auto mt-6 max-w-[800px] text-[14px] leading-[1.7] text-[#181818]">
            Modern apartments, wedding venues, and luxury experiences in one place.
          </p>
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="bg-[#f1f0eb] pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1920px] px-3 sm:px-4 md:px-5">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {galleryImages.map((image, index) => (
              <button
                key={`${image.src}-${index}`}
                type="button"
                onClick={() => setSelectedIndex(index)}
                className="group overflow-hidden rounded-md bg-white"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="h-[260px] w-full rounded-md object-cover transition duration-700 group-hover:scale-[1.04]"
                />
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 z-[120] bg-black/85 px-4 py-6">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 h-11 w-11 rounded-full bg-white/10 text-white"
          >
            ✕
          </button>

          <div className="flex h-full items-center justify-center">
            <div className="relative w-full max-w-[1400px]">
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-h-[82vh] w-full object-contain"
              />

              <button
                onClick={goPrev}
                className="absolute left-2 top-1/2 h-[50px] w-[50px] -translate-y-1/2 rounded-full bg-[#a88f53] text-white"
              >
                ‹
              </button>

              <button
                onClick={goNext}
                className="absolute right-2 top-1/2 h-[50px] w-[50px] -translate-y-1/2 rounded-full bg-[#a88f53] text-white"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}