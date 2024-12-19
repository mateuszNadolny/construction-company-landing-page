"use client";

import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/framer-variants";
import { Flower2, ArrowRight, Phone } from "lucide-react";
import { Button } from "../ui/button";

const CallToAction = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleContactClick = () => {
    window.location.href = "#contact";
  };

  const stats = [
    {
      title: "Faster Build Time",
      value: "30%",
      gradient: "from-yellow-400 to-yellow-500",
    },
    {
      title: "Energy Savings",
      value: "40%",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      title: "Less Waste",
      value: "50%",
      gradient: "from-yellow-400 to-yellow-500",
    },
    {
      title: "Customizable",
      value: "100%",
      gradient: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <section
      id="call-to-action"
      ref={ref}
      aria-label="Call to Action Section"
      className="relative flex flex-col min-h-[80vh] items-center justify-center py-4 lg:py-20  bg-gradient-to-b from-yellow-50/30 via-slate-50/20 to-white/90 backdrop-blur-[2px]"
    >
      <div className="absolute inset-0 bg-slate-50/70 backdrop-blur-sm z-10" />

      <motion.div
        className="container mx-auto px-4 relative z-20"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <div className="flex flex-col items-center max-w-4xl mx-auto text-center space-y-4 md:space-y-8">
          <motion.div
            variants={itemVariants}
            className="flex w-full items-center justify-center gap-2"
          >
            <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-transparent to-yellow-400" />
            <Flower2 className="w-12 h-12 p-2 rounded-full bg-yellow-400 text-white" />
            <div className="h-[2px] w-24 md:w-32 bg-gradient-to-r from-yellow-400 to-transparent" />
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-5xl md:pb-2 font-bold tracking-tight bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent"
          >
            {`Let's Build Your Dream Home Together`}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg font-normal z-20 tracking-tight text-balance leading-relaxed text-muted-foreground"
          >
            {`Experience the future of home building with our innovative modular
            solutions. From design to completion, we're committed to creating
            your perfect space with efficiency, sustainability, and style.`}
          </motion.p>

          <motion.div
            variants={containerVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className={`p-2 md:p-6 rounded-xl bg-gradient-to-r ${stat.gradient} text-white shadow-lg`}
              >
                <p className="text-xl md:text-3xl font-bold md:mb-1">
                  {stat.value}
                </p>
                <p className="text-xs md:text-base font-medium opacity-90">
                  {stat.title}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8"
          >
            <Button
              onClick={handleContactClick}
              size="lg"
              variant="default"
              className="w-auto md:w-[200px] bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-500 text-slate-900 
                font-semibold p-6 text-sm sm:text-base
                transition-all duration-100 hover:scale-95"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="w-auto md:w-[200px] border-yellow-500 text-slate-900 hover:bg-yellow-50 font-semibold p-6 text-sm sm:text-base flex items-center gap-2  transition-all duration-100 hover:scale-95"
            >
              <Phone className="w-5 h-5" />
              Schedule a Call
            </Button>
          </motion.div>
        </div>
        <p className="text-xs text-center text-gray-500 mt-8">
          Transparent pricing. No obligations. Clear, actionable outcomes.
        </p>
      </motion.div>
    </section>
  );
};

export default CallToAction;
