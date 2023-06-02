import Introduction from "@/components/Introduction";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col mt-48">
      <Introduction />
      <Skills />
    </div>
  );
}
