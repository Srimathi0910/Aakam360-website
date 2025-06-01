// ScrollToTop.js
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ userRole }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (userRole) {
      window.scrollTo(0, 0);
    }
  }, [pathname, userRole]);

  return null;
};

export default ScrollToTop;
