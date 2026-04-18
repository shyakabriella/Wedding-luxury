import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { label: "VENUES", href: "/venues" },
  { label: "WEDDING SERVICES", href: "/wedding-services" },
  { label: "PACKAGES", href: "/packages" },
  { label: "ROOM BLOCKS", href: "/room-blocks" },
  { label: "GALLERY", href: "/gallery" },
];

const overlayPages = [
  "/",
  "/venues",
  "/wedding-services",
  "/packages",
  "/room-blocks",
  "/gallery",
];

function SiteLogo({ isSolid = false, menuVersion = false }) {
  return (
    <Link to="/" className="shrink-0">
      <img
        src="/losgo.png"
        alt="Wonder Valley Logo"
        className={`w-auto object-contain transition-all duration-300 drop-shadow-[0_8px_24px_rgba(0,0,0,0.55)] ${
          menuVersion
            ? "h-[48px] max-w-[180px] sm:h-[52px]"
            : isSolid
            ? "h-[68px] max-w-[220px] lg:h-[58px] lg:max-w-[170px]"
            : "h-[86px] max-w-[280px] lg:h-[62px] lg:max-w-[190px]"
        }`}
      />
    </Link>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  const isOverlayPage = overlayPages.includes(location.pathname);
  const isStartPlanningPage = location.pathname === "/start-planning";
  const hasSolidHeader = isScrolled || !isOverlayPage || isStartPlanningPage;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const handleOpenFromBottomBar = () => {
      setMobileOpen(true);
    };

    window.addEventListener("open-wedding-mobile-menu", handleOpenFromBottomBar);

    return () => {
      window.removeEventListener(
        "open-wedding-mobile-menu",
        handleOpenFromBottomBar
      );
    };
  }, []);

  return (
    <header
      className="fixed left-0 right-0 top-[40px] z-[60] transition-all duration-300"
    >
      <div
        className={`transition-all duration-300 ${
          hasSolidHeader
            ? "border-b border-white/20 bg-[rgba(110,116,120,0.88)] shadow-xl backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Mobile */}
          <div
            className={`flex items-center justify-center lg:hidden transition-all duration-300 ${
              hasSolidHeader ? "min-h-[72px]" : "min-h-[92px]"
            }`}
          >
            <SiteLogo isSolid={hasSolidHeader} />
          </div>

          {/* Desktop */}
          <div className="hidden lg:grid lg:min-h-[68px] lg:grid-cols-[220px_minmax(0,1fr)_220px] lg:items-center lg:gap-6 xl:min-h-[72px]">
            {/* Logo */}
            <div className="flex items-center">
              <SiteLogo isSolid={hasSolidHeader} />
            </div>

            {/* Center nav */}
            <nav className="flex items-center justify-center gap-6 xl:gap-10">
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    `relative inline-flex items-center justify-center pb-1 text-[13px] font-light uppercase tracking-[0.08em] transition xl:text-[14px] ${
                      isActive
                        ? "text-white"
                        : "text-white/95 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <span className="relative">
                      {item.label}
                      <span
                        className={`absolute -bottom-[8px] left-0 h-[1.5px] w-full bg-white/90 origin-center transition-all duration-300 ${
                          isActive ? "scale-x-100" : "scale-x-0"
                        }`}
                      />
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* CTA */}
            <div className="flex items-center justify-end">
              <a
                href="https://direct-book.com/properties/luxurygardenpalace/contact?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=USD&checkInDate=2026-04-18&checkOutDate=2026-04-19&trackPage=no"
                className="inline-flex min-h-[38px] min-w-[180px] items-center justify-center bg-[#a8914f] px-6 text-[13px] font-medium uppercase tracking-[0.16em] text-white transition hover:bg-[#947f46] xl:min-h-[40px] xl:min-w-[190px]"
              >
                Start Planning
              </a>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            mobileOpen
              ? "max-h-[380px] border-t border-white/15 opacity-100"
              : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-[rgba(90,95,100,0.96)] px-4 py-3 backdrop-blur-md">
            <div className="mb-4 flex items-center justify-between">
              <SiteLogo menuVersion />
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="text-[24px] leading-none text-white"
                aria-label="Close menu"
              >
                ×
              </button>
            </div>

            <nav className="flex flex-col">
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={({ isActive }) =>
                    `border-b border-white/10 py-3 text-[12px] uppercase tracking-[0.12em] transition ${
                      isActive
                        ? "text-[#e4d3a0]"
                        : "text-white hover:text-[#e4d3a0]"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}

              <Link
                to="/start-planning"
                onClick={() => setMobileOpen(false)}
                className="mt-3 inline-flex min-h-[42px] items-center justify-center bg-[#a8914f] px-4 text-[12px] font-medium uppercase tracking-[0.14em] text-white transition hover:bg-[#947f46]"
              >
                Start Planning
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}