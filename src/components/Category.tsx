import Image from "next/image";
import Link from "next/link";
import React from "react";

import { AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { Link as Links } from "react-scroll";

export default function Category({ closeCategory, categoryVisible }: any) {
  return (
    <div
      className={
        categoryVisible
          ? "fixed left-0 top-0 w-screen h-screen bg-black/70 transition-all duration-300 ease-in"
          : "fixed left-[-100%] top-0 w-screen h-screen transition-all duration-300 ease-in"
      }
    >
      <div className="w-[60%] sm:w-[50%] md:w-[40%] h-screen bg-white z-10 relative">
        <div className=" absolute left-10 top-4">
          <Image
            src={"/images/Logo.png"}
            alt={"logo"}
            width={120}
            height={120}
          />
        </div>
        <div
          onClick={closeCategory}
          className="absolute right-6 top-6 text-black p-3 shadow-lg shadow-gray-400 rounded-full cursor-pointer"
        >
          <AiOutlineClose />
        </div>
        <div className="border w-4/5 absolute left-[10%] top-36 border-gray-100" />
        <div className="">
          <ul className="text-black text-xl p-14 pt-48 flex flex-col">
            <Links
              onClick={closeCategory}
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="py-4 hover:text-purple-500 hover:font-bold">
                HOME
              </li>
            </Links>
            <Links
              onClick={closeCategory}
              to="about"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="py-4 hover:text-purple-500 hover:font-bold">
                ABOUT
              </li>
            </Links>
            <Links
              onClick={closeCategory}
              to="skills"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="py-4 hover:text-purple-500 hover:font-bold">
                SKILLS
              </li>
            </Links>
            <Links
              onClick={closeCategory}
              to="project"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="py-4 hover:text-purple-500 hover:font-bold">
                PROJECT
              </li>
            </Links>
            <Links
              onClick={closeCategory}
              to="contact"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
            >
              <li className="py-4 hover:text-purple-500 hover:font-bold">
                CONTACT
              </li>
            </Links>
          </ul>
        </div>
        <div className="absolute left-14 mt-24">
          <p className="text-purple-500 text-xl font-bold tracking-widest">
            LET&apos;S CONNECT
          </p>
          <ul className="flex mt-6 items-center gap-16">
            <li className="text-black w-10 h-10 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-150 flex items-center justify-center">
              <Link href={"https://github.com/MintaekCho"}>
                <FaGithub />
              </Link>
            </li>
            <li className="text-black w-10 h-10 rounded-full shadow-lg shadow-gray-400 hover:scale-105 ease-in duration-150 flex items-center justify-center">
              <AiOutlineMail />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
