



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

export default function Venues() {
  const [heroData, setHeroData] = useState({
    title: "Venues",
    background_image: "/images/venues.png",
  });
  const [introData, setIntroData] = useState({
    title: "",
    subtitle: "",
    description: "",
  });
  const [venues, setVenues] = useState([]);
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
      
      // Fetch Hero Section
      const heroResponse = await fetch(`${API_URL}/wedding-venues/hero`);
      const heroResult = await heroResponse.json();
      
      if (heroResult.success && heroResult.data) {
        setHeroData({
          title: heroResult.data.title || "Venues",
          background_image: getImageUrl(heroResult.data.background_image) || "/images/venues.png",
        });
      }

      // Fetch Section 1 - Intro/Luxury Wedding Venues
      const section1Response = await fetch(`${API_URL}/wedding-venues/section1`);
      const section1Result = await section1Response.json();
      
      if (section1Result.success && section1Result.data) {
        setIntroData({
          title: section1Result.data.title || "Luxury Wedding Venues in Kigali, Rwanda",
          subtitle: section1Result.data.subtitle || "Elegant Celebration Spaces",
          description: section1Result.data.description || "Discover the enchanting beauty of Luxury Garden Palace, Kigali's premier wedding destination. Our exclusive venues offer a unique blend of natural splendor, modern elegance, and world-class amenities including ceremony gardens, reception halls, bar & lounge, sauna, and luxury accommodations—perfect for creating timeless memories.",
        });
      }

      // Fetch Section 2 - Garden Ceremony Venue
      const section2Response = await fetch(`${API_URL}/wedding-venues/section2`);
      const section2Result = await section2Response.json();
      
      // Fetch Section 3 - Wedding Reception Hall
      const section3Response = await fetch(`${API_URL}/wedding-venues/section3`);
      const section3Result = await section3Response.json();
      
      // Fetch Section 4 - Bar & Lounge
      const section4Response = await fetch(`${API_URL}/wedding-venues/section4`);
      const section4Result = await section4Response.json();

      // Build venues array from API responses
      const venuesData = [];
      
      if (section2Result.success && section2Result.data) {
        venuesData.push({
          title: section2Result.data.title || "Garden Ceremony Venue",
          size: section2Result.data.subtitle || "OUTDOOR VENUE | UP TO 500 GUESTS",
          image: getImageUrl(section2Result.data.image_url) || "/images/weddgarden2.jpg",
          description: section2Result.data.description || "Set against a verdant backdrop with stunning views of lush gardens, our outdoor ceremony venue exudes elegance and romance. The natural beauty creates a serene and picturesque setting, perfect for exchanging vows under the open sky in the heart of Kigali.",
        });
      } else {
        // Fallback if API fails
        venuesData.push({
          title: "Garden Ceremony Venue",
          size: "OUTDOOR VENUE | UP TO 500 GUESTS",
          image: "/images/weddgarden2.jpg",
          description: "Set against a verdant backdrop with stunning views of lush gardens, our outdoor ceremony venue exudes elegance and romance.",
        });
      }
      
      if (section3Result.success && section3Result.data) {
        venuesData.push({
          title: section3Result.data.title || "Wedding Reception Hall",
          size: section3Result.data.subtitle || "INDOOR VENUE | UP TO 400 GUESTS",
          image: getImageUrl(section3Result.data.image_url) || "/images/weddinghall1.png",
          description: section3Result.data.description || "After your beautiful ceremony, guests are invited to celebrate in our sophisticated reception hall. An ideal setting for dining, dancing, and celebration, every detail is designed with luxury and elegance in mind, creating unforgettable memories for you and your guests.",
        });
      } else {
        venuesData.push({
          title: "Wedding Reception Hall",
          size: "INDOOR VENUE | UP TO 400 GUESTS",
          image: "/images/weddinghall1.png",
          description: "After your beautiful ceremony, guests are invited to celebrate in our sophisticated reception hall.",
        });
      }
      
      if (section4Result.success && section4Result.data) {
        venuesData.push({
          title: section4Result.data.title || "Bar & Lounge",
          size: section4Result.data.subtitle || "PREMIUM LOUNGE | UP TO 150 GUESTS",
          image: getImageUrl(section4Result.data.image_url) || "/images/lounge1.png",
          description: section4Result.data.description || "Our exclusive bar and lounge area offers the perfect space for cocktail hours and intimate gatherings. Enjoy premium beverages, expert mixology, and a relaxed atmosphere that complements your special celebration with style and sophistication.",
        });
      } else {
        venuesData.push({
          title: "Bar & Lounge",
          size: "PREMIUM LOUNGE | UP TO 150 GUESTS",
          image: "/images/lounge1.png",
          description: "Our exclusive bar and lounge area offers the perfect space for cocktail hours and intimate gatherings.",
        });
      }

      setVenues(venuesData);
      
    } catch (err) {
      console.error("Error fetching venues data:", err);
      setError("Failed to load venues data. Using default content.");
      
      // Fallback data if API completely fails
      setVenues([
        {
          title: "Garden Ceremony Venue",
          size: "OUTDOOR VENUE | UP TO 500 GUESTS",
          image: "/images/weddgarden2.jpg",
          description: "Set against a verdant backdrop with stunning views of lush gardens, our outdoor ceremony venue exudes elegance and romance. The natural beauty creates a serene and picturesque setting, perfect for exchanging vows under the open sky in the heart of Kigali.",
        },
        {
          title: "Wedding Reception Hall",
          size: "INDOOR VENUE | UP TO 400 GUESTS",
          image: "/images/weddinghall1.png",
          description: "After your beautiful ceremony, guests are invited to celebrate in our sophisticated reception hall. An ideal setting for dining, dancing, and celebration, every detail is designed with luxury and elegance in mind, creating unforgettable memories for you and your guests.",
        },
        {
          title: "Bar & Lounge",
          size: "PREMIUM LOUNGE | UP TO 150 GUESTS",
          image: "/images/lounge1.png",
          description: "Our exclusive bar and lounge area offers the perfect space for cocktail hours and intimate gatherings. Enjoy premium beverages, expert mixology, and a relaxed atmosphere that complements your special celebration with style and sophistication.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="bg-[#efeee8] min-h-screen flex items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
      </div>
    );
  }

  return (
    <div className="bg-[#efeee8] text-[#1f1f1f]">
      
      {/* HERO */}
      <section className="relative h-[65vh] overflow-hidden">
        <img
          src={heroData.background_image}
          alt="venues hero"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.src = "/images/venues.png";
          }}
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1
            className="text-white text-[28px] md:text-[44px]"
            style={{ fontFamily: '"Cormorant Garamond", serif' }}
          >
            {heroData.title}
          </h1>
        </div>
      </section>

      {/* INTRO */}
      <section className="text-center py-16 px-6">
        <p className="text-[#a88f53] uppercase tracking-[0.2em] text-[11px]">
          {introData.title}
        </p>

        <h2
          className="mt-3 text-[26px] md:text-[36px] text-[#203549]"
          style={{ fontFamily: '"Cormorant Garamond", serif' }}
        >
          {introData.subtitle}
        </h2>

        <p className="mt-6 max-w-[700px] mx-auto text-[14px] leading-[1.9] text-[#444]">
          {introData.description}
        </p>
      </section>

      {/* VENUES LIST */}
      <section className="max-w-[1300px] mx-auto px-6 pb-20 space-y-24">
        {venues.map((venue, index) => (
          <div
            key={venue.title}
            className={`grid md:grid-cols-2 gap-10 items-center ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* IMAGE */}
            <div className={`${index % 2 === 1 ? "order-2 md:order-1" : ""}`}>
              <img
                src={venue.image}
                alt={venue.title}
                className="w-full h-[420px] rounded-md object-cover"
                onError={(e) => {
                  const fallbackImages = {
                    "Garden Ceremony Venue": "/images/weddgarden2.jpg",
                    "Wedding Reception Hall": "/images/weddinghall1.png",
                    "Bar & Lounge": "/images/lounge1.png",
                  };
                  e.target.src = fallbackImages[venue.title] || "/images/venues.png";
                }}
              />
            </div>

            {/* TEXT */}
            <div className={`${index % 2 === 1 ? "order-1 md:order-2" : ""}`}>
              <h3
                className="text-[22px] md:text-[28px] text-[#203549]"
                style={{ fontFamily: '"Cormorant Garamond", serif' }}
              >
                {venue.title}
              </h3>

              <p className="mt-2 text-[#6a6a6a] uppercase text-[11px] tracking-wider">
                {venue.size}
              </p>

              <p className="mt-6 text-[14px] leading-[1.9] text-[#333]">
                {venue.description}
              </p>
            </div>
          </div>
        ))}
      </section>
      
      {/* Error Message (if any) */}
      {error && (
        <div className="text-center py-4 px-6">
          <p className="text-amber-600 text-sm">{error}</p>
        </div>
      )}
    </div>
  );
}