import React, { useEffect, useRef, useState } from "react";

// Use environment variables
const API_URL = import.meta.env.VITE_API_BASE_URL || "http://127.0.0.1:8000/api";
const STORAGE_URL = import.meta.env.VITE_STORAGE_URL || "http://127.0.0.1:8000/storage";

export default function ResortSectionEight() {
  const sectionRef = useRef(null);
  const [show, setShow] = useState(false);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch gallery images from API
    fetch(`${API_URL}/wedding/section6/gallery`)
      .then(res => {
        if (res.status === 404) {
          // No gallery found, use default images
          return { success: false, data: null };
        }
        return res.json();
      })
      .then(result => {
        if (result.success && result.data && result.data.images && result.data.images.length > 0) {
          // Process images to get full URLs
          const processedImages = result.data.images.map(img => getImageUrl(img));
          setImages(processedImages);
        } else {
          // Fallback to default images if no gallery data
          setImages([
            "/images/venues.png",
            "/images/5K8A0704.jpg",
            "/images/tent4.png",
            "/images/wedding2.png",
          ]);
        }
      })
      .catch(err => {
        console.error("Error fetching gallery:", err);
        // Fallback to default images on error
        setImages([
          "/images/venues.png",
          "/images/5K8A0704.jpg",
          "/images/tent4.png",
          "/images/wedding2.png",
        ]);
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
      { threshold: 0.12 }
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

  if (loading) {
    return (
      <section
        ref={sectionRef}
        className="overflow-hidden bg-[#efeee8] py-8 sm:py-10 md:py-12 lg:py-14"
        style={{ fontFamily: "Montserrat, sans-serif" }}
      >
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-amber-500 border-t-transparent" />
        </div>
      </section>
    );
  }

  // Ensure we have at least 4 images (pad with defaults if needed)
  const displayImages = [...images];
  while (displayImages.length < 4) {
    displayImages.push("/images/venues.png");
  }

  return (
    <section
      ref={sectionRef}
      className="overflow-hidden bg-[#efeee8] py-8 sm:py-10 md:py-12 lg:py-14"
      style={{ fontFamily: "Montserrat, sans-serif" }}
    >
      <div className="mx-auto max-w-[1600px] px-4 sm:px-5 md:px-6 lg:px-8">
        <div className="bg-white p-[6px] sm:p-[8px]">
          <div className="grid grid-cols-1 gap-[8px] lg:grid-cols-[1.05fr_1.2fr]">
            {/* Left large image */}
            <div
              className={`overflow-hidden transition-all duration-1000 ease-out ${
                show
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-14 opacity-0"
              }`}
            >
              <img
                src={displayImages[0]}
                alt="Wedding gallery main"
                className="h-[300px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[420px] md:h-[560px] lg:h-[720px] xl:h-[760px]"
                onError={(e) => {
                  e.target.src = "/images/venues.png";
                }}
              />
            </div>

            {/* Right side collage */}
            <div className="grid grid-cols-1 gap-[8px] lg:grid-rows-[1fr_auto]">
              {/* Top right image */}
              <div
                className={`overflow-hidden transition-all duration-1000 delay-150 ease-out ${
                  show
                    ? "translate-y-0 opacity-100"
                    : "translate-y-12 opacity-0"
                }`}
              >
                <img
                  src={displayImages[1]}
                  alt="Wedding gallery top right"
                  className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[280px] md:h-[340px] lg:h-[372px] xl:h-[392px]"
                  onError={(e) => {
                    e.target.src = "/images/5K8A0704.jpg";
                  }}
                />
              </div>

              {/* Bottom two images */}
              <div className="grid grid-cols-1 gap-[8px] sm:grid-cols-2">
                <div
                  className={`overflow-hidden transition-all duration-1000 delay-300 ease-out ${
                    show
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <img
                    src={displayImages[2]}
                    alt="Wedding gallery bottom left"
                    className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[250px] md:h-[290px] lg:h-[340px] xl:h-[360px]"
                    onError={(e) => {
                      e.target.src = "/images/tent4.png";
                    }}
                  />
                </div>

                <div
                  className={`overflow-hidden transition-all duration-1000 delay-500 ease-out ${
                    show
                      ? "translate-y-0 opacity-100"
                      : "translate-y-12 opacity-0"
                  }`}
                >
                  <img
                    src={displayImages[3]}
                    alt="Wedding gallery bottom right"
                    className="h-[220px] w-full object-cover transition duration-700 hover:scale-[1.03] sm:h-[250px] md:h-[290px] lg:h-[340px] xl:h-[360px]"
                    onError={(e) => {
                      e.target.src = "/images/wedding2.png";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}