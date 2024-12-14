import ProjectsGrid from "@/components/custom/projects-grid";

const Work = () => {
  return (
    <section
      id="our-work"
      className="py-20 lg:py-0 relative flex flex-col flex-1 w-full min-h-screen items-center justify-center bg-gradient-to-b from-yellow-50/30 via-slate-50/20 to-white/90 backdrop-blur-[2px]"
    >
      <div className="absolute inset-0 bg-slate-50/70 backdrop-blur-sm z-10" />
      <ProjectsGrid />
    </section>
  );
};

export default Work;
