"use client";
import { motion, AnimatePresence } from "framer-motion";
import useScrollDirection from "@/hooks/useScrollDirection";

const Navbar = () => {
  const isVisible = useScrollDirection();

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="hidden sm:block fixed top-5 left-0 right-0 lg:right-40 bg-transparent z-50"
        >
          <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-end items-center h-16 gap-8">
              <button
                onClick={() => handleNavClick("our-work")}
                className="text-slate-900 hover:underline px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                aria-label="Navigate to Our Work section"
                tabIndex={0}
              >
                Our Work
              </button>

              <button
                onClick={() => handleNavClick("our-clients")}
                className="text-slate-900 hover:underline px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                aria-label="Navigate to Our Clients section"
                tabIndex={0}
              >
                Our Clients
              </button>

              <button
                onClick={() => handleNavClick("market")}
                className="text-slate-900 hover:underline px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                aria-label="Navigate to Market section"
                tabIndex={0}
              >
                Market
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
