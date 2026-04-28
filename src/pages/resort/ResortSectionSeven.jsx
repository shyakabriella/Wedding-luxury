// import React, { useEffect, useRef, useState } from "react";

// function TreeIcon() {
//   return (
//     <svg
//       viewBox="0 0 24 24"
//       className="h-10 w-10 md:h-12 md:w-12"
//       fill="currentColor"
//       aria-hidden="true"
//     >
//       <path d="M12 2c-1.6 0-2.8 1.3-2.8 2.8 0 .2 0 .5.1.7-2.2.3-3.8 2.2-3.8 4.4 0 .6.1 1.1.3 1.6-1.8.5-3.1 2.1-3.1 4.1 0 2.4 1.9 4.3 4.3 4.3h3.7V22h2.6v-2.9h3.7c2.4 0 4.3-1.9 4.3-4.3 0-1.9-1.3-3.6-3.1-4.1.2-.5.3-1 .3-1.6 0-2.2-1.6-4.1-3.8-4.4.1-.2.1-.5.1-.7C14.8 3.3 13.6 2 12 2Z" />
//     </svg>
//   );
// }

// export default function ResortSectionSeven() {
//   const sectionRef = useRef(null);
//   const [show, setShow] = useState(false);

//   useEffect(() => {
//     const currentSection = sectionRef.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//         }
//       },
//       { threshold: 0.18 }
//     );

//     if (currentSection) {
//       observer.observe(currentSection);
//     }

//     return () => {
//       if (currentSection) {
//         observer.unobserve(currentSection);
//       }
//     };
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full overflow-hidden bg-[#efeee8] py-14 md:py-20 lg:py-24"
//       style={{ fontFamily: "Montserrat, sans-serif" }}
//     >
//       <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-14 xl:px-20">
//         <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
//           {/* Left image */}
//           <div
//             className={`relative transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto w-full max-w-[980px] overflow-hidden">
//               <img
//                 src="/images/weddinghall6.jpg"
//                 alt="Resort landscape"
//                 className="h-[260px] w-full object-cover sm:h-[340px] md:h-[430px] lg:h-[520px]"
//               />
//             </div>

//             {/* Overlapping round badge */}
//             <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 lg:flex">
//               <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#f6f5f0] text-[#213739] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
//                 <TreeIcon />
//               </div>
//             </div>
//           </div>

//           {/* Right content */}
//           <div
//             className={`transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto max-w-[560px] text-center lg:mx-0 lg:text-left">
//               <p className="text-[14px] font-medium text-[#a17d5a] sm:text-[16px] md:text-[18px]">
//                 Location
//               </p>

//               <h2 className="mt-5 text-[20px] font-light leading-[0.98] tracking-[-0.03em] text-[#18393b] sm:text-[28px] md:text-[38px] lg:text-[44px]">
//                 Our venues
//               </h2>

//               <p className="mt-7 max-w-[520px] text-[14px] leading-[1.9] text-[#334243] sm:text-[15px] md:text-[16px]">
//                 Our stunning venue sets the scene for exceptional wedding
//                 celebrations with elegant gardens and luxurious facilities. We invite you to
//                 explore our ceremony spaces, reception halls, bridal suites, 
//                 cocktail terraces, and so much more.
//               </p>

//               <a href="/venues" target="_blank" className="mt-9 rounded-md inline-flex min-w-[160px] items-center justify-center bg-[#213739] px-8 py-4 text-[14px] font-normal text-white transition duration-300 hover:opacity-90">
//                 Explore
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }





















import React, { useEffect, useRef, useState } from "react";

// Use environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL || "http://127.0.0.1:8000/storage";

function TreeIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10 md:h-12 md:w-12"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2c-1.6 0-2.8 1.3-2.8 2.8 0 .2 0 .5.1.7-2.2.3-3.8 2.2-3.8 4.4 0 .6.1 1.1.3 1.6-1.8.5-3.1 2.1-3.1 4.1 0 2.4 1.9 4.3 4.3 4.3h3.7V22h2.6v-2.9h3.7c2.4 0 4.3-1.9 4.3-4.3 0-1.9-1.3-3.6-3.1-4.1.2-.5.3-1 .3-1.6 0-2.2-1.6-4.1-3.8-4.4.1-.2.1-.5.1-.7C14.8 3.3 13.6 2 12 2Z" />
    </svg>
  );
}

export default function ResortSectionSeven() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [sectionData, setSectionData] = useState({
    title: "Location",
    subtitle: "Our venues",
    description: "Our stunning venue sets the scene for exceptional wedding celebrations with elegant gardens and luxurious facilities. We invite you to explore our ceremony spaces, reception halls, bridal suites, cocktail terraces, and so much more.",
    image_url: null,
    button_text: "Explore",
    button_link: "/venues"
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch location section data
    fetch(`${API_URL}/wedding/section5/location`)
      .then(res => {
        if (res.status === 404) {
          // No data yet, use defaults
          return { success: false, data: null };
        }
        return res.json();
      })
      .then(result => {
        if (result.success && result.data) {
          const data = result.data;
          setSectionData({
            title: data.title || "Location",
            subtitle: data.subtitle || "Our venues",
            description: data.description || "Our stunning venue sets the scene for exceptional wedding celebrations with elegant gardens and luxurious facilities. We invite you to explore our ceremony spaces, reception halls, bridal suites, cocktail terraces, and so much more.",
            image_url: data.image_url,
            button_text: "Explore",
            button_link: "/venues"
          });
        }
      })
      .catch(err => {
        console.error("Error fetching location section:", err);
        // Keep using defaults on error
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const currentSection = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
        }
      },
      { threshold: 0.18 }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Helper function to get full image URL
  const getImageUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    if (path.startsWith('/storage')) return `${STORAGE_URL}${path}`;
    return `${STORAGE_URL}/${path}`;
  };

  const displayImage = getImageUrl(sectionData.image_url) || "/images/weddinghall6.jpg";

  if (loading) {
    return (
      <section
        ref={sectionRef}
        className="w-full overflow-hidden bg-[#efeee8] py-14 md:py-20 lg:py-24"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      className="w-full overflow-hidden bg-[#efeee8] py-14 md:py-20 lg:py-24"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-14 xl:gap-20">
          {/* Left image */}
          <div
            className={`relative transition-all duration-1000 ease-out ${
              show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
            }`}
          >
            <div className="mx-auto w-full max-w-[980px] overflow-hidden">
              <img
                src={displayImage}
                alt={sectionData.subtitle}
                className="h-[260px] w-full object-cover sm:h-[340px] md:h-[430px] lg:h-[520px]"
                onError={(e) => {
                  e.target.src = "/images/weddinghall6.jpg";
                }}
              />
            </div>

            {/* Overlapping round badge */}
            <div className="absolute right-[-14px] top-1/2 hidden -translate-y-1/2 lg:flex">
              <div className="flex h-[92px] w-[92px] items-center justify-center rounded-full bg-[#f6f5f0] text-[#213739] shadow-[0_8px_24px_rgba(0,0,0,0.08)]">
                <TreeIcon />
              </div>
            </div>
          </div>

          {/* Right content */}
          <div
            className={`transition-all duration-1000 ease-out ${
              show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-[560px] text-center lg:mx-0 lg:text-left">
              <p className="text-[14px] font-medium text-[#a17d5a] sm:text-[16px] md:text-[18px]">
                {sectionData.title}
              </p>

              <h2 className="mt-5 text-[20px] font-light leading-[0.98] tracking-[-0.03em] text-[#18393b] sm:text-[28px] md:text-[38px] lg:text-[44px]">
                {sectionData.subtitle}
              </h2>

              <p className="mt-7 max-w-[520px] text-[14px] leading-[1.9] text-[#334243] sm:text-[15px] md:text-[16px]">
                {sectionData.description}
              </p>

              <a 
                href={sectionData.button_link} 
                target="_blank" 
                className="mt-9 rounded-md inline-flex min-w-[160px] items-center justify-center bg-[#213739] px-8 py-4 text-[14px] font-normal text-white transition duration-300 hover:opacity-90"
              >
                {sectionData.button_text}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}