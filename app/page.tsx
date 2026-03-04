import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import About from "@/components/sections/About";
import Career from "@/components/sections/Career";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Projects />
        <About />
        <Career />
      </main>
      <Footer />
    </>
  );
}
