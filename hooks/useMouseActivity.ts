import { useState, useEffect } from "react";

const useMouseActivity = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = () => {
      setIsVisible(true);

      // Clear any existing timeout
      clearTimeout(timeoutId);

      // Set a new timeout to hide the navbar after 3 seconds
      timeoutId = setTimeout(() => {
        setIsVisible(false);
      }, 1000);
    };

    // Add mouse move listener
    window.addEventListener("mousemove", handleMouseMove);

    // Initial timeout
    timeoutId = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearTimeout(timeoutId);
    };
  }, []);

  return isVisible;
};

export default useMouseActivity;
