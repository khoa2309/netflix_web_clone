import { useEffect } from "react";

export default function ScrollToTop() {
  useEffect(() => {
    const handleUnload = () => {
      window.scrollTo(0, 0);
    };
    window.addEventListener("unload", handleUnload);
    return () => {
      window.removeEventListener("unload", handleUnload);
    };
  }, []);

  return null;
}
