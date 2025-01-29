import Hero from "@/components/Hero";
import About from "@/components/About";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import { Footer } from "@/components/ui/Footer";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <News />
      <FAQ />
      <Footer />
    </>
  );
}
