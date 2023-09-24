import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("unload", handleLoad);

    return () => {
      window.removeEventListener("unload", handleLoad);
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}
