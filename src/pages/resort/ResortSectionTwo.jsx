// import React, { useEffect, useRef, useState } from "react";

// export default function ResortSectionTwo() {
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
//       { threshold: 0.15 }
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
//       className="w-full overflow-hidden bg-[#f3f2ec] py-12 sm:py-14 md:py-16 lg:py-20"
//     >
//       <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
//         <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1fr] lg:gap-10 xl:gap-12">
//           {/* Left Tall Image */}
//           <div
//             className={`transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="w-full">
//               <img
//                 src="/images/tent4.png"
//                 alt="Bride holding bouquet"
//                 className="h-[420px] rounded-md w-full object-cover sm:h-[520px] md:h-[620px] lg:h-[710px] xl:h-[720px]"
//               />
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="flex flex-col">
//             {/* Text Content */}
//             <div
//               className={`transition-all duration-1000 ease-out delay-150 ${
//                 show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
//               }`}
//             >
//               <p
//                 className="text-[11px] uppercase tracking-[0.08em] text-[#a77c55] sm:text-[12px] md:text-[13px]"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//               >
//                 Wedding Venues Luxury
//               </p>

//               <h2
//                 className="mt-3 max-w-[520px] text-[15px] font-normal leading-[0.95] text-[#18334a] sm:text-[20px] md:text-[30px] lg:text-[35px]"
//                 style={{
//                   fontFamily: '"Cormorant Garamond", Georgia, serif',
//                 }}
//               >
//                 Envision Your
//                 Special Day
//               </h2>

//               <p
//                 className="mt-6 max-w-[560px] text-[13px] leading-[1.85] text-[#24343a] sm:text-[14px] md:text-[15px]"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//               >
//                 Luxury Garden Palace is a frontrunner in wedding venues
//                 providing a scenic destination that you and
//                 your guests will never forget. With gorgeous 360-degree views
//                 from our beautiful venue paired with our elevated standard of
//                 service, every detail will be just as you&apos;ve always
//                 imagined.
//               </p>

//               <a
//                 href="/wedding-gallery"
//                 target="_blank"
//                 className="mt-8 rounded-md inline-flex h-[48px] min-w-[215px] items-center justify-center bg-[#a38b4c] px-8 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#8f7941] sm:h-[50px] sm:min-w-[230px]"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//               >
//                 Take A Tour
//               </a>
//             </div>

//             {/* Bottom Right Image */}
//             <div
//               className={`mt-10 transition-all duration-1000 ease-out delay-300 sm:mt-12 md:mt-14 lg:mt-16 ${
//                 show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
//               }`}
//             >
//               <div className="w-full lg:max-w-[620px]">
//                 <img
//                   src="images/weddinghall1.png"
//                   alt="Couple enjoying wedding moment"
//                   className="h-[260px] rounded-md w-full object-cover sm:h-[320px] md:h-[360px] lg:h-[335px] xl:h-[350px]"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







// import React, { useEffect, useRef, useState } from "react";

// const API_URL = "http://127.0.0.1:8000/api";

// export default function ResortSectionTwo() {
//   const sectionRef = useRef(null);
//   const [show, setShow] = useState(false);
//   const [sectionData, setSectionData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch data from API
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("1. Starting to fetch data...");
//         const response = await fetch(`${API_URL}/wedding/section1/venue`);
//         console.log("2. Response status:", response.status);
        
//         const result = await response.json();
//         console.log("3. Full API Response:", result);
        
//         if (result.success && result.data) {
//           console.log("4. Data received successfully");
//           console.log("5. Images array:", result.data.images);
          
//           setSectionData({
//             title: result.data.title,
//             subtitle: result.data.subtitle,
//             description: result.data.description,
//             image1: result.data.images?.[0] || null,
//             image2: result.data.images?.[1] || null
//           });
//           console.log("6. State updated with:", {
//             title: result.data.title,
//             subtitle: result.data.subtitle,
//             image1: result.data.images?.[0],
//             image2: result.data.images?.[1]
//           });
//         } else {
//           console.log("4. No data in response");
//           setError("No data found");
//         }
//       } catch (err) {
//         console.error("Error fetching data:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//         console.log("7. Loading set to false");
//       }
//     };

//     fetchData();
//   }, []);

//   // Intersection Observer
//   useEffect(() => {
//     const currentSection = sectionRef.current;

//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setShow(true);
//         }
//       },
//       { threshold: 0.15 }
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

//   // Debug render
//   console.log("Rendering with:", { loading, error, sectionData, show });

//   if (loading) {
//     return (
//       <section className="w-full overflow-hidden bg-[#f3f2ec] py-20">
//         <div className="flex items-center justify-center">
//           <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
//           <p className="ml-2 text-gray-500">Loading...</p>
//         </div>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="w-full overflow-hidden bg-[#f3f2ec] py-20">
//         <div className="text-center text-red-500">
//           <p>Error: {error}</p>
//         </div>
//       </section>
//     );
//   }

//   if (!sectionData) {
//     return (
//       <section className="w-full overflow-hidden bg-[#f3f2ec] py-20">
//         <div className="text-center text-gray-500">
//           <p>No data available. Please add content in the admin dashboard.</p>
//         </div>
//       </section>
//     );
//   }

//   return (
//     <section
//       ref={sectionRef}
//       className="w-full overflow-hidden bg-[#f3f2ec] py-12 sm:py-14 md:py-16 lg:py-20"
//     >
//       <div className="mx-auto max-w-[1320px] px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
//         <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[0.95fr_1fr] lg:gap-10 xl:gap-12">
//           {/* Left Tall Image */}
//           <div
//             className={`transition-all duration-1000 ease-out ${
//               show ? "translate-x-0 opacity-100" : "-translate-x-16 opacity-0"
//             }`}
//           >
//             <div className="w-full">
//               <img
//                 src={sectionData.image1 || "/images/tent4.png"}
//                 alt={sectionData.subtitle}
//                 className="h-[420px] rounded-md w-full object-cover sm:h-[520px] md:h-[620px] lg:h-[710px] xl:h-[720px]"
//                 onError={(e) => {
//                   console.error("Image failed to load:", sectionData.image1);
//                   e.target.src = "/images/tent4.png";
//                 }}
//               />
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className="flex flex-col">
//             {/* Text Content */}
//             <div
//               className={`transition-all duration-1000 ease-out delay-150 ${
//                 show ? "translate-x-0 opacity-100" : "translate-x-16 opacity-0"
//               }`}
//             >
//               <p
//                 className="text-[11px] uppercase tracking-[0.08em] text-[#a77c55] sm:text-[12px] md:text-[13px]"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//               >
//                 {sectionData.subtitle}
//               </p>

//               <h2
//                 className="mt-3 max-w-[520px] text-[15px] font-normal leading-[0.95] text-[#18334a] sm:text-[20px] md:text-[30px] lg:text-[35px]"
//                 style={{
//                   fontFamily: '"Cormorant Garamond", Georgia, serif',
//                 }}
//               >
//                 {sectionData.title}
//               </h2>

//               <p
//                 className="mt-6 max-w-[560px] text-[13px] leading-[1.85] text-[#24343a] sm:text-[14px] md:text-[15px]"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//               >
//                 {sectionData.description}
//               </p>

//               <a
//                 href="/wedding-gallery"
//                 target="_blank"
//                 className="mt-8 rounded-md inline-flex h-[48px] min-w-[215px] items-center justify-center bg-[#a38b4c] px-8 text-[12px] font-medium uppercase tracking-[0.18em] text-white transition duration-300 hover:bg-[#8f7941] sm:h-[50px] sm:min-w-[230px]"
//                 style={{ fontFamily: "Montserrat, sans-serif" }}
//               >
//                 Take A Tour
//               </a>
//             </div>

//             {/* Bottom Right Image */}
//             <div
//               className={`mt-10 transition-all duration-1000 ease-out delay-300 sm:mt-12 md:mt-14 lg:mt-16 ${
//                 show ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
//               }`}
//             >
//               <div className="w-full lg:max-w-[620px]">
//                 <img
//                   src={sectionData.image2 || "/images/weddinghall1.png"}
//                   alt="Wedding celebration"
//                   className="h-[260px] rounded-md w-full object-cover sm:h-[320px] md:h-[360px] lg:h-[335px] xl:h-[350px]"
//                   onError={(e) => {
//                     console.error("Image failed to load:", sectionData.image2);
//                     e.target.src = "/images/weddinghall1.png";
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }












// import React, { useEffect, useState } from "react";

// const API_URL = "http://127.0.0.1:8000/api";

// export default function ResortSectionTwo() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         console.log("Fetching from:", `${API_URL}/wedding/section1/venue`);
//         const response = await fetch(`${API_URL}/wedding/section1/venue`);
//         const result = await response.json();
//         console.log("API Result:", result);
        
//         if (result.success && result.data) {
//           setData(result.data);
//         } else {
//           setError("No data found");
//         }
//       } catch (err) {
//         console.error("Error:", err);
//         setError(err.message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return (
//       <div className="py-20 text-center">
//         <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
//         <p className="mt-2 text-gray-500">Loading section data...</p>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="py-20 text-center text-red-500">
//         <p>Error: {error}</p>
//       </div>
//     );
//   }

//   if (!data) {
//     return (
//       <div className="py-20 text-center text-gray-500">
//         <p>No data available. Please add content in the admin dashboard.</p>
//       </div>
//     );
//   }

//   return (
//     <div className="py-20 bg-[#f3f2ec]">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Left Image */}
//           <div>
//             {data.images && data.images[0] && (
//               <img 
//                 src={data.images[0]} 
//                 alt={data.title}
//                 className="w-full h-[500px] object-cover rounded-lg"
//                 onError={(e) => {
//                   console.log("Image failed to load:", data.images[0]);
//                   e.target.src = "/images/tent4.png";
//                 }}
//               />
//             )}
//           </div>
          
//           {/* Right Content */}
//           <div>
//             <p className="text-amber-600 text-sm uppercase tracking-wider">
//               {data.subtitle || "Wedding Venues Luxury"}
//             </p>
//             <h2 className="text-3xl md:text-4xl font-serif text-[#18334a] mt-2">
//               {data.title || "Envision Your Special Day"}
//             </h2>
//             <p className="text-gray-600 mt-4 leading-relaxed">
//               {data.description || "Luxury Garden Palace is a frontrunner in wedding venues..."}
//             </p>
//             <a 
//               href="/wedding-gallery" 
//               className="inline-block mt-6 bg-[#a38b4c] text-white px-6 py-3 rounded-md hover:bg-[#8f7941] transition"
//             >
//               Take A Tour
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }




import React, { useEffect, useState } from "react";

const API_URL = "http://127.0.0.1:8000/api";

export default function ResortSectionTwo() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching from:", `${API_URL}/wedding/section1/venue`);
        const response = await fetch(`${API_URL}/wedding/section1/venue`);
        const result = await response.json();
        console.log("API Result:", result);
        
        if (result.success && result.data) {
          setData(result.data);
        } else {
          setError("No data found");
        }
      } catch (err) {
        console.error("Error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center">
        <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-amber-500 border-t-transparent" />
        <p className="mt-2 text-gray-500">Loading section data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 text-center text-red-500">
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="py-20 text-center text-gray-500">
        <p>No data available. Please add content in the admin dashboard.</p>
      </div>
    );
  }

  const images = data.images || [];
  const leftImage = images[0] || "/images/tent4.png";
  const bottomRightImage = images[1] || "/images/weddinghall1.png";

  return (
    <div className="py-20 bg-[#f3f2ec]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Left Tall Image - FIRST IMAGE */}
          <div>
            <img 
              src={leftImage}
              alt={data.title}
              className="w-full h-[500px] object-cover rounded-lg"
              onError={(e) => {
                console.log("Left image failed to load:", leftImage);
                e.target.src = "/images/tent4.png";
              }}
            />
          </div>
          
          {/* Right Content */}
          <div>
            <p className="text-amber-600 text-sm uppercase tracking-wider">
              {data.subtitle || "Wedding Venues Luxury"}
            </p>
            <h2 className="text-3xl md:text-4xl font-serif text-[#18334a] mt-2">
              {data.title || "Envision Your Special Day"}
            </h2>
            <p className="text-gray-600 mt-4 leading-relaxed">
              {data.description || "Luxury Garden Palace is a frontrunner in wedding venues..."}
            </p>
            <a 
              href="/wedding-gallery" 
              className="inline-block mt-6 bg-[#a38b4c] text-white px-6 py-3 rounded-md hover:bg-[#8f7941] transition"
            >
              Take A Tour
            </a>

            {/* Bottom Right Image - SECOND IMAGE */}
            <div className="mt-10">
              <img 
                src={bottomRightImage}
                alt="Wedding celebration"
                className="w-full h-[250px] object-cover rounded-lg mt-8"
                onError={(e) => {
                  console.log("Bottom right image failed to load:", bottomRightImage);
                  e.target.src = "/images/weddinghall1.png";
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}