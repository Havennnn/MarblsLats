import { useState, useEffect } from "react";

const ScrollIndicator = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const pageHeight = document.documentElement.scrollHeight;

      if (scrollPosition >= pageHeight) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {!isBottom && (
        <div className="fixed left-[-88px] md:left-[-88px] lg:left-[-127px] top-1/2 -translate-y-1/2 text-gray-600 text-sm lg:text-xl font-bold animate-pulse rotate-90 text-gray tracking-widest">
          Welcome | Scroll Down →
        </div>
      )}
    </>
  );
};

export default ScrollIndicator;
