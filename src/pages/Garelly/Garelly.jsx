// import React, { useEffect, useState } from "react";

// const galleryImages = [
//   { src: "/images/weddinghall1.png", alt: "Luxury wedding hall" },
//   { src: "/images/weddinghall2.jpg", alt: "Elegant venue interior" },
//   { src: "/images/weddinghall3.jpg", alt: "Reception space" },
//   { src: "/images/weddinghall4.jpg", alt: "Grand ceremony hall" },

//   { src: "/images/luxuryfooddecoration1.JPG", alt: "Luxury dining setup" },
//   { src: "/images/luxuryfooddecoration2.JPG", alt: "Catering display" },
//   { src: "/images/luxuryfooddecoration3.JPG", alt: "Fine dining service" },
//   { src: "/images/luxuryfooddecoration7.JPG", alt: "Event catering" },
//   { src: "/images/luxuryfooddecoration5.JPG", alt: "Gourmet setup" },
//   { src: "/images/food.png", alt: "Elegant dining" },
//   { src: "/images/drink.png", alt: "Luxury drinks service" },

//   { src: "/images/weddinghall9.jpg", alt: "Garden wedding space" },
//   { src: "/images/weddinghall10.jpg", alt: "Dining hall setup" },
//   { src: "/images/weddinghall11.jpg", alt: "Venue entrance" },
//   { src: "/images/bed1.JPG", alt: "Luxury apartment room" },

//   { src: "/images/bed2.JPG", alt: "Modern suite" },
//   { src: "/images/bed3.JPG", alt: "Elegant bedroom" },
//   { src: "/images/penthouse1.JPG", alt: "Penthouse suite" },
//   { src: "/images/penthouse2.JPG", alt: "Penthouse living room" },

//   { src: "/images/penthouse3.JPG", alt: "Suite bedroom" },
//   { src: "/images/penthouse4.JPG", alt: "Luxury amenities" },
//   { src: "/images/penthouse5.JPG", alt: "Private terrace" },
//   { src: "/images/penthouse6.JPG", alt: "Bathroom suite" },

//   { src: "/images/kitchen1.JPG", alt: "Modern kitchen" },
//   { src: "/images/parking1.JPG", alt: "Parking area" },
//   { src: "/images/parking2.JPG", alt: "Secure parking" },

//   { src: "/images/tent1.JPG", alt: "Wedding tent" },
//   { src: "/images/tent2.JPG", alt: "Outdoor setup" },
// ];

// export default function Garelly() {
//   const [selectedIndex, setSelectedIndex] = useState(null);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   useEffect(() => {
//     if (selectedIndex === null) return;

//     const onKeyDown = (e) => {
//       if (e.key === "Escape") setSelectedIndex(null);
//       if (e.key === "ArrowRight") goNext();
//       if (e.key === "ArrowLeft") goPrev();
//     };

//     document.body.style.overflow = "hidden";
//     window.addEventListener("keydown", onKeyDown);

//     return () => {
//       document.body.style.overflow = "";
//       window.removeEventListener("keydown", onKeyDown);
//     };
//   }, [selectedIndex]);

//   const goNext = () => {
//     setSelectedIndex((prev) =>
//       prev === null ? 0 : (prev + 1) % galleryImages.length
//     );
//   };

//   const goPrev = () => {
//     setSelectedIndex((prev) =>
//       prev === null
//         ? galleryImages.length - 1
//         : (prev - 1 + galleryImages.length) % galleryImages.length
//     );
//   };

//   return (
//     <div
//       className="w-full overflow-hidden bg-[#f1f0eb]"
//       style={{ fontFamily: "Montserrat, sans-serif" }}
//     >
//       {/* HERO */}
//       <section className="relative min-h-[62vh] overflow-hidden">
//         <img
//           src="/images/weddinghall1.png"
//           alt="Luxury apartments gallery"
//           className="absolute inset-0 h-full w-full object-cover"
//         />
//         <div className="absolute inset-0 bg-[rgba(22,18,15,0.40)]" />

//         <div className="relative z-20 mx-auto flex min-h-[62vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
//           <div className="pt-28 pb-14 md:pt-32 md:pb-20">
//             <p className="text-[12px] uppercase tracking-[0.2em] text-white/85">
//               Luxury Apartments
//             </p>

//             <h1
//               className="mt-4 text-[25px] font-normal leading-[0.95] text-white sm:text-[35px] md:text-[39px] lg:text-[40px]"
//               style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
//             >
//               Gallery
//             </h1>

//             <p className="mx-auto mt-5 max-w-[760px] text-[13px] leading-[1.7] text-white/85 sm:text-[14px]">
//               Luxury apartments, wedding spaces, dining & premium living.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="bg-[#f1f0eb] py-14 sm:py-16 md:py-20">
//         <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
//           <p className="text-[19x] text-[#a37f58]">Overview</p>

//           <h2
//             className="mt-3 text-[16px] font-normal leading-[0.98] text-[#23354a] sm:text-[20px] md:text-[30px]"
//             style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
//           >
//             Luxury Living Moments
//           </h2>

//           <p className="mx-auto mt-6 max-w-[800px] text-[14px] leading-[1.7] text-[#181818]">
//             Modern apartments, wedding venues, and luxury experiences in one place.
//           </p>
//         </div>
//       </section>

//       {/* GALLERY GRID */}
//       <section className="bg-[#f1f0eb] pb-16 sm:pb-20 md:pb-24 lg:pb-28">
//         <div className="mx-auto max-w-[1920px] px-3 sm:px-4 md:px-5">
//           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//             {galleryImages.map((image, index) => (
//               <button
//                 key={`${image.src}-${index}`}
//                 type="button"
//                 onClick={() => setSelectedIndex(index)}
//                 className="group overflow-hidden rounded-md bg-white"
//               >
//                 <img
//                   src={image.src}
//                   alt={image.alt}
//                   className="h-[260px] w-full rounded-md object-cover transition duration-700 group-hover:scale-[1.04]"
//                 />
//               </button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* LIGHTBOX */}
//       {selectedIndex !== null && (
//         <div className="fixed inset-0 z-[120] bg-black/85 px-4 py-6">
//           <button
//             type="button"
//             onClick={() => setSelectedIndex(null)}
//             className="absolute right-4 top-4 h-11 w-11 rounded-full bg-white/10 text-white"
//           >
//             ✕
//           </button>

//           <div className="flex h-full items-center justify-center">
//             <div className="relative w-full max-w-[1400px]">
//               <img
//                 src={galleryImages[selectedIndex].src}
//                 alt={galleryImages[selectedIndex].alt}
//                 className="max-h-[82vh] w-full object-contain"
//               />

//               <button
//                 onClick={goPrev}
//                 className="absolute left-2 top-1/2 h-[50px] w-[50px] -translate-y-1/2 rounded-full bg-[#a88f53] text-white"
//               >
//                 ‹
//               </button>

//               <button
//                 onClick={goNext}
//                 className="absolute right-2 top-1/2 h-[50px] w-[50px] -translate-y-1/2 rounded-full bg-[#a88f53] text-white"
//               >
//                 ›
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

















import React, { useEffect, useState } from "react";

// Use environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL || "/api";
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL || "/storage";

// Helper function to get full image URL
const getImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  if (path.startsWith('/storage')) return `${STORAGE_URL}${path}`;
  return `${STORAGE_URL}/${path}`;
};

export default function Garelly() {
  const [heroData, setHeroData] = useState({
    title: "Gallery",
    subtitle: "Luxury Apartments",
    description: "Luxury apartments, wedding spaces, dining & premium living.",
    background_image: "/images/weddinghall1.png",
  });
  
  const [introData, setIntroData] = useState({
    subtitle: "Overview",
    title: "Luxury Living Moments",
    description: "Modern apartments, wedding venues, and luxury experiences in one place.",
  });
  
  const [galleryImages, setGalleryImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch Gallery Hero Section
      try {
        const heroResponse = await fetch(`${API_URL}/wedding-gallery/hero`);
        const heroResult = await heroResponse.json();
        
        if (heroResult.success && heroResult.data) {
          setHeroData({
            title: heroResult.data.title || "Gallery",
            subtitle: "Luxury Apartments",
            description: heroResult.data.description || "Luxury apartments, wedding spaces, dining & premium living.",
            background_image: getImageUrl(heroResult.data.background_image) || "/images/weddinghall1.png",
          });
        }
      } catch (err) {
        console.error("Error fetching hero:", err);
      }
      
      // Fetch Gallery Overview (Section 1)
      try {
        const overviewResponse = await fetch(`${API_URL}/wedding-gallery/section1`);
        const overviewResult = await overviewResponse.json();
        
        if (overviewResult.success && overviewResult.data) {
          setIntroData({
            subtitle: overviewResult.data.subtitle || "Overview",
            title: overviewResult.data.title || "Luxury Living Moments",
            description: overviewResult.data.description || "Modern apartments, wedding venues, and luxury experiences in one place.",
          });
        }
      } catch (err) {
        console.error("Error fetching overview:", err);
      }
      
      // Fetch Gallery Images (Section 2)
      try {
        const imagesResponse = await fetch(`${API_URL}/wedding-gallery/section2`);
        const imagesResult = await imagesResponse.json();
        
        if (imagesResult.success && imagesResult.data && imagesResult.data.images) {
          const images = imagesResult.data.images
            .filter(img => img && img.trim() !== "")
            .map((img, index) => ({
              src: getImageUrl(img),
              alt: `Gallery image ${index + 1}`,
            }));
          setGalleryImages(images);
        } else {
          // Fallback images if none from API
          setGalleryImages([
            { src: "/images/weddinghall1.png", alt: "Luxury wedding hall" },
            { src: "/images/weddinghall2.jpg", alt: "Elegant venue interior" },
            { src: "/images/weddinghall3.jpg", alt: "Reception space" },
          ]);
        }
      } catch (err) {
        console.error("Error fetching gallery images:", err);
        setGalleryImages([
          { src: "/images/weddinghall1.png", alt: "Luxury wedding hall" },
          { src: "/images/weddinghall2.jpg", alt: "Elegant venue interior" },
          { src: "/images/weddinghall3.jpg", alt: "Reception space" },
        ]);
      }
      
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load gallery content. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  };

  // Lightbox keyboard navigation
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
  }, [selectedIndex, galleryImages.length]);

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

  if (loading) {
    return (
      <div className="bg-[#f1f0eb] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent mx-auto" />
          <p className="mt-4 text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="w-full overflow-hidden bg-[#f1f0eb]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO - Dynamic */}
      <section className="relative min-h-[62vh] overflow-hidden">
        <img
          src={heroData.background_image}
          alt="Luxury apartments gallery"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.target.src = "/images/weddinghall1.png";
          }}
        />
        <div className="absolute inset-0 bg-[rgba(22,18,15,0.40)]" />

        <div className="relative z-20 mx-auto flex min-h-[62vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
          <div className="pt-28 pb-14 md:pt-32 md:pb-20">
            <p className="text-[12px] uppercase tracking-[0.2em] text-white/85">
              {heroData.subtitle}
            </p>

            <h1
              className="mt-4 text-[25px] font-normal leading-[0.95] text-white sm:text-[35px] md:text-[39px] lg:text-[40px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              {heroData.title}
            </h1>

            <p className="mx-auto mt-5 max-w-[760px] text-[13px] leading-[1.7] text-white/85 sm:text-[14px]">
              {heroData.description}
            </p>
          </div>
        </div>
      </section>

      {/* INTRO - Dynamic */}
      <section className="bg-[#f1f0eb] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[16px] text-[#a37f58]">{introData.subtitle}</p>

          <h2
            className="mt-3 text-[16px] font-normal leading-[0.98] text-[#23354a] sm:text-[20px] md:text-[30px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {introData.title}
          </h2>

          <p className="mx-auto mt-6 max-w-[800px] text-[14px] leading-[1.7] text-[#181818]">
            {introData.description}
          </p>
        </div>
      </section>

      {/* GALLERY GRID - Dynamic */}
      <section className="bg-[#f1f0eb] pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1920px] px-3 sm:px-4 md:px-5">
          {galleryImages.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-500">No gallery images available at the moment.</p>
            </div>
          ) : (
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
                    onError={(e) => {
                      e.target.src = "https://via.placeholder.com/400x300?text=Image+Not+Found";
                    }}
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* LIGHTBOX */}
      {selectedIndex !== null && galleryImages.length > 0 && (
        <div className="fixed inset-0 z-[120] bg-black/85 px-4 py-6">
          <button
            type="button"
            onClick={() => setSelectedIndex(null)}
            className="absolute right-4 top-4 z-[130] flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            aria-label="Close gallery"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex h-full items-center justify-center">
            <div className="relative w-full max-w-[1400px]">
              <img
                src={galleryImages[selectedIndex].src}
                alt={galleryImages[selectedIndex].alt}
                className="max-h-[82vh] w-full object-contain"
                onError={(e) => {
                  e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
                }}
              />

              {/* Navigation Arrows */}
              {galleryImages.length > 1 && (
                <>
                  <button
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
                      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  <button
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
                      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="fixed bottom-4 right-4 z-50">
          <div className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
            {error}
            <button 
              onClick={fetchAllData}
              className="ml-3 underline hover:no-underline"
            >
              Retry
            </button>
          </div>
        </div>
      )}
    </div>
  );
}