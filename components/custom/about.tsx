"use client";

import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { ChevronsUp, Flower, HousePlus, ShieldCheck } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      title: "Sustainability",
      description: "Eco-friendly materials and energy-efficient designs",
    },
    {
      title: "Speed",
      description: "60% faster than traditional construction methods",
    },
    {
      title: "Quality",
      description: "Precision engineering and superior craftsmanship",
    },
    {
      title: "Innovation",
      description: "Cutting-edge technology and smart home integration",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative flex flex-col flex-1 min-h-screen items-center justify-center py-20 lg:py-0 bg-gradient-to-b from-yellow-50/30 via-slate-50/20 to-white/90 backdrop-blur-[2px] overflow-hidden"
    >
      <div className="absolute inset-0 lg:hidden">
        <Image
          src="/about.jpg"
          alt="About background"
          fill
          className="object-cover object-center opacity-30"
          priority
        />
      </div>

      <div className="absolute inset-0 bg-slate-50/70 backdrop-blur-sm z-10" />

      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center z-20 w-[90%] lg:w-[70%]"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="relative group hidden lg:block"
        >
          <Image
            src="/bg.png"
            alt="About"
            width={800}
            height={800}
            className="w-[600px] h-[600px] hidden lg:block object-cover object-center rounded-[28px] absolute top-0 left-0 shadow-xl transition-transform duration-500"
          />
          <Image
            src="/about.jpg"
            alt="About"
            width={800}
            height={800}
            className="w-[600px] h-[600px] object-cover object-center rounded-[28px] relative shadow-xl transition-transform duration-500 group-hover:scale-[.92]"
          />
        </motion.div>

        <motion.div variants={containerVariants} className="space-y-6">
          <motion.div
            variants={itemVariants}
            className="inline-block rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 px-3 py-1 text-sm text-white font-medium shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            Our mission
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          >
            Building the Future of Housing
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-muted-foreground text-lg"
          >
            Were revolutionizing the construction industry with sustainable,
            efficient, and beautiful modular homes. Our commitment to quality
            and innovation ensures that each project exceeds expectations while
            minimizing environmental impact.
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid gap-4 md:grid-cols-2"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-2 lg:p-4 rounded-lg transition-colors duration-300 mb-2 lg:mb-0"
              >
                <h3 className="font-bold flex items-center gap-2">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {feature.title === "Sustainability" && (
                      <Flower className="w-6 h-6 text-yellow-400" />
                    )}
                    {feature.title === "Speed" && (
                      <ChevronsUp className="w-6 h-6 text-yellow-400" />
                    )}
                    {feature.title === "Quality" && (
                      <ShieldCheck className="w-6 h-6 text-yellow-400" />
                    )}
                    {feature.title === "Innovation" && (
                      <HousePlus className="w-6 h-6 text-yellow-400" />
                    )}
                  </motion.div>
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground ml-8">
                  {feature.description}
                </p>
              </motion.div>
            ))}

            <Button
              variant="default"
              className="w-auto md:w-[200px] bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-500 text-slate-900 
                font-semibold p-6 text-sm sm:text-base
                transition-all duration-100 hover:scale-95"
            >
              Get Started Now
            </Button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default About;
