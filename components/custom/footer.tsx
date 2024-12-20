"use client";

import { scrollToSection } from "@/lib/utils";
import { menuItems } from "@/lib/data";

import { motion } from "framer-motion";
import {
  FaSquareXTwitter,
  FaSquareInstagram,
  FaSquareFacebook,
  FaLinkedinIn,
  FaSquareYoutube,
} from "react-icons/fa6";
const Footer = () => {
  return (
    <motion.footer
      className="flex flex-col items-center justify-start py-4 md:py-10 h-[25vh] bg-zinc-900 relative overflow-clip"
      aria-label="Footer"
    >
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 items-center md:items-start text-slate-50">
        <div className="flex justify-center md:justify-start">
          <p className="text-xs tracking-tight bg-gradient-to-r from-zinc-200 to-gray-400 bg-clip-text text-transparent">
            © Nordhaven Constructions 2025. All rights reserved.
          </p>
        </div>

        <div className="flex gap-4 justify-center md:justify-center">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => scrollToSection(item.section)}
              className="text-sm text-slate-50 hover:text-slate-400 transition-all duration-150 cursor-pointer"
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="flex gap-4 justify-center md:justify-end">
          <FaSquareXTwitter className="w-6 h-6 text-slate-50 hover:text-slate-400 transition-all duration-150 cursor-pointer" />
          <FaSquareInstagram className="w-6 h-6 text-slate-50 hover:text-slate-400 transition-all duration-150 cursor-pointer" />
          <FaSquareFacebook className="w-6 h-6 text-slate-50 hover:text-slate-400 transition-all duration-150 cursor-pointer" />
          <FaLinkedinIn className="w-6 h-6 text-slate-50 hover:text-slate-400 transition-all duration-150 cursor-pointer" />
          <FaSquareYoutube className="w-6 h-6 text-slate-50 hover:text-slate-400 transition-all duration-150 cursor-pointer" />
        </div>
      </div>

      <h2 className="absolute bottom-[-45px] md:bottom-[-100px] text-[60px] md:text-[140px] font-extrabold tracking-tight bg-gradient-to-r from-zinc-800 to-gray-500 bg-clip-text text-transparent">
        Nordhaven
      </h2>
    </motion.footer>
  );
};

export default Footer;
