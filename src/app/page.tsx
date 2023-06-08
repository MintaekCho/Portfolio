"use client";
import About from "@/components/About";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Project from "@/components/projects/Project";
import Skills from "@/components/Skills";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { RecoilRoot } from "recoil";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full flex items-center justify-center flex-col mt-48">
        <Introduction />
        <About />
        <Skills />
        <Project />
        <Footer />
    </div>
  );
}
