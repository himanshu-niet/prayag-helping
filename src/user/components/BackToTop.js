

import React, { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Top: 0 takes us all the way back to the top of the page
  // Behavior: smooth keeps it smooth!
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    // Button is displayed after scrolling for 500 pixels
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  //scroll-to-top classes: fixed, bottom:0, right:0
  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div
          onClick={scrollToTop}
          className="bg-primary inline-block py-2 px-4 rounded-full fixed bottom-6 right-6 shadow-lg"
        >
          <i className="fa fa-level-up text-2xl text-white font-bold"></i>
        </div>
      )}
    </div>
  );
}