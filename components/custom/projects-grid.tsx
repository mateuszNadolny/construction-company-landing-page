"use client";
import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "@/components/custom/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";
import { Flower } from "lucide-react";

const ProjectsGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.125,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 200 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className="z-20 w-[90%] lg:w-[70%]"
    >
      <motion.h2
        variants={itemVariants}
        className="text-slate-950 text-transparent text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text px-4 mb-2"
      >
        Our recent work
      </motion.h2>
      <motion.h3
        variants={itemVariants}
        className="text-muted-foreground text-sm md:text-lg mb-8 px-4 flex items-center md:items-start md:items-center gap-2"
      >
        <Flower className="w-8 h-8 md:w-6 md:h-6 text-yellow-400" />
        Each project reflects our commitment to quality and design excellence.
      </motion.h3>
      <motion.div
        variants={containerVariants}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 mx-auto w-full mb-8"
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <ProjectCard
              project={project}
              hoveredId={hoveredId}
              setHoveredId={setHoveredId}
            />
          </motion.div>
        ))}
      </motion.div>
      <motion.div variants={itemVariants} className="flex justify-end px-4">
        <Button
          variant="default"
          className="w-auto md:w-[200px] bg-gradient-to-r from-yellow-400 to-yellow-500 hover:bg-yellow-500 text-slate-900 
                font-semibold px-4 sm:px-6 py-5 sm:py-6 text-sm sm:text-base
                transition-all duration-100 hover:scale-95"
        >
          Make It Yours
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default ProjectsGrid;
