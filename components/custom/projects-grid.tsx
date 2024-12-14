"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/custom/project-card";
import { projects } from "@/lib/data";
import { Flower } from "lucide-react";

const ProjectsGrid = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="z-20 w-[90%] lg:w-[70%]"
    >
      <motion.h2 className="text-slate-950 text-transparent text-3xl font-bold tracking-tighter sm:text-4xl bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text  px-4 mb-2">
        Explore our work
      </motion.h2>
      <motion.h3 className="text-muted-foreground text-sm md:text-lg mb-8 px-4 flex items-start md:items-center gap-2">
        <Flower className="w-6 h-6 text-yellow-400" />
        Each project reflects our commitment to quality and design excellence.
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 max-w-7xl mx-auto w-full "
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            hoveredId={hoveredId}
            setHoveredId={setHoveredId}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ProjectsGrid;
