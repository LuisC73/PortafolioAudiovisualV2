import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollTop() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    if (window.pageYOffset > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);

    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <div
      className={`scrollTop ${visible ? "scrollTop--visible" : ""}`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="scrollTop__icon" />
    </div>
  );
}

export default ScrollTop;
