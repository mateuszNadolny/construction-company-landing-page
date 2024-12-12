"use client";

import { testimonials } from "@/lib/data";
import TestimonialsCard from "./testimonials-card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const TestimonialsGrid = () => {
  return (
    <div className="container mx-auto px-4 py-12 max-h-[70vh] border-t border-slate-50 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-400 scrollbar-track-transparent z-20">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [&>*:nth-child(even)]:translate-y-4"
      >
        {testimonials.map((testimonial) => (
          <TestimonialsCard key={testimonial.id} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
};

export default TestimonialsGrid;
