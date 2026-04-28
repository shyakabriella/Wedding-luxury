// import React, { useEffect, useRef, useState } from "react";

// export default function ResortSectionFive() {
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
//       { threshold: 0.2 }
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
//       className="relative overflow-hidden bg-[#f4f2ed] py-14 md:py-20 lg:py-24"
//       style={{ fontFamily: "Montserrat, sans-serif" }}
//     >
//       {/* Faded background image on left */}
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[62%] overflow-hidden">
//         <img
//           src="/images/bed8.JPG"
//           alt="Accommodations background"
//           className="h-full w-full object-cover opacity-[0.13] grayscale"
//         />
//         <div className="absolute inset-0 bg-white/65" />
//       </div>

//       <div className="relative mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-14 xl:px-20">
//         <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
//           {/* Left content */}
//           <div
//             className={`relative z-10 transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto max-w-[520px] text-center lg:mx-0 lg:text-left">
//               <p className="text-[14px] font-medium text-[#a07d59] sm:text-[16px] md:text-[18px]">
//                 Wedding Accommodations
//               </p>

//               <h2 className="mt-5 text-[20px] font-light leading-[0.98] tracking-[-0.03em] text-[#18393b] sm:text-[28px] md:text-[38px] lg:text-[44px]">
//                 Luxury Guest Suites
//               </h2>

//               <p className="mt-5 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.8] text-[#354344]">
//                 Provide your guests with elegant accommodations featuring modern amenities, 
//                 comfortable furnishings, and beautiful views for an unforgettable wedding experience.
//               </p>

//               <button className="mt-9 inline-flex min-w-[210px] items-center justify-center bg-[#1f3435] px-8 py-4 text-[14px] font-normal text-white transition duration-300 hover:opacity-90">
//                 View Suites
//               </button>
//             </div>
//           </div>

//           {/* Right image */}
//           <div
//             className={`relative transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto w-full max-w-[900px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
//               <img
//                 src="images/5K8A0795.jpg"
//                 alt="Cozy lodging room"
//                 className="h-[280px] rounded-md w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[540px] xl:h-[600px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
























// import React, { useEffect, useRef, useState } from "react";

// const API_URL = "http://127.0.0.1:8000/api";
// const STORAGE_URL = "http://127.0.0.1:8000/storage";

// export default function ResortSectionFive() {
//   const sectionRef = useRef(null);
//   const [show, setShow] = useState(false);
//   const [sectionData, setSectionData] = useState({
//     title: "Wedding Accommodations",
//     subtitle: "Luxury Guest Suites",
//     description: "Provide your guests with elegant accommodations featuring modern amenities, comfortable furnishings, and beautiful views for an unforgettable wedding experience.",
//     image_url: null,
//     button_text: "View Suites",
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchSectionData();
//   }, []);

//   useEffect(() => {
//     const currentSection = sectionRef.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//         }
//       },
//       { threshold: 0.2 }
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

//   const fetchSectionData = async () => {
//     try {
//       const response = await fetch(`${API_URL}/wedding/section4/accommodations`);
//       const result = await response.json();
      
//       if (result.success && result.data) {
//         const data = result.data;
//         setSectionData({
//           title: data.title || "Wedding Accommodations",
//           subtitle: data.subtitle || "Luxury Guest Suites",
//           description: data.description || "Provide your guests with elegant accommodations featuring modern amenities, comfortable furnishings, and beautiful views for an unforgettable wedding experience.",
//           image_url: data.image_url,
//           button_text: data.button_text || "View Suites",
//         });
//       }
//     } catch (err) {
//       console.error("Error fetching section data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getImageUrl = (path) => {
//     if (!path) return null;
//     if (path.startsWith('http')) return path;
//     if (path.startsWith('/storage')) return `http://127.0.0.1:8000${path}`;
//     return `${STORAGE_URL}/${path}`;
//   };

//   if (loading) {
//     return (
//       <section
//         className="relative overflow-hidden bg-[#f4f2ed] py-14 md:py-20 lg:py-24"
//         style={{ fontFamily: "Montserrat, sans-serif" }}
//       >
//         <div className="flex items-center justify-center min-h-[400px]">
//           <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
//         </div>
//       </section>
//     );
//   }

//   const mainImageUrl = getImageUrl(sectionData.image_url);
//   const hasImage = mainImageUrl && mainImageUrl !== null;

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-[#f4f2ed] py-14 md:py-20 lg:py-24"
//       style={{ fontFamily: "Montserrat, sans-serif" }}
//     >
//       {/* Faded background image on left - Only show if image exists */}
//       {hasImage && (
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[62%] overflow-hidden">
//           <img
//             src={mainImageUrl}
//             alt="Accommodations background"
//             className="h-full w-full object-cover opacity-[0.13] grayscale"
//             onError={(e) => {
//               e.target.style.display = 'none';
//             }}
//           />
//           <div className="absolute inset-0 bg-white/65" />
//         </div>
//       )}

//       <div className="relative mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-14 xl:px-20">
//         <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
//           {/* Left content */}
//           <div
//             className={`relative z-10 transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto max-w-[520px] text-center lg:mx-0 lg:text-left">
//               <p className="text-[14px] font-medium text-[#a07d59] sm:text-[16px] md:text-[18px]">
//                 {sectionData.title}
//               </p>

//               <h2 className="mt-5 text-[20px] font-light leading-[0.98] tracking-[-0.03em] text-[#18393b] sm:text-[28px] md:text-[38px] lg:text-[44px]">
//                 {sectionData.subtitle}
//               </h2>

//               <p className="mt-5 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.8] text-[#354344]">
//                 {sectionData.description}
//               </p>

//               <button className="mt-9 inline-flex min-w-[210px] items-center justify-center bg-[#1f3435] px-8 py-4 text-[14px] font-normal text-white transition duration-300 hover:opacity-90">
//                 {sectionData.button_text}
//               </button>
//             </div>
//           </div>

//           {/* Right image */}
//           <div
//             className={`relative transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto w-full max-w-[900px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
//               {hasImage ? (
//                 <img
//                   src={mainImageUrl}
//                   alt={sectionData.subtitle}
//                   className="h-[280px] rounded-md w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[540px] xl:h-[600px]"
//                   onError={(e) => {
//                     e.target.src = "https://via.placeholder.com/800x600?text=Image+Not+Found";
//                   }}
//                 />
//               ) : (
//                 <div className="h-[280px] rounded-md w-full bg-gray-200 flex items-center justify-center sm:h-[360px] md:h-[460px] lg:h-[540px] xl:h-[600px]">
//                   <span className="text-gray-400">No Image Available</span>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }



















// import React, { useEffect, useRef, useState } from "react";

// const API_URL = "http://127.0.0.1:8000/api";
// const STORAGE_URL = "http://127.0.0.1:8000/storage";

// export default function ResortSectionFive() {
//   const sectionRef = useRef(null);
//   const [show, setShow] = useState(false);
//   const [sectionData, setSectionData] = useState({
//     title: "Wedding Accommodations",
//     subtitle: "Luxury Guest Suites",
//     description: "Provide your guests with elegant accommodations featuring modern amenities, comfortable furnishings, and beautiful views for an unforgettable wedding experience.",
//     image_url: null,
//     button_text: "View Suites",
//   });
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchSectionData();
//   }, []);

//   useEffect(() => {
//     const currentSection = sectionRef.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//         }
//       },
//       { threshold: 0.2 }
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

//   const fetchSectionData = async () => {
//     try {
//       const response = await fetch(`${API_URL}/wedding/section4/accommodations`);
//       const result = await response.json();
      
//       if (result.success && result.data) {
//         const data = result.data;
//         setSectionData({
//           title: data.title || "Wedding Accommodations",
//           subtitle: data.subtitle || "Luxury Guest Suites",
//           description: data.description || "Provide your guests with elegant accommodations featuring modern amenities, comfortable furnishings, and beautiful views for an unforgettable wedding experience.",
//           image_url: data.image_url,
//           button_text: data.button_text || "View Suites",
//         });
//       }
//     } catch (err) {
//       console.error("Error fetching section data:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const getImageUrl = (path) => {
//     if (!path) return null;
//     if (path.startsWith('http')) return path;
//     if (path.startsWith('/storage')) return `http://127.0.0.1:8000${path}`;
//     return `${STORAGE_URL}/${path}`;
//   };

//   if (loading) {
//     return (
//       <section
//         className="relative overflow-hidden bg-[#f4f2ed] py-14 md:py-20 lg:py-24"
//         style={{ fontFamily: "Montserrat, sans-serif" }}
//       >
//         <div className="flex items-center justify-center min-h-[400px]">
//           <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
//         </div>
//       </section>
//     );
//   }

//   const imageUrl = getImageUrl(sectionData.image_url);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-[#f4f2ed] py-14 md:py-20 lg:py-24"
//       style={{ fontFamily: "Montserrat, sans-serif" }}
//     >
//       {/* Faded background image on left */}
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[62%] overflow-hidden">
//         <img
//           src={imageUrl || "/images/bed8.JPG"}
//           alt="Accommodations background"
//           className="h-full w-full object-cover opacity-[0.13] grayscale"
//           onError={(e) => {
//             e.target.src = "/images/bed8.JPG";
//           }}
//         />
//         <div className="absolute inset-0 bg-white/65" />
//       </div>

//       <div className="relative mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-14 xl:px-20">
//         <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
//           {/* Left content */}
//           <div
//             className={`relative z-10 transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto max-w-[520px] text-center lg:mx-0 lg:text-left">
//               <p className="text-[14px] font-medium text-[#a07d59] sm:text-[16px] md:text-[18px]">
//                 {sectionData.title}
//               </p>

//               <h2 className="mt-5 text-[20px] font-light leading-[0.98] tracking-[-0.03em] text-[#18393b] sm:text-[28px] md:text-[38px] lg:text-[44px]">
//                 {sectionData.subtitle}
//               </h2>

//               <p className="mt-5 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.8] text-[#354344]">
//                 {sectionData.description}
//               </p>

//               <button className="mt-9 inline-flex min-w-[210px] items-center justify-center bg-[#1f3435] px-8 py-4 text-[14px] font-normal text-white transition duration-300 hover:opacity-90">
//                 {sectionData.button_text}
//               </button>
//             </div>
//           </div>

//           {/* Right image */}
//           <div
//             className={`relative transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto w-full max-w-[900px] overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
//               <img
//                 src={imageUrl || "/images/5K8A0795.jpg"}
//                 alt={sectionData.subtitle}
//                 className="h-[280px] rounded-md w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[540px] xl:h-[600px]"
//                 onError={(e) => {
//                   e.target.src = "/images/5K8A0795.jpg";
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }






// import React, { useEffect, useRef, useState } from "react";

// const API_URL = "http://127.0.0.1:8000/api";
// const STORAGE_URL = "http://127.0.0.1:8000/storage";

// export default function ResortSectionFive() {
//   const sectionRef = useRef(null);
//   const [show, setShow] = useState(false);
//   const [title, setTitle] = useState("Wedding Accommodations");
//   const [subtitle, setSubtitle] = useState("Luxury Guest Suites");
//   const [description, setDescription] = useState("Provide your guests with elegant accommodations featuring modern amenities, comfortable furnishings, and beautiful views for an unforgettable wedding experience.");
//   const [imageUrl, setImageUrl] = useState(null);
//   const [buttonText, setButtonText] = useState("View Suites");

//   useEffect(() => {
//     // Fetch data without loading state
//     fetch(`${API_URL}/wedding/section4/accommodations`)
//       .then(res => res.json())
//       .then(result => {
//         if (result.success && result.data) {
//           const data = result.data;
//           if (data.title) setTitle(data.title);
//           if (data.subtitle) setSubtitle(data.subtitle);
//           if (data.description) setDescription(data.description);
//           if (data.image_url) setImageUrl(data.image_url);
//           if (data.button_text) setButtonText(data.button_text);
//         }
//       })
//       .catch(err => console.error("Error:", err));
//   }, []);

//   useEffect(() => {
//     const currentSection = sectionRef.current;
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//         }
//       },
//       { threshold: 0.2 }
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

//   const getImageUrl = (path) => {
//     if (!path) return null;
//     if (path.startsWith('http')) return path;
//     return `${STORAGE_URL}/${path}`;
//   };

//   const displayImage = getImageUrl(imageUrl) || "/images/5K8A0795.jpg";

//   return (
//     <section
//       ref={sectionRef}
//       className="relative overflow-hidden bg-[#f4f2ed] py-14 md:py-20 lg:py-24"
//       style={{ fontFamily: "Montserrat, sans-serif" }}
//     >
//       <div className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[62%] overflow-hidden">
//         <img
//           src="/images/bed8.JPG"
//           alt="Accommodations background"
//           className="h-full w-full object-cover opacity-[0.13] grayscale"
//         />
//         <div className="absolute inset-0 bg-white/65" />
//       </div>

//       <div className="relative mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-14 xl:px-20">
//         <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
//           <div
//             className={`relative z-10 transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto max-w-[520px] text-center lg:mx-0 lg:text-left">
//               <p className="text-[14px] font-medium text-[#a07d59] sm:text-[16px] md:text-[18px]">
//                 {title}
//               </p>
//               <h2 className="mt-5 text-[20px] font-light leading-[0.98] tracking-[-0.03em] text-[#18393b] sm:text-[28px] md:text-[38px] lg:text-[44px]">
//                 {subtitle}
//               </h2>
//               <p className="mt-5 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.8] text-[#354344]">
//                 {description}
//               </p>
//               <button className="mt-9 inline-flex min-w-[210px] items-center justify-center bg-[#1f3435] px-8 py-4 text-[14px] font-normal text-white transition duration-300 hover:opacity-90">
//                 {buttonText}
//               </button>
//             </div>
//           </div>

//           <div
//             className={`relative transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="mx-auto w-full max-w-[900px] overflow-hidden rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
//               <img
//                 src={displayImage}
//                 alt={subtitle}
//                 className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[540px] xl:h-[600px]"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }




import React, { useEffect, useRef, useState } from "react";

// Use environment variables for production, fallback to local for development
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL || "http://127.0.0.1:8000/storage";

export default function ResortSectionFive() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("Wedding Accommodations");
  const [subtitle, setSubtitle] = useState("Luxury Guest Suites");
  const [description, setDescription] = useState("Provide your guests with elegant accommodations featuring modern amenities, comfortable furnishings, and beautiful views for an unforgettable wedding experience.");
  const [imageUrl, setImageUrl] = useState(null);
  const [buttonText, setButtonText] = useState("View Suites");
  const [error, setError] = useState(null); // Add error state for debugging

  useEffect(() => {
    // Debug logging - remove in production
    console.log("API_URL being used:", API_URL);
    console.log("Fetching from:", `${API_URL}/wedding/section4/accommodations`);
    
    // Fetch data without loading state
    fetch(`${API_URL}/wedding/section4/accommodations`)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText}`);
        }
        return res.json();
      })
      .then(result => {
        console.log("API Response:", result); // Debug log
        if (result.success && result.data) {
          const data = result.data;
          if (data.title) setTitle(data.title);
          if (data.subtitle) setSubtitle(data.subtitle);
          if (data.description) setDescription(data.description);
          if (data.image_url) setImageUrl(data.image_url);
          if (data.button_text) setButtonText(data.button_text);
        }
      })
      .catch(err => {
        console.error("Error fetching data:", err);
        setError(err.message);
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
      { threshold: 0.2 }
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

  const getImageUrl = (path) => {
    if (!path) return null;
    if (path.startsWith('http')) return path;
    return `${STORAGE_URL}/${path}`;
  };

  const displayImage = getImageUrl(imageUrl) || "/images/5K8A0795.jpg";

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4f2ed] py-14 md:py-20 lg:py-24"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* Debug error display - remove in production */}
      {error && (
        <div className="fixed top-4 right-4 bg-red-500 text-white p-4 rounded-lg z-50">
          API Error: {error}
        </div>
      )}
      
      <div className="pointer-events-none absolute inset-y-0 left-0 w-full lg:w-[62%] overflow-hidden">
        <img
          src="/images/bed8.JPG"
          alt="Accommodations background"
          className="h-full w-full object-cover opacity-[0.13] grayscale"
        />
        <div className="absolute inset-0 bg-white/65" />
      </div>

      <div className="relative mx-auto max-w-[1600px] px-5 sm:px-6 md:px-10 lg:px-14 xl:px-20">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14 xl:gap-20">
          <div
            className={`relative z-10 transition-all duration-1000 ease-out ${
              show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
            }`}
          >
            <div className="mx-auto max-w-[520px] text-center lg:mx-0 lg:text-left">
              <p className="text-[14px] font-medium text-[#a07d59] sm:text-[16px] md:text-[18px]">
                {title}
              </p>
              <h2 className="mt-5 text-[20px] font-light leading-[0.98] tracking-[-0.03em] text-[#18393b] sm:text-[28px] md:text-[38px] lg:text-[44px]">
                {subtitle}
              </h2>
              <p className="mt-5 text-[12px] sm:text-[13px] md:text-[14px] leading-[1.8] text-[#354344]">
                {description}
              </p>
              <button className="mt-9 inline-flex min-w-[210px] items-center justify-center bg-[#1f3435] px-8 py-4 text-[14px] font-normal text-white transition duration-300 hover:opacity-90">
                {buttonText}
              </button>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1000 ease-out ${
              show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
            }`}
          >
            <div className="mx-auto w-full max-w-[900px] overflow-hidden rounded-md shadow-[0_10px_40px_rgba(0,0,0,0.15)]">
              <img
                src={displayImage}
                alt={subtitle}
                className="h-[280px] w-full object-cover sm:h-[360px] md:h-[460px] lg:h-[540px] xl:h-[600px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}