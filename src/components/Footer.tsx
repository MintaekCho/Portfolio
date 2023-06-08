import Link from "next/link";
import React from "react";
import { BsInstagram, BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <footer id="contact" className="w-screen h-80 flex flex-col items-center justify-center gap-20 bg-white/10 mt-10">
      <ul className="flex gap-10">
        <li className="text-5xl">
          <Link href={""}>
            <BsInstagram />
          </Link>
        </li>
        <li className="text-5xl">
          <Link href={"https://github.com/MintaekCho"}>
            <BsGithub />
          </Link>
        </li>
      </ul>
      <div className="flex flex-col items-center justify-center">
        <p className="text-sm md:text-md lg:text-lg font-bold">☎ : 010-9446-3591</p>
        <p className="text-sm md:text-md lg:text-lg font-bold">📮 : mintaek5555@gmail.com</p>
      </div>
    </footer>
  );
}
