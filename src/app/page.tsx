"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Project from "@/components/projects/Project";
import Skills from "@/components/Skills";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <div className="flex items-center justify-center flex-col mt-48">
      <Introduction />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}
