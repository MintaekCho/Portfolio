import About from "@/components/About";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Project from "@/components/projects/Project";
import Skills from "@/components/Skills";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  return (
    <div className="w-full flex items-center justify-center flex-col mt-48">
      <Introduction />
      <About />
      <Skills />
      {/* @ts-expect-error Async Server Component */}
      <Project />
      <Footer />
    </div>
  );
}
