import Hero from "@/components/custom/hero";
import Testimonials from "@/components/custom/testimonials";
import About from "@/components/custom/about";
import Work from "@/components/custom/work";
import CallToAction from "@/components/custom/call-to-action";
export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <Work />
      <CallToAction />
      <Testimonials />
    </main>
  );
}
