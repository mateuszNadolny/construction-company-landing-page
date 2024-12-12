"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/types";

interface TestimonialsCardProps {
  testimonial: Testimonial;
  className?: string;
}

const TestimonialsCard = ({
  testimonial,
  className = "",
}: TestimonialsCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className={`group flex flex-col rounded-xl bg-white p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`}
      role="article"
      aria-label={`Testimonial from ${testimonial.name}`}
    >
      <div className="mb-4">
        <svg
          className="w-8 h-8 text-yellow-400 opacity-80"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
      </div>
      <blockquote className="flex-grow">
        <p className="text-sm text-gray-600 line-clamp-4 group-hover:line-clamp-none transition-all duration-300">
          {testimonial.review}
        </p>
      </blockquote>
      <div className="w-full h-[1px] my-4 bg-gradient-to-r from-transparent via-yellow-200 to-transparent" />
      <footer className="mt-2 flex items-center justify-between">
        <div className="flex-grow">
          <p className="text-sm font-semibold text-gray-800">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-500">{testimonial.email}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center">
          <span className="text-yellow-600 text-sm font-bold">
            {testimonial.name.charAt(0)}
          </span>
        </div>
      </footer>
    </motion.div>
  );
};

export default TestimonialsCard;
