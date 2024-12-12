"use client";
import TestimonialsGrid from "@/components/custom/testimonials-grid";
import { motion } from "framer-motion";
const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="relative flex flex-col flex-1 w-full min-h-screen items-center justify-start pt-12 lg:pt-20 bg-gradient-to-b from-yellow-50/30 via-slate-50/20 to-white/90 backdrop-blur-[2px]"
    >
      <div className="absolute inset-0 bg-slate-50/70 backdrop-blur-sm z-10" />
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-slate-950 bg-yellow-400/90 px-6 py-3 rounded-xl mb-4 shadow-xl z-20"
      >
        Testimonials
      </motion.h2>
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-xl sm:text-xl md:text-4xl font-medium text-slate-600 mb-4 z-20"
      >
        What Our Clients Say
      </motion.h3>
      <TestimonialsGrid />
    </div>
  );
};

export default Testimonials;
