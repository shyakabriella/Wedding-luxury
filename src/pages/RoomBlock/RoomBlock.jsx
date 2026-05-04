import React, { useEffect, useState } from "react";

// Use environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL || "/api";
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL || "/storage";

// Helper function to get full image URL
const getImageUrl = (path) => {
  if (!path) return null;
  if (path.startsWith('http')) return path;
  if (path.startsWith('/storage')) return `${STORAGE_URL}${path}`;
  if (path.startsWith('storage')) return `${STORAGE_URL}/${path}`;
  return `${STORAGE_URL}/${path}`;
};

// Image Carousel Component for Accommodations
function ImageCarousel({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const validImages = images?.filter(img => img && img.trim() !== "") || [];
  
  if (validImages.length === 0) {
    return (
      <div className="relative h-[420px] w-full bg-gray-200 rounded-md flex items-center justify-center">
        <p className="text-gray-400">No images available</p>
      </div>
    );
  }

  const goNext = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const goPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + validImages.length) % validImages.length);
  };

  return (
    <div className="relative group">
      <div className="relative overflow-hidden rounded-md bg-white">
        <img
          src={getImageUrl(validImages[currentIndex])}
          alt={`${title} - Image ${currentIndex + 1}`}
          className="h-[420px] w-full rounded-md object-cover transition-all duration-700"
          onError={(e) => {
            e.target.src = "https://via.placeholder.com/800x500?text=Image+Not+Found";
          }}
        />
      </div>

      {validImages.length > 1 && (
        <>
          <button
            onClick={goPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#a88f53] text-white opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-105 hover:bg-[#947b43] md:h-[44px] md:w-[44px]"
            aria-label="Previous image"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <button
            onClick={goNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 flex h-[38px] w-[38px] items-center justify-center rounded-full bg-[#a88f53] text-white opacity-0 group-hover:opacity-100 transition duration-300 hover:scale-105 hover:bg-[#947b43] md:h-[44px] md:w-[44px]"
            aria-label="Next image"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {validImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'bg-[#a88f53] w-4' : 'bg-white/70 hover:bg-white'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// Accommodation Card Component
function AccommodationCard({ item, reverse = false }) {
  const images = item.images || ["", "", ""];
  
  return (
    <section className="bg-[#f1f0eb] py-10 sm:py-14 md:py-16 lg:py-18">
      <div
        className={`mx-auto grid max-w-[1500px] grid-cols-1 items-center gap-10 px-5 sm:px-6 md:px-8 lg:gap-16 lg:px-10 ${
          reverse ? "lg:grid-cols-[1fr_0.95fr]" : "lg:grid-cols-[0.95fr_1fr]"
        }`}
      >
        <div className={`${reverse ? "order-2 lg:order-1" : "order-2"} max-w-[560px]`}>
          <h2
            className="text-[17px] font-normal leading-[0.98] text-[#23354a] sm:text-[25px] md:text-[30px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {item.title}
          </h2>

          {item.subtitle && (
            <p className="mt-6 text-[12px] font-semibold leading-[1.5] text-[#113a54] sm:text-[13px] md:text-[14px]">
              {item.subtitle}
            </p>
          )}

          {item.description && (
            <p className="mt-6 text-[11px] leading-[1.8] text-[#171717] sm:text-[12px] md:text-[13px]">
              {item.description}
            </p>
          )}
        </div>

        <div className={`${reverse ? "order-1 lg:order-2" : "order-1"}`}>
          <ImageCarousel images={images} title={item.title} />
        </div>
      </div>
    </section>
  );
}

// Main Component
export default function RoomBlock() {
  // Hero Data
  const [heroData, setHeroData] = useState({
    title: "Room Blocks",
    background_image: "/images/bed9.JPG",
  });
  
  // ========== SECTION 1 - MEETING ROOMS (FROM YOUR MANAGER API) ==========
  const [section1Data, setSection1Data] = useState({
    subtitle: "Meeting Rooms in Luxury",
    title: "Room for Everyone",
    description: "When planning a group or corporate retreat, comfort is key..."
  });
  
  // Accommodations Data (Section 2)
  const [accommodations, setAccommodations] = useState([]);
  
  // Essentials Data (Section 3)
  const [essentials, setEssentials] = useState([]);
  
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchAllData();
  }, []);

  const fetchAllData = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch Hero Section (if API endpoint exists)
      try {
        const heroResponse = await fetch(`${API_URL}/wedding-room-blocks/hero`);
        const heroResult = await heroResponse.json();
        
        if (heroResult.success && heroResult.data) {
          const imageValue = heroResult.data.background_image || heroResult.data.image_url;
          setHeroData({
            title: heroResult.data.title || "Room Blocks",
            background_image: getImageUrl(imageValue) || "/images/bed9.JPG",
          });
        }
      } catch (err) {
        console.error("Error fetching hero:", err);
      }
      
      // ========== FETCH SECTION 1 - MEETING ROOMS (FROM YOUR MANAGER) ==========
      try {
        const section1Response = await fetch(`${API_URL}/wedding-room-blocks/section1`);
        const section1Result = await section1Response.json();
        
        console.log("Section 1 data:", section1Result);
        
        if (section1Result.success && section1Result.data) {
          setSection1Data({
            subtitle: section1Result.data.subtitle || "Meeting Rooms in Luxury",
            title: section1Result.data.title || "Room for Everyone",
            description: section1Result.data.description || section1Data.description
          });
        } else {
          console.log("No section1 data found, using defaults");
        }
      } catch (err) {
        console.error("Error fetching section1:", err);
      }
      
      // Fetch Section 2 - Accommodation Types
      try {
        const section2Response = await fetch(`${API_URL}/wedding-room-blocks/section2`);
        const section2Result = await section2Response.json();
        
        if (section2Result.success && section2Result.data) {
          const sortedData = [...section2Result.data].sort((a, b) => 
            (a.sort_order || 0) - (b.sort_order || 0)
          );
          setAccommodations(sortedData);
        }
      } catch (err) {
        console.error("Error fetching section2:", err);
      }
      
      // Fetch Section 3 - Essentials
      try {
        const section3Response = await fetch(`${API_URL}/wedding-room-blocks/section3`);
        const section3Result = await section3Response.json();
        
        if (section3Result.success && section3Result.data && section3Result.data.items) {
          const items = section3Result.data.items;
          const columns = [];
          const itemsPerColumn = Math.ceil(items.length / 3);
          
          for (let i = 0; i < 3; i++) {
            const start = i * itemsPerColumn;
            const end = start + itemsPerColumn;
            columns.push(items.slice(start, end));
          }
          
          setEssentials(columns);
        } else {
          setEssentials([
            ["Heating & Air-Conditioning", "Satellite TV"],
            ["In-Room Coffee Service", "Iron & Ironing Board"],
            ["Free Wi-Fi Access", "Hair Dryer"]
          ]);
        }
      } catch (err) {
        console.error("Error fetching section3:", err);
        setEssentials([
          ["Heating & Air-Conditioning", "Satellite TV"],
          ["In-Room Coffee Service", "Iron & Ironing Board"],
          ["Free Wi-Fi Access", "Hair Dryer"]
        ]);
      }
      
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load content. Please refresh the page.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#f1f0eb] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent mx-auto" />
          <p className="mt-4 text-gray-600">Loading amazing rooms...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full overflow-hidden bg-[#f1f0eb] text-[#171717]" style={{ fontFamily: "Montserrat, sans-serif" }}>
      
      {/* ========== HERO SECTION ========== */}
      <section className="relative min-h-[72vh] overflow-hidden">
        <img
          src={getImageUrl(heroData.background_image) || "/images/bed9.JPG"}
          alt="Room blocks hero"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.target.src = "/images/bed9.JPG";
          }}
        />
        <div className="absolute inset-0 bg-[rgba(30,24,18,0.30)]" />
        <div className="absolute left-0 right-0 top-[118px] z-10 hidden border-t border-white/45 lg:block" />
        <div className="relative z-20 mx-auto flex min-h-[72vh] max-w-[1600px] items-center justify-center px-5 text-center sm:px-6 md:px-8 lg:px-10">
          <div className="pt-28 pb-16 md:pt-32 md:pb-20">
            <h1
              className="text-[15px] font-normal leading-[0.95] text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.2)] sm:text-[20px] md:text-[43px] lg:text-[40px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              {heroData.title}
            </h1>
          </div>
        </div>
      </section>

      {/* ========== SECTION 1 - MEETING ROOMS (NOW DYNAMIC FROM YOUR API) ========== */}
      <section className="bg-[#f1f0eb] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="mx-auto max-w-[980px] px-5 text-center sm:px-6 md:px-8">
          <p className="text-[12px] font-normal text-[#a37f58] sm:text-[14px]">
            {section1Data.subtitle}
          </p>
          <h2
            className="mt-3 text-[17px] font-normal leading-[0.98] text-[#23354a] sm:text-[25px] md:text-[30px]"
            style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
          >
            {section1Data.title}
          </h2>
          <p className="mx-auto mt-6 max-w-[860px] text-[12px] leading-[1.8] text-[#181818] sm:text-[13px] md:text-[14px]">
            {section1Data.description}
          </p>
        </div>
      </section>

      {/* ========== ACCOMMODATIONS SECTION (Section 2) ========== */}
      {accommodations.length > 0 ? (
        accommodations.map((item, index) => (
          <AccommodationCard 
            key={item.id} 
            item={item} 
            reverse={index % 2 === 1}
          />
        ))
      ) : (
        <section className="bg-[#f1f0eb] py-20">
          <div className="text-center">
            <p className="text-gray-500">No accommodations available at the moment.</p>
          </div>
        </section>
      )}

      {/* ========== RESTFUL ESSENTIALS SECTION (Section 3) ========== */}
      <section className="bg-[#f3f2ee] py-14 sm:py-16 md:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-6 md:px-8 lg:px-10">
          <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8">
            <span className="h-px flex-1 bg-[#b59a74]" />
            <h2
              className="shrink-0 text-center text-[20px] font-normal leading-none text-[#23354a] sm:text-[26px] md:text-[32px]"
              style={{ fontFamily: '"Cormorant Garamond", Georgia, serif' }}
            >
              Restful Essentials
            </h2>
            <span className="h-px flex-1 bg-[#b59a74]" />
          </div>

          <div className="mt-10 grid grid-cols-1 gap-y-3 sm:mt-12 lg:grid-cols-3 lg:gap-x-10 xl:gap-x-16">
            {essentials.length > 0 ? (
              essentials.map((column, index) => (
                <ul key={index} className="space-y-4 px-2 md:px-4">
                  {column.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-[10px] leading-[1.7] text-[#161616] sm:text-[11px] md:text-[12px]"
                    >
                      <span className="mt-[9px] h-[5px] w-[5px] shrink-0 rounded-full bg-[#9b7a58]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ))
            ) : (
              <div className="col-span-3 text-center text-gray-500">
                Loading essentials...
              </div>
            )}
          </div>

          <div className="mt-12">
            <span className="block h-px w-full bg-[#b59a74]" />
          </div>
        </div>
      </section>

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