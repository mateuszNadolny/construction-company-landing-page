"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import useScrollVisibility from "@/hooks/useScrollVisibility";
import { scrollToSection } from "@/lib/utils";

import { Eclipse, MenuIcon } from "lucide-react";
import { menuItems } from "@/lib/data";

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 30,
    },
  },
};

const itemVariants = {
  closed: { x: 20, opacity: 0 },
  open: { x: 0, opacity: 1 },
};

const Navbar = () => {
  const isVisible = useScrollVisibility();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <div className="max-w-full flex justify-between items-center py-2 px-4 sm:px-6 lg:px-12">
            <div className="flex items-center gap-2 md:p-2">
              <Eclipse className="w-4 h-4 md:w-6 md:h-6 text-yellow-400 font-[900]" />
              <p className="text-md md:text-xl font-extrabold text-slate-900 tracking-tighter">
                Nordhaven
              </p>
            </div>
            <div className="hidden md:flex w-full justify-end items-center h-16 gap-4 md:gap-8">
              {menuItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => scrollToSection(item.section)}
                  className="text-slate-900 hover:underline px-3 py-2 rounded-md text-xs md:text-sm font-medium transition-colors focus:outline-none"
                  aria-label={item.ariaLabel}
                  tabIndex={0}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="md:hidden">
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                <MenuIcon className="w-6 h-6 text-yellow-500" />
              </motion.button>
              <AnimatePresence>
                {isMenuOpen && (
                  <motion.div
                    variants={menuVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="absolute top-14 right-0 w-full h-screen bg-slate-50 backdrop-blur-md p-4 shadow-lg"
                  >
                    <motion.div
                      className="flex flex-col gap-2"
                      variants={{
                        open: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {menuItems.map((item, index) => (
                        <motion.button
                          key={index}
                          variants={itemVariants}
                          onClick={() => {
                            scrollToSection(item.section);
                            setIsMenuOpen(false);
                          }}
                          className="w-full text-left text-slate-900 hover:bg-slate-50 px-4 py-3 rounded-md text-sm font-medium transition-colors focus:outline-none"
                          aria-label={item.ariaLabel}
                          tabIndex={0}
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.nav>
      )}
    </AnimatePresence>
  );
};

export default Navbar;
