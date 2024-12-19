import Hero from "@/components/custom/hero";
import Testimonials from "@/components/custom/testimonials";
import About from "@/components/custom/about";
import Work from "@/components/custom/work";
import CallToAction from "@/components/custom/call-to-action";
import CountdownTimer from "@/components/custom/countdown-timer";

export default function Home() {
  return (
    <main className="w-full h-full">
      <Hero />
      <About />
      <CountdownTimer />
      <Work />
      <CallToAction />
      <Testimonials />
    </main>
  );
}
