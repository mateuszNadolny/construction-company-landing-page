"use client";

import { Button } from "@/components/ui/button";
import TestimonialsHero from "@/components/custom/testimonials-hero";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-1 w-full h-screen min-h-screen items-center justify-center"
      role="banner"
      aria-label="Hero section"
      id="hero"
    >
      <div
        className="
        w-full 
        h-full 
        bg-[url('/hero.jpg')] 
        bg-cover 
        bg-center 
        bg-no-repeat
        flex flex-col justify-center 
        px-4 sm:px-8 md:px-16 lg:px-32 xl:px-40
        relative
        before:absolute before:inset-0 before:bg-black/10"
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/95 to-transparent opacity-90 z-10 
          [background-image:linear-gradient(to_right,rgb(2,6,23)_0%,rgba(2,6,23,0.95)_25%,rgba(2,6,23,0.8)_50%,rgba(2,6,23,0.4)_75%,transparent_100%),url('/noise.png')]"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.5, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-xs md:text-base font-bold z-20 tracking-[0.2em] uppercase
            text-[#F8FAFC] max-w-full md:max-w-[80%] lg:max-w-[60%]"
        >
          Custom Modular Homes Designed for Your Lifestyle
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[6rem] 
            font-bold text-[#F8FAFC] z-20 tracking-tight leading-[1.1] sm:leading-[1] 
            mt-3 sm:mt-4 mb-8 sm:mb-12 drop-shadow-2xl"
        >
          Elevated <br className="hidden sm:block" /> Modern{" "}
          <br className="hidden sm:block" />
          <span className="text-yellow-400">Living</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-sm sm:text-base md:text-lg font-normal z-20 tracking-tight 
            text-balance max-w-[95%] sm:max-w-[80%] md:max-w-[60%] lg:max-w-[40%] xl:max-w-[30%]
            leading-relaxed text-[#F8FAFC]/90"
        >
          Discover the future of homebuilding with our sustainable, efficient,
          and beautifully crafted modular homes. Built with precision, tailored
          to your needs, and delivered faster than traditional construction.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-start sm:items-center 
            justify-between mt-8 sm:mt-12 z-20 w-full"
        >
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              variant="default"
              className="w-full sm:w-auto bg-yellow-400 hover:bg-yellow-500 text-slate-900 
                font-semibold px-4 sm:px-6 py-5 sm:py-6 text-sm sm:text-base
                transition-all duration-100 hover:scale-95"
            >
              Explore Our Homes
            </Button>
            <Button
              variant="default"
              className="w-full sm:w-auto bg-[#F8FAFC] hover:bg-[#F8FAFC]/90 text-slate-900 
                font-semibold px-4 sm:px-6 py-5 sm:py-6 text-sm sm:text-base
                transition-all duration-100 hover:scale-95"
            >
              Learn More
            </Button>
          </div>
          <div className="w-full sm:w-auto mt-6 sm:mt-0">
            <TestimonialsHero />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
