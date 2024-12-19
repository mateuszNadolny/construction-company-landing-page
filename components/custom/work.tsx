import ProjectsGrid from "@/components/custom/projects-grid";

const Work = () => {
  return (
    <section
      id="our-work"
      aria-label="Our Work"
      className="py-20 lg:py-0 relative flex flex-col flex-1 w-full min-h-screen items-center justify-center"
    >
      <ProjectsGrid />
    </section>
  );
};

export default Work;
