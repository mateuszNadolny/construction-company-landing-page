"use client";
import { motion, AnimatePresence } from "framer-motion";
import useScrollVisibility from "@/hooks/useScrollVisibility";
import { scrollToSection } from "@/lib/utils";

import { Eclipse } from "lucide-react";

const Navbar = () => {
  const isVisible = useScrollVisibility();

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          exit={{ y: -100 }}
          transition={{ duration: 0.3 }}
          className="fixed w-full top-0 left-0 bg-blend-color-dodge z-50 bg-white/90 backdrop-blur-md"
        >
          <div className="max-w-full flex justify-between items-center px-4 sm:px-6 lg:px-12">
            <div className="flex items-center gap-2 p-2">
              <Eclipse className="w-6 h-6 text-yellow-400 font-[900]" />
              <p className="text-xl font-extrabold text-slate-900 tracking-tighter">
                Nordhaven
              </p>
            </div>
            <div className="flex w-full justify-end items-center h-16 gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-900 hover:underline px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                aria-label="Navigate to Our Mission section"
                tabIndex={0}
              >
                Our mission
              </button>
              <button
                onClick={() => scrollToSection("our-work")}
                className="text-slate-900 hover:underline px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                aria-label="Navigate to Our Work section"
                tabIndex={0}
              >
                Our houses
              </button>

              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-slate-900 hover:underline px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                aria-label="Navigate to Our Clients section"
                tabIndex={0}
              >
                Reviews
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-slate-900 hover:underline px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                aria-label="Navigate to Our Clients section"
                tabIndex={0}
              >
                FAQ
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-900 hover:underline px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none"
                aria-label="Navigate to Market section"
                tabIndex={0}
              >
                Contact
              </button>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
