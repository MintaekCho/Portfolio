import About from "@/components/About";
import Footer from "@/components/Footer";
import Introduction from "@/components/Introduction";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
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
