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

// function MenuItem({ item }) {
//   return (
//     <div className="border-b border-[#3a3a3a] pb-4">
//       <h4 className="text-[13px] uppercase tracking-[0.02em] text-[#163247] md:text-[14px]">
//         {item.name}
//       </h4>
//       <p className="mt-2 text-[12px] leading-[1.7] text-[#1e1e1e] md:text-[13px]">
//         {item.description}
//       </p>
//     </div>
//   );
// }

// export default function GroupeService() {
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
  
//   // Hero Section Data
//   const [heroData, setHeroData] = useState({
//     title: "Wedding Services",
//     image: "/images/weddinghall1.png",
//   });
  
//   // Intro Section Data (Section 1)
//   const [introData, setIntroData] = useState({
//     title: "Luxury Wedding Venues in Kigali, Rwanda",
//     subtitle: "Full-Service Wedding Planning",
//     description: "Weddings at Luxury Garden Palace are designed for romance. Our venue provides you and your guests with an exceptional experience tailored to your dream celebration.",
//   });
  
//   // Seamless Experience Section (Section 2)
//   const [seamlessData, setSeamlessData] = useState({
//     title: "Seamless Wedding Experience",
//     description: "Create unforgettable wedding memories with our beautifully designed spaces, crafted for romance and celebration. From elegant ceremony halls to dedicated wedding services, every detail is tailored to ensure your special day runs smoothly and magically.",
//     image: "/images/lounge1.png",
//   });
  
//   // Catering Section (Section 3)
//   const [cateringData, setCateringData] = useState({
//     title: "Catering",
//     cards: [
//       { title: "CUSTOM MENUS", description: "From fresh appetizers to gourmet entrées, our culinary team offers full buffets and plated service. Create a personalized menu for your special wedding celebration.", image: "/images/luxuryfooddecoration1.JPG" },
//       { title: "TASTING SESSIONS", description: "Complimentary tastings available for confirmed wedding bookings. Sample our selections before your big day to choose the perfect menu.", image: "/images/luxuryfooddecoration2.JPG" },
//     ],
//   });
  
//   // Culinary Enhancements Section (Section 4) - NO IMAGES
//   const [culinaryData, setCulinaryData] = useState({
//     title: "Culinary Enhancements",
//     cards: [
//       { title: "WELCOME RECEPTIONS", description: "Start your wedding celebration with a memorable welcome reception. Enjoy premium cuisine and elegant cocktails in a romantic setting." },
//       { title: "COCKTAIL HOURS", description: "Delight your guests with our curated cocktail hour experiences. Freshly baked pastries, gourmet appetizers, and signature drinks to celebrate your love." },
//       { title: "REHEARSAL DINNERS", description: "Foster intimate connections with a sophisticated rehearsal dinner. Our team creates the perfect atmosphere for meaningful moments with loved ones." },
//     ],
//   });
  
//   // What You Get Section (Section 5)
//   const [benefits, setBenefits] = useState([
//     "Exclusive Venue Access",
//     "Dedicated Wedding Coordinator",
//     "Discounted Room Blocks",
//     "Complimentary Menu Tasting",
//     "Wedding Gardens",
//     "Bridal Suites",
//     "Ceremony & Reception Spaces",
//     "Custom Wedding Packages",
//     "Outdoor Terrace",
//     "Complimentary Parking",
//     "On-Site Catering",
//     "Welcome Refreshments",
//   ]);

//   // Menu Data
//   const [menuData, setMenuData] = useState({
//     "Hors D’Oeuvres": [
//       { name: "PASTRY WRAPPED ASPARAGUS", description: "Asparagus wrapped in puff pastry topped with shredded parmesan cheese and dipped in a garlic butter sauce." },
//       { name: "ANTIPASTO SKEWERS", description: "Savory prosciutto wraps around luscious mozzarella cheese balls, accompanied by the freshness of basil leaves, juicy cherry tomatoes, and the subtle tang of queen olives, finished with a drizzle of balsamic glaze." },
//       { name: "SPANAKOPITA", description: "A savory Greek pastry filled with tender spinach, feta cheese, and aromatic herbs, all encased in crisp, golden layers of phyllo dough." },
//       { name: "CHEESE TARTS", description: "A harmonious blend of cream cheese and spreadable brie, nestled within a delicate mini tart shell, topped with a tantalizing swirl of blackberry bacon jam." },
//       { name: "SANTA FE ROLLS", description: "A delightful fusion of tender chicken, spicy peppers, creamy avocado, and tangy salsa, all wrapped in a crisp, golden shell." },
//       { name: "SHORT RIB CROSTINI", description: "Tender beef short rib nestled on toasted sourdough baguette, enhanced with a medley of flavors and topped with a dollop of cherry preserves and blue cheese crumbles." },
//       { name: "CRAB POPPERS", description: "Succulent crab meat blended with a medley of spices, encased in a crispy golden shell." },
//       { name: "ARTISAN CHEESE DISPLAY", description: "A delightful assortment featuring sourdough baguette slices and table water crackers paired with crisp red and green grapes, cheddar, Monterey Jack, and pepper jack cheese cubes." },
//       { name: "SHRIMP & CUCUMBER", description: "Blackened shrimp on a marinated cucumber covered in a garlic aioli and sriracha drizzle." },
//     ],
//     Salads: [
//       { name: "CLASSIC CAESAR", description: "Crisp romaine lettuce tossed with parmesan cheese, garlic croutons, and creamy Caesar dressing." },
//       { name: "GARDEN SALAD", description: "Fresh mixed greens with seasonal vegetables and your choice of house-made dressing." },
//       { name: "STRAWBERRY SPINACH", description: "Baby spinach, strawberries, candied pecans, feta cheese, and balsamic vinaigrette." },
//     ],
//     Entrees: [
//       { name: "GRILLED CHICKEN", description: "Tender grilled chicken breast served with chef-selected sauces and seasonal accompaniments." },
//       { name: "BRAISED BEEF", description: "Slow-braised beef prepared for rich flavor and elegant plated presentation." },
//       { name: "VEGETARIAN PASTA", description: "Fresh pasta tossed with seasonal vegetables and a savory herb cream sauce." },
//     ],
//     Starches: [
//       { name: "GARLIC MASHED POTATOES", description: "Creamy mashed potatoes blended with roasted garlic and butter." },
//       { name: "WILD RICE PILAF", description: "Aromatic wild rice pilaf with herbs and seasonal vegetables." },
//       { name: "ROASTED BABY POTATOES", description: "Golden roasted baby potatoes finished with herbs and sea salt." },
//     ],
//     Veggies: [
//       { name: "SEASONAL VEGETABLE MEDLEY", description: "A colorful blend of chef-selected seasonal vegetables, lightly seasoned and roasted." },
//       { name: "GREEN BEANS ALMONDINE", description: "Fresh green beans sautéed and finished with toasted almonds." },
//       { name: "HONEY GLAZED CARROTS", description: "Tender carrots lightly glazed for a sweet and elegant finish." },
//     ],
//   });
  
//   const [activeTab, setActiveTab] = useState("Hors D’Oeuvres");

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     fetchAllData();
//   }, []);

//   const fetchAllData = async () => {
//     try {
//       setLoading(true);
//       setError(null);
      
//       // Fetch Hero Section
//       try {
//         const heroResponse = await fetch(`${API_URL}/wedding-services/hero`);
//         const heroResult = await heroResponse.json();
//         if (heroResult.success && heroResult.data) {
//           setHeroData({
//             title: heroResult.data.title || "Wedding Services",
//             image: getImageUrl(heroResult.data.image_url) || "/images/weddinghall1.png",
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching hero:", err);
//       }
      
//       // Fetch Section 1 - Intro
//       try {
//         const section1Response = await fetch(`${API_URL}/wedding-services/section1`);
//         const section1Result = await section1Response.json();
//         if (section1Result.success && section1Result.data) {
//           setIntroData({
//             title: section1Result.data.title || introData.title,
//             subtitle: section1Result.data.subtitle || introData.subtitle,
//             description: section1Result.data.description || introData.description,
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching section1:", err);
//       }
      
//       // Fetch Section 2 - Seamless Experience
//       try {
//         const section2Response = await fetch(`${API_URL}/wedding-services/section2`);
//         const section2Result = await section2Response.json();
//         if (section2Result.success && section2Result.data) {
//           setSeamlessData({
//             title: section2Result.data.title || seamlessData.title,
//             description: section2Result.data.description || seamlessData.description,
//             image: getImageUrl(section2Result.data.image_url) || seamlessData.image,
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching section2:", err);
//       }
      
//       // Fetch Section 3 - Catering (with images)
//       try {
//         const section3Response = await fetch(`${API_URL}/wedding-services/section3`);
//         const section3Result = await section3Response.json();
//         if (section3Result.success && section3Result.data) {
//           const data = section3Result.data;
//           setCateringData({
//             title: data.title || "Catering",
//             cards: [
//               {
//                 title: data.card1_title || cateringData.cards[0].title,
//                 description: data.card1_description || cateringData.cards[0].description,
//                 image: getImageUrl(data.card1_image) || cateringData.cards[0].image,
//               },
//               {
//                 title: data.card2_title || cateringData.cards[1].title,
//                 description: data.card2_description || cateringData.cards[1].description,
//                 image: getImageUrl(data.card2_image) || cateringData.cards[1].image,
//               },
//             ],
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching section3:", err);
//       }
      
//       // Fetch Section 4 - Culinary Enhancements (NO images)
//       try {
//         const section4Response = await fetch(`${API_URL}/wedding-services/section4`);
//         const section4Result = await section4Response.json();
//         if (section4Result.success && section4Result.data) {
//           const data = section4Result.data;
//           setCulinaryData({
//             title: data.title || "Culinary Enhancements",
//             cards: [
//               { title: data.card1_title || culinaryData.cards[0].title, description: data.card1_description || culinaryData.cards[0].description },
//               { title: data.card2_title || culinaryData.cards[1].title, description: data.card2_description || culinaryData.cards[1].description },
//               { title: data.card3_title || culinaryData.cards[2].title, description: data.card3_description || culinaryData.cards[2].description },
//             ],
//           });
//         }
//       } catch (err) {
//         console.error("Error fetching section4:", err);
//       }
      
//       // Fetch Section 5 - What You Get (Benefits List)
//       try {
//         const section5Response = await fetch(`${API_URL}/wedding-services/section5`);
//         const section5Result = await section5Response.json();
//         if (section5Result.success && section5Result.data && section5Result.data.items) {
//           setBenefits(section5Result.data.items);
//         }
//       } catch (err) {
//         console.error("Error fetching section5:", err);
//       }
      
//     } catch (err) {
//       console.error("Error fetching services data:", err);
//       setError("Failed to load services data. Using default content.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const activeItems = menuData[activeTab] || [];
//   const leftColumn = activeItems.filter((_, index) => index % 2 === 0);
//   const rightColumn = activeItems.filter((_, index) => index % 2 !== 0);

//   if (loading) {
//     return (
//       <div className="w-full overflow-hidden bg-[#f3f2ed] min-h-screen flex items-center justify-center">
//         <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
//       </div>
//     );
//   }

//   return (
//     <div
//       className="w-full overflow-hidden bg-[#f3f2ed] text-[#1c1c1c]"
//       style={{ fontFamily: "Montserrat, sans-serif" }}
//     >
//       {/* HERO */}
//       <section className="relative h-[50vh] overflow-hidden">
//         <img
//           src={heroData.image}
//           alt="Wedding Services"
//           className="absolute inset-0 w-full h-full object-cover rounded-md"
//           onError={(e) => { e.target.src = "/images/weddinghall1.png"; }}
//         />
//         <div className="absolute inset-0 bg-black/40 rounded-md" />

//         <div className="relative z-10 flex items-center justify-center h-full text-center">
//           <h1
//             className="text-white text-[22px] md:text-[32px] mt-10"
//             style={{ fontFamily: '"Cormorant Garamond", serif' }}
//           >
//             {heroData.title}
//           </h1>
//         </div>
//       </section>

//       {/* INTRO */}
//       <section className="text-center py-12 px-6">
//         <p className="text-[#a88f53] uppercase tracking-[0.15em] text-[11px]">
//           {introData.title}
//         </p>

//         <h2
//           className="mt-2 text-[20px] md:text-[30px] text-[#203549]"
//           style={{ fontFamily: '"Cormorant Garamond", serif' }}
//         >
//           {introData.subtitle}
//         </h2>

//         <p className="mt-4 max-w-[700px] mx-auto text-[14px] leading-[1.6] text-[#444]">
//           {introData.description}
//         </p>
//       </section>

//       {/* WEDDING EXPERIENCE - SEAMLESS */}
//       <section className="max-w-[1000px] mx-auto px-6 pb-12 grid md:grid-cols-2 gap-6 items-center">
//         <img
//           src={seamlessData.image}
//           alt="Wedding amenities"
//           className="w-full h-[240px] object-cover rounded-md"
//           onError={(e) => { e.target.src = "/images/lounge1.png"; }}
//         />

//         <div>
//           <h2
//             className="text-[20px] md:text-[24px] text-[#203549]"
//             style={{ fontFamily: '"Cormorant Garamond", serif' }}
//           >
//             {seamlessData.title}
//           </h2>

//           <p className="mt-3 text-[13px] leading-[1.6] text-[#333]">
//             {seamlessData.description}
//           </p>
//         </div>
//       </section>

//       {/* CATERING */}
//       <section className="max-w-[1100px] mx-auto px-6 pb-16">
//         <h2
//           className="text-center text-[20px] md:text-[30px] text-[#203549]"
//           style={{ fontFamily: '"Cormorant Garamond", serif' }}
//         >
//           {cateringData.title}
//         </h2>

//         <div className="mt-8 grid md:grid-cols-2 gap-8">
//           {cateringData.cards.map((item, index) => (
//             <div key={index}>
//               <img
//                 src={item.image}
//                 alt={item.title}
//                 className="w-full h-[300px] object-cover rounded-md"
//                 onError={(e) => { e.target.src = "/images/luxuryfooddecoration1.JPG"; }}
//               />

//               <h3 className="mt-4 text-[18px] text-[#203549]">
//                 {item.title}
//               </h3>

//               <p className="mt-2 text-[14px] leading-[1.6] text-[#333]">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* CULINARY ENHANCEMENTS - NO IMAGES */}
//       <section className="max-w-[1100px] mx-auto px-6 pb-16">
//         <h2
//           className="text-center text-[20px] md:text-[30px] text-[#203549]"
//           style={{ fontFamily: '"Cormorant Garamond", serif' }}
//         >
//           {culinaryData.title}
//         </h2>

//         <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
//           {culinaryData.cards.map((item, index) => (
//             <div key={index}>
//               <h3 className="text-[18px] text-[#203549]">
//                 {item.title}
//               </h3>

//               <p className="mt-2 text-[14px] leading-[1.6] text-[#333]">
//                 {item.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* WHAT YOU GET */}
//       <section className="bg-[#fbfbfb] py-10">
//         <div className="mx-auto max-w-[1000px] px-6">
//           <div className="text-center">
//             <p className="text-[11px] tracking-[0.04em] text-[#a37f58]">
//               What You Get at
//             </p>

//             <h2
//               className="mt-2 text-[20px] md:text-[26px] text-[#203549]"
//               style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
//             >
//               Luxury Garden Palace
//             </h2>
//           </div>

//           <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
//             {[0, 1, 2].map((col) => (
//               <ul key={col} className="space-y-2 flex flex-col items-center">
//                 {benefits.slice(col * 4, col * 4 + 4).map((item) => (
//                   <li
//                     key={item}
//                     className="flex items-center gap-2 text-[12px] text-[#222]"
//                   >
//                     <span className="h-[4px] w-[4px] rounded-full bg-[#8d6f53]" />
//                     <span>{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             ))}
//           </div>

//           <div className="mt-8 border-b border-[#b9a27e]" />
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

// Helper function to get full image URL - FULLY FIXED
const getImageUrl = (path) => {
  if (!path) return null;
  
  // If it's already a full URL (starts with http or https)
  if (path.startsWith('http')) return path;
  
  // If it's a blob URL (new upload preview)
  if (path.startsWith('blob:')) return path;
  
  // If it starts with /storage
  if (path.startsWith('/storage')) return `${STORAGE_URL}${path}`;
  
  // If it starts with storage (no leading slash)
  if (path.startsWith('storage')) return `${STORAGE_URL}/${path}`;
  
  // If it's a relative path from the wedding-services-section3 folder
  if (path.startsWith('wedding-services-section3')) return `${STORAGE_URL}/${path}`;
  
  // For any other path, prepend storage URL
  return `${STORAGE_URL}/${path}`;
};

function MenuItem({ item }) {
  return (
    <div className="border-b border-[#3a3a3a] pb-4">
      <h4 className="text-[13px] uppercase tracking-[0.02em] text-[#163247] md:text-[14px]">
        {item.name}
      </h4>
      <p className="mt-2 text-[12px] leading-[1.7] text-[#1e1e1e] md:text-[13px]">
        {item.description}
      </p>
    </div>
  );
}

export default function GroupeService() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Hero Section Data
  const [heroData, setHeroData] = useState({
    title: "Wedding Services",
    image: "/images/weddinghall1.png",
  });
  
  // Intro Section Data (Section 1)
  const [introData, setIntroData] = useState({
    title: "Luxury Wedding Venues in Kigali, Rwanda",
    subtitle: "Full-Service Wedding Planning",
    description: "Weddings at Luxury Garden Palace are designed for romance. Our venue provides you and your guests with an exceptional experience tailored to your dream celebration.",
  });
  
  // Seamless Experience Section (Section 2)
  const [seamlessData, setSeamlessData] = useState({
    title: "Seamless Wedding Experience",
    description: "Create unforgettable wedding memories with our beautifully designed spaces, crafted for romance and celebration. From elegant ceremony halls to dedicated wedding services, every detail is tailored to ensure your special day runs smoothly and magically.",
    image: "/images/lounge1.png",
  });
  
  // Catering Section (Section 3)
  const [cateringData, setCateringData] = useState({
    title: "Catering",
    cards: [
      { title: "CUSTOM MENUS", description: "From fresh appetizers to gourmet entrées, our culinary team offers full buffets and plated service. Create a personalized menu for your special wedding celebration.", image: "/images/luxuryfooddecoration1.JPG" },
      { title: "TASTING SESSIONS", description: "Complimentary tastings available for confirmed wedding bookings. Sample our selections before your big day to choose the perfect menu.", image: "/images/luxuryfooddecoration2.JPG" },
    ],
  });
  
  // Culinary Enhancements Section (Section 4) - NO IMAGES
  const [culinaryData, setCulinaryData] = useState({
    title: "Culinary Enhancements",
    cards: [
      { title: "WELCOME RECEPTIONS", description: "Start your wedding celebration with a memorable welcome reception. Enjoy premium cuisine and elegant cocktails in a romantic setting." },
      { title: "COCKTAIL HOURS", description: "Delight your guests with our curated cocktail hour experiences. Freshly baked pastries, gourmet appetizers, and signature drinks to celebrate your love." },
      { title: "REHEARSAL DINNERS", description: "Foster intimate connections with a sophisticated rehearsal dinner. Our team creates the perfect atmosphere for meaningful moments with loved ones." },
    ],
  });
  
  // What You Get Section (Section 5)
  const [benefits, setBenefits] = useState([
    "Exclusive Venue Access",
    "Dedicated Wedding Coordinator",
    "Discounted Room Blocks",
    "Complimentary Menu Tasting",
    "Wedding Gardens",
    "Bridal Suites",
    "Ceremony & Reception Spaces",
    "Custom Wedding Packages",
    "Outdoor Terrace",
    "Complimentary Parking",
    "On-Site Catering",
    "Welcome Refreshments",
  ]);

  // Menu Data
  const [menuData, setMenuData] = useState({
    "Hors D’Oeuvres": [
      { name: "PASTRY WRAPPED ASPARAGUS", description: "Asparagus wrapped in puff pastry topped with shredded parmesan cheese and dipped in a garlic butter sauce." },
      { name: "ANTIPASTO SKEWERS", description: "Savory prosciutto wraps around luscious mozzarella cheese balls, accompanied by the freshness of basil leaves, juicy cherry tomatoes, and the subtle tang of queen olives, finished with a drizzle of balsamic glaze." },
      { name: "SPANAKOPITA", description: "A savory Greek pastry filled with tender spinach, feta cheese, and aromatic herbs, all encased in crisp, golden layers of phyllo dough." },
      { name: "CHEESE TARTS", description: "A harmonious blend of cream cheese and spreadable brie, nestled within a delicate mini tart shell, topped with a tantalizing swirl of blackberry bacon jam." },
      { name: "SANTA FE ROLLS", description: "A delightful fusion of tender chicken, spicy peppers, creamy avocado, and tangy salsa, all wrapped in a crisp, golden shell." },
      { name: "SHORT RIB CROSTINI", description: "Tender beef short rib nestled on toasted sourdough baguette, enhanced with a medley of flavors and topped with a dollop of cherry preserves and blue cheese crumbles." },
      { name: "CRAB POPPERS", description: "Succulent crab meat blended with a medley of spices, encased in a crispy golden shell." },
      { name: "ARTISAN CHEESE DISPLAY", description: "A delightful assortment featuring sourdough baguette slices and table water crackers paired with crisp red and green grapes, cheddar, Monterey Jack, and pepper jack cheese cubes." },
      { name: "SHRIMP & CUCUMBER", description: "Blackened shrimp on a marinated cucumber covered in a garlic aioli and sriracha drizzle." },
    ],
    Salads: [
      { name: "CLASSIC CAESAR", description: "Crisp romaine lettuce tossed with parmesan cheese, garlic croutons, and creamy Caesar dressing." },
      { name: "GARDEN SALAD", description: "Fresh mixed greens with seasonal vegetables and your choice of house-made dressing." },
      { name: "STRAWBERRY SPINACH", description: "Baby spinach, strawberries, candied pecans, feta cheese, and balsamic vinaigrette." },
    ],
    Entrees: [
      { name: "GRILLED CHICKEN", description: "Tender grilled chicken breast served with chef-selected sauces and seasonal accompaniments." },
      { name: "BRAISED BEEF", description: "Slow-braised beef prepared for rich flavor and elegant plated presentation." },
      { name: "VEGETARIAN PASTA", description: "Fresh pasta tossed with seasonal vegetables and a savory herb cream sauce." },
    ],
    Starches: [
      { name: "GARLIC MASHED POTATOES", description: "Creamy mashed potatoes blended with roasted garlic and butter." },
      { name: "WILD RICE PILAF", description: "Aromatic wild rice pilaf with herbs and seasonal vegetables." },
      { name: "ROASTED BABY POTATOES", description: "Golden roasted baby potatoes finished with herbs and sea salt." },
    ],
    Veggies: [
      { name: "SEASONAL VEGETABLE MEDLEY", description: "A colorful blend of chef-selected seasonal vegetables, lightly seasoned and roasted." },
      { name: "GREEN BEANS ALMONDINE", description: "Fresh green beans sautéed and finished with toasted almonds." },
      { name: "HONEY GLAZED CARROTS", description: "Tender carrots lightly glazed for a sweet and elegant finish." },
    ],
  });
  
  const [activeTab, setActiveTab] = useState("Hors D’Oeuvres");

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
        const heroResponse = await fetch(`${API_URL}/wedding-services/hero`);
        const heroResult = await heroResponse.json();
        if (heroResult.success && heroResult.data) {
          setHeroData({
            title: heroResult.data.title || "Wedding Services",
            image: getImageUrl(heroResult.data.image_url) || "/images/weddinghall1.png",
          });
        }
      } catch (err) {
        console.error("Error fetching hero:", err);
      }
      
      // Fetch Section 1 - Intro
      try {
        const section1Response = await fetch(`${API_URL}/wedding-services/section1`);
        const section1Result = await section1Response.json();
        if (section1Result.success && section1Result.data) {
          setIntroData({
            title: section1Result.data.title || introData.title,
            subtitle: section1Result.data.subtitle || introData.subtitle,
            description: section1Result.data.description || introData.description,
          });
        }
      } catch (err) {
        console.error("Error fetching section1:", err);
      }
      
      // Fetch Section 2 - Seamless Experience
      try {
        const section2Response = await fetch(`${API_URL}/wedding-services/section2`);
        const section2Result = await section2Response.json();
        if (section2Result.success && section2Result.data) {
          setSeamlessData({
            title: section2Result.data.title || seamlessData.title,
            description: section2Result.data.description || seamlessData.description,
            image: getImageUrl(section2Result.data.image_url) || seamlessData.image,
          });
        }
      } catch (err) {
        console.error("Error fetching section2:", err);
      }
      
      // Fetch Section 3 - Catering (with images) - FIXED
      try {
        const section3Response = await fetch(`${API_URL}/wedding-services/section3`);
        const section3Result = await section3Response.json();
        console.log("Section3 API Response:", section3Result);
        
        if (section3Result.success && section3Result.data) {
          const data = section3Result.data;
          setCateringData({
            title: data.title || "Catering",
            cards: [
              {
                title: data.card1_title || cateringData.cards[0].title,
                description: data.card1_description || cateringData.cards[0].description,
                image: getImageUrl(data.card1_image) || cateringData.cards[0].image,
              },
              {
                title: data.card2_title || cateringData.cards[1].title,
                description: data.card2_description || cateringData.cards[1].description,
                image: getImageUrl(data.card2_image) || cateringData.cards[1].image,
              },
            ],
          });
        }
      } catch (err) {
        console.error("Error fetching section3:", err);
      }
      
      // Fetch Section 4 - Culinary Enhancements (NO images)
      try {
        const section4Response = await fetch(`${API_URL}/wedding-services/section4`);
        const section4Result = await section4Response.json();
        if (section4Result.success && section4Result.data) {
          const data = section4Result.data;
          setCulinaryData({
            title: data.title || "Culinary Enhancements",
            cards: [
              { title: data.card1_title || culinaryData.cards[0].title, description: data.card1_description || culinaryData.cards[0].description },
              { title: data.card2_title || culinaryData.cards[1].title, description: data.card2_description || culinaryData.cards[1].description },
              { title: data.card3_title || culinaryData.cards[2].title, description: data.card3_description || culinaryData.cards[2].description },
            ],
          });
        }
      } catch (err) {
        console.error("Error fetching section4:", err);
      }
      
      // Fetch Section 5 - What You Get (Benefits List)
      try {
        const section5Response = await fetch(`${API_URL}/wedding-services/section5`);
        const section5Result = await section5Response.json();
        if (section5Result.success && section5Result.data && section5Result.data.items) {
          setBenefits(section5Result.data.items);
        }
      } catch (err) {
        console.error("Error fetching section5:", err);
      }
      
    } catch (err) {
      console.error("Error fetching services data:", err);
      setError("Failed to load services data. Using default content.");
    } finally {
      setLoading(false);
    }
  };

  const activeItems = menuData[activeTab] || [];
  const leftColumn = activeItems.filter((_, index) => index % 2 === 0);
  const rightColumn = activeItems.filter((_, index) => index % 2 !== 0);

  if (loading) {
    return (
      <div className="w-full overflow-hidden bg-[#f3f2ed] min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div
      className="w-full overflow-hidden bg-[#f3f2ed] text-[#1c1c1c]"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      {/* HERO */}
      <section className="relative h-[50vh] overflow-hidden">
        <img
          src={heroData.image}
          alt="Wedding Services"
          className="absolute inset-0 w-full h-full object-cover rounded-md"
          onError={(e) => { e.target.src = "/images/weddinghall1.png"; }}
        />
        <div className="absolute inset-0 bg-black/40 rounded-md" />

        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1
            className="text-white text-[22px] md:text-[32px] mt-10"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            {heroData.title}
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="text-center py-12 px-6">
        <p className="text-[#a88f53] uppercase tracking-[0.15em] text-[11px]">
          {introData.title}
        </p>

        <h2
          className="mt-2 text-[20px] md:text-[30px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {introData.subtitle}
        </h2>

        <p className="mt-4 max-w-[700px] mx-auto text-[14px] leading-[1.6] text-[#444]">
          {introData.description}
        </p>
      </section>

      {/* WEDDING EXPERIENCE - SEAMLESS */}
      <section className="max-w-[1000px] mx-auto px-6 pb-12 grid md:grid-cols-2 gap-6 items-center">
        <img
          src={seamlessData.image}
          alt="Wedding amenities"
          className="w-full h-[240px] object-cover rounded-md"
          onError={(e) => { e.target.src = "/images/lounge1.png"; }}
        />

        <div>
          <h2
            className="text-[20px] md:text-[24px] text-[#203549]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            {seamlessData.title}
          </h2>

          <p className="mt-3 text-[13px] leading-[1.6] text-[#333]">
            {seamlessData.description}
          </p>
        </div>
      </section>

      {/* CATERING */}
      <section className="max-w-[1100px] mx-auto px-6 pb-16">
        <h2
          className="text-center text-[20px] md:text-[30px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {cateringData.title}
        </h2>

        <div className="mt-8 grid md:grid-cols-2 gap-8">
          {cateringData.cards.map((item, index) => (
            <div key={index}>
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[300px] object-cover rounded-md"
                onError={(e) => { 
                  console.error("Image failed to load:", item.image);
                  e.target.src = "/images/luxuryfooddecoration1.JPG"; 
                }}
              />

              <h3 className="mt-4 text-[18px] text-[#203549]">
                {item.title}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.6] text-[#333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CULINARY ENHANCEMENTS - NO IMAGES */}
      <section className="max-w-[1100px] mx-auto px-6 pb-16">
        <h2
          className="text-center text-[20px] md:text-[30px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {culinaryData.title}
        </h2>

        <div className="mt-8 grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {culinaryData.cards.map((item, index) => (
            <div key={index}>
              <h3 className="text-[18px] text-[#203549]">
                {item.title}
              </h3>

              <p className="mt-2 text-[14px] leading-[1.6] text-[#333]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU GET */}
      <section className="bg-[#fbfbfb] py-10">
        <div className="mx-auto max-w-[1000px] px-6">
          <div className="text-center">
            <p className="text-[11px] tracking-[0.04em] text-[#a37f58]">
              What You Get at
            </p>

            <h2
              className="mt-2 text-[20px] md:text-[26px] text-[#203549]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Luxury Garden Palace
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center">
            {[0, 1, 2].map((col) => (
              <ul key={col} className="space-y-2 flex flex-col items-center">
                {benefits.slice(col * 4, col * 4 + 4).map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-[12px] text-[#222]"
                  >
                    <span className="h-[4px] w-[4px] rounded-full bg-[#8d6f53]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            ))}
          </div>

          <div className="mt-8 border-b border-[#b9a27e]" />
        </div>
      </section>
      
      {/* Error Message */}
      {error && (
        <div className="text-center py-4 px-6">
          <p className="text-amber-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}