// import React, { useEffect, useState } from "react";

// const slides = [
//   {
//     image: "/images/people2.jpg",
//     eyebrow: "Luxury Wedding Venue",
//     title: ["Experience Elevated", "Wedding Celebrations", "At Their Finest"],
//   },
//   {
//     image: "/images/tent4.png",
//     eyebrow: "Elegant Celebrations",
//     title: ["Designed For", "Love, Style", "And Unforgettable Moments"],
//   },
//   {
//     image: "/images/gathering2.jpg",
//     eyebrow: "Premium Wedding Spaces",
//     title: ["Where Every Detail", "Reflects Elegance", "And Romance"],
//   },
//   {
//     image: "/images/wedding1.png",
//     eyebrow: "Exclusive Wedding Experience",
//     title: ["Create The Wedding", "You've Always", "Dreamed Of"],
//   },
// ];

// export default function Wellcom() {
//   const [current, setCurrent] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setCurrent((prev) => (prev + 1) % slides.length);
//     }, 6000);
//     return () => clearInterval(timer);
//   }, []);

//   const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
//   const goPrev = () =>
//     setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

//   return (
//     <section className="relative min-h-[calc(100vh-56px)] overflow-hidden">
      
//       {/* Background Slides */}
//       <div className="absolute inset-0">
//         {slides.map((slide, index) => (
//           <div
//             key={slide.image}
//             className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
//               index === current ? "opacity-100" : "opacity-0"
//             }`}
//           >
//             <div
//               className="absolute inset-0 bg-cover bg-center bg-no-repeat"
//               style={{ backgroundImage: `url('${slide.image}')` }}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Overlays */}
//       <div className="absolute inset-0 bg-black/45" />
//       <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/35" />

//       {/* Main Content */}
//       <div className="relative z-10 mx-auto flex min-h-[calc(100vh-56px)] max-w-[1400px] items-center px-4 pt-[120px] pb-12 sm:px-6 md:px-8 lg:px-10">
//         <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          
//           {/* Left Text */}
//           <div key={`copy-${current}`} className="flex min-h-[240px] items-center lg:min-h-[360px]">
//             <div className="max-w-[700px] pb-2 text-center lg:pb-6 lg:text-left">
              
//               {/* Eyebrow */}
//               <p className="mb-2 text-[10px] sm:text-[11px] md:text-[12px] font-medium uppercase tracking-[0.2em] text-white/90">
//                 {slides[current].eyebrow}
//               </p>

//               {/* Title (ONE LINE) */}
//               <h1 className="mb-6 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-semibold tracking-[-0.01em] text-white whitespace-nowrap overflow-hidden text-ellipsis">
//                 {slides[current].title.join(" ")}
//               </h1>

//               {/* Mobile Button */}
//               <div className="mt-4 lg:hidden">
//                 <a
//                   href="/start-planning"
//                   className="inline-flex h-[36px] items-center justify-center bg-[#a99258] px-5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:opacity-90"
//                 >
//                   Start Planning
//                 </a>
//               </div>
//             </div>
//           </div>

//           {/* Right Form Card - desktop only */}
//           <div className="hidden justify-center lg:flex lg:justify-end">
//             <div className="w-full max-w-[460px] rounded-md bg-white/85 p-5 shadow backdrop-blur-sm">
//               <h2 className="text-center text-[20px] sm:text-[24px] font-light text-[#1c3440]">
//                 Start Planning
//               </h2>

//               <form className="mt-4 space-y-2">
//                 <input type="text" placeholder="First Name *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />
//                 <input type="text" placeholder="Last Name *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />
//                 <input type="email" placeholder="Email *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />
//                 <input type="text" placeholder="Phone Number *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />
//                 <input type="text" placeholder="Company *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />

//                 <div className="pt-1 text-[11px] text-[#37454a] space-y-1">
//                   <label className="flex items-start gap-2">
//                     <input type="checkbox" className="mt-0.5 h-3 w-3" />
//                     <span>I agree to the Privacy Policy.</span>
//                   </label>
//                   <label className="flex items-start gap-2">
//                     <input type="checkbox" className="mt-0.5 h-3 w-3" />
//                     <span>Contact me regarding my request.</span>
//                   </label>
//                 </div>

//                 <div className="pt-2 text-center">
//                   <a
//                     href="/start-planning"
//                     className="inline-flex min-w-[130px] items-center justify-center bg-[#a99258] px-5 py-2 text-[11px] uppercase text-white"
//                   >
//                     Continue
//                   </a>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Arrows */}
//       <button
//         onClick={goPrev}
//         className="absolute left-4 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white md:flex"
//       >
//         ‹
//       </button>

//       <button
//         onClick={goNext}
//         className="absolute right-4 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white md:flex"
//       >
//         ›
//       </button>
//     </section>
//   );
// } 








  import React, { useEffect, useState } from "react";

  const API_URL = import.meta.env.VITE_API_BASE_URL
  const STORAGE_URL = import.meta.env.VITE_STORAGE_URL 

  export default function Wellcom() {
    const [slides, setSlides] = useState([]);
    const [current, setCurrent] = useState(0);
    const [loading, setLoading] = useState(true);

    // Fetch slides from backend
    useEffect(() => {
      const fetchSlides = async () => {
        try {
          const response = await fetch(`${API_URL}/wedding/slides`);
          const data = await response.json();
          
          if (data.success && data.data && data.data.length > 0) {
            // Process image URLs - convert storage paths to full URLs
            const processedSlides = data.data.map((slide) => {
              let imageUrl = slide.image_url;
              
              // If image_url is a storage path (not a full URL)
              if (imageUrl && !imageUrl.startsWith("http")) {
                // Remove 'storage/' prefix if present to avoid double storage
                const cleanPath = imageUrl.replace(/^storage\//, '');
                imageUrl = `${STORAGE_URL}/${cleanPath}`;
              }
              
              return {
                id: slide.id,
                title: slide.title,
                subtitle: slide.subtitle,
                description: slide.description,
                image_url: imageUrl,
                sort_order: slide.sort_order,
              };
            });
            
            // Sort by sort_order
            const sortedSlides = processedSlides.sort((a, b) => (a.sort_order || 0) - (b.sort_order || 0));
            setSlides(sortedSlides);
          } else {
            console.log("No slides found in database");
          }
        } catch (error) {
          console.error("Error fetching slides:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchSlides();
    }, []);

    // Auto slide every 6 seconds
    useEffect(() => {
      if (slides.length === 0) return;
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(timer);
    }, [slides.length]);

    const goNext = () => setCurrent((prev) => (prev + 1) % slides.length);
    const goPrev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

    if (loading) {
      return (
        <section className="relative min-h-[calc(100vh-56px)] flex items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
        </section>
      );
    }

    // If no slides, show a placeholder message
    if (slides.length === 0) {
      return (
        <section className="relative min-h-[calc(100vh-56px)] flex items-center justify-center bg-gray-100">
          <div className="text-center p-8">
            <h2 className="text-xl font-semibold text-gray-600">No Slides Available</h2>
            <p className="text-gray-500 mt-2">Please add slides from the admin dashboard.</p>
          </div>
        </section>
      );
    }

    return (
      <section className="relative min-h-[calc(100vh-56px)] overflow-hidden">
        
        {/* Background Slides */}
        <div className="absolute inset-0">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-[1200ms] ease-in-out ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url('${slide.image_url}')` }}
              />
            </div>
          ))}
        </div>

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/35" />

        {/* Main Content */}
        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-56px)] max-w-[1400px] items-center px-4 pt-[120px] pb-12 sm:px-6 md:px-8 lg:px-10">
          <div className="grid w-full grid-cols-1 items-center gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
            
            {/* Left Text */}
            <div key={`copy-${current}`} className="flex min-h-[240px] items-center lg:min-h-[360px]">
              <div className="max-w-[700px] pb-2 text-center lg:pb-6 lg:text-left">
                
                {/* Eyebrow / Subtitle */}
                {slides[current].subtitle && (
                  <p className="mb-2 text-[10px] sm:text-[11px] md:text-[12px] font-medium uppercase tracking-[0.2em] text-white/90">
                    {slides[current].subtitle}
                  </p>
                )}

                {/* Title */}
                <h1 className="mb-6 text-[16px] sm:text-[18px] md:text-[22px] lg:text-[26px] font-semibold tracking-[-0.01em] text-white whitespace-nowrap overflow-hidden text-ellipsis">
                  {slides[current].title}
                </h1>

                {/* Description */}
                {slides[current].description && (
                  <p className="text-[14px] sm:text-[16px] text-white/90">
                    {slides[current].description}
                  </p>
                )}

                {/* Mobile Button */}
                <div className="mt-4 lg:hidden">
                  <a
                    href="/start-planning"
                    className="inline-flex h-[36px] items-center justify-center bg-[#a99258] px-5 text-[11px] font-medium uppercase tracking-[0.14em] text-white transition hover:opacity-90"
                  >
                    Start Planning
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Card - desktop only */}
            <div className="hidden justify-center lg:flex lg:justify-end">
              <div className="w-full max-w-[460px] rounded-md bg-white/85 p-5 shadow backdrop-blur-sm">
                <h2 className="text-center text-[20px] sm:text-[24px] font-light text-[#1c3440]">
                  Start Planning
                </h2>

                <form className="mt-4 space-y-2">
                  <input type="text" placeholder="First Name *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />
                  <input type="text" placeholder="Last Name *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />
                  <input type="email" placeholder="Email *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />
                  <input type="text" placeholder="Phone Number *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />
                  <input type="text" placeholder="Company *" className="h-[36px] w-full border border-[#687174] px-3 text-[12px]" />

                  <div className="pt-1 text-[11px] text-[#37454a] space-y-1">
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-0.5 h-3 w-3" />
                      <span>I agree to the Privacy Policy.</span>
                    </label>
                    <label className="flex items-start gap-2">
                      <input type="checkbox" className="mt-0.5 h-3 w-3" />
                      <span>Contact me regarding my request.</span>
                    </label>
                  </div>

                  <div className="pt-2 text-center">
                    <a
                      href="/start-planning"
                      className="inline-flex min-w-[130px] items-center justify-center bg-[#a99258] px-5 py-2 text-[11px] uppercase text-white"
                    >
                      Continue
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows - only show if more than 1 slide */}
        {slides.length > 1 && (
          <>
            <button
              onClick={goPrev}
              className="absolute left-4 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white hover:bg-white/20 transition-colors md:flex"
              aria-label="Previous slide"
            >
              ‹
            </button>
            <button
              onClick={goNext}
              className="absolute right-4 top-1/2 z-20 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 text-white hover:bg-white/20 transition-colors md:flex"
              aria-label="Next slide"
            >
              ›
            </button>
          </>
        )}

        {/* Dots indicator */}
        {slides.length > 1 && (
          <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === current ? "w-6 bg-white" : "bg-white/50"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </section>
    );
  }