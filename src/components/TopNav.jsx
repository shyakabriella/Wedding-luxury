import React, { useEffect, useState } from "react";

export default function TopNav() {
  const [hideMobileTopNav, setHideMobileTopNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHideMobileTopNav(window.scrollY > 18);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-[70] w-full border-b border-[#8f7a45] transition-transform duration-300 ${
        hideMobileTopNav ? "-translate-y-full lg:translate-y-0" : "translate-y-0"
      }`}
    >
      {/* Top white promotional bar */}
      <div className="bg-[#f5f5f3]">
        {/* Mobile */}
        <div className="mx-auto flex min-h-[64px] max-w-[1900px] flex-col items-center justify-center px-4 py-2 text-center lg:hidden">
          <h2 className="font-serif text-[11px] font-semibold uppercase leading-[1.1] tracking-[0.04em] text-[#143a4a]">
            A Golden Start To Your Forever
          </h2>

          <p className="mt-1 max-w-[320px] text-[9px] leading-[1.35] text-[#1f1f1f]">
            We&apos;re giving away the ultimate wedding bundle to help you
            celebrate.
          </p>

          <a
            href="#"
            className="mt-2 inline-flex min-w-[120px] items-center justify-center bg-[#143a4a] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.08em] text-white transition duration-200 hover:opacity-90"
          >
            Learn More
          </a>
        </div>

        {/* Desktop */}
        <div className="mx-auto hidden max-w-[1900px] grid-cols-[320px_minmax(0,1fr)_190px] items-center gap-4 px-4 py-3 md:px-8 lg:grid">
          <div className="text-center">
            <h2 className="font-serif text-[22px] font-semibold uppercase leading-[1.15] tracking-[0.02em] text-[#143a4a] xl:text-[24px]">
              A GOLDEN START TO YOUR
              <br />
              FOREVER
            </h2>
          </div>

          <div className="text-center">
            <p className="mx-auto max-w-[920px] text-[14px] leading-[1.45] text-[#1f1f1f] xl:text-[16px]">
              We&apos;re giving away the ultimate wedding bundle to help you
              celebrate. Enter for a chance to win a curated collection of
              Luxury Garden Palace essentials for you and your guests.
            </p>  
          </div>

          <div className="flex justify-end">
            <a
              href="#"
              className="inline-flex min-w-[150px] items-center justify-center bg-[#143a4a] px-6 py-4 text-[14px] font-semibold uppercase tracking-[0.06em] text-white transition duration-200 hover:opacity-90 xl:min-w-[170px] xl:text-[15px]"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gold bar */}
      <div className="h-[40px] bg-[#a18a4d]">
        <div className="mx-auto flex h-full max-w-[1900px] items-center justify-center px-4">
          <a
            href="/"
            className="flex items-center justify-center gap-2 text-center text-[10px] font-normal uppercase tracking-[0.14em] text-white transition hover:opacity-90 sm:text-[11px] md:text-[13px]"
          >
            <span className="text-[14px] leading-none md:text-[16px]">‹</span>
            <span>Take Me Back To Resort Website</span>
          </a>
        </div>
      </div>
    </div>
  );
}