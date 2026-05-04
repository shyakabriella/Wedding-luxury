// // import React, { useEffect } from "react";

// // const classicPackage = [
// //   "3 Hors D’Oeuvres",
// //   "1 Salad",
// //   "2 Entrées",
// //   "1 Veggie",
// //   "1 Starch",
// //   "Fresh Bread",
// // ];

// // const premiumPackage = [
// //   "4 Hors D’Oeuvres",
// //   "1 Premium Salad",
// //   "3 Entrées",
// //   "2 Veggies",
// //   "2 Starches",
// //   "Fresh Bread",
// //   "Dessert Display",
// // ];

// // const includedInEveryPackage = [
// //   "Venue Access",
// //   "Reception Space",
// //   "2 Bridal Rooms",
// //   "Tables & Chairs",
// //   "Food Tasting",
// //   "Ceremony Garden",
// //   "Event Coordinator",
// //   "Guest Parking",
// //   "On-Site Catering",
// //   "Cake Planning",
// //   "Hors D’oeuvres Patio",
// //   "Event Team",
// //   "Room Discounts",
// //   "Custom Menus",
// //   "Cider Toast",
// // ];

// // const drinkPackageInfo = [
// //   "Bar License",
// //   "Glassware Included",
// //   "Open Bar (21+)",
// //   "1 Bartender / 125 Guests",
// //   "Extra Bar Setup Available",
// //   "Cash & Consumption Bars",
// // ];

// // const drinkCards = [
// //   {
// //     title: "SIMPLE",
// //     image: "/images/bar2.jpg",
// //     items: ["Beer", "Wine", "Mocktails", "Juices"],
// //   },
// //   {
// //     title: "TOP SHELF",
// //     image: "/images/bar2.png",
// //     items: ["Beer", "Wine", "Premium Spirits", "Mixers"],
// //   },
// //   {
// //     title: "HOUSE",
// //     image: "images/luxdinning1.jpg",
// //     items: ["Beer", "Wine", "House Liquor", "Mixers"],
// //   },
// //   {
// //     title: "CALL",
// //     image: "images/luxuryfooddecoration6.JPG",
// //     items: ["Beer", "Wine", "Classic Spirits", "Mixers"],
// //   },
// // ];

// // function BulletList({ items }) {
// //   return (
// //     <ul className="space-y-4">
// //       {items.map((item) => (
// //         <li
// //           key={item}
// //           className="flex items-start gap-3 text-[11px] leading-[1.7] text-[#202020] sm:text-[12px] md:text-[13px]"
// //         >
// //           <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#8e7355]" />
// //           <span>{item}</span>
// //         </li>
// //       ))}
// //     </ul>
// //   );
// // }

// // function PackageSplitSection({
// //   title,
// //   items,
// //   image,
// //   reverse = false,
// //   topBorder = false,
// // }) {
// //   return (
// //     <section
// //       className={`bg-[#f3f2ed] py-10 sm:py-14 md:py-16 lg:py-20 ${
// //         topBorder ? "border-t-[8px] border-[#14363a]" : ""
// //       }`}
// //     >
// //       <div
// //         className={`mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 lg:gap-16 ${
// //           reverse ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
// //         }`}
// //       >
// //         <img
// //           src={image}
// //           alt={title}
// //           className="h-[340px] w-full rounded-md object-cover sm:h-[420px] md:h-[520px]"
// //         />

// //         <div className="max-w-[560px]">
// //           <h2
// //             className="text-[16px] font-normal text-[#173247] sm:text-[18px] md:text-[24px]"
// //             style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
// //           >
// //             {title}
// //           </h2>

// //           <div className="mt-6">
// //             <BulletList items={items} />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function DrinkCard({ card }) {
// //   return (
// //     <div>
// //       <img
// //         src={card.image}
// //         alt={card.title}
// //         className="h-[220px] w-full rounded-md object-cover sm:h-[260px]"
// //       />

// //       <div className="pt-5">
// //         <h3 className="text-[12px] uppercase text-[#153347] md:text-[14px]">
// //           {card.title}
// //         </h3>

// //         <div className="mt-4">
// //           <BulletList items={card.items} />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default function Package() {
// //   useEffect(() => {
// //     window.scrollTo(0, 0);
// //   }, []);

// //   return (
// //     <div className="w-full overflow-hidden bg-[#f3f2ed]" style={{ fontFamily: "Montserrat" }}>
      
// //       {/* HERO */}
// //       <section className="relative min-h-[68vh]">
// //         <img src="/images/weddgarden2.jpg" className="absolute inset-0 h-full w-full object-cover" />
// //         <div className="absolute inset-0 bg-black/40" />

// //         <div className="relative z-10 flex h-[68vh] items-center justify-center text-center text-white">
// //           <h1 className="text-[26px] sm:text-[34px] md:text-[44px] font-light">
// //             Packages
// //           </h1>
// //         </div>
// //       </section>

// //       {/* INTRO */}
// //       <section className="py-14 text-center">
// //         <p className="text-[12px] text-[#a37f58]">Wedding Packages</p>

// //         <h2 className="mt-2 text-[20px] sm:text-[28px] md:text-[34px] text-[#173247]">
// //           Simple Luxury Options
// //         </h2>

// //         <p className="mx-auto mt-4 max-w-[750px] text-[12px] sm:text-[13px] text-[#222]">
// //           Flexible wedding packages designed for luxury apartments and elegant celebrations in Kigali.
// //         </p>
// //       </section>

// //       {/* PACKAGES */}
// //       <PackageSplitSection
// //         title="Classic Package"
// //         items={classicPackage}
// //         image="/images/desert2.jpg"
// //         topBorder
// //       />

// //       <PackageSplitSection
// //         title="Premium Package"
// //         items={premiumPackage}
// //         image="images/exterior12.jpg"
// //         reverse
// //       />

// //       {/* INCLUDED */}
// // <section className="bg-white py-14">
  
// //   {/* Title */}
// //   <div className="text-center">
// //     <h2 className="text-[18px] sm:text-[24px] md:text-[30px] text-[#173247]">
// //       Included Benefits
// //     </h2>
// //   </div>

// //   {/* Grid Wrapper */}
// //   <div className="mt-12 flex justify-center">
    
// //     <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10 text-center">

// //       {[0, 1, 2].map((col) => (
// //         <ul
// //           key={col}
// //           className="space-y-4 flex flex-col items-center"
// //         >
// //           {includedInEveryPackage
// //             .slice(col * 5, col * 5 + 5)
// //             .map((item) => (
// //               <li
// //                 key={item}
// //                 className="text-[11px] sm:text-[12px] text-[#222] flex items-center justify-center gap-3"
// //               >
// //                 <span className="h-[5px] w-[5px] rounded-full bg-[#8d6f53]" />
// //                 <span className="max-w-[220px] leading-[1.6]">
// //                   {item}
// //                 </span>
// //               </li>
// //             ))}
// //         </ul>
// //       ))}

// //     </div>
// //   </div>

// // </section>

// //       {/* DRINK */}
// //       <section className="py-14 text-center bg-[#f3f2ed]">
// //         <h2 className="text-[20px] sm:text-[26px] text-[#173247]">
// //           Bar Packages
// //         </h2>

// //         <p className="mt-3 text-[12px] max-w-[700px] mx-auto">
// //           Premium bar service for luxury weddings and apartment events.
// //         </p>
// //       </section>

// //       {/* DRINK CARDS */}
// //       <section className="pb-20">
// //         <div className="grid md:grid-cols-2 gap-10 px-6">
// //           {drinkCards.map((card) => (
// //             <DrinkCard key={card.title} card={card} />
// //           ))}
// //         </div>
// //       </section>
// //     </div>
// //   );
// // }


















// import React, { useEffect, useState } from "react";

// // Use environment variables
// const API_URL = import.meta.env.VITE_API_BASE_URL || "/api";
// const STORAGE_URL = import.meta.env.VITE_STORAGE_URL || "/storage";

// // Helper function to get full image URL
// const getImageUrl = (path) => {
//   if (!path) return null;
//   if (path.startsWith('http')) return path;
//   if (path.startsWith('/storage')) return `${STORAGE_URL}${path}`;
//   return `${STORAGE_URL}/${path}`;
// };

// function BulletList({ items }) {
//   if (!items || items.length === 0) return null;
  
//   return (
//     <ul className="space-y-4">
//       {items.map((item, idx) => (
//         <li
//           key={idx}
//           className="flex items-start gap-3 text-[11px] leading-[1.7] text-[#202020] sm:text-[12px] md:text-[13px]"
//         >
//           <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#8e7355]" />
//           <span>{item}</span>
//         </li>
//       ))}
//     </ul>
//   );
// }

// function PackageSplitSection({
//   title,
//   items,
//   image,
//   reverse = false,
//   topBorder = false,
// }) {
//   return (
//     <section
//       className={`bg-[#f3f2ed] py-10 sm:py-14 md:py-16 lg:py-20 ${
//         topBorder ? "border-t-[8px] border-[#14363a]" : ""
//       }`}
//     >
//       <div
//         className={`mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 lg:gap-16 ${
//           reverse ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
//         }`}
//       >
//         <img
//           src={image}
//           alt={title}
//           className="h-[340px] w-full rounded-md object-cover sm:h-[420px] md:h-[520px]"
//           onError={(e) => {
//             e.target.src = "/images/desert2.jpg";
//           }}
//         />

//         <div className="max-w-[560px]">
//           <h2
//             className="text-[16px] font-normal text-[#173247] sm:text-[18px] md:text-[24px]"
//             style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
//           >
//             {title}
//           </h2>

//           <div className="mt-6">
//             <BulletList items={items} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function DrinkCard({ card }) {
//   return (
//     <div>
//       <img
//         src={card.image}
//         alt={card.title}
//         className="h-[220px] w-full rounded-md object-cover sm:h-[260px]"
//         onError={(e) => {
//           e.target.src = "/images/bar2.jpg";
//         }}
//       />

//       <div className="pt-5">
//         <h3 className="text-[12px] uppercase text-[#153347] md:text-[14px]">
//           {card.title}
//         </h3>

//         <div className="mt-4">
//           <BulletList items={card.items} />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default function Package() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Hero Section
//   const [heroData, setHeroData] = useState({
//     title: "Packages",
//     image: "/images/weddgarden2.jpg",
//   });
  
//   // Intro Section (Section 1)
//   const [introData, setIntroData] = useState({
//     title: "Wedding Packages",
//     subtitle: "Simple Luxury Options",
//     description: "Flexible wedding packages designed for luxury apartments and elegant celebrations in Kigali.",
//   });
  
//   // Classic Package (Section 2)
//   const [classicData, setClassicData] = useState({
//     title: "Classic Package",
//     items: ["3 Hors D’Oeuvres", "1 Salad", "2 Entrées", "1 Veggie", "1 Starch", "Fresh Bread"],
//     image: "/images/desert2.jpg",
//   });
  
//   // Premium Package (Section 3)
//   const [premiumData, setPremiumData] = useState({
//     title: "Premium Package",
//     items: ["4 Hors D’Oeuvres", "1 Premium Salad", "3 Entrées", "2 Veggies", "2 Starches", "Fresh Bread", "Dessert Display"],
//     image: "/images/exterior12.jpg",
//   });
  
//   // Benefits (Section 4)
//   const [benefits, setBenefits] = useState([
//     "Venue Access", "Reception Space", "2 Bridal Rooms", "Tables & Chairs", "Food Tasting",
//     "Ceremony Garden", "Event Coordinator", "Guest Parking", "On-Site Catering", "Cake Planning",
//     "Hors D’oeuvres Patio", "Event Team", "Room Discounts", "Custom Menus", "Cider Toast",
//   ]);
  
//   // Bar Packages (Section 5)
//   const [barPackages, setBarPackages] = useState({
//     title: "Bar Packages",
//     description: "Premium bar service for luxury weddings and apartment events.",
//     blocks: [
//       { title: "SIMPLE", image: "/images/bar2.jpg", items: ["Beer", "Wine", "Mocktails", "Juices"] },
//       { title: "TOP SHELF", image: "/images/bar2.png", items: ["Beer", "Wine", "Premium Spirits", "Mixers"] },
//       { title: "HOUSE", image: "/images/luxdinning1.jpg", items: ["Beer", "Wine", "House Liquor", "Mixers"] },
//       { title: "CALL", image: "/images/luxuryfooddecoration6.JPG", items: ["Beer", "Wine", "Classic Spirits", "Mixers"] },
//     ],
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       // Fetch Hero Section
//       const heroResponse = await fetch(`${API_URL}/wedding-packages/hero`);
//       const heroResult = await heroResponse.json();
//       if (heroResult.success && heroResult.data) {
//         setHeroData({
//           title: heroResult.data.title || "Packages",
//           image: getImageUrl(heroResult.data.image_url) || "/images/weddgarden2.jpg",
//         });
//       }
      
//       // Fetch Section 1 - Intro
//       const section1Response = await fetch(`${API_URL}/wedding-packages/section1`);
//       const section1Result = await section1Response.json();
//       if (section1Result.success && section1Result.data) {
//         setIntroData({
//           title: section1Result.data.title || "Wedding Packages",
//           subtitle: section1Result.data.subtitle || "Simple Luxury Options",
//           description: section1Result.data.description || introData.description,
//         });
//       }
      
//       // Fetch Section 2 - Classic Package
//       const section2Response = await fetch(`${API_URL}/wedding-packages/section2`);
//       const section2Result = await section2Response.json();
//       if (section2Result.success && section2Result.data) {
//         setClassicData({
//           title: section2Result.data.title || "Classic Package",
//           items: section2Result.data.items || classicData.items,
//           image: getImageUrl(section2Result.data.image_url) || "/images/desert2.jpg",
//         });
//       }
      
//       // Fetch Section 3 - Premium Package
//       const section3Response = await fetch(`${API_URL}/wedding-packages/section3`);
//       const section3Result = await section3Response.json();
//       if (section3Result.success && section3Result.data) {
//         setPremiumData({
//           title: section3Result.data.title || "Premium Package",
//           items: section3Result.data.items || premiumData.items,
//           image: getImageUrl(section3Result.data.image_url) || "/images/exterior12.jpg",
//         });
//       }
      
//       // Fetch Section 4 - Benefits
//       const section4Response = await fetch(`${API_URL}/wedding-packages/section4`);
//       const section4Result = await section4Response.json();
//       if (section4Result.success && section4Result.data) {
//         setBenefits(section4Result.data.items || benefits);
//       }
      
//       // Fetch Section 5 - Bar Packages
//       const section5Response = await fetch(`${API_URL}/wedding-packages/section5`);
//       const section5Result = await section5Response.json();
//       if (section5Result.success && section5Result.data) {
//         const blocks = section5Result.data.blocks || [];
//         setBarPackages({
//           title: section5Result.data.title || "Bar Packages",
//           description: section5Result.data.subtitle || "Premium bar service for luxury weddings and apartment events.",
//           blocks: blocks.map(block => ({
//             title: block.title || "",
//             image: block.image_url || "/images/bar2.jpg",
//             items: block.items || ["", "", "", ""],
//           })),
//         });
//       }
      
//     } catch (err) {
//       console.error("Error fetching packages data:", err);
//       setError("Failed to load packages data. Using default content.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="w-full overflow-hidden bg-[#f3f2ed] min-h-screen flex items-center justify-center">
//         <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
//       </div>
//     );
//   }

//   // Split benefits into 3 columns
//   const benefitsPerColumn = Math.ceil(benefits.length / 3);
//   const benefitsColumns = [
//     benefits.slice(0, benefitsPerColumn),
//     benefits.slice(benefitsPerColumn, benefitsPerColumn * 2),
//     benefits.slice(benefitsPerColumn * 2),
//   ];

//   return (
//     <div className="w-full overflow-hidden bg-[#f3f2ed]" style={{ fontFamily: "Montserrat" }}>
      
//       {/* HERO */}
//       <section className="relative min-h-[68vh]">
//         <img 
//           src={heroData.image} 
//           className="absolute inset-0 h-full w-full object-cover" 
//           alt="Packages Hero"
//           onError={(e) => { e.target.src = "/images/weddgarden2.jpg"; }}
//         />
//         <div className="absolute inset-0 bg-black/40" />

//         <div className="relative z-10 flex h-[68vh] items-center justify-center text-center text-white">
//           <h1 className="text-[26px] sm:text-[34px] md:text-[44px] font-light">
//             {heroData.title}
//           </h1>
//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="py-14 text-center">
//         <p className="text-[12px] text-[#a37f58]">{introData.title}</p>

//         <h2 className="mt-2 text-[20px] sm:text-[28px] md:text-[34px] text-[#173247]">
//           {introData.subtitle}
//         </h2>

//         <p className="mx-auto mt-4 max-w-[750px] text-[12px] sm:text-[13px] text-[#222]">
//           {introData.description}
//         </p>
//       </section>

//       {/* CLASSIC PACKAGE */}
//       <PackageSplitSection
//         title={classicData.title}
//         items={classicData.items}
//         image={classicData.image}
//         topBorder
//       />

//       {/* PREMIUM PACKAGE */}
//       <PackageSplitSection
//         title={premiumData.title}
//         items={premiumData.items}
//         image={premiumData.image}
//         reverse
//       />

//       {/* INCLUDED BENEFITS */}
//       <section className="bg-white py-14">
//         <div className="text-center">
//           <h2 className="text-[18px] sm:text-[24px] md:text-[30px] text-[#173247]">
//             Included Benefits
//           </h2>
//         </div>

//         <div className="mt-12 flex justify-center">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10 text-center">
//             {benefitsColumns.map((column, colIndex) => (
//               <ul key={colIndex} className="space-y-4 flex flex-col items-center">
//                 {column.map((item, idx) => (
//                   <li key={idx} className="text-[11px] sm:text-[12px] text-[#222] flex items-center justify-center gap-3">
//                     <span className="h-[5px] w-[5px] rounded-full bg-[#8d6f53]" />
//                     <span className="max-w-[220px] leading-[1.6]">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* BAR PACKAGES */}
//       <section className="py-14 text-center bg-[#f3f2ed]">
//         <h2 className="text-[20px] sm:text-[26px] text-[#173247]">
//           {barPackages.title}
//         </h2>

//         <p className="mt-3 text-[12px] max-w-[700px] mx-auto">
//           {barPackages.description}
//         </p>
//       </section>

//       {/* BAR PACKAGES CARDS */}
//       <section className="pb-20">
//         <div className="grid md:grid-cols-2 gap-10 px-6">
//           {barPackages.blocks.map((card, idx) => (
//             <DrinkCard key={idx} card={card} />
//           ))}
//         </div>
//       </section>
      
//       {/* Error Message */}
//       {error && (
//         <div className="text-center py-4 px-6">
//           <p className="text-amber-600 text-sm">{error}</p>
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
  if (path.startsWith('/images')) return path;
  return `${STORAGE_URL}/${path}`;
};

function BulletList({ items }) {
  if (!items || items.length === 0) return null;
  
  // Filter out empty items
  const validItems = items.filter(item => item && item.trim() !== "");
  if (validItems.length === 0) return null;
  
  return (
    <ul className="space-y-4">
      {validItems.map((item, idx) => (
        <li
          key={idx}
          className="flex items-start gap-3 text-[11px] leading-[1.7] text-[#202020] sm:text-[12px] md:text-[13px]"
        >
          <span className="mt-[10px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#8e7355]" />
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
  // Don't render if no title and no items
  if (!title && (!items || items.length === 0)) return null;
  
  return (
    <section
      className={`bg-[#f3f2ed] py-10 sm:py-14 md:py-16 lg:py-20 ${
        topBorder ? "border-t-[8px] border-[#14363a]" : ""
      }`}
    >
      <div
        className={`mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-10 px-5 lg:gap-16 ${
          reverse ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
        }`}
      >
        <img
          src={image || "/images/placeholder.jpg"}
          alt={title || "Package"}
          className="h-[340px] w-full rounded-md object-cover sm:h-[420px] md:h-[520px]"
          onError={(e) => {
            e.target.src = "/images/desert2.jpg";
          }}
        />

        <div className="max-w-[560px]">
          {title && (
            <h2
              className="text-[16px] font-normal text-[#173247] sm:text-[18px] md:text-[24px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              {title}
            </h2>
          )}

          <div className="mt-6">
            <BulletList items={items} />
          </div>
        </div>
      </div>
    </section>
  );
}

function DrinkCard({ card }) {
  if (!card || (!card.title && (!card.items || card.items.length === 0))) return null;
  
  return (
    <div>
      <img
        src={card.image || "/images/bar2.jpg"}
        alt={card.title || "Bar Package"}
        className="h-[220px] w-full rounded-md object-cover sm:h-[260px]"
        onError={(e) => {
          e.target.src = "/images/bar2.jpg";
        }}
      />

      <div className="pt-5">
        {card.title && (
          <h3 className="text-[12px] uppercase text-[#153347] md:text-[14px]">
            {card.title}
          </h3>
        )}

        <div className="mt-4">
          <BulletList items={card.items} />
        </div>
      </div>
    </div>
  );
}

export default function Package() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Hero Section
  const [heroData, setHeroData] = useState({
    title: "Packages",
    image: "/images/weddgarden2.jpg",
  });
  
  // Intro Section (Section 1)
  const [introData, setIntroData] = useState({
    title: "Wedding Packages",
    subtitle: "Simple Luxury Options",
    description: "Flexible wedding packages designed for luxury apartments and elegant celebrations in Kigali.",
  });
  
  // Classic Package (Section 2)
  const [classicData, setClassicData] = useState({
    title: "Classic Package",
    items: ["3 Hors D’Oeuvres", "1 Salad", "2 Entrées", "1 Veggie", "1 Starch", "Fresh Bread"],
    image: "/images/desert2.jpg",
  });
  
  // Premium Package (Section 3)
  const [premiumData, setPremiumData] = useState({
    title: "Premium Package",
    items: ["4 Hors D’Oeuvres", "1 Premium Salad", "3 Entrées", "2 Veggies", "2 Starches", "Fresh Bread", "Dessert Display"],
    image: "/images/exterior12.jpg",
  });
  
  // Benefits (Section 4)
  const [benefits, setBenefits] = useState([
    "Venue Access", "Reception Space", "2 Bridal Rooms", "Tables & Chairs", "Food Tasting",
    "Ceremony Garden", "Event Coordinator", "Guest Parking", "On-Site Catering", "Cake Planning",
    "Hors D’oeuvres Patio", "Event Team", "Room Discounts", "Custom Menus", "Cider Toast",
  ]);
  
  // Bar Packages (Section 5)
  const [barPackages, setBarPackages] = useState({
    title: "Bar Packages",
    description: "Premium bar service for luxury weddings and apartment events.",
    blocks: [
      { title: "SIMPLE", image: "/images/bar2.jpg", items: ["Beer", "Wine", "Mocktails", "Juices"] },
      { title: "TOP SHELF", image: "/images/bar2.png", items: ["Beer", "Wine", "Premium Spirits", "Mixers"] },
      { title: "HOUSE", image: "/images/luxdinning1.jpg", items: ["Beer", "Wine", "House Liquor", "Mixers"] },
      { title: "CALL", image: "/images/luxuryfooddecoration6.JPG", items: ["Beer", "Wine", "Classic Spirits", "Mixers"] },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch Hero Section
      try {
        const heroResponse = await fetch(`${API_URL}/wedding-packages/hero`);
        const heroResult = await heroResponse.json();
        if (heroResult.success && heroResult.data) {
          setHeroData({
            title: heroResult.data.title || "Packages",
            image: getImageUrl(heroResult.data.background_image || heroResult.data.image_url) || "/images/weddgarden2.jpg",
          });
        }
      } catch (err) {
        console.error("Error fetching hero:", err);
      }
      
      // Fetch Section 1 - Intro
      try {
        const section1Response = await fetch(`${API_URL}/wedding-packages/section1`);
        const section1Result = await section1Response.json();
        if (section1Result.success && section1Result.data) {
          setIntroData({
            title: section1Result.data.title || "Wedding Packages",
            subtitle: section1Result.data.subtitle || "Simple Luxury Options",
            description: section1Result.data.description || introData.description,
          });
        }
      } catch (err) {
        console.error("Error fetching section1:", err);
      }
      
      // Fetch Section 2 - Classic Package
      try {
        const section2Response = await fetch(`${API_URL}/wedding-packages/section2`);
        const section2Result = await section2Response.json();
        if (section2Result.success && section2Result.data) {
          setClassicData({
            title: section2Result.data.title || "Classic Package",
            items: section2Result.data.items || classicData.items,
            image: getImageUrl(section2Result.data.image_url) || "/images/desert2.jpg",
          });
        }
      } catch (err) {
        console.error("Error fetching section2:", err);
      }
      
      // Fetch Section 3 - Premium Package
      try {
        const section3Response = await fetch(`${API_URL}/wedding-packages/section3`);
        const section3Result = await section3Response.json();
        if (section3Result.success && section3Result.data) {
          setPremiumData({
            title: section3Result.data.title || "Premium Package",
            items: section3Result.data.items || premiumData.items,
            image: getImageUrl(section3Result.data.image_url) || "/images/exterior12.jpg",
          });
        }
      } catch (err) {
        console.error("Error fetching section3:", err);
      }
      
      // Fetch Section 4 - Benefits
      try {
        const section4Response = await fetch(`${API_URL}/wedding-packages/section4`);
        const section4Result = await section4Response.json();
        if (section4Result.success && section4Result.data) {
          setBenefits(section4Result.data.items || benefits);
        }
      } catch (err) {
        console.error("Error fetching section4:", err);
      }
      
      // Fetch Section 5 - Bar Packages
      try {
        const section5Response = await fetch(`${API_URL}/wedding-packages/section5`);
        const section5Result = await section5Response.json();
        if (section5Result.success && section5Result.data) {
          const blocks = section5Result.data.blocks || [];
          setBarPackages({
            title: section5Result.data.title || "Bar Packages",
            description: section5Result.data.subtitle || "Premium bar service for luxury weddings and apartment events.",
            blocks: blocks.map(block => ({
              title: block.title || "",
              image: block.image_url || "/images/bar2.jpg",
              items: block.items || [],
            })),
          });
        }
      } catch (err) {
        console.error("Error fetching section5:", err);
      }
      
    } catch (err) {
      console.error("Error fetching packages data:", err);
      setError("Failed to load packages data. Using default content.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="w-full overflow-hidden bg-[#f3f2ed] min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
      </div>
    );
  }

  // Split benefits into 3 columns
  const benefitsPerColumn = Math.ceil(benefits.length / 3);
  const benefitsColumns = [
    benefits.slice(0, benefitsPerColumn),
    benefits.slice(benefitsPerColumn, benefitsPerColumn * 2),
    benefits.slice(benefitsPerColumn * 2),
  ];

  // Filter out empty bar package blocks
  const validBarBlocks = barPackages.blocks.filter(block => 
    block.title || (block.items && block.items.length > 0)
  );

  return (
    <div className="w-full overflow-hidden bg-[#f3f2ed]" style={{ fontFamily: "Montserrat" }}>
      
      {/* HERO */}
      <section className="relative min-h-[68vh]">
        <img 
          src={heroData.image} 
          className="absolute inset-0 h-full w-full object-cover" 
          alt="Packages Hero"
          onError={(e) => { e.target.src = "/images/weddgarden2.jpg"; }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex h-[68vh] items-center justify-center text-center text-white">
          <h1 className="text-[26px] sm:text-[34px] md:text-[44px] font-light">
            {heroData.title}
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-14 text-center">
        <p className="text-[12px] text-[#a37f58]">{introData.title}</p>

        <h2 className="mt-2 text-[20px] sm:text-[28px] md:text-[34px] text-[#173247]">
          {introData.subtitle}
        </h2>

        <p className="mx-auto mt-4 max-w-[750px] text-[12px] sm:text-[13px] text-[#222]">
          {introData.description}
        </p>
      </section>

      {/* CLASSIC PACKAGE */}
      <PackageSplitSection
        title={classicData.title}
        items={classicData.items}
        image={classicData.image}
        topBorder
      />

      {/* PREMIUM PACKAGE */}
      <PackageSplitSection
        title={premiumData.title}
        items={premiumData.items}
        image={premiumData.image}
        reverse
      />

      {/* INCLUDED BENEFITS */}
      {benefits.length > 0 && (
        <section className="bg-white py-14">
          <div className="text-center">
            <h2 className="text-[18px] sm:text-[24px] md:text-[30px] text-[#173247]">
              Included Benefits
            </h2>
          </div>

          <div className="mt-12 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-10 text-center">
              {benefitsColumns.map((column, colIndex) => (
                <ul key={colIndex} className="space-y-4 flex flex-col items-center">
                  {column.map((item, idx) => (
                    <li key={idx} className="text-[11px] sm:text-[12px] text-[#222] flex items-center justify-center gap-3">
                      <span className="h-[5px] w-[5px] rounded-full bg-[#8d6f53]" />
                      <span className="max-w-[220px] leading-[1.6]">{item}</span>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* BAR PACKAGES */}
      {validBarBlocks.length > 0 && (
        <>
          <section className="py-14 text-center bg-[#f3f2ed]">
            <h2 className="text-[20px] sm:text-[26px] text-[#173247]">
              {barPackages.title}
            </h2>

            <p className="mt-3 text-[12px] max-w-[700px] mx-auto">
              {barPackages.description}
            </p>
          </section>

          {/* BAR PACKAGES CARDS */}
          <section className="pb-20">
            <div className="grid md:grid-cols-2 gap-10 px-6">
              {validBarBlocks.map((card, idx) => (
                <DrinkCard key={idx} card={card} />
              ))}
            </div>
          </section>
        </>
      )}
      
      {/* Error Message */}
      {error && (
        <div className="text-center py-4 px-6">
          <p className="text-amber-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}