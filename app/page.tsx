import Hero from "@/components/custom/hero";
import Testimonials from "@/components/custom/testimonials";
import About from "@/components/custom/about";
import Work from "@/components/custom/work";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <Work />
      <Testimonials />
    </main>
  );
}
