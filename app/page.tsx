import Hero from "@/components/custom/hero";
import Testimonials from "@/components/custom/testimonials";
import About from "@/components/custom/about";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <Testimonials />
    </main>
  );
}
